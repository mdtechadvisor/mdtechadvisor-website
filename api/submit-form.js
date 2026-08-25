// api/submit-form.js
// Vercel Serverless Function — handles the Contact form submission:
// honeypot + rate-limit check -> validation -> append to Google Sheet -> email alert.

import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import nodemailer from "nodemailer";

// ---------------------------------------------------------------------------
// Basic in-memory rate limiter.
// NOTE: Vercel serverless functions are stateless across cold starts and can
// run as multiple parallel instances, so this only limits repeat requests
// hitting the *same warm instance* — it is a first line of defense, not a
// guarantee. For stronger protection later, move this to Vercel KV / Upstash
// Redis (shared state across instances). Good enough for a low-traffic
// B2B lead form for now.
// ---------------------------------------------------------------------------
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX_REQUESTS = 5;
const requestLog = new Map(); // ip -> [timestamps]

function isRateLimited(ip) {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) || []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX_REQUESTS;
}

function getClientIp(req) {
  const forwarded = req.headers["x-forwarded-for"];
  if (forwarded) return forwarded.split(",")[0].trim();
  return req.socket?.remoteAddress || "unknown";
}

// ---------------------------------------------------------------------------
// Validation & sanitization helpers
// ---------------------------------------------------------------------------
function sanitizeText(value, maxLength = 300) {
  if (typeof value !== "string") return "";
  return value.trim().replace(/[<>]/g, "").slice(0, maxLength);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  // Accepts digits, spaces, +, -, () — length 7 to 15 digits
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 15;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// ---------------------------------------------------------------------------
// CORS
// ---------------------------------------------------------------------------
function setCorsHeaders(res) {
  const allowedOrigin = process.env.ALLOWED_ORIGIN || "*";
  res.setHeader("Access-Control-Allow-Origin", allowedOrigin);
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

// ---------------------------------------------------------------------------
// Google Sheets
// ---------------------------------------------------------------------------
async function appendToSheet(data) {
  const serviceAccountAuth = new JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, serviceAccountAuth);
  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];

  await sheet.addRow({
    Timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    "Hospital Name": data.hospitalName,
    "Contact Person": data.contactPerson,
    Designation: data.designation || "-",
    Phone: data.phone,
    Email: data.email,
    City: data.city || "-",
    "Service Requirement": data.serviceRequirement,
    Message: data.message || "-",
  });
}

// ---------------------------------------------------------------------------
// Email alert
// ---------------------------------------------------------------------------
async function sendAlertEmail(data) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const phoneDigits = data.phone.replace(/\D/g, "");
  const telLink = `tel:${data.phone}`;
  const whatsappLink = `https://wa.me/${phoneDigits}`;

  const rows = [
    ["Hospital Name", data.hospitalName],
    ["Contact Person", data.contactPerson],
    ["Designation", data.designation || "-"],
    ["Phone", data.phone],
    ["Email", data.email],
    ["City", data.city || "-"],
    ["Service Requirement", data.serviceRequirement],
    ["Message", data.message || "-"],
  ]
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 14px;border-bottom:1px solid #E2E8F0;font-weight:600;color:#13294B;white-space:nowrap;">${escapeHtml(
            label
          )}</td>
          <td style="padding:10px 14px;border-bottom:1px solid #E2E8F0;color:#334155;">${escapeHtml(
            value
          )}</td>
        </tr>`
    )
    .join("");

  const html = `
  <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;background:#F7F8FA;padding:24px;">
    <div style="background:#13294B;color:#ffffff;padding:20px 24px;border-radius:10px 10px 0 0;">
      <p style="margin:0;font-size:13px;letter-spacing:0.05em;text-transform:uppercase;color:#F5821F;font-weight:700;">New Website Inquiry</p>
      <h2 style="margin:6px 0 0;font-size:20px;">${escapeHtml(data.hospitalName)}</h2>
    </div>
    <div style="background:#ffffff;border:1px solid #E2E8F0;border-top:none;border-radius:0 0 10px 10px;overflow:hidden;">
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        ${rows}
      </table>
      <div style="padding:18px 14px;display:flex;gap:10px;">
        <a href="${telLink}" style="flex:1;text-align:center;background:#F5821F;color:#ffffff;text-decoration:none;padding:12px 16px;border-radius:8px;font-weight:600;font-size:14px;">📞 Click to Call</a>
        <a href="${whatsappLink}" style="flex:1;text-align:center;background:#13294B;color:#ffffff;text-decoration:none;padding:12px 16px;border-radius:8px;font-weight:600;font-size:14px;">💬 Click to WhatsApp</a>
      </div>
    </div>
    <p style="text-align:center;color:#94A3B8;font-size:12px;margin-top:16px;">MD Tech Advisor — Automated lead notification</p>
  </div>`;

  await transporter.sendMail({
    from: `"MD Tech Advisor Website" <${process.env.SMTP_USER}>`,
    to: process.env.ALERT_EMAIL_RECIPIENT,
    subject: `🚨 New Lead: ${data.hospitalName} - ${data.serviceRequirement}`,
    html,
  });
}

// ---------------------------------------------------------------------------
// Handler
// ---------------------------------------------------------------------------
export default async function handler(req, res) {
  setCorsHeaders(res);

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    const body = req.body || {};

    // Honeypot — bots fill hidden fields; silently drop, pretend success
    if (body.website && String(body.website).trim() !== "") {
      return res.status(200).json({ success: true, message: "Submitted" });
    }

    const ip = getClientIp(req);
    if (isRateLimited(ip)) {
      return res
        .status(429)
        .json({ success: false, message: "Too many requests. Please try again later." });
    }

    const hospitalName = sanitizeText(body.hospitalName, 150);
    const contactPerson = sanitizeText(body.contactPerson, 100);
    const designation = sanitizeText(body.designation, 100);
    const phone = sanitizeText(body.phone, 20);
    const email = sanitizeText(body.email, 150);
    const city = sanitizeText(body.city, 100);
    const serviceRequirement = sanitizeText(body.serviceRequirement, 100);
    const message = sanitizeText(body.message, 1000);

    if (!hospitalName || !contactPerson || !phone || !email || !serviceRequirement) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields.",
      });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ success: false, message: "Please enter a valid email." });
    }

    if (!isValidPhone(phone)) {
      return res.status(400).json({ success: false, message: "Please enter a valid phone number." });
    }

    const data = { hospitalName, contactPerson, designation, phone, email, city, serviceRequirement, message };

    // Run sheet write + email in parallel; if email fails, don't fail the whole request
    // (the lead is already safely stored in the sheet).
    const results = await Promise.allSettled([appendToSheet(data), sendAlertEmail(data)]);

    const sheetResult = results[0];
    if (sheetResult.status === "rejected") {
      console.error("Google Sheets append failed:", sheetResult.reason?.message || "unknown error");
      return res.status(500).json({
        success: false,
        message: "Something went wrong on our end. Please try again or contact us directly.",
      });
    }

    const emailResult = results[1];
    if (emailResult.status === "rejected") {
      console.error("Alert email failed:", emailResult.reason?.message || "unknown error");
      // Lead is saved in the sheet even though the email failed — still a success for the user.
    }

    return res.status(200).json({
      success: true,
      message: "Thank you! Your inquiry has been received.",
    });
  } catch (error) {
    console.error("submit-form handler error:", error?.message || "unknown error");
    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
    });
  }
}
