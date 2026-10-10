export const siteConfig = {
  name: "Sylvia Njoki",
  title: "Software Developer — Mobile, Web & AI/ML",
  description:
    "Nairobi-based software developer building mobile and web applications with AI/ML integration. From fintech tools that expand credit access to women, to enterprise systems and predictive models. Open to freelance projects, full-time roles, and internships.",
  email: "sylvianjoki37@gmail.com",
  github: "https://github.com/sylvianj",
  linkedin: "https://www.linkedin.com/in/sylvia-njoki-9128b926b",
  calendly: "",
  resumeUrl: "/resume.pdf",
  location: "Kasarani, Nairobi, Kenya",
};

export const services = [
  {
    title: "Android & Mobile Apps",
    description:
      "Native Kotlin apps with clean UX, offline support, and real device integrations — from concept to a working product.",
  },
  {
    title: "Web Development",
    description:
      "Fast, responsive web apps built with React, Vite, and TypeScript — from landing pages to full dashboards with role-based access.",
  },
  {
    title: "AI/ML & Data Science",
    description:
      "Predictive models (churn, classification, forecasting) and AI-powered features like chatbots, built with Python and integrated into your product.",
  },
];

export type Project = {
  title: string;
  subtitle: string;
  role: string;
  description: string;
  problem: string;
  result: string;
  tech: string[];
  links: { github?: string; demo?: string; video?: string };
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "SheLoans",
    subtitle: "Mobile app unlocking credit for women",
    role: "Solo Developer — Android, Backend, AI",
    description:
      "A native Android app designed to promote financial inclusion for women. SheLoans provides access to credit through a loan marketplace connected to major Kenyan banks (Equity, KCB, Absa), savings goals, Chama (investment group) management, and M-Pesa transactions — plus an AI-powered chatbot for financial advice.",
    problem:
      "Millions of women are locked out of formal credit because they lack land titles or payslips — the exact assets and documents traditional lenders demand. Informal savings groups (Chamas) are also hard to track and manage.",
    result:
      "Shipped a working Android app end-to-end: a loan marketplace integrated with major Kenyan banks, M-Pesa STK Push for deposits and withdrawals, an internal credit-scoring system that rewards consistent saving, Chama management, and an AI assistant powered by Groq/Llama for financial guidance.",
    tech: ["Kotlin", "Firebase", "M-Pesa API", "Groq API", "Retrofit", "Material Design"],
    links: { github: "https://github.com/sylvianj/SheLoans" },
    featured: true,
  },
  {
    title: "Customer Churn Prediction",
    subtitle: "Machine learning model for customer retention",
    role: "Data Scientist / ML Developer",
    description:
      "Built a predictive model that identifies customers likely to churn, giving businesses actionable signals to intervene before losing them. Includes data preprocessing, feature engineering, model training, and evaluation.",
    problem:
      "Businesses lose revenue when customers leave silently — but churn often follows detectable patterns in usage and account data.",
    result:
      "Trained and evaluated classification models to predict churn risk, with feature importance analysis showing which behaviours most strongly indicate attrition.",
    tech: ["Python", "scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    links: { github: "https://github.com/sylvianj/churn-prediction" },
  },
  {
    title: "Branch HR System",
    subtitle: "Multi-branch HR management platform",
    role: "Frontend Developer (Team Project)",
    description:
      "A web-based HR platform for organizations with multiple branches. Supports role-based access for HR executives and employees, with branch-level data separation and centralized employee management.",
    problem:
      "Growing organizations with multiple branches had no centralized, role-aware way to manage employee records or branch-level HR operations.",
    result:
      "Delivered a working multi-role system with separate dashboards for HR executives and employees, branch-level isolation, and a clean React frontend backed by a Python API.",
    tech: ["React", "Vite", "TypeScript", "Python", "REST APIs"],
    links: { github: "https://github.com/Bonareri-Nelly/Hr_front" },
  },
  {
    title: "SheCode Africa — Chuka Chapter Website",
    subtitle: "Community website for women in tech",
    role: "Web Developer (Volunteer)",
    description:
      "Designed and built the official website for the Chuka Chapter of SheCode Africa, a community empowering women in tech across Africa.",
    problem:
      "The chapter needed a public home to showcase its programs, events, and opportunities for women in tech.",
    result:
      "Delivered a responsive website that serves as the chapter's public face and a hub for members to find events and resources.",
    tech: ["React", "Vite", "Tailwind", "Responsive Design"],
    links: { demo: "https://shecodeafrica.org" },
  },
];

export const skillGroups = [
  {
    label: "Languages",
    items: ["Kotlin", "Python", "TypeScript", "JavaScript"],
  },
  {
    label: "Mobile",
    items: ["Android (Kotlin)", "Jetpack Compose", "Room DB", "Retrofit", "Material Design"],
  },
  {
    label: "Frontend",
    items: ["React", "Vite", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    label: "AI / ML",
    items: ["scikit-learn", "Pandas", "NumPy", "Matplotlib", "Predictive Modelling"],
  },
  {
    label: "Backend & APIs",
    items: ["Python", "REST APIs", "M-Pesa API", "Groq API", "Firebase"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "Android Studio", "VS Code", "Postman"],
  },
];

export const experience = [
  {
    role: "Mobile App Development Lead",
    company: "Google Developer Groups (GDG) on Campus — Chuka University",
    period: "2024 — Present",
    description:
      "Lead the mobile development track for GDG on campus. Organize workshops, mentor students learning Android and cross-platform development, and run hands-on sessions on Kotlin, Jetpack, and mobile best practices.",
  },
  {
    role: "Android Developer — Self-initiated Project",
    company: "SheLoans (Women's Financial Inclusion App)",
    period: "2024 — Present",
    description:
      "Designed and built SheLoans, a native Android app in Kotlin that helps women access credit without land collateral. Integrates a loan marketplace with Kenyan banks, M-Pesa STK Push, Chama group management, an internal credit-scoring system, and a Groq-powered financial assistant.",
  },
  {
    role: "Frontend Developer — Team Project",
    company: "Branch HR System",
    period: "2024",
    description:
      "Built the React + Vite frontend for a multi-branch HR platform, implementing role-based dashboards for HR executives and employees and integrating with a Python backend.",
  },
  {
    role: "Web Developer — Volunteer",
    company: "SheCode Africa, Chuka Chapter",
    period: "2024",
    description:
      "Contributed to the design and development of the chapter's website, helping the community showcase its programs, events, and opportunities for women in tech.",
  },
  {
    role: "Software Developer — Attachment",
    company: "Optimum ERP Systems",
    period: "May 2025 — Aug 2025",
    description:
      "Completed a three-month attachment at a leading Kenyan ERP provider, working on enterprise resource planning software used by academic and financial institutions. Gained hands-on experience with ERP workflows, debugging, and collaborative development in a professional team.",
  },
  {
    role: "BSc Computer Science",
    company: "Chuka University",
    period: "2022 — 2026",
    description:
      "Studied software engineering, mobile computing, and machine learning. Active in the campus tech community as GDG Mobile App Development Lead.",
  },
];