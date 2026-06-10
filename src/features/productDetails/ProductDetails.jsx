import { ArrowLeft, Boxes, CheckCircle2, PackageCheck, Plus, ShieldCheck, Truck } from 'lucide-react';
import { Panel } from '../../components/ui/Panel';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { currency } from '../../utils/currency';

export function ProductDetails({ product, addToCart, setActiveView }) {
  if (!product) {
    return (
      <section className="space-y-6">
        <SectionTitle eyebrow="Product" title="Item not found" action="No selection" />
        <Panel title="Details unavailable">
          <button onClick={() => setActiveView('store')} className="rounded-xl bg-primary px-4 py-3 font-bold text-white">
            Back to storefront
          </button>
        </Panel>
      </section>
    );
  }

  const lowStock = product.stock <= product.reorder;
  const stockPercent = Math.min(100, Math.round((product.stock / Math.max(product.reorder * 3, 1)) * 100));

  return (
    <section className="space-y-5 sm:space-y-6">
      <button onClick={() => setActiveView('store')} className="inline-flex items-center gap-2 rounded-xl border border-line bg-white px-4 py-2 text-sm font-bold text-slate shadow-sm">
        <ArrowLeft size={17} />
        Back
      </button>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_420px]">
        <article className="overflow-hidden rounded-2xl border border-line bg-white shadow-soft">
          <div className="relative min-h-[320px] sm:min-h-[440px]">
            <img className="absolute inset-0 h-full w-full object-cover" src={product.image} alt={product.name} />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-5 text-white sm:p-7">
              <span className={`mb-3 inline-flex rounded-full px-3 py-1 text-xs font-bold ${lowStock ? 'bg-orange-100 text-warning' : 'bg-emerald text-ink'}`}>
                {lowStock ? 'Low stock' : product.tag}
              </span>
              <h1 className="max-w-3xl break-words font-display text-3xl font-bold sm:text-5xl">{product.name}</h1>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-white/80">{product.category}</p>
            </div>
          </div>
        </article>

        <Panel title="Product summary">
          <div className="space-y-5">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-slate">Retail price</p>
              <p className="mt-1 font-display text-4xl font-bold text-primary">{currency(product.price)}</p>
            </div>

            <div className="rounded-2xl bg-mist p-4">
              <p className="mb-4 text-sm font-bold uppercase tracking-wider text-slate">Barcode</p>
              <p className="mb-5 rounded-xl bg-white px-4 py-3 font-mono text-lg font-bold text-ink">{product.barcode}</p>
              <div className="mb-2 flex items-center justify-between gap-3 text-sm font-bold">
                <span className="flex items-center gap-2 text-ink"><Boxes size={17} /> Stock level</span>
                <span className={lowStock ? 'text-warning' : 'text-primary'}>{product.stock} units</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-white">
                <div className={`h-full rounded-full ${lowStock ? 'bg-warning' : 'bg-primary'}`} style={{ width: `${stockPercent}%` }} />
              </div>
              <p className="mt-2 text-sm text-slate">Reorder threshold: {product.reorder} units</p>
            </div>

            <button onClick={() => addToCart(product.id)} className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 font-bold text-white shadow-glow">
              <Plus size={19} />
              Add to cart
            </button>
          </div>
        </Panel>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <DetailBadge icon={PackageCheck} title="Fresh handling" text="Batch tracked for shelf-ready retail operations." />
        <DetailBadge icon={Truck} title="Fast dispatch" text="Ready for delivery, pickup, or in-store billing." />
        <DetailBadge icon={ShieldCheck} title="Local saved" text="Cart and inventory updates persist in browser storage." />
      </div>

      <Panel title="Item notes">
        <div className="grid gap-4 text-sm text-slate sm:grid-cols-2">
          <p className="rounded-2xl bg-mist p-4">Use this page to review price, category, availability, and stock health before adding the item to a customer order.</p>
          <p className="rounded-2xl bg-mist p-4">Inventory edits remain available in the Inventory screen, while customer-facing purchase actions stay here.</p>
        </div>
      </Panel>
    </section>
  );
}

function DetailBadge({ icon: Icon, title, text }) {
  return (
    <article className="rounded-2xl border border-line bg-white p-4 shadow-soft sm:p-5">
      <span className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-mist text-primary">
        <Icon size={20} />
      </span>
      <h3 className="font-display text-lg font-bold text-ink">{title}</h3>
      <p className="mt-2 text-sm text-slate">{text}</p>
      <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-primary">
        <CheckCircle2 size={14} />
        Active
      </span>
    </article>
  );
}
