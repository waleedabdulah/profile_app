// ─── Personal meta ────────────────────────────────────────────────────────────
export const meta = {
  name:     "Waleed Abdullah",
  title:    "Software Engineer",
  tagline:  "Build scalable web applications and love clean, maintainable code.",
  email:    "waleedjadoon840@gmail.com",
  github:    "https://github.com/waleedabdulah/",
  linkedin:  "https://www.linkedin.com/in/abdullahwaleed/",
  resumeUrl: "/resume.pdf",
};

// ─── About ────────────────────────────────────────────────────────────────────
export const about = {
  bio: [
    "I'm a software engineer passionate about crafting fast, accessible, and beautiful digital experiences. I specialise in full-stack JavaScript development with a focus on React on the frontend and Node.js on the backend.",
    "When I'm not pushing pixels or debugging APIs, you'll find me contributing to open-source projects, writing technical articles, or exploring the latest in cloud-native architecture.",
  ],
  photoUrl: null, // set to "/profile-photo.jpg" once you add your photo
};

// ─── Experience ───────────────────────────────────────────────────────────────
export const experience = [
  {
    id: 1,
    role: "Associate Software Engineer",
    company: "Tkxel",
    period: "Oct 2024 – Present",
    location: "Lahore, On-site",
    type: "Full-time",
    description: [
      "Demonstrated expertise as a Frontend Engineer across enterprise-grade projects, building scalable UI components and delivering UX improvements for production systems serving real customers across the U.S.",
      "Hardened application security by implementing Content Security Policy (CSP) headers and resolving critical 401/403 authentication bugs using BugSnag — improving the error-free session rate from ~90% to 99.8%.",
      "Thrived in a high-stakes enterprise environment, taking ownership of critical frontend features, writing Jest unit tests, and contributing to an AI agent POC that evolved into a live Jira automation.",
    ],
    projects: [
      {
        title: "Cafe Zupas — Enterprise Web Platform",
        description: "Production-grade frontend for a U.S.-based restaurant chain valued at $200M+, built with a focus on performance, security, and reliability.",
        highlights: [
          "Took ownership of critical frontend functionalities in a high-stakes enterprise environment serving real customers across the U.S.",
          "Wrote unit tests using Jest, ensuring stable releases and consistent behavior across the development lifecycle.",
          "Designed and implemented a comprehensive activity logging system, improving traceability and enabling faster root-cause analysis of production issues.",
          "Diagnosed and resolved critical 401/403 authentication bugs using BugSnag — improved the error-free session rate from ~90% to 99.8%.",
          "Hardened security by implementing Content Security Policy (CSP) headers, validated through OWASP ZAP security testing.",
        ],
        tags: ["React.js", "Jest", "BugSnag", "OWASP ZAP", "CSP"],
        live: "https://cafezupas.com",
      },
      {
        title: "AI Meeting Intelligence Agent",
        description: "Internal proof-of-concept to automate meeting analysis — transitioned into a live Jira automation workflow.",
        highlights: [
          "Built AI agents to parse meeting minutes and operational data, generating structured, actionable reports automatically.",
          "Surfaced recurring patterns and key decisions to support data-driven planning across teams.",
          "Evolved from a POC into a production Jira automation, reducing manual effort in tracking meeting outcomes.",
        ],
        tags: ["AI Agents", "Python", "Jira Automation", "NLP"],
        live: null,
      },
    ],
    skills: ["React.js", "AI Agents", "Jest", "BugSnag", "OWASP ZAP"],
  },
  {
    id: 2,
    role: "Tkxelerate Summer Internship",
    company: "Tkxel",
    period: "Jul 2024 – Sep 2024",
    location: "Lahore, Punjab, Pakistan",
    type: "Internship",
    description: [
      "Demonstrated cross-functional exposure across DevOps, Web Development, Cybersecurity, and QA — gaining hands-on experience with Terraform, Ansible, Jenkins, SonarQube, and AWS infrastructure.",
      "Strengthened JavaScript and React skills by contributing to a live project, while developing a solid understanding of security threats including SQL Injection, XSS, and OS Command attacks.",
      "Thrived in an intensive multi-track program, rapidly adapting to diverse technical domains and building a strong foundation across the full software development lifecycle.",
    ],
    skills: ["DevOps", "Web Development", "Cybersecurity", "QA"],
  },
  {
    id: 3,
    role: "RoR Developer Intern",
    company: "Viral Square",
    period: "Apr 2024 – Jun 2024",
    location: "Lahore, Punjab, Pakistan · On-site",
    type: "Internship",
    description: [
      "Demonstrated expertise in Ruby on Rails by building backend features for real-world social media applications — including replicas of WhatsApp, Instagram, and Twitter — following MVC architecture and RESTful API design.",
      "Designed and implemented relational database schemas in PostgreSQL, defining entity relationships, normalizing data structures, and optimizing for scalability.",
      "Gained confidence across the full backend layer — from application logic to data persistence — building a solid foundation in server-side development.",
    ],
    skills: ["Model-View-Controller (MVC)", "Ruby on Rails", "RESTful APIs", "PostgreSQL"],
  },
  {
    id: 4,
    role: "Trainee Data Science",
    company: "Knowledge Streams",
    period: "Feb 2024 – Apr 2024",
    location: "Remote",
    type: "Internship",
    description: [
      "Demonstrated proficiency in Data Science through an intensive bootcamp covering data cleaning, exploratory data analysis (EDA), and statistical modeling on real-world datasets.",
      "Applied NumPy, pandas, seaborn, and Matplotlib to perform robust data cleaning and visualization, enabling informed decision-making through structured analysis.",
      "Developed strong analytical thinking by independently working through data pipelines end-to-end — from raw data ingestion to insight generation.",
    ],
    skills: ["Exploratory Data Analysis", "Data Cleaning", "NumPy", "pandas", "Matplotlib"],
  },
  {
    id: 5,
    role: "Software Engineer Intern",
    company: "BIG IMMERSIVE",
    period: "Nov 2023 – Jan 2024",
    location: "On-site",
    type: "Internship",
    description: [
      "Demonstrated expertise in React, Express, Node.js, and Firebase through the development of two full-stack CRUD applications with seamless client-server integration.",
      "Built RESTful APIs in Express, leveraging Firebase for efficient data retrieval and manipulation to enhance overall application functionality and performance.",
      "Thrived in a dynamic, growth-oriented company culture, rapidly adapting to emerging technologies and contributing effectively to collaborative, cross-functional teams.",
    ],
    skills: ["Software Design", "Problem Solving", "React", "Node.js", "Express", "Firebase"],
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    id:          1,
    title:       "Dev Portfolio",
    description: "This portfolio — a Three.js-powered single-page app with scroll animations, dark/light theme, and a contact form.",
    highlights:  [],
    tags:        ["React", "Three.js", "Tailwind CSS", "Vite"],
    github:      "https://github.com/waleedabdulah/profile_app",
    live:        null,
  },
  {
    id:          2,
    title:       "Funiro — E-Commerce Store",
    description: "Full-stack e-commerce platform with a React storefront and Express REST API backend, powered by Supabase for auth, database, and real-time data.",
    highlights:  [
      "Built a responsive React storefront with product listing, filtering, cart management, and checkout flow.",
      "Developed a RESTful Express API handling product CRUD, order processing, and user management.",
      "Integrated Supabase for PostgreSQL database, authentication (JWT-based sessions), and file storage for product images.",
      "Implemented protected routes and role-based access so only authenticated users can place orders.",
      "Structured the backend with a clean separation of routes, controllers, and middleware for maintainability.",
    ],
    tags:        ["React", "Express", "Node.js", "Supabase", "PostgreSQL", "JavaScript"],
    github:      "https://github.com/waleedabdulah/funiro",
    live:        null,
  },
  {
    id:          3,
    title:       "AI Healthcare Triage System",
    description: "AI-powered hospital triage that collects symptoms via conversational chat, classifies urgency using LLM + RAG, and routes patients to the correct department with appointment booking.",
    github:      "https://github.com/waleedabdulah/healthCare_triage_routing_system",
    highlights:  [
      "Built a multi-node LangGraph StateGraph orchestrating symptom collection, RAG retrieval, urgency classification, department routing, and audit logging.",
      "Integrated ChromaDB vector store with sentence-transformers for retrieval-augmented generation from 11 clinical protocol documents.",
      "Implemented FastMCP (Model Context Protocol) for structured audit record writing via a real stdio subprocess.",
      "Designed a structured impact checklist (replacing unreliable 1–10 scales) to feed clinical context to the urgency assessor LLM.",
      "Built dual React frontends: patient triage chat (SSE streaming) and nurse/admin dashboard with JWT-scoped department access control.",
    ],
    tags:        ["FastAPI", "LangGraph", "Groq AI", "ChromaDB", "React", "FastMCP", "SQLite", "Tailwind CSS"],
    live:        null,
  },
];

// ─── Skills ───────────────────────────────────────────────────────────────────
export const skills = [
  {
    category: "Frontend",
    items:    ["React", "TypeScript", "Tailwind CSS", "Next.js", "Three.js"],
  },
  {
    category: "Backend",
    items:    ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST", "GraphQL"],
  },
  {
    category: "DevOps & Tools",
    items:    ["Docker", "AWS", "GitHub Actions", "Linux", "Git"],
  },
];

// ─── Education ────────────────────────────────────────────────────────────────
export const education = [
  {
    id:          1,
    degree:      "B.Sc. Computer Science",
    institution: "University Name",
    year:        "2019 – 2023",
    note:        "Graduated with Distinction",
  },
];
