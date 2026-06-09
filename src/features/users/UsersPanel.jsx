import { Plus } from 'lucide-react';
import { SectionTitle } from '../../components/ui/SectionTitle';

export function UsersPanel({ users, setUsers }) {
  const addUser = () => setUsers((current) => [{ id: `u-${Date.now()}`, name: 'New Team Member', role: 'Associate', outlet: 'Emerald Central', status: 'Active' }, ...current]);

  return (
    <section className="space-y-6">
      <SectionTitle eyebrow="Admin" title="User management" action={<button onClick={addUser} className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-bold text-white sm:w-auto"><Plus size={17} /> Add user</button>} />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {users.map((user) => (
          <article key={user.id} className="min-w-0 rounded-2xl border border-line bg-white p-4 shadow-soft sm:p-5">
            <div className="mb-5 flex items-center gap-3">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-mist font-display text-lg font-bold text-primary">{user.name.slice(0, 1)}</div>
              <div className="min-w-0">
                <h3 className="break-words font-display text-lg font-bold">{user.name}</h3>
                <p className="text-sm text-slate">{user.role}</p>
              </div>
            </div>
            <p className="break-words text-sm text-slate">{user.outlet}</p>
            <span className="mt-4 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-primary">{user.status}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
