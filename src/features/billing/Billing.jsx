import { CartContent } from '../../components/ui/CartContent';
import { OrderTable } from '../../components/ui/OrderTable';
import { Panel } from '../../components/ui/Panel';
import { SectionTitle } from '../../components/ui/SectionTitle';

export function Billing({ orders, cartDetails, updateCart, placeOrder, subtotal, tax, total, settings }) {
  return (
    <section className="grid gap-6 xl:grid-cols-[1fr_420px]">
      <div className="space-y-6">
        <SectionTitle eyebrow="Checkout" title="Billing screen" action={`${orders.length} stored orders`} />
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
