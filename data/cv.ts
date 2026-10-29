// Single source of truth for site content, transcribed from the CV.

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const profile = {
  name: "Ronan Greally",
  title: "Full Stack Engineer",
  location: "Dublin, Ireland",
  email: "Greallra@tcd.ie",
  linkedin: "https://www.linkedin.com/in/ronan-greally",
  github: "https://github.com/greallra",
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
    summary: "Burnout-recovery app MVP in React Native & Supabase.",
  },
  {
    role: "Full Stack Developer (Contract)",
    company: "Flip Lingoes",
    period: "2026",
    summary: "Django REST APIs, PostgreSQL tuning and Docker.",
  },
  {
    role: "Full Stack Developer (Contract)",
    company: "Xace",
    period: "2025 — 26",
    summary: "Banking platform rebuild in React, Node.js & AWS RDS.",
  },
  {
    role: "React Developer",
    company: "FinanceFair",
    period: "2024 — 25",
    summary: "Frontend architecture for banking platforms.",
  },
  {
    role: "Vue.js Developer",
    company: "Engage XR",
    period: "2023 — 24",
    summary: "Vue/Nuxt enterprise apps for 100,000+ users.",
  },
  {
    role: "Full Stack Developer",
    company: "Davra",
    period: "2021 — 23",
    summary: "Virtual events with 3D and spatial audio in Three.js.",
  },
  {
    role: "React Developer",
    company: "Snapsea",
    period: "2020 — 21",
    summary: "Media galleries for a content-rights platform.",
  },
  {
    role: "Frontend Developer Intern",
    company: "Open Litter Map",
    period: "2019 — 20",
    summary: "Vue.js mapping features with Leaflet.",
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

export const projects = [
  {
    name: "Vocab Frog",
    kind: "iOS app",
    summary: "Vocabulary game, A1 to C2.",
    url: "https://apps.apple.com/ie/app/vocab-frog/id6803961515",
    icon: `${base}/projects/vocab-frog.png`,
  },
  {
    name: "Restday",
    kind: "Web & mobile",
    summary: "8-week burnout recovery programme.",
    url: "https://www.restday.ie/",
    icon: `${base}/projects/restday.svg`,
  },
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
