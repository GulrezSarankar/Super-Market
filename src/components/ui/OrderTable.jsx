import { currency } from '../../utils/currency';

export function OrderTable({ orders }) {
  return (
    <div className="overflow-x-auto scrollbar-thin">
      <table className="w-full min-w-[580px] text-left text-sm">
        <thead>
          <tr className="border-b border-line text-xs uppercase tracking-wider text-slate">
            <th className="py-3">Order</th>
            <th>Customer</th>
            <th>Items</th>
            <th>Status</th>
            <th>Total</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b border-mist last:border-0">
              <td className="py-3 font-bold">{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.items}</td>
              <td>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-primary">{order.status}</span>
              </td>
              <td className="font-bold">{currency(order.total)}</td>
              <td>{order.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
