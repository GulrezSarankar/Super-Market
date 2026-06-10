import { useMemo, useState } from 'react';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { MobileNav } from './components/layout/MobileNav';
import { CartPanel } from './components/layout/CartPanel';
import { productImages, seedOrders, seedProducts, seedSettings, seedUsers } from './data/seedData';
import { useStoredState } from './hooks/useStoredState';
import { normalizeProducts } from './utils/products';
import { Analytics } from './features/analytics/Analytics';
import { Billing } from './features/billing/Billing';
import { Dashboard } from './features/dashboard/Dashboard';
import { Inventory } from './features/inventory/Inventory';
import { ProductDetails } from './features/productDetails/ProductDetails';
import { SettingsPanel } from './features/settings/SettingsPanel';
import { Storefront } from './features/storefront/Storefront';
import { UsersPanel } from './features/users/UsersPanel';

export default function App() {
  const [activeView, setActiveView] = useState('store');
  const [query, setQuery] = useState('');
  const [products, setProducts] = useStoredState('fm_products', normalizeProducts(seedProducts));
  const [cart, setCart] = useStoredState('fm_cart', []);
  const [orders, setOrders] = useStoredState('fm_orders', seedOrders);
  const [users, setUsers] = useStoredState('fm_users', seedUsers);
  const [settings, setSettings] = useStoredState('fm_settings', seedSettings);
  const [toast, setToast] = useState('Local data saved');
  const [selectedProductId, setSelectedProductId] = useState(seedProducts[0]?.id);

  const productsWithBarcodes = useMemo(() => normalizeProducts(products), [products]);

  const filteredProducts = useMemo(() => {
    return productsWithBarcodes.filter((product) => {
      const haystack = `${product.name} ${product.category} ${product.tag}`.toLowerCase();
      return haystack.includes(query.toLowerCase());
    });
  }, [productsWithBarcodes, query]);

  const cartDetails = useMemo(() => {
    return cart
      .map((line) => {
        const product = productsWithBarcodes.find((item) => item.id === line.id);
        return product ? { ...product, quantity: line.quantity } : null;
      })
      .filter(Boolean);
  }, [cart, productsWithBarcodes]);

  const subtotal = cartDetails.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * (Number(settings.taxRate) / 100);
  const total = subtotal + tax + (cartDetails.length ? Number(settings.deliveryFee) : 0);
  const cartCount = cart.reduce((sum, line) => sum + line.quantity, 0);
  const selectedProduct = productsWithBarcodes.find((product) => product.id === selectedProductId);

  const addToCart = (id) => {
    setCart((current) => {
      const existing = current.find((line) => line.id === id);
      if (existing) {
        return current.map((line) => (line.id === id ? { ...line, quantity: line.quantity + 1 } : line));
      }
      return [...current, { id, quantity: 1 }];
    });
    setToast('Added to cart and saved locally');
  };

  const updateCart = (id, amount) => {
    setCart((current) =>
      current
        .map((line) => (line.id === id ? { ...line, quantity: line.quantity + amount } : line))
        .filter((line) => line.quantity > 0),
    );
  };

  const placeOrder = () => {
    if (!cartDetails.length) return;

    const order = {
      id: `FM-${Math.floor(2500 + Math.random() * 900)}`,
      customer: 'Walk-in Customer',
      total,
      status: 'Paid',
      items: cartDetails.reduce((sum, item) => sum + item.quantity, 0),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setOrders((current) => [order, ...current]);
    setProducts((current) =>
      current.map((product) => {
        const line = cart.find((item) => item.id === product.id);
        return line ? { ...product, stock: Math.max(0, product.stock - line.quantity) } : product;
      }),
    );
    setCart([]);
    setActiveView('billing');
    setToast('Checkout complete. Order stored in localStorage');
  };

  const addProduct = () => {
    const newProduct = {
      id: `p-${Date.now()}`,
      barcode: `890100${Date.now().toString().slice(-7)}`,
      name: 'New Seasonal Item',
      category: 'Produce',
      price: 6.5,
      stock: 24,
      reorder: 10,
      image: productImages[products.length % productImages.length],
      tag: 'New',
    };
    setProducts((current) => [newProduct, ...current]);
    setToast('Inventory item created');
  };

  const updateProduct = (id, patch) => {
    setProducts((current) => current.map((product) => (product.id === id ? { ...product, ...patch } : product)));
  };

  const removeProduct = (id) => {
    setProducts((current) => current.filter((product) => product.id !== id));
    setCart((current) => current.filter((line) => line.id !== id));
    if (selectedProductId === id) {
      setSelectedProductId(products.find((product) => product.id !== id)?.id);
    }
  };

  const openProduct = (id) => {
    setSelectedProductId(id);
    setActiveView('product-details');
  };

  const scanBarcode = (barcode) => {
    const cleanCode = barcode.trim();
    if (!cleanCode) return false;

    const matchedProduct = productsWithBarcodes.find((product) => product.barcode === cleanCode || product.id.toLowerCase() === cleanCode.toLowerCase());
    if (!matchedProduct) {
      setToast(`No product found for barcode ${cleanCode}`);
      return false;
    }

    if (matchedProduct.stock <= 0) {
      setToast(`${matchedProduct.name} is out of stock`);
      return false;
    }

    addToCart(matchedProduct.id);
    setToast(`Scanned ${matchedProduct.name}`);
    return true;
  };

  const viewProps = {
    products: productsWithBarcodes,
    filteredProducts,
    cartDetails,
    subtotal,
    tax,
    total,
    settings,
    orders,
    users,
    query,
    setQuery,
    addToCart,
    updateCart,
    placeOrder,
    addProduct,
    updateProduct,
    removeProduct,
    setSettings,
    setUsers,
    setActiveView,
    setToast,
    openProduct,
    scanBarcode,
  };

  return (
    <div className="min-h-screen">
      <Header cartCount={cartCount} query={query} setQuery={setQuery} setActiveView={setActiveView} />
      <div className="mx-auto flex w-full max-w-[1480px] gap-6 px-3 pb-28 pt-28 sm:px-4 md:px-8 md:pb-24 md:pt-24">
        <Sidebar activeView={activeView} setActiveView={setActiveView} />
        <main className="min-w-0 flex-1">
          {activeView === 'store' && <Storefront {...viewProps} />}
          {activeView === 'product-details' && <ProductDetails product={selectedProduct} {...viewProps} />}
          {activeView === 'dashboard' && <Dashboard {...viewProps} />}
          {activeView === 'inventory' && <Inventory {...viewProps} />}
          {activeView === 'billing' && <Billing {...viewProps} />}
          {activeView === 'analytics' && <Analytics {...viewProps} />}
          {activeView === 'users' && <UsersPanel {...viewProps} />}
          {activeView === 'settings' && <SettingsPanel {...viewProps} />}
          {activeView === 'cart' && <Billing {...viewProps} />}
        </main>
        <CartPanel {...viewProps} />
      </div>
      <MobileNav activeView={activeView} setActiveView={setActiveView} />
      <div className="fixed bottom-24 left-1/2 z-50 -translate-x-1/2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white shadow-glow md:bottom-6 md:left-auto md:right-8 md:translate-x-0">
        {toast}
      </div>
    </div>
  );
}
