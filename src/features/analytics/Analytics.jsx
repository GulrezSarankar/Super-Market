import { BarChart3, Boxes, ReceiptText } from 'lucide-react';
import { Metric } from '../../components/ui/Metric';
import { Panel } from '../../components/ui/Panel';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { currency } from '../../utils/currency';

export function Analytics({ products, orders }) {
  const maxStock = Math.max(...products.map((product) => product.stock), 1);

  return (
    <section className="space-y-6">
      <SectionTitle eyebrow="Insights" title="Analytics dashboard" action="Stock and sales" />
      <div className="grid gap-4 md:grid-cols-3">
        <Metric icon={BarChart3} label="Average order" value={currency(orders.reduce((sum, order) => sum + order.total, 0) / Math.max(orders.length, 1))} />
        <Metric icon={Boxes} label="Total stock" value={products.reduce((sum, product) => sum + product.stock, 0)} />
        <Metric icon={ReceiptText} label="Best status" value="Paid" />
      </div>
      <Panel title="Inventory by SKU">
        <div className="space-y-4">
          {products.map((product) => (
            <div key={product.id}>
              <div className="mb-2 flex items-start justify-between gap-3 text-sm font-semibold">
                <span className="min-w-0 break-words">{product.name}</span>
                <span className="shrink-0">{product.stock}</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-mist">
                <div className="h-full rounded-full bg-primary" style={{ width: `${(product.stock / maxStock) * 100}%` }} />
              </div>
            </div>
          ))}
        </div>
      </Panel>
    </section>
  );
}
