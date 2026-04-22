// ─── Personal meta ────────────────────────────────────────────────────────────
export const meta = {
  name:     "Waleed Abdullah",
  title:    "Software Engineer",
  tagline:  "I build scalable web applications and love clean, maintainable code.",
  email:    "waleedjadoon840@gmail.com",
  github:    "https://github.com/waleedjadoon",
  linkedin:  "https://linkedin.com/in/waleedjadoon",
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
    id:          1,
    role:        "Senior Software Engineer",
    company:     "Tech Company",
    period:      "Jan 2023 – Present",
    description: [
      "Led development of a microservices platform serving 1M+ monthly active users.",
      "Reduced API response times by 40% through query optimisation and caching strategies.",
      "Mentored a team of 4 junior engineers and conducted bi-weekly code reviews.",
    ],
  },
  {
    id:          2,
    role:        "Software Engineer",
    company:     "Another Company",
    period:      "Jun 2021 – Dec 2022",
    description: [
      "Built and maintained React-based dashboards consumed by 500+ enterprise clients.",
      "Integrated third-party payment gateways and improved checkout conversion by 15%.",
      "Automated CI/CD pipelines using GitHub Actions, cutting deploy time by 30%.",
    ],
  },
  {
    id:          3,
    role:        "Junior Developer",
    company:     "Startup Inc.",
    period:      "Mar 2020 – May 2021",
    description: [
      "Developed RESTful APIs with Express.js and PostgreSQL for a SaaS product.",
      "Collaborated with designers to implement pixel-perfect UI components in React.",
    ],
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    id:          1,
    title:       "Project Alpha",
    description: "A full-stack task management application with real-time collaboration features built with React, Socket.io, and Node.js.",
    tags:        ["React", "Node.js", "Socket.io", "PostgreSQL"],
    github:      "https://github.com/waleedjadoon/project-alpha",
    live:        null,
  },
  {
    id:          2,
    title:       "Dev Portfolio",
    description: "This very portfolio site — a Three.js-powered single-page app built with React, Vite, and Tailwind CSS.",
    tags:        ["React", "Three.js", "Tailwind CSS", "Vite"],
    github:      "https://github.com/waleedjadoon/portfolio",
    live:        null,
  },
  {
    id:          3,
    title:       "API Gateway",
    description: "A lightweight API gateway with rate limiting, JWT authentication, and request logging, deployable as a Docker container.",
    tags:        ["Node.js", "Express", "Docker", "Redis"],
    github:      "https://github.com/waleedjadoon/api-gateway",
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
    year:        "2016 – 2020",
    note:        "Graduated with Distinction",
  },
];
