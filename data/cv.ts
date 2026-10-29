// Single source of truth for site content, transcribed from the CV.

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const profile = {
  name: "Ronan Greally",
  title: "Full Stack Engineer",
  location: "Dublin, Ireland",
  email: "Greallra@tcd.ie",
  linkedin: "https://www.linkedin.com/in/ronan-greally",
  // Background-removed version of assets/me.png; initials show if missing.
  photo: { src: `${base}/profile.png`, file: "public/profile.png" },
  summary:
    "Full stack engineer with 6+ years building scalable fintech, enterprise and SaaS platforms across Ireland and Europe. React and TypeScript on the frontend; Node.js, Python/Django and PostgreSQL on the backend — from database schema to production UI.",
  availability: ["Contract or permanent", "Remote, hybrid or on-site", "Ireland & EU work authorisation"],
};

export type Job = {
  role: string;
  company: string;
  period: string;
  summary: string;
};

export const experience: Job[] = [
  {
    role: "Full Stack Engineer",
    company: "Restday",
    period: "2026 — Now",
    summary: "Led a burnout-recovery app MVP from concept to launch: React Native, Expo, Supabase and RLS-secured health data.",
  },
  {
    role: "Full Stack Developer (Contract)",
    company: "Flip Lingoes",
    period: "2026",
    summary: "Python/Django REST APIs, PostgreSQL schema and query optimisation, Docker.",
  },
  {
    role: "Full Stack Developer (Contract)",
    company: "Xace",
    period: "2025 — 26",
    summary: "Rebuilt a banking platform in React and Node.js with role-based access, AWS RDS and a Storybook library.",
  },
  {
    role: "React Developer",
    company: "FinanceFair",
    period: "2024 — 25",
    summary: "Led frontend architecture for banking platforms: data tables, payment workflows, Recharts dashboards.",
  },
  {
    role: "Vue.js Developer",
    company: "Engage XR",
    period: "2023 — 24",
    summary: "Enterprise Vue/Nuxt apps serving 100,000+ users; shared Storybook design system.",
  },
  {
    role: "Full Stack Developer",
    company: "Davra",
    period: "2021 — 23",
    summary: "Virtual events platform with 3D interaction and spatial audio in Three.js and A-Frame.",
  },
  {
    role: "React Developer",
    company: "Snapsea",
    period: "2020 — 21",
    summary: "Media galleries and video playback for an Instagram content-rights platform.",
  },
  {
    role: "Frontend Developer Intern",
    company: "Open Litter Map",
    period: "2019 — 20",
    summary: "Vue.js mapping features with Leaflet and a responsive Bulma UI.",
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Frontend",
    items: ["React", "React Native", "TypeScript", "Next.js", "Vue.js", "Nuxt.js", "Expo", "Vite", "Tailwind CSS", "Shadcn UI"],
  },
  {
    group: "Backend & Data",
    items: ["Node.js", "Express", "Python", "Django", "REST APIs", "Supabase", "PostgreSQL", "AWS RDS"],
  },
  { group: "State & Forms", items: ["TanStack Query", "Zustand", "React Hook Form", "Zod"] },
  { group: "Testing", items: ["Vitest", "React Testing Library", "MSW"] },
  { group: "UI & Visualisation", items: ["Storybook", "AG Grid", "Recharts", "Three.js", "A-Frame", "Figma"] },
  { group: "Tooling", items: ["Git", "Docker", "CI/CD", "Vercel", "Agile"] },
];

export const education = [
  { degree: "H.Dip Web & Cloud Development", school: "Dublin Business School" },
  { degree: "MA Audiovisual Translation", school: "Universidad Europea, Madrid" },
  { degree: "BA Spanish & Italian", school: "Trinity College Dublin" },
];

export const music = {
  artist: "El Pooch",
  url: "https://open.spotify.com/artist/2MgFNBYN5vfrWSolISQljO",
  embed: "https://open.spotify.com/embed/artist/2MgFNBYN5vfrWSolISQljO?theme=0",
};

export const interests = [
  { icon: "sports", label: "Sports" },
  { icon: "languages", label: "Languages · Spanish & Italian" },
] as const;
