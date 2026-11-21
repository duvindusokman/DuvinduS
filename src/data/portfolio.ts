// ─────────────────────────────────────────────────────────────
//  ALL SITE CONTENT LIVES HERE.
//  Edit this one file to update your portfolio — no component
//  changes needed.
//
//  Sections whose list is empty ([]) are hidden automatically,
//  together with their menu link.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Duvindu Sokman",
  initials: "DS",
  role: "Business Analyst · Project Coordination · BIS Undergraduate",
  tagline:
    "Business Information Systems undergraduate who turns business problems into clear requirements, organised plans and decisions backed by data.",
  focus: ["Business Process Analysis", "Project Coordination", "Data & Reporting", "UI/UX & Visuals"],
  location: "Malabe, Sri Lanka",
  email: "duvindusokman0@gmail.com",
  phone: "+94 78 596 1252", // set to "" to hide
  photo: "/profile.jpg",
  cvUrl: "/Duvindu-Sokman-CV.pdf",
  cvUpdated: "November 2026",
  available: true, // shows the "Open to opportunities" badge
  socials: {
    linkedin: "", // TODO paste your LinkedIn profile URL (button hides while empty)
    github: "", // optional — paste your GitHub URL to show the button
  },
  about: [
    "I'm reading for a BSc (Hons) in Business Information Systems at the University of Sri Jayewardenepura, where business, technology and data meet. I enjoy finding out how a process really works, spotting where it breaks, and shaping a clearer, better-documented way forward.",
    "Over two years of work across customer support & IT operations at ikman, and digital marketing for Wonder Isle Holidays and Spark Ceylon, have taught me to work to service levels, train people, and communicate with customers and teams alike. As Director of Finance and now Treasurer of the Rotaract Club of USJ, I coordinate budgets and projects with real stakeholders.",
    "I'm now focusing on Business Analysis and Project Management, and looking for roles where I can help teams deliver the right solution, on time.",
  ],
  interests: [
    "Business Analysis",
    "Data Analytics",
    "ERP Systems",
    "Digital Transformation",
    "Software Development",
    "Data Engineering",
    "UI/UX Design",
    "Cloud Engineering",
  ],
  languages: ["English", "Sinhala"],
  stats: [
    { value: "2+ yrs", label: "Work experience" },
    { value: "4", label: "Projects built" },
    { value: "5", label: "Certifications" },
  ],
};

// ── Expertise ────────────────────────────────────────────────
export type Pillar = {
  title: string;
  icon: "analysis" | "project";
  summary: string;
  items: string[];
};

export const pillars: Pillar[] = [
  {
    title: "Business Analysis",
    icon: "analysis",
    summary:
      "Understanding how the business works, asking the right questions and documenting needs clearly so the team builds the right thing.",
    items: [
      "Business process analysis",
      "Requirements gathering",
      "Process & UML modelling",
      "Wireframing & prototyping",
      "Data analysis & reporting",
      "ERP & information systems",
      "Policy & quality compliance",
      "Technical communication",
    ],
  },
  {
    title: "Project Management",
    icon: "project",
    summary:
      "Coordinating people, tasks and budgets, and keeping progress, service levels and decisions visible from start to finish.",
    items: [
      "Project coordination",
      "Task planning & tracking",
      "Budgeting & finance oversight",
      "KPI & service-level monitoring",
      "Team training & onboarding",
      "Stakeholder communication",
      "Team collaboration",
      "Documentation & reporting",
    ],
  },
];

export const process = [
  { step: "Discover", text: "Meet stakeholders, understand goals and map how things work today." },
  { step: "Define", text: "Capture requirements, user stories and acceptance criteria." },
  { step: "Design", text: "Model the future process, flows and wireframes for sign-off." },
  { step: "Deliver", text: "Plan sprints, track progress and manage risks and change." },
  { step: "Measure", text: "Report outcomes with data and feed lessons into the next cycle." },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Databases & Analytics",
    items: ["SQL", "Microsoft Access", "Power BI", "Tableau", "RapidMiner AI Studio", "Descriptive & exploratory analytics"],
  },
  {
    group: "Business & Enterprise",
    items: ["ERP systems", "Financial statement analysis", "Corporate finance", "Business process analysis"],
  },
  {
    group: "Development",
    items: ["Python", "JavaScript", "TypeScript", "PHP", "HTML & CSS", "Node.js", "Streamlit", "Git & GitHub"],
  },
  {
    group: "Core Competencies",
    items: [
      "Analytical & critical thinking",
      "Problem-solving",
      "Team collaboration",
      "Technical communication",
      "Adaptability & learning agility",
    ],
  },
];

// ── Tools dashboard ──────────────────────────────────────────
// Icons live in /public/tools. To add a tool, drop an SVG/PNG there
// and add a line below. Categories control the glow colour & grouping.
export const toolCategories = [
  {
    id: "pm",
    label: "Project & Workspace",
    color: "#8b5cf6",
    blurb: "Planning work, tracking tasks and producing the documents and decks stakeholders read.",
  },
  {
    id: "model",
    label: "Modelling & Diagrams",
    color: "#22d3ee",
    blurb: "Mapping processes, drawing UML and use-case diagrams, and wireframing screens before they're built.",
  },
  {
    id: "data",
    label: "Data & Analytics",
    color: "#f59e0b",
    blurb: "Querying, cleaning and visualising data so decisions are backed by numbers, not opinions.",
  },
  {
    id: "design",
    label: "Design & Visuals",
    color: "#ec4899",
    blurb: "Prototyping interfaces and creating clean visuals for presentations, reports and social content.",
  },
] as const;

export type ToolCategoryId = (typeof toolCategories)[number]["id"];

export const tools: { name: string; icon: string; category: ToolCategoryId }[] = [
  { name: "Microsoft Word", icon: "/tools/word.svg", category: "pm" },
  { name: "Microsoft Excel", icon: "/tools/excel.svg", category: "pm" },
  { name: "Microsoft PowerPoint", icon: "/tools/powerpoint.svg", category: "pm" },
  { name: "ClickUp", icon: "/tools/clickup.svg", category: "pm" },
  { name: "Notion", icon: "/tools/notion.svg", category: "pm" },
  { name: "Balsamiq", icon: "/tools/balsamiq.svg", category: "model" },
  { name: "UML", icon: "/tools/uml.svg", category: "model" },
  { name: "Lucidchart", icon: "/tools/lucidchart.svg", category: "model" },
  { name: "draw.io", icon: "/tools/drawio.svg", category: "model" },
  { name: "Microsoft Visio", icon: "/tools/visio.svg", category: "model" },
  { name: "MySQL", icon: "/tools/mysql.svg", category: "data" },
  { name: "Power BI", icon: "/tools/powerbi.svg", category: "data" },
  { name: "Tableau", icon: "/tools/tableau.svg", category: "data" },
  { name: "Python", icon: "/tools/python.svg", category: "data" },
  { name: "Google Sheets", icon: "/tools/sheets.svg", category: "data" },
  { name: "Microsoft Access", icon: "/tools/access.svg", category: "data" },
  { name: "Figma", icon: "/tools/figma.svg", category: "design" },
  { name: "Canva", icon: "/tools/canva.svg", category: "design" },
  { name: "Adobe Photoshop", icon: "/tools/photoshop.svg", category: "design" },
];

// ── Experience ───────────────────────────────────────────────
export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
  tags?: string[];
};

export const experience: Experience[] = [
  {
    role: "Graphic Designer (Part-Time)",
    company: "Spark Ceylon",
    location: "Colombo",
    period: "May 2025 — Present",
    points: [
      "Design promotional flyers and marketing materials that build brand awareness across Instagram, TikTok, Facebook and LinkedIn.",
      "Create visual content that promotes the company's services to target audiences and increases social media engagement.",
      "Support digital marketing initiatives with creative designs aimed at expanding reach and driving business growth.",
    ],
    tags: ["Canva", "Photoshop", "Brand awareness", "Digital marketing"],
  },
  {
    role: "Social Media Intern (Part-Time)",
    company: "Wonder Isle Holidays",
    location: "Colombo 05",
    period: "Apr 2025 — Present",
    points: [
      "Design flyers and promotional content to engage and attract tourists.",
      "Produce videos showcasing Sri Lanka to increase interest from foreign visitors.",
      "Manage the company's Instagram, Facebook and LinkedIn pages, keeping branding and engagement consistent.",
    ],
    tags: ["Content strategy", "Social media", "Video"],
  },
  {
    role: "Executive — Customer Support & IT (Full-Time)",
    company: "ikman (Private) Limited",
    location: "Union Place, Colombo 02",
    period: "Mar 2024 — Apr 2025",
    points: [
      "Reviewed and approved advertisements to ensure policy compliance and content quality.",
      "Monitored performance metrics and maintained required service levels.",
      "Trained and supported new agents, sharing best practices to improve team performance.",
      "Managed job-portal operations: ad posting and deactivation, duplicate checks, SMS data processing and applicant/CV updates.",
      "Handled customer queries and complaints across Facebook, Instagram and LinkedIn.",
    ],
    tags: ["Process compliance", "KPI / SLA monitoring", "Training", "Operations"],
  },
];

// ── Projects / case studies ──────────────────────────────────
export type Project = {
  title: string;
  type: string; // short label shown on the card
  description: string;
  highlights?: string[]; // modules / features / outputs
  tags: string[]; // tech used
  link?: string;
  repo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "The University Marketplace",
    type: "Campus platform",
    description:
      "A campus platform that brings everyday student needs into one place, with an admin dashboard to manage listings and activity.",
    highlights: ["Buy & Sell", "Lost & Found", "Campus Events", "Admin Dashboard"],
    tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    featured: true,
  },
  {
    title: "PROPIQ 2.0",
    type: "Property valuation · AI",
    description:
      "Enhanced the PROPIQ property valuation system with location-based insights and AI-powered content summarisation.",
    highlights: ["Location insights", "AI summaries", "Google Maps integration"],
    tags: ["Python", "Google Maps", "AI"],
    featured: true,
  },
  {
    title: "PROPIQ",
    type: "Property valuation",
    description:
      "A digital property valuation system that turns user-entered property data into structured valuation reports.",
    highlights: ["Structured valuation reports"],
    tags: ["Python", "HTML"],
  },
  {
    title: "Nalanda Commerce Society Website",
    type: "Society website",
    description:
      "The official website of the Commerce Society of Nalanda College, sharing society information, events and activities.",
    highlights: ["Events", "Society information"],
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    link: "https://nalandacommerce.lk",
  },
];

// ── Education & certifications ───────────────────────────────
export type Education = {
  degree: string;
  school: string;
  period: string;
  detail: string;
};

export const education: Education[] = [
  {
    degree: "BSc (Hons) in Business Information Systems",
    school: "University of Sri Jayewardenepura",
    period: "Undergraduate · Reading",
    detail: "Studying where business, information systems and data meet — the foundation for my Business Analysis and Project Management focus.",
  },
  {
    degree: "GCE Advanced Level — Commerce Stream (3 A passes)",
    school: "Nalanda College, Colombo 10",
    period: "2023",
    detail: "Business Studies · Information & Communication Technology · Accounting",
  },
];

export type Certification = {
  name: string;
  issuer: string;
  issued: string;
  skills: string[];
  url?: string; // paste the "Show credential" link from LinkedIn
};

export const certifications: Certification[] = [
  {
    name: "Business Analytics Foundations",
    issuer: "LinkedIn Learning",
    issued: "Dec 2025",
    skills: ["Descriptive analytics", "Exploratory analytics"],
    url: "", // TODO paste credential link
  },
  {
    name: "Corporate Financial Statement Analysis",
    issuer: "LinkedIn Learning",
    issued: "Dec 2025",
    skills: ["Corporate finance", "Financial statement analysis"],
    url: "",
  },
  {
    name: "SQL Essentials",
    issuer: "LinkedIn Learning",
    issued: "Aug 2024",
    skills: ["SQL"],
    url: "",
  },
  {
    name: "Introduction to Artificial Intelligence",
    issuer: "LinkedIn Learning",
    issued: "Aug 2024",
    skills: ["Artificial intelligence (AI)"],
    url: "",
  },
  {
    name: "Ethical Hacking",
    issuer: "LinkedIn Learning",
    issued: "Aug 2024",
    skills: ["Ethical hacking"],
    url: "",
  },
];

// ── Extracurriculars ─────────────────────────────────────────
export type Extracurricular = {
  title: string;
  org: string;
  period: string;
  description: string;
  category: string; // e.g. Leadership, Volunteering, Sports, Competition
};

export const extracurriculars: Extracurricular[] = [
  {
    title: "Treasurer",
    org: "Rotaract Club of University of Sri Jayewardenepura",
    period: "RI Year 2026–27",
    description: "Oversee the club's finances, budgets and fund management for projects across the Rotaract year.",
    category: "Leadership",
  },
  {
    title: "Director of Finance",
    org: "Rotaract Club of University of Sri Jayewardenepura",
    period: "RI Year 2025–26",
    description: "Led the finance avenue, planning and tracking project budgets alongside the board.",
    category: "Leadership",
  },
  {
    title: "Secretary",
    org: "Commerce Society of Nalanda College",
    period: "2022–23",
    description: "Coordinated society communication and records, and built the society's official website, nalandacommerce.lk.",
    category: "Leadership",
  },
  {
    title: "Assistant Secretary",
    org: "ICT Society of Nalanda College",
    period: "2022–23",
    description: "Supported the society's administration, meetings and event coordination.",
    category: "Leadership",
  },
  {
    title: "Member",
    org: "IEEE Student Branch · Career Skills Development Society",
    period: "University",
    description: "Taking part in technical and career-development activities at university.",
    category: "Professional",
  },
  {
    title: "Member",
    org: "Leo Club (2022–23) · Interact Club of Nalanda College",
    period: "School",
    description: "Contributed to community service projects through the school's service clubs.",
    category: "Service",
  },
];

// ── Navigation ───────────────────────────────────────────────
// `show` hides a link automatically when its section has no content.
export const nav = [
  { label: "About", href: "#about", show: true },
  { label: "Expertise", href: "#expertise", show: true },
  { label: "Experience", href: "#experience", show: experience.length > 0 },
  { label: "Projects", href: "#projects", show: projects.length > 0 },
  { label: "Tools", href: "#tools", show: tools.length > 0 },
  { label: "Credentials", href: "#education", show: education.length + certifications.length > 0 },
  { label: "Activities", href: "#activities", show: extracurriculars.length > 0 },
  { label: "Contact", href: "#contact", show: true },
].filter((n) => n.show);
