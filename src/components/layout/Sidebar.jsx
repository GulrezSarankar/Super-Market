import { navItems } from '../../config/navigation';

export function Sidebar({ activeView, setActiveView }) {
  return (
    <aside className="sticky top-24 hidden h-[calc(100vh-7rem)] w-64 shrink-0 rounded-2xl border border-line bg-white p-3 shadow-soft lg:block">
      <nav className="space-y-1">
        {navItems.map(({ key, label, icon: Icon }) => (
          <button key={key} onClick={() => setActiveView(key)} className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${activeView === key ? 'bg-primary text-white shadow-glow' : 'text-slate hover:bg-mist hover:text-ink'}`}>
            <Icon size={18} />
            {label}
          </button>
        ))}
      </nav>
      <div className="mt-6 rounded-2xl bg-mist p-4">
        <p className="text-xs font-bold uppercase tracking-wider text-primary">Local storage</p>
        <p className="mt-2 text-sm text-slate">Products, cart, orders, users, and outlet settings persist in this browser.</p>
      </div>
    </aside>
  );
}
