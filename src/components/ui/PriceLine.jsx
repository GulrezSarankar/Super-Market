import { currency } from '../../utils/currency';

export function PriceLine({ label, value, strong }) {
  return (
    <div className={`flex justify-between ${strong ? 'pt-2 text-lg font-bold text-ink' : 'text-slate'}`}>
      <span>{label}</span>
      <span>{currency(value)}</span>
    </div>
  );
}
