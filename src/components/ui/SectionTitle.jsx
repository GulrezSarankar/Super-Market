export function SectionTitle({ eyebrow, title, action }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
      <div className="min-w-0">
        <p className="text-xs font-bold uppercase tracking-wider text-primary">{eyebrow}</p>
        <h2 className="break-words font-display text-2xl font-bold text-ink sm:text-3xl md:text-4xl">{title}</h2>
      </div>
      {typeof action === 'string' ? <span className="w-max rounded-full bg-white px-4 py-2 text-sm font-bold text-slate shadow-sm">{action}</span> : action}
    </div>
  );
}
