import { SectionTitle } from '../../components/ui/SectionTitle';
import { ProductCard } from './ProductCard';

export function Storefront({ filteredProducts, addToCart, setActiveView }) {
  return (
    <section className="space-y-5 sm:space-y-6">
      <div className="relative min-h-[430px] overflow-hidden rounded-2xl bg-ink shadow-glow sm:min-h-[360px]">
        <img className="absolute inset-0 h-full w-full object-cover opacity-65" src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1600&q=80" alt="Modern supermarket aisle filled with fresh produce" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/20 sm:bg-gradient-to-r" />
        <div className="relative flex min-h-[430px] max-w-2xl flex-col justify-end p-5 text-white sm:min-h-[360px] sm:justify-center sm:p-6 md:p-10">
          <span className="mb-4 w-max max-w-full rounded-full bg-emerald px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-ink sm:px-4 sm:text-xs">Premium retail suite</span>
          <h1 className="font-display text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">Fresh shopping and store operations in one place.</h1>
          <p className="mt-5 max-w-xl text-base text-white/85 md:text-lg">Run customer orders, stock movement, billing, analytics, staff access, and outlet settings from a single local-first React dashboard.</p>
          <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
            <button onClick={() => setActiveView('inventory')} className="rounded-xl bg-white px-5 py-3 font-bold text-primary">Manage inventory</button>
            <button onClick={() => setActiveView('dashboard')} className="rounded-xl border border-white/40 px-5 py-3 font-bold text-white">View operations</button>
          </div>
        </div>
      </div>
      <SectionTitle eyebrow="Shop" title="Fresh picks for today" action={`${filteredProducts.length} items`} />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </section>
  );
}
