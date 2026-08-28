import ServiceHero from "../components/ServiceHero";
import SupportAreas from "../components/SupportAreas";
import WorkflowSteps from "../components/WorkflowSteps";
import ChallengeSupport from "../components/ChallengeSupport";
import OutcomesList from "../components/OutcomesList";
import ServiceCTA from "../components/ServiceCTA";
import Seo from "../components/Seo";

const stripItems = [
  { title: "Pre-Authorization", desc: "Pre-auth documentation and coordination support" },
  { title: "Claim Documentation", desc: "Documentation, coordination & submission support" },
  { title: "Query & Follow-Up", desc: "TPA/insurer query handling & follow-up" },
];

const supportAreas = [
  { title: "Pre-Authorization Support", desc: "Support hospital teams in preparing and coordinating pre-authorization requirements for private health insurance claims." },
  { title: "Policy & Coverage Documentation", desc: "Help review and organize policy and coverage-related documentation relevant to the claim." },
  { title: "Claim Documentation & Submission", desc: "Support accurate, complete documentation and preparation of claims for submission." },
  { title: "Enhancement & Discharge Coordination", desc: "Support enhancement requests and discharge-related documentation and coordination." },
  { title: "TPA / Insurer Query Handling", desc: "Track and support timely responses to queries raised by the TPA or insurer during claim review." },
  { title: "Claim Review & Deduction Prevention", desc: "Review documentation before submission to help identify gaps that may lead to avoidable deductions." },
  { title: "Post-Submission Follow-Up", desc: "Support ongoing follow-up with the TPA/insurer through to claim decision and settlement." },
];

const workflow = [
  { title: "Patient Admission", desc: "Patient is admitted and the case enters the insurance claim process." },
  { title: "Insurance Verification & Pre-Auth", desc: "Support verification of coverage and preparation of pre-authorization documentation." },
  { title: "Treatment & Documentation", desc: "Maintain accurate documentation throughout the course of treatment." },
  { title: "Enhancement / Discharge", desc: "Support enhancement requests and discharge-related documentation." },
  { title: "Claim Preparation & Submission", desc: "Review and prepare documentation for complete claim submission." },
  { title: "Query / Clarification Handling", desc: "Support responses to TPA/insurer queries during claim review." },
  { title: "Claim Decision & Settlement", desc: "Follow the claim through to decision and settlement." },
];

const challenges = [
  { problem: "Incomplete Documentation", desc: "Missing or inconsistent documentation can slow down claim review and processing.", support: "Documentation readiness" },
  { problem: "Pre-Authorization Coordination", desc: "Coordinating pre-authorization requirements across policies and insurers requires structured follow-up.", support: "Structured pre-auth support" },
  { problem: "Insurer / TPA Queries", desc: "Queries from the TPA or insurer need timely review and response to avoid delays.", support: "Timely query handling" },
  { problem: "Discharge & Claim Submission", desc: "Coordinating discharge documentation with claim submission timelines can be operationally demanding.", support: "Claim preparation support" },
  { problem: "Claim Deductions", desc: "Documentation or process gaps may lead to avoidable deductions during claim settlement.", support: "Pre-submission review" },
];

const outcomes = [
  { title: "Better Documentation Readiness", desc: "Support for maintaining complete, organized documentation across the claim lifecycle." },
  { title: "More Structured Claim Processing", desc: "A systematic approach to pre-authorization, documentation and claim submission." },
  { title: "Timely Insurer/TPA Coordination", desc: "Structured support for coordinating with insurers and TPAs through the claim process." },
  { title: "Better Query Follow-Up", desc: "Support with tracking and responding to queries raised during claim review." },
  { title: "Reduced Administrative Workload", desc: "Operational support allows hospital teams to spend less time managing claims-related coordination." },
];

export default function TPAOperations() {
  return (
    <div>
      <Seo title="Health Insurance & TPA Operations" description="End-to-end TPA and private health insurance claim processing, discharge enhancement, and deduction prevention." />
      <ServiceHero
        eyebrow="Health Insurance & TPA Operations"
        heading="End-to-End Health Insurance & TPA Operations Support"
        subtext="We provide operational support to hospital teams managing private health insurance claims — covering documentation, coordination, submission and follow-up."
        stripItems={stripItems}
      />

      <SupportAreas
        heading="Where We Support Your Insurance Operations"
        items={supportAreas}
      />

      <WorkflowSteps
        heading="How We Support the Insurance Claim Process"
        subtext="From patient admission to claim settlement, we support hospital teams across key operational and documentation stages of the insurance claim process."
        steps={workflow}
      />

      <ChallengeSupport
        heading="Common Insurance Claim Challenges"
        subtext="Managing private health insurance claims requires coordinated documentation and continuous follow-up. We support hospital teams across these operational requirements."
        items={challenges}
      />

      <OutcomesList
        heading="What Your Hospital Gains"
        subtext="With structured operational support across the insurance claims lifecycle, your hospital team can focus more on patient care while we support the administrative and documentation processes."
        items={outcomes}
      />

      <ServiceCTA
        heading="Strengthen Your Insurance Claim Operations"
        text="Discuss your hospital's current insurance workflow and operational requirements with our team."
        buttonLabel="Discuss Your Requirements"
      />
    </div>
  );
}
