import { Panel } from '../ui/Panel';
import { CartContent } from '../ui/CartContent';

export function CartPanel(props) {
  return (
    <aside className="sticky top-24 hidden h-[calc(100vh-7rem)] w-80 shrink-0 xl:block">
      <Panel title="Cart">
        <CartContent {...props} />
      </Panel>
    </aside>
  );
}
