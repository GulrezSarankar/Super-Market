import { Plus } from 'lucide-react';
import { currency } from '../../utils/currency';

export function ProductCard({ product, addToCart, openProduct }) {
  const low = product.stock <= product.reorder;

  return (
    <article className="overflow-hidden rounded-2xl border border-line bg-white shadow-soft">
      <div className="relative h-44 sm:h-52">
        <img className="h-full w-full object-cover" src={product.image} alt={product.name} />
        <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold ${low ? 'bg-orange-100 text-warning' : 'bg-emerald/90 text-white'}`}>{low ? 'Low stock' : product.tag}</span>
      </div>
      <div className="space-y-4 p-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-slate">{product.category}</p>
          <h3 className="mt-1 break-words font-display text-lg font-bold text-ink sm:text-xl">{product.name}</h3>
        </div>
        <div className="flex items-end justify-between gap-3">
          <div className="min-w-0">
            <p className="font-display text-xl font-bold text-primary sm:text-2xl">{currency(product.price)}</p>
            <p className="text-sm text-slate">{product.stock} units in stock</p>
            <p className="mt-1 font-mono text-xs font-semibold text-slate">{product.barcode}</p>
          </div>
          <button onClick={() => addToCart(product.id)} className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary text-white shadow-glow" aria-label={`Add ${product.name}`}>
            <Plus size={20} />
          </button>
        </div>
        <button onClick={() => openProduct(product.id)} className="w-full rounded-xl border border-line bg-mist px-4 py-2 text-sm font-bold text-primary transition hover:bg-emerald-50">
          View details
        </button>
      </div>
    </article>
  );
}
