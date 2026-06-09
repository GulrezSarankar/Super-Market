import { Check, Minus, Plus } from 'lucide-react';
import { currency } from '../../utils/currency';
import { PriceLine } from './PriceLine';

export function CartContent({ cartDetails, updateCart, subtotal, tax, total, settings, placeOrder }) {
  return (
    <div className="space-y-4">
      {cartDetails.length === 0 ? (
        <div className="rounded-2xl bg-mist p-6 text-center text-sm text-slate">Cart is empty. Add products from the storefront.</div>
      ) : (
        cartDetails.map((item) => (
          <div key={item.id} className="flex gap-3 rounded-xl border border-line bg-white p-3">
            <img className="h-16 w-16 rounded-xl object-cover" src={item.image} alt={item.name} />
            <div className="min-w-0 flex-1">
              <p className="truncate font-bold">{item.name}</p>
              <p className="text-sm text-slate">{currency(item.price)}</p>
              <div className="mt-2 flex items-center gap-2">
                <button className="cart-step" onClick={() => updateCart(item.id, -1)} aria-label={`Remove one ${item.name}`}>
                  <Minus size={14} />
                </button>
                <span className="w-6 text-center text-sm font-bold">{item.quantity}</span>
                <button className="cart-step" onClick={() => updateCart(item.id, 1)} aria-label={`Add one ${item.name}`}>
                  <Plus size={14} />
                </button>
              </div>
            </div>
          </div>
        ))
      )}
      <div className="space-y-2 border-t border-line pt-4 text-sm">
        <PriceLine label="Subtotal" value={subtotal} />
        <PriceLine label={`Tax (${settings.taxRate}%)`} value={tax} />
        <PriceLine label="Delivery" value={cartDetails.length ? Number(settings.deliveryFee) : 0} />
        <PriceLine label="Total" value={total} strong />
      </div>
      <button onClick={placeOrder} disabled={!cartDetails.length} className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 font-bold text-white shadow-glow disabled:cursor-not-allowed disabled:bg-slate/50">
        <Check size={18} />
        Place order
      </button>
    </div>
  );
}
