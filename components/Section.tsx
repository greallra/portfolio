export function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-16 py-14 border-t border-line first:border-t-0 first:pt-0">
      <h2 className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-accent">{title}</h2>
      {children}
    </section>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">{children}</li>
  );
}
