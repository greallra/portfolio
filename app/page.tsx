import { existsSync } from "node:fs";
import { education, experience, interests, music, profile, projects, skills } from "@/data/cv";
import { Card, Icon, Tag } from "@/components/Section";

const hasPhoto = existsSync(profile.photo.file);
const initials = profile.name.split(" ").map((n) => n[0]).join("");

const button =
  "inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors";

export default function Home() {
  return (
    <main className="mx-auto grid max-w-[1400px] gap-4 p-4 lg:h-dvh lg:grid-cols-12 lg:grid-rows-[1fr_1fr_auto] lg:overflow-hidden xl:p-6 short:gap-3 short:p-3">
      {/* Intro */}
      <section className="hero relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 text-white lg:col-span-4 lg:row-span-2 xl:p-8 short:p-5">
        <div className="relative">
          <div className="flex items-center gap-4">
            <div className="photo-ring shrink-0 rounded-full p-1">
              {hasPhoto ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={profile.photo.src} alt={profile.name} className="h-24 w-24 rounded-full object-cover xl:h-28 xl:w-28 short:h-16 short:w-16" />
              ) : (
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/10 font-display text-4xl xl:h-28 xl:w-28 short:h-16 short:w-16 short:text-2xl">
                  {initials}
                </div>
              )}
            </div>
            <div>
              <p className="flex items-center gap-2 text-sm text-white/70">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px] shadow-emerald-400" />
                Available for work
              </p>
              <p className="text-sm text-white/70">{profile.location}</p>
            </div>
          </div>

          <h1 className="mt-6 font-display text-5xl leading-[0.95] tracking-tight xl:text-6xl short:mt-4 short:text-5xl">{profile.name}</h1>
          <p className="mt-2 text-lg font-medium text-white/90">{profile.title}</p>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/75 short:mt-3 short:text-sm">{profile.summary}</p>
        </div>

        <div className="relative mt-6 space-y-4 short:mt-4 short:space-y-3">
          <ul className="flex flex-wrap gap-2 text-xs text-white/80">
            {profile.availability.map((a) => (
              <li key={a} className="rounded-full border border-white/20 px-3 py-1 short:py-0.5">{a}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            <a href={`mailto:${profile.email}`} className={`${button} bg-white text-[#0f2747] hover:bg-white/85`}>Email me</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className={`${button} border border-white/30 hover:bg-white/10`}>LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noreferrer" className={`${button} border border-white/30 hover:bg-white/10`}>GitHub</a>
          </div>
        </div>
      </section>

      {/* Experience */}
      <Card title="Experience" className="lg:col-span-4 lg:row-span-2">
        <ol className="relative ml-1.5 space-y-3 border-l border-line pl-4 xl:space-y-4 short:space-y-2">
          {experience.map((job, i) => (
            <li key={job.company} className="relative">
              <span className={`absolute -left-[21px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-surface ${i === 0 ? "bg-accent" : "bg-line"}`} />
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-sm font-semibold leading-snug">
                  {job.url ? (
                    <a href={job.url} target="_blank" rel="noreferrer" className="group hover:text-accent">
                      {job.company}
                      <span className="ml-0.5 text-[11px] text-muted group-hover:text-accent" aria-hidden>↗</span>
                    </a>
                  ) : (
                    job.company
                  )}{" "}
                  <span className="font-normal text-muted">· {job.role}</span>
                </h3>
                <span className="shrink-0 text-[11px] tabular-nums text-muted">{job.period}</span>
              </div>
              <p className="mt-0.5 truncate text-[13px] leading-snug text-muted short:text-xs">{job.summary}</p>
            </li>
          ))}
        </ol>
      </Card>

      {/* Skills */}
      <Card title="Skills" className="lg:col-span-4 lg:row-span-2">
        <div className="space-y-3">
          {skills.map((s) => (
            <div key={s.group}>
              <h3 className="mb-1.5 text-xs font-semibold">{s.group}</h3>
              <ul className="flex flex-wrap gap-1.5">
                {s.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>

      {/* Off the clock */}
      <Card title="Off the clock" className="lg:col-span-4">
        <p className="mb-2 flex items-center gap-2 text-sm">
          <span className="text-accent"><Icon name="music" /></span>
          I also make music as{" "}
          <a href={music.url} target="_blank" rel="noreferrer" className="font-semibold text-accent underline-offset-4 hover:underline">
            {music.artist}
          </a>
        </p>
        <iframe
          src={music.embed}
          title={`${music.artist} on Spotify`}
          height={80}
          loading="lazy"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          className="w-full rounded-xl border-0"
        />
        <ul className="mt-2 flex flex-wrap gap-2">
          {interests.map((i) => (
            <li key={i.label} className="flex items-center gap-1.5 rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent [&_svg]:h-4 [&_svg]:w-4">
              <Icon name={i.icon} />
              {i.label}
            </li>
          ))}
        </ul>
      </Card>

      {/* Projects */}
      <Card title="Projects" className="lg:col-span-4">
        <ul className="space-y-1">
          {projects.map((p) => (
            <li key={p.name}>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-2xl p-1.5 transition-colors hover:bg-accent-soft"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.icon} alt="" className="h-9 w-9 shrink-0 rounded-[10px]" />
                <div className="min-w-0">
                  <p className="text-sm font-semibold">
                    {p.name} <span className="font-normal text-muted">· {p.kind}</span>
                  </p>
                  <p className="text-xs text-muted">{p.summary}</p>
                </div>
                <span className="ml-auto text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-accent" aria-hidden>↗</span>
              </a>
            </li>
          ))}
        </ul>
      </Card>

      {/* Education */}
      <Card title="Education" className="lg:col-span-4">
        <ul className="space-y-2">
          {education.map((e) => (
            <li key={e.degree} className="flex items-baseline justify-between gap-3 text-sm">
              <span className="font-semibold">{e.degree}</span>
              <span className="text-right text-xs text-muted">{e.school}</span>
            </li>
          ))}
        </ul>
      </Card>
    </main>
  );
}
