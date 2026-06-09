import { Boxes, ChevronRight, ClipboardList, CreditCard, ReceiptText, ShieldCheck, Users } from 'lucide-react';
import { Metric } from '../../components/ui/Metric';
import { OrderTable } from '../../components/ui/OrderTable';
import { Panel } from '../../components/ui/Panel';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { currency } from '../../utils/currency';

export function Dashboard({ products, orders, settings, setActiveView }) {
  const revenue = orders.reduce((sum, order) => sum + order.total, 0);
  const lowStock = products.filter((product) => product.stock <= product.reorder).length;

  return (
    <section className="space-y-6">
      <SectionTitle eyebrow={settings.outletName} title="Operations dashboard" action="Live local view" />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Metric icon={ReceiptText} label="Today revenue" value={currency(revenue)} />
        <Metric icon={ClipboardList} label="Orders" value={orders.length} />
        <Metric icon={Boxes} label="Low stock SKUs" value={lowStock} />
        <Metric icon={ShieldCheck} label="Active outlet" value="Healthy" />
      </div>
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <Panel title="Order queue">
          <OrderTable orders={orders} />
        </Panel>
        <Panel title="Quick actions">
          <div className="grid gap-3">
            {[
              ['Inventory audit', Boxes, 'inventory'],
              ['Open billing', CreditCard, 'billing'],
              ['Staff access', Users, 'users'],
            ].map(([label, Icon, view]) => (
              <button key={label} onClick={() => setActiveView(view)} className="flex items-center justify-between rounded-xl border border-line bg-mist p-4 text-left font-bold text-ink">
                <span className="flex items-center gap-3">
                  <Icon size={19} className="text-primary" />
                  {label}
                </span>
                <ChevronRight size={18} />
              </button>
            ))}
          </div>
        </Panel>
      </div>
    </section>
  );
}
