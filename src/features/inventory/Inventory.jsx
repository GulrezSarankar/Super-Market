import { PackagePlus, Trash2 } from 'lucide-react';
import { Input, NumberInput } from '../../components/ui/FormControls';
import { Panel } from '../../components/ui/Panel';
import { SectionTitle } from '../../components/ui/SectionTitle';

export function Inventory({ products, addProduct, updateProduct, removeProduct }) {
  return (
    <section className="space-y-6">
      <SectionTitle eyebrow="Back office" title="Inventory management" action={<button onClick={addProduct} className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-bold text-white sm:w-auto"><PackagePlus size={17} /> Add item</button>} />
      <div className="grid gap-4 md:hidden">
        {products.map((product) => (
          <article key={product.id} className="rounded-2xl border border-line bg-white p-4 shadow-soft">
            <div className="mb-4 flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="break-words font-display text-lg font-bold">{product.name}</h3>
                <span className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-bold ${product.stock <= product.reorder ? 'bg-orange-100 text-warning' : 'bg-emerald-50 text-primary'}`}>{product.stock <= product.reorder ? 'Restock' : 'Available'}</span>
              </div>
              <button onClick={() => removeProduct(product.id)} className="shrink-0 rounded-lg p-2 text-danger hover:bg-red-50" aria-label="Remove product"><Trash2 size={17} /></button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <label className="col-span-2 space-y-1 text-xs font-bold uppercase tracking-wider text-slate">Barcode<Input value={product.barcode} onChange={(value) => updateProduct(product.id, { barcode: value })} /></label>
              <label className="space-y-1 text-xs font-bold uppercase tracking-wider text-slate">Category<Input value={product.category} onChange={(value) => updateProduct(product.id, { category: value })} /></label>
              <label className="space-y-1 text-xs font-bold uppercase tracking-wider text-slate">Price<NumberInput value={product.price} onChange={(value) => updateProduct(product.id, { price: value })} /></label>
              <label className="space-y-1 text-xs font-bold uppercase tracking-wider text-slate">Stock<NumberInput value={product.stock} onChange={(value) => updateProduct(product.id, { stock: value })} /></label>
              <label className="space-y-1 text-xs font-bold uppercase tracking-wider text-slate">Reorder<NumberInput value={product.reorder} onChange={(value) => updateProduct(product.id, { reorder: value })} /></label>
            </div>
          </article>
        ))}
      </div>
      <Panel title="Stock ledger">
        <div className="hidden overflow-x-auto scrollbar-thin md:block">
          <table className="w-full min-w-[920px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-line text-xs uppercase tracking-wider text-slate">
                <th className="py-3">Product</th>
                <th>Barcode</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Reorder</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b border-mist last:border-0">
                  <td className="py-3 font-bold">{product.name}</td>
                  <td><Input value={product.barcode} onChange={(value) => updateProduct(product.id, { barcode: value })} /></td>
                  <td><Input value={product.category} onChange={(value) => updateProduct(product.id, { category: value })} /></td>
                  <td><NumberInput value={product.price} onChange={(value) => updateProduct(product.id, { price: value })} /></td>
                  <td><NumberInput value={product.stock} onChange={(value) => updateProduct(product.id, { stock: value })} /></td>
                  <td><NumberInput value={product.reorder} onChange={(value) => updateProduct(product.id, { reorder: value })} /></td>
                  <td><span className={`rounded-full px-3 py-1 text-xs font-bold ${product.stock <= product.reorder ? 'bg-orange-100 text-warning' : 'bg-emerald-50 text-primary'}`}>{product.stock <= product.reorder ? 'Restock' : 'Available'}</span></td>
                  <td className="text-right"><button onClick={() => removeProduct(product.id)} className="rounded-lg p-2 text-danger hover:bg-red-50" aria-label="Remove product"><Trash2 size={17} /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>
    </section>
  );
}
