import ServiceHero from "../components/ServiceHero";
import SupportAreas from "../components/SupportAreas";
import WorkflowSteps from "../components/WorkflowSteps";
import ChallengeSupport from "../components/ChallengeSupport";
import OutcomesList from "../components/OutcomesList";
import ServiceCTA from "../components/ServiceCTA";
import Seo from "../components/Seo";


const stripItems = [
  { title: "Pre-Authorization", desc: "Package identification & pre-auth support" },
  { title: "Documentation & TMS", desc: "Documentation and transaction management support" },
  { title: "Claims & Queries", desc: "Claim submission, query handling & follow-up" },
];

const supportAreas = [
  { title: "Pre-Auth & Package Identification", desc: "Identify the appropriate treatment package and support the hospital team in preparing pre-authorization requirements." },
  { title: "STG / NHA Guideline Compliance", desc: "Support documentation and process alignment with applicable NHA Standard Treatment Guidelines." },
  { title: "Documentation & TMS Management", desc: "Help maintain accurate, complete and timely documentation throughout the Transaction Management System process." },
  { title: "Enhancement, Discharge & Claim Submission", desc: "Support enhancement requests, discharge processing and preparation of complete claim submissions." },
  { title: "PPD / CPD Query Handling", desc: "Track, review and support timely responses to queries raised during the claim process." },
  { title: "Claim Review & Deduction Prevention", desc: "Review claim documentation before submission to identify gaps that may lead to avoidable deductions." },
  { title: "Hospital Team Training & Continuous Support", desc: "Provide operational guidance, SOP updates and ongoing support to hospital teams." },
];

const workflow = [
  { title: "Patient Admission", desc: "Patient is admitted and the case enters the PM-JAY process." },
  { title: "Package Identification & Pre-Auth", desc: "Identify the appropriate package and support pre-authorization requirements." },
  { title: "Documentation & TMS Management", desc: "Maintain required documentation and manage timely updates on the Transaction Management System." },
  { title: "Enhancement & Discharge", desc: "Support enhancement requests and discharge-related documentation." },
  { title: "Claim Submission", desc: "Review and prepare documentation for complete claim submission." },
  { title: "Query Handling & Resolution", desc: "Support responses to PPD/CPD queries and follow-up during the claim process." },
  { title: "Claim Decision & Settlement", desc: "Follow the claim through the decision and settlement stage." },
];

const challenges = [
  { problem: "Documentation Gaps", desc: "Incomplete or inconsistent records can create queries and delays during claim processing.", support: "Documentation readiness and review" },
  { problem: "Package & Pre-Authorization Complexity", desc: "Identifying the appropriate package and preparing complete pre-authorization documentation requires careful attention.", support: "Package identification and pre-auth support" },
  { problem: "TMS & Transaction Management", desc: "Keeping documentation and transaction updates accurate and timely can add to the workload of hospital teams.", support: "Transaction and documentation management" },
  { problem: "Query Follow-Ups", desc: "PPD/CPD queries require timely review, documentation and responses to keep the claim moving.", support: "Query handling and follow-up" },
  { problem: "Claim Deductions", desc: "Documentation or process gaps may result in avoidable deductions during claim review.", support: "Pre-submission claim review and gap identification" },
];

const outcomes = [
  { title: "Better Documentation Readiness", desc: "Support for maintaining complete and timely documentation throughout the claim lifecycle." },
  { title: "More Structured Claim Processing", desc: "A systematic approach to pre-authorization, transactions, discharge and claim submission." },
  { title: "Timely Query Management", desc: "Support with tracking and responding to PPD/CPD queries during the claim process." },
  { title: "Fewer Avoidable Gaps", desc: "Pre-submission review helps identify documentation or process gaps that could contribute to avoidable deductions." },
  { title: "Reduced Administrative Burden", desc: "Operational support allows hospital teams to spend less time managing claims-related processes." },
];

export default function PMJAYOperations() {
  return (
    <div>
      <Seo title="PM-JAY Operations Support" description="Dedicated Ayushman Bharat PM-JAY claim management, pre-auth, STG compliance, TMS management and query resolution." />
      <ServiceHero
        eyebrow="Ayushman Bharat PM-JAY"
        heading="End-to-End PM-JAY Transaction Management Support"
        subtext="We support hospital teams across the PM-JAY claims and transaction lifecycle — from package identification and pre-authorization through documentation, query handling and claim submission."
        stripItems={stripItems}
      />

      <SupportAreas
        heading="Where We Support Your PM-JAY Operations"
        items={supportAreas}
      />

      <WorkflowSteps
        heading="How We Support the PM-JAY Claims Journey"
        subtext="From patient admission to claim settlement, we support hospital teams across key operational and documentation stages of the PM-JAY process."
        steps={workflow}
      />

      <ChallengeSupport
        heading="Common PM-JAY Operational Challenges"
        subtext="Managing PM-JAY transactions requires timely documentation, accurate processing and continuous follow-up. We support hospital teams across these operational requirements."
        items={challenges}
      />

      <OutcomesList
        heading="What Your Hospital Gains"
        subtext="With structured operational support across the PM-JAY claims lifecycle, your hospital team can focus more on patient care while we support the administrative and documentation processes."
        items={outcomes}
      />

      <ServiceCTA
        heading="Strengthen Your PM-JAY Operations"
        text="Looking for operational support with your hospital's PM-JAY claims process? Let's discuss your current workflow and requirements."
        buttonLabel="Discuss Your Requirements"
      />
    </div>
  );
}
