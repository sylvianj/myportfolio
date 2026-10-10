export const siteConfig = {
  name: "Sylvia Njoki",
  title: "Mobile & Full-Stack Developer",
  description:
    "Nairobi-based developer focused on Android apps with AI/ML integration. I've shipped a fintech product used by women without collateral, a multi-branch HR platform, and a churn prediction model. Open to freelance work, full-time roles, and internships.",
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
      "Native Kotlin apps with clean UX, offline support, and real device integrations - from concept to a working product.",
  },
  {
    title: "Web Development",
    description:
      "Fast, responsive web apps built with React, Vite, and TypeScript - from landing pages to full dashboards with role-based access.",
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
  screenshots?: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "SheLoans",
    subtitle: "Android app unlocking credit for women",
    role: "Solo Developer - Android, Backend, AI",
    description:
      "An Android app built in Kotlin that helps women access credit without land titles or payslips. Features a loan marketplace with Equity, KCB, and Absa, M-Pesa STK Push for deposits and withdrawals, Chama group management, and an in-app AI assistant powered by Groq/Llama.",
    problem:
      "Traditional lenders require land titles or payslips as collateral - excluding millions of women who save consistently but have no formal proof of creditworthiness.",
    result:
      "Shipped an end-to-end Android app: working M-Pesa integration, an internal credit-scoring system that rewards savings behaviour, bank API connections, and a Groq-powered financial assistant.",
    tech: ["Kotlin", "Firebase", "M-Pesa API", "Groq API", "Retrofit", "Material Design"],
    links: { github: "https://github.com/sylvianj/SheLoans" },
    screenshots: [],
    featured: true,
  },
  {
    title: "Customer Churn Prediction",
    subtitle: "Machine learning model for retention",
    role: "ML Developer",
    description:
      "A classification model that predicts which customers are likely to churn, with feature importance analysis identifying the strongest signals.",
    problem:
      "Businesses lose revenue when customers leave silently - but churn follows patterns that are detectable in advance.",
    result:
      "Trained and evaluated classification models on real customer data, surfacing the top behavioural signals that predict attrition.",
    tech: ["Python", "scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    links: { github: "https://github.com/sylvianj/churn-prediction" },
    screenshots: [],
  },
  {
    title: "Branch HR System",
    subtitle: "Multi-branch HR management platform",
    role: "Frontend Developer (Team Project)",
    description:
      "A web HR platform for organizations with multiple branches, with role-based dashboards for HR executives and employees.",
    problem:
      "Multi-branch organizations had no centralized, role-aware way to manage employee records across locations.",
    result:
      "Delivered a React frontend with separate HR-executive and employee dashboards, branch-level data isolation, and Python API integration.",
    tech: ["React", "Vite", "TypeScript", "Python", "REST APIs"],
    links: { github: "https://github.com/Bonareri-Nelly/Hr_front" },
    screenshots: [],
  },
  {
    title: "SheCode Africa - Chuka Chapter Website",
    subtitle: "Community website for women in tech",
    role: "Web Developer (Volunteer)",
    description:
      "Responsive website for the Chuka Chapter of SheCode Africa, showcasing programs, events, and opportunities.",
    problem:
      "The chapter had no public web presence to reach members and partners.",
    result:
      "Delivered a responsive site serving as the chapter's public face and a hub for events and resources.",
    tech: ["React", "Vite", "Tailwind", "Responsive Design"],
    links: { demo: "https://shecodeafrica.org" },
    screenshots: [],
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
    company: "Google Developer Groups (GDG) on Campus - Chuka University",
    period: "2024 - Present",
    description:
      "Lead the mobile development track: organizing workshops, mentoring students in Android, and running hands-on sessions on Kotlin and Jetpack.",
  },
  {
    role: "Android Developer",
    company: "SheLoans (Independent Project)",
    period: "2024 - Present",
    description:
      "Building SheLoans end-to-end - Android app, backend integrations, and AI assistant - to expand credit access for women in Kenya.",
  },
  {
    role: "Frontend Developer",
    company: "Branch HR System (Team Project)",
    period: "2024",
    description:
      "Implemented role-based dashboards in React for HR executives and employees, connected to a Python backend.",
  },
  {
    role: "Web Developer - Volunteer",
    company: "SheCode Africa, Chuka Chapter",
    period: "2024",
    description:
      "Built the chapter's public website to showcase programs and opportunities for women in tech.",
  },
  {
    role: "Software Developer - Attachment",
    company: "Optimum ERP Systems",
    period: "May 2025 - Aug 2025",
    description:
      "Worked on enterprise resource planning software used by academic and financial institutions. Gained hands-on experience with ERP workflows, debugging, and collaborative development.",
  },
  {
    role: "BSc Computer Science",
    company: "Chuka University",
    period: "2022 - 2026",
    description:
      "Studied software engineering, mobile computing, and machine learning. Active in the campus tech community as GDG Mobile App Development Lead.",
  },
];