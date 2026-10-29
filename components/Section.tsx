export function Card({
  title,
  className = "",
  children,
}: {
  title?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={`flex min-h-0 flex-col rounded-3xl border border-line bg-surface p-5 xl:p-6 short:p-4 ${className}`}>
      {title && (
        <h2 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">{title}</h2>
      )}
      <div className="min-h-0 flex-1 lg:overflow-y-auto">{children}</div>
    </section>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-full bg-accent-soft px-2.5 py-0.5 text-[11px] font-medium text-accent">{children}</li>
  );
}

const paths = {
  music: "M9 18V5l12-2v13M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm12-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
  sports: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-18v18M3 12h18M5.6 5.6c3.5 3.5 3.5 9.3 0 12.8m12.8-12.8c-3.5 3.5-3.5 9.3 0 12.8",
  languages: "M4 5h7M7.5 3v2m2 0c-.7 4-3 7-6 8.5M6 9c1 2 3 3.5 5 4.5M12 21l4.5-10L21 21m-7.5-3h6",
};

export function Icon({ name }: { name: keyof typeof paths }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d={paths[name]} />
    </svg>
  );
}
