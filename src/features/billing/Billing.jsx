import { useState } from 'react';
import { Keyboard, ScanBarcode } from 'lucide-react';
import { CartContent } from '../../components/ui/CartContent';
import { OrderTable } from '../../components/ui/OrderTable';
import { Panel } from '../../components/ui/Panel';
import { SectionTitle } from '../../components/ui/SectionTitle';

export function Billing({ orders, products, cartDetails, updateCart, placeOrder, subtotal, tax, total, settings, scanBarcode }) {
  const [barcode, setBarcode] = useState('');
  const quickProducts = products.slice(0, 4);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (scanBarcode(barcode)) {
      setBarcode('');
    }
  };

  return (
    <section className="grid gap-6 xl:grid-cols-[1fr_420px]">
      <div className="space-y-6">
        <SectionTitle eyebrow="Employee checkout" title="Barcode billing screen" action={`${orders.length} stored orders`} />
        <Panel title="Scan product barcode">
          <form onSubmit={handleSubmit} className="grid gap-4">
            <label className="space-y-2">
              <span className="flex items-center gap-2 text-sm font-bold text-slate">
                <ScanBarcode size={18} className="text-primary" />
                Barcode scanner input
              </span>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  autoComplete="off"
                  className="field min-h-12 flex-1 text-base"
                  inputMode="numeric"
                  value={barcode}
                  onChange={(event) => setBarcode(event.target.value)}
                  placeholder="Scan or type barcode, e.g. 890100100101"
                />
                <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 font-bold text-white shadow-glow" type="submit">
                  <Keyboard size={18} />
                  Add item
                </button>
              </div>
            </label>
            <div className="grid gap-2 sm:grid-cols-2">
              {quickProducts.map((product) => (
                <button key={product.id} type="button" onClick={() => setBarcode(product.barcode)} className="flex min-w-0 items-center justify-between gap-3 rounded-xl border border-line bg-mist px-3 py-2 text-left text-sm font-semibold text-ink">
                  <span className="min-w-0 truncate">{product.name}</span>
                  <span className="shrink-0 rounded-full bg-white px-2 py-1 text-xs text-primary">{product.barcode}</span>
                </button>
              ))}
            </div>
          </form>
        </Panel>
        <Panel title="Recent bills">
          <OrderTable orders={orders} />
        </Panel>
      </div>
      <Panel title="Current cart">
        <CartContent cartDetails={cartDetails} updateCart={updateCart} subtotal={subtotal} tax={tax} total={total} settings={settings} placeOrder={placeOrder} />
      </Panel>
    </section>
  );
}
