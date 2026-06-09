import { navItems } from '../../config/navigation';

export function MobileNav({ activeView, setActiveView }) {
  const mobileItems = navItems.filter((item) => ['store', 'dashboard', 'inventory', 'billing', 'settings'].includes(item.key));

  return (
    <nav className="glass fixed inset-x-2 bottom-2 z-40 grid grid-cols-5 rounded-2xl border border-line p-1.5 shadow-soft sm:inset-x-3 sm:bottom-3 sm:p-2 lg:hidden">
      {mobileItems.map(({ key, label, icon: Icon }) => (
        <button key={key} onClick={() => setActiveView(key)} className={`flex min-w-0 flex-col items-center gap-1 rounded-xl px-1 py-2 text-[10px] font-bold sm:text-[11px] ${activeView === key ? 'bg-primary text-white' : 'text-slate'}`}>
          <Icon size={18} />
          {label.split(' ')[0]}
        </button>
      ))}
    </nav>
  );
}
