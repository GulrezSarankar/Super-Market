import { Field } from '../../components/ui/FormControls';
import { Panel } from '../../components/ui/Panel';
import { SectionTitle } from '../../components/ui/SectionTitle';

export function SettingsPanel({ settings, setSettings, setToast }) {
  const update = (key, value) => {
    setSettings((current) => ({ ...current, [key]: value }));
    setToast('Settings saved locally');
  };

  return (
    <section className="space-y-6">
      <SectionTitle eyebrow="Configuration" title="Outlet settings" action="Auto-saved" />
      <Panel title="Store profile">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Outlet name">
            <input className="field" value={settings.outletName} onChange={(event) => update('outletName', event.target.value)} />
          </Field>
          <Field label="Address">
            <input className="field" value={settings.address} onChange={(event) => update('address', event.target.value)} />
          </Field>
          <Field label="Tax rate (%)">
            <input className="field" type="number" value={settings.taxRate} onChange={(event) => update('taxRate', Number(event.target.value))} />
          </Field>
          <Field label="Delivery fee">
            <input className="field" type="number" value={settings.deliveryFee} onChange={(event) => update('deliveryFee', Number(event.target.value))} />
          </Field>
          <label className="flex items-center gap-3 rounded-xl bg-mist p-4 font-semibold">
            <input type="checkbox" checked={settings.lowStockAlerts} onChange={(event) => update('lowStockAlerts', event.target.checked)} />
            Low stock alerts
          </label>
        </div>
      </Panel>
    </section>
  );
}
