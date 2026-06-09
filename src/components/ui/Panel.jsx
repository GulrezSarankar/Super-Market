export function Panel({ title, children }) {
  return (
    <section className="min-w-0 rounded-2xl border border-line bg-white p-4 shadow-soft sm:p-5">
      <h3 className="mb-4 break-words font-display text-lg font-bold sm:text-xl">{title}</h3>
      {children}
    </section>
  );
}
