export type Workstream = {
  name: string;
  description: string;
};

export type Service = {
  slug: string;
  eyebrow: string;
  title: string;
  tagline: string;
  shortTitle: string;
  description: string;
  /** Short plain-language outcome shown on cards and the homepage. */
  summary: string;
  /** Unique heading for the "The work" section, split into two lines. */
  workHeading: [string, string];
  detail: string;
  accent: string;
  workstreams: Workstream[];
  /** What a client can expect to receive from an engagement. */
  deliverables: string[];
  /** Honest scope clarification shown under "Good to know". */
  scopeNote: string;
  /** Service-specific closing heading, split into two lines. */
  closing: [string, string];
  /** Homepage card copy. */
  homeHeadline: string;
  homeText: string;
};

/** The one consultation call to action used across the whole site. */
export const CONSULTATION_CTA = "Request a consultation";

export const services: Service[] = [
  {
    slug: "cybersecurity",
    eyebrow: "01 / Cybersecurity solutions",
    title: "Cybersecurity Solutions",
    tagline: "Find the risks. Fix what matters first.",
    shortTitle: "Cybersecurity",
    description:
      "We help organizations find security weaknesses, decide which ones matter most, and put practical controls in place to protect their systems, applications, data, and people.",
    summary:
      "Find security weaknesses, prioritize them by risk, and strengthen the controls that protect your systems, data, and people.",
    workHeading: ["Know your risk,", "then act on it."],
    detail:
      "Our cybersecurity work starts with understanding your exposure. From there we prioritize by risk and help you act, whether that means implementing controls, assessing the ones you already have, or training the people who use your systems every day.",
    accent: "#36c36a",
    workstreams: [
      {
        name: "Vulnerability Management",
        description:
          "We scan infrastructure, cloud environments, and applications, analyze the results, and rank findings by risk. You get a prioritized report with clear remediation guidance, and we support remediation through technical assistance where it is part of the agreed scope.",
      },
      {
        name: "Security Control Implementation and Assessments",
        description:
          "Implementation and assessment are different jobs. Implementation means helping you configure and deploy security controls. An assessment independently reviews whether the controls you already have are in place and working as intended.",
      },
      {
        name: "Cybersecurity Awareness & Training",
        description:
          "Scenario-based awareness content that helps employees recognize threats and make safer decisions at work. Topics include phishing, safe AI use, data protection, and other everyday cybersecurity risks, customized to your organization.",
      },
      {
        name: "SSL/TLS Certificate Management & Web Encryption",
        description:
          "We install, configure, and manage SSL/TLS certificates for websites and web applications so data is encrypted in transit. A certificate protects the connection only. It does not fix vulnerabilities inside an application, which is why it works best alongside vulnerability management.",
      },
      {
        name: "Risk Assessment & Remediation Guidance",
        description:
          "A structured review of your technology environment that identifies risks, estimates their impact, and recommends what to address first. You receive a written summary of the risks found and a prioritized action plan.",
      },
    ],
    deliverables: [
      "Prioritized findings with a risk rating for each issue",
      "Plain-language remediation recommendations",
      "A written risk summary and suggested next steps",
      "Awareness training content tailored to your team",
    ],
    scopeNote:
      "Some engagements deliver findings and guidance while your team performs the fixes. Others include hands-on technical assistance. We confirm which applies before work begins.",
    closing: ["Know where you stand", "before attackers do."],
    homeHeadline: "Find risk. Prioritize it. Act on it.",
    homeText:
      "Vulnerability management, security control implementation and assessments, awareness training, SSL/TLS, and risk assessments, with clear findings and practical guidance.",
  },
  {
    slug: "managed-it",
    eyebrow: "02 / Managed IT & systems",
    title: "Managed IT & Systems",
    tagline: "Reliable technology. Responsive support. Smooth operations.",
    shortTitle: "Managed IT",
    description:
      "We help businesses keep their IT environments secure, reliable, and well maintained through ongoing technical support and systems management, and we resolve the technical issues that slow your team down.",
    summary:
      "Ongoing support and systems management that keeps your users productive and your technology maintained and available.",
    workHeading: ["Technology that just", "keeps working."],
    detail:
      "Managed IT means someone is responsible for keeping your systems configured, patched, supported, and available. We take on that day-to-day work so your team can focus on the business.",
    accent: "#65d5ff",
    workstreams: [
      {
        name: "System Administration",
        description:
          "Day-to-day administration of servers and business systems, including configuration, user access, and routine maintenance.",
      },
      {
        name: "Active Directory Management",
        description:
          "Management of user accounts, groups, permissions, and policies in Active Directory so the right people have the right access.",
      },
      {
        name: "Endpoint Management",
        description:
          "Configuration, updating, and oversight of laptops, desktops, and other devices so they stay consistent and supported.",
      },
      {
        name: "IT Support & Help Desk",
        description:
          "A point of contact for your team's technical questions and issues, with problems tracked through to resolution.",
      },
      {
        name: "Patch & Configuration Management",
        description:
          "Planned, tested updates and consistent configurations that close known security gaps and reduce surprise outages.",
      },
      {
        name: "System Troubleshooting & Maintenance",
        description:
          "Diagnosing and resolving system problems, plus preventive maintenance that keeps small issues from becoming outages.",
      },
    ],
    deliverables: [
      "A defined scope of the systems and services we support",
      "Documented configurations and a record of changes made",
      "Tracked support requests, from report to resolution",
      "Regular patching and maintenance of covered systems",
    ],
    scopeNote:
      "The support model, including coverage hours, remote or on-site availability, and onboarding, is agreed with you during the consultation. We can also work alongside an existing IT team.",
    closing: ["Let's take IT off", "your to-do list."],
    homeHeadline: "Dependable day-to-day IT.",
    homeText:
      "System administration, Active Directory, endpoint management, help desk, and patching, so your systems stay supported and your team stays productive.",
  },
  {
    slug: "cloud-infrastructure",
    eyebrow: "03 / Cloud & infrastructure",
    title: "Cloud & Infrastructure Solutions",
    tagline: "Build smarter. Scale confidently. Stay resilient.",
    shortTitle: "Cloud & Infrastructure",
    description:
      "We help organizations manage and optimize the infrastructure behind their business, from cloud administration and server management to backup, disaster recovery, and cloud security.",
    summary:
      "Cloud administration, infrastructure management, backup and disaster recovery, and cloud security for a dependable foundation.",
    workHeading: ["A foundation you can", "depend on."],
    detail:
      "Reliable infrastructure is quiet infrastructure. We help you administer it, secure it, protect it with backup and recovery planning, and tune it so it keeps up as the business grows.",
    accent: "#ffbd73",
    workstreams: [
      {
        name: "Cloud Administration",
        description:
          "Ongoing administration of your cloud environment, including accounts, access, resources, and day-to-day configuration.",
      },
      {
        name: "Infrastructure Management",
        description:
          "Monitoring and maintaining the infrastructure that supports your applications and users.",
      },
      {
        name: "Backup & Disaster Recovery",
        description:
          "Backup copies your data. Disaster recovery is the plan and tooling for restoring systems after an outage or incident. We help design both, and recommend regular restore testing to confirm recovery works.",
      },
      {
        name: "Cloud Security",
        description:
          "Reviewing and hardening cloud configurations, access controls, and exposure so your cloud environment is not an easy target.",
      },
      {
        name: "Server & Systems Management",
        description:
          "Configuration, maintenance, and oversight of the servers and operating systems your business relies on.",
      },
      {
        name: "Infrastructure Optimization",
        description:
          "Reviewing how your infrastructure is used and recommending changes that improve performance, reliability, and cost efficiency.",
      },
    ],
    deliverables: [
      "A documented view of your cloud and infrastructure environment",
      "Backup and recovery recommendations matched to your needs",
      "Cloud security findings with prioritized fixes",
      "Optimization recommendations for performance and reliability",
    ],
    scopeNote:
      "Backup and recovery results depend on the solution agreed and on regular testing. No provider can promise uninterrupted operations, so we plan, test, and document recovery rather than guarantee it.",
    closing: ["Build on infrastructure", "that holds up."],
    homeHeadline: "Reliable, secure, ready to scale.",
    homeText:
      "Cloud administration, infrastructure management, backup and disaster recovery, and cloud security for a resilient technology foundation.",
  },
  {
    slug: "network-visibility",
    eyebrow: "04 / Network infrastructure & visibility",
    title: "Network Infrastructure & Visibility",
    tagline: "Improve visibility. Reduce blind spots.",
    shortTitle: "Network Visibility",
    description:
      "We help organizations see what is happening on their networks so they can troubleshoot faster and monitor and secure traffic more effectively. Our specialty is configuring and optimizing Gigamon and Keysight/Ixia network packet brokers.",
    summary:
      "Better visibility into network traffic for faster troubleshooting and stronger monitoring, built on Gigamon and Keysight/Ixia packet brokers.",
    workHeading: ["See your network", "clearly."],
    detail:
      "Security and performance tools can only analyze the traffic they can see. Network packet brokers collect and deliver the right traffic to those tools. We configure and tune them so the right data reaches the right place.",
    accent: "#5eead4",
    workstreams: [
      {
        name: "Network Packet Broker Configuration",
        description:
          "Configuration of Gigamon and Keysight/Ixia network packet brokers to collect traffic and deliver it to your monitoring and security tools.",
      },
      {
        name: "Traffic Visibility Optimization",
        description:
          "Tuning existing visibility deployments, such as filtering and traffic distribution, to cut noise and remove blind spots.",
      },
      {
        name: "Network Troubleshooting Support",
        description:
          "Using better traffic visibility to track down performance and connectivity problems faster.",
      },
    ],
    deliverables: [
      "A configured or optimized packet broker deployment",
      "Documentation of traffic sources, filters, and tool destinations",
      "Recommendations to close remaining visibility gaps",
    ],
    scopeNote:
      "This is a specialized service that is a good fit for organizations running, or planning to run, Gigamon or Keysight/Ixia platforms. If you are not sure whether it applies, we can help you decide.",
    closing: ["Close your visibility gaps", "before they cost you."],
    homeHeadline: "See more of your network traffic.",
    homeText:
      "Improve traffic visibility and troubleshooting, with specialist configuration of Gigamon and Keysight/Ixia network packet brokers.",
  },
  {
    slug: "compliance-security",
    eyebrow: "05 / Compliance & security",
    title: "Compliance & Security",
    tagline: "Strengthen security. Reduce risk. Support compliance.",
    shortTitle: "Compliance",
    description:
      "We help organizations assess their security practices and prepare for recognized regulations, standards, and frameworks by evaluating controls, finding gaps, and recommending practical improvements.",
    summary:
      "Gap analysis, control reviews, and practical guidance to support HIPAA, PCI DSS, NIST, FISMA/NIST RMF, and ISO 27001 efforts.",
    workHeading: ["Turn requirements into", "controls you can run."],
    detail:
      "Compliance requirements are easier to meet when they are translated into specific controls and clear priorities. We support your compliance effort, from the first gap assessment through audit preparation. We do not guarantee compliance or certification outcomes.",
    accent: "#d4a7ff",
    workstreams: [
      {
        name: "HIPAA",
        description:
          "A US federal law that sets security and privacy requirements for protected health information. We help assess safeguards and identify gaps.",
      },
      {
        name: "PCI DSS",
        description:
          "An industry standard for organizations that store, process, or transmit payment card data. We help review controls against its requirements.",
      },
      {
        name: "NIST",
        description:
          "Widely used US frameworks and guidance, such as the NIST Cybersecurity Framework, for organizing and improving a security program.",
      },
      {
        name: "FISMA / NIST RMF",
        description:
          "FISMA is the US law governing federal information security. The NIST Risk Management Framework is the process used to meet it. We support the security and risk documentation work involved.",
      },
      {
        name: "ISO 27001",
        description:
          "An international standard for an information security management system. Formal certification is awarded by an accredited external auditor. We help you prepare for that audit.",
      },
      {
        name: "Security & Control Assessments",
        description:
          "Reviewing whether your security controls are designed and operating as intended.",
      },
      {
        name: "Risk Assessments & Gap Analysis",
        description:
          "Comparing your current practices with a chosen requirement or framework and listing what is missing, in priority order.",
      },
      {
        name: "Policy & Control Reviews",
        description:
          "Reviewing your security policies and supporting controls for completeness, clarity, and alignment with the requirement you are working toward.",
      },
    ],
    deliverables: [
      "A gap analysis against the requirement you are targeting",
      "A prioritized list of controls and policies to address",
      "Recommendations you can act on and track",
      "Audit preparation guidance where it is in scope",
    ],
    scopeNote:
      "Gap assessment, implementation assistance, audit preparation, and certification are different stages. We support the first three. We do not issue certifications or guarantee that an audit will be passed.",
    closing: ["Start your compliance work", "with a clear picture."],
    homeHeadline: "Turn requirements into stronger controls.",
    homeText:
      "Gap analysis, control reviews, and practical guidance to support HIPAA, PCI DSS, NIST, FISMA/NIST RMF, and ISO 27001 efforts.",
  },
  {
    slug: "software-testing",
    eyebrow: "06 / Software testing & QA",
    title: "Software Testing & Quality Assurance",
    tagline: "Build with confidence. Deliver with quality.",
    shortTitle: "Software Testing",
    description:
      "We help businesses find defects, validate functionality, and improve application reliability before software reaches end users, using both manual and automated testing across key workflows.",
    summary:
      "Manual and automated testing, regression checks, and clear defect reports so your software ships with fewer surprises.",
    workHeading: ["Catch defects before", "your customers do."],
    detail:
      "Good testing finds problems while they are still cheap to fix. We test your critical workflows, document what we find, and re-check after every change so quality does not slip.",
    accent: "#ff7f9f",
    workstreams: [
      {
        name: "Manual Testing",
        description:
          "Hands-on testing of features and workflows the way a real user would use them, including edge cases that scripts miss.",
      },
      {
        name: "Test Automation",
        description:
          "Automated tests for repeatable checks, so important workflows are verified quickly with every release. Automation is added where it makes sense for your application.",
      },
      {
        name: "Functional Testing",
        description:
          "Verifying that each feature behaves as the requirements describe.",
      },
      {
        name: "Regression Testing",
        description:
          "Re-testing existing functionality after changes to confirm that new work has not broken what already worked.",
      },
      {
        name: "Defect Identification & Reporting",
        description:
          "Structured defect reports with clear steps to reproduce, expected and actual results, and severity, so developers can fix issues quickly.",
      },
      {
        name: "Test Documentation & Quality Validation",
        description:
          "Test plans, test cases, and results documented so your team can see what was tested and what the outcome was.",
      },
    ],
    deliverables: [
      "Test plans and test cases for the scope being tested",
      "Defect reports with reproduction steps and severity",
      "Regression test results after each round of changes",
      "Automated test scripts, where automation is in scope",
    ],
    scopeNote:
      "Functional software testing checks that an application works as intended. It is not penetration testing or a security assessment. If you need those, ask us about our cybersecurity services.",
    closing: ["Ship software you're", "confident in."],
    homeHeadline: "Ship with confidence.",
    homeText:
      "Manual and automated testing, functional and regression validation, and structured defect reporting that helps teams release with fewer surprises.",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

/** Maps the ?service= query value to the contact form's inquiry type. */
export const inquiryTypeBySlug: Record<string, string> = {
  cybersecurity: "Cybersecurity Consultation",
  "managed-it": "Managed IT Support",
  "cloud-infrastructure": "Cloud & Infrastructure Services",
  "network-visibility": "Network Infrastructure & Visibility",
  "compliance-security": "Compliance & Security",
  "software-testing": "Software Testing & QA",
};
