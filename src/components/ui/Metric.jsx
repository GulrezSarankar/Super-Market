export function Metric({ icon: Icon, label, value }) {
  return (
    <article className="rounded-2xl border border-line bg-white p-5 shadow-soft">
      <div className="mb-5 flex items-center justify-between">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-mist text-primary">
          <Icon size={20} />
        </span>
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-primary">Live</span>
      </div>
      <p className="text-sm font-semibold text-slate">{label}</p>
      <p className="mt-1 font-display text-3xl font-bold text-ink">{value}</p>
    </article>
  );
}
