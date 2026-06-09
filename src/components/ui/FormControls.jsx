export function Field({ label, children }) {
  return (
    <label className="space-y-2">
      <span className="text-sm font-bold text-slate">{label}</span>
      {children}
    </label>
  );
}

export function Input({ value, onChange }) {
  return <input className="field w-full md:w-36" value={value} onChange={(event) => onChange(event.target.value)} />;
}

export function NumberInput({ value, onChange }) {
  return <input className="field w-full md:w-24" type="number" value={value} onChange={(event) => onChange(Number(event.target.value))} />;
}
