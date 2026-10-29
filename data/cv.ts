// Single source of truth for site content, transcribed from the CV.

export const profile = {
  name: "Ronan Greally",
  title: "Full Stack Engineer",
  location: "Dublin, Ireland",
  email: "Greallra@tcd.ie",
  linkedin: "https://www.linkedin.com/in/ronan-greally",
  cv: "/Ronan_Greally_CV.pdf",
  tagline:
    "I build scalable fintech, enterprise and SaaS platforms — from design system to production.",
  summary: [
    "Full Stack Engineer with 6+ years building scalable fintech, enterprise and SaaS platforms across Ireland and Europe.",
    "Deep expertise in React, TypeScript and modern frontend architecture, with a track record delivering complex financial systems, reusable component libraries, role-based platforms and data-heavy applications in agile teams.",
    "Comfortable owning frontend architecture decisions end to end, from design system to production.",
  ],
};

export type Job = {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
  stack?: string[];
};

export const experience: Job[] = [
  {
    role: "Full Stack Engineer",
    company: "Restday",
    period: "May 2026 — Present",
    location: "Dublin, Ireland",
    points: [
      "Led development of the MVP for Restday, a wellness recovery platform based on the Burnout Assessment Tool (BAT), taking it from concept to launch.",
      "Developed a React Native (Expo) app backed by Supabase, using PostgreSQL, authentication and Row Level Security to secure sensitive health data.",
      "Implemented onboarding, authentication, BAT assessments, personalised recovery profiles, daily recovery plans, journaling, progress tracking and safety escalation flows.",
      "Designed the database schema and migrations, and defined secure handling policies for health data.",
      "Drove product design and UX in Figma alongside engineering delivery.",
    ],
    stack: ["React Native", "Expo", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "Vercel", "Figma"],
  },
  {
    role: "Full Stack Developer (Contract)",
    company: "Flip Lingoes",
    period: "Jun 2026",
    location: "Remote",
    points: [
      "Built and maintained web applications in Python and Django, delivering REST APIs and backend services.",
      "Designed and optimised PostgreSQL schemas and SQL queries; containerised applications with Docker.",
      "Worked directly with stakeholders to scope and ship features to deadline, covering testing, bug fixing and deployment.",
    ],
    stack: ["Python", "Django", "PostgreSQL", "Docker", "REST APIs", "Git"],
  },
  {
    role: "Full Stack Developer (Contract)",
    company: "Xace",
    period: "Nov 2025 — May 2026",
    location: "London, UK",
    points: [
      "Redeveloped a banking platform in React, TypeScript, Node.js and Vite, migrating legacy functionality onto the new stack.",
      "Built frontend and backend features across transaction workflows, dashboards and reporting, including REST APIs in Node.js.",
      "Designed AWS RDS SQL databases and implemented role-based access control across the platform.",
      "Established a Storybook component library to standardise UI across teams.",
      "Wrote unit and integration tests with Vitest and React Testing Library, using MSW for API mocking.",
    ],
    stack: ["React", "TypeScript", "Node.js", "Express", "AWS RDS", "SQL", "Vite", "Storybook", "Vitest", "RTL", "MSW"],
  },
  {
    role: "React Developer",
    company: "FinanceFair",
    period: "Sep 2024 — Nov 2025",
    location: "Dublin, Ireland",
    points: [
      "Led frontend architecture for banking platforms, establishing a scalable React structure and reusable UI systems.",
      "Built advanced data tables, payment workflows and secure file upload/download.",
      "Created reporting dashboards with Recharts and delivered a reusable Shadcn UI component set.",
    ],
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Shadcn UI", "Zustand", "TanStack Query", "React Hook Form", "Zod", "Vitest"],
  },
  {
    role: "Vue.js Developer",
    company: "Engage XR",
    period: "Sep 2023 — Sep 2024",
    location: "Waterford, Ireland",
    points: [
      "Built enterprise applications supporting over 100,000 users, including event management features.",
      "Implemented dashboards, forms, data tables and payment workflows in Vue and Nuxt.",
      "Created reusable components and contributed to the shared Storybook design system.",
    ],
    stack: ["Vue.js", "Nuxt.js", "Storybook", "AG Grid"],
  },
  {
    role: "Full Stack Developer",
    company: "Davra",
    period: "Feb 2021 — Sep 2023",
    location: "Dublin, Ireland",
    points: [
      "Developed a virtual events platform and its administration portal.",
      "Implemented 3D interaction and spatial audio using Three.js and A-Frame, optimising rendering performance.",
    ],
    stack: ["Vue.js", "Three.js", "A-Frame", "JavaScript"],
  },
  {
    role: "React Developer",
    company: "Snapsea",
    period: "Jun 2020 — Feb 2021",
    location: "Remote",
    points: [
      "Developed features for an Instagram content rights platform, including media galleries and video playback.",
      "Integrated REST APIs and improved UX and scalability.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Open Litter Map",
    period: "Nov 2019 — Jun 2020",
    location: "Cork, Ireland",
    points: [
      "Built frontend features in Vue.js with mapping functionality using Leaflet, and a responsive UI with Bulma.",
    ],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Frontend",
    items: ["React", "React Native", "TypeScript", "JavaScript", "Next.js", "Vue.js", "Nuxt.js", "Expo", "Vite", "HTML5", "CSS3", "Tailwind CSS", "Shadcn UI"],
  },
  {
    group: "Backend & Data",
    items: ["Node.js", "Express", "Python", "Django", "REST APIs", "Supabase", "PostgreSQL", "AWS RDS", "SQL"],
  },
  { group: "State & Forms", items: ["TanStack Query", "Zustand", "React Hook Form", "Zod"] },
  { group: "Testing", items: ["Vitest", "React Testing Library", "MSW"] },
  { group: "UI & Visualisation", items: ["Storybook", "AG Grid", "Recharts", "Three.js", "A-Frame", "Figma"] },
  { group: "Tooling & Practice", items: ["Git", "Docker", "CI/CD", "Vercel", "Agile", "Component-Driven Development"] },
];

export const education = [
  { degree: "Higher Diploma in Web & Cloud Development", school: "Dublin Business School, Dublin" },
  { degree: "MA in Audiovisual Translation", school: "Universidad Europea, Madrid" },
  { degree: "BA in Spanish & Italian", school: "Trinity College Dublin" },
];

export const details = [
  { label: "Work authorisation", value: "Ireland and EU" },
  { label: "Availability", value: "Contract or permanent; remote, hybrid or on-site" },
  { label: "Working style", value: "Agile, distributed teams" },
  { label: "Interests", value: "Sports, music, languages" },
];
