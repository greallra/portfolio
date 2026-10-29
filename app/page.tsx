import { details, education, experience, profile, skills } from "@/data/cv";
import { Section, Tag } from "@/components/Section";

const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const linkClass =
  "inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-6 lg:flex lg:gap-16 lg:px-12">
      {/* Sticky intro column on desktop */}
      <header className="pt-16 pb-10 lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[42%] lg:flex-col lg:justify-between lg:py-20">
        <div>
          <p className="text-sm text-muted">{profile.location}</p>
          <h1 className="mt-3 font-display text-6xl leading-[0.95] tracking-tight sm:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-lg font-medium">{profile.title}</p>
          <p className="mt-4 max-w-sm text-muted">{profile.tagline}</p>

          <nav className="mt-12 hidden lg:block" aria-label="Sections">
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted hover:text-ink"
                  >
                    <span className="h-px w-8 bg-muted transition-all group-hover:w-14 group-hover:bg-ink" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`mailto:${profile.email}`} className={linkClass}>Email</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className={linkClass}>LinkedIn</a>
          <a href={profile.cv} download className={`${linkClass} border-accent bg-accent text-bg hover:bg-transparent`}>
            Download CV
          </a>
        </div>
      </header>

      <main className="pb-24 lg:w-[58%] lg:py-20">
        <Section id="about" title="About">
          <div className="space-y-4 text-lg leading-relaxed text-muted">
            {profile.summary.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <ol className="space-y-12">
            {experience.map((job) => (
              <li key={`${job.company}-${job.period}`} className="grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-6">
                <p className="pt-1 text-xs font-medium uppercase tracking-wider text-muted">{job.period}</p>
                <div>
                  <h3 className="text-lg font-semibold leading-snug">
                    {job.role} <span className="text-accent">· {job.company}</span>
                  </h3>
                  <p className="text-sm text-muted">{job.location}</p>
                  <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-muted">
                    {job.points.map((point) => (
                      <li key={point} className="relative pl-4 before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-accent">
                        {point}
                      </li>
                    ))}
                  </ul>
                  {job.stack && (
                    <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tech stack">
                      {job.stack.map((tech) => (
                        <Tag key={tech}>{tech}</Tag>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="skills" title="Skills">
          <dl className="grid gap-8 sm:grid-cols-2">
            {skills.map((s) => (
              <div key={s.group}>
                <dt className="mb-3 font-semibold">{s.group}</dt>
                <dd>
                  <ul className="flex flex-wrap gap-2">
                    {s.items.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="education" title="Education">
          <ul className="space-y-5">
            {education.map((e) => (
              <li key={e.degree}>
                <p className="font-semibold">{e.degree}</p>
                <p className="text-sm text-muted">{e.school}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="contact" title="Contact">
          <p className="font-display text-4xl leading-tight sm:text-5xl">
            Open to contract or permanent roles.
          </p>
          <p className="mt-4 text-muted">
            Get in touch at{" "}
            <a href={`mailto:${profile.email}`} className="font-medium text-accent underline-offset-4 hover:underline">
              {profile.email}
            </a>
            .
          </p>
          <dl className="mt-10 grid gap-x-6 gap-y-3 text-sm sm:grid-cols-[10rem_1fr]">
            {details.map((d) => (
              <div key={d.label} className="contents">
                <dt className="font-semibold">{d.label}</dt>
                <dd className="text-muted">{d.value}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <footer className="mt-10 text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js and Tailwind CSS.
        </footer>
      </main>
    </div>
  );
}
