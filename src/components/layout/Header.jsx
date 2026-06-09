import { Bell, Search, ShoppingCart, Store } from 'lucide-react';

export function Header({ cartCount, query, setQuery, setActiveView }) {
  return (
    <header className="glass fixed inset-x-0 top-0 z-40 border-b border-line/80">
      <div className="mx-auto flex max-w-[1480px] flex-wrap items-center justify-between gap-3 px-3 py-3 sm:px-4 md:h-18 md:flex-nowrap md:px-8">
        <button className="flex min-w-0 items-center gap-3" onClick={() => setActiveView('store')}>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-primary text-white shadow-glow md:h-11 md:w-11">
            <Store size={20} />
          </span>
          <span className="min-w-0 text-left">
            <span className="block truncate font-display text-lg font-bold text-primary sm:text-xl">FreshMarket Ops</span>
            <span className="hidden text-xs font-semibold uppercase tracking-wider text-slate md:block">Omni retail system</span>
          </span>
        </button>
        <label className="hidden h-11 max-w-xl flex-1 items-center gap-3 rounded-full border border-line bg-white px-4 shadow-sm md:flex">
          <Search size={18} className="text-slate" />
          <input className="w-full border-0 bg-transparent text-sm outline-none" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search products, categories, tags..." />
        </label>
        <div className="flex items-center gap-2">
          <button className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-slate shadow-sm" aria-label="Notifications">
            <Bell size={18} />
          </button>
          <button className="relative grid h-11 w-11 place-items-center rounded-full bg-primary text-white shadow-glow md:hidden" onClick={() => setActiveView('cart')} aria-label="Cart">
            <ShoppingCart size={18} />
            <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-warning px-1 text-xs font-bold">{cartCount}</span>
          </button>
        </div>
        <label className="flex h-11 w-full items-center gap-3 rounded-full border border-line bg-white px-4 shadow-sm md:hidden">
          <Search size={18} className="shrink-0 text-slate" />
          <input className="min-w-0 flex-1 border-0 bg-transparent text-sm outline-none" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search products..." />
        </label>
      </div>
    </header>
  );
}
