export function Metric({ icon: Icon, label, value }) {
  return (
    <article className="min-w-0 rounded-2xl border border-line bg-white p-4 shadow-soft sm:p-5">
      <div className="mb-5 flex items-center justify-between">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-mist text-primary">
          <Icon size={20} />
        </span>
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-primary">Live</span>
      </div>
      <p className="text-sm font-semibold text-slate">{label}</p>
      <p className="mt-1 break-words font-display text-2xl font-bold text-ink sm:text-3xl">{value}</p>
    </article>
  );
}
