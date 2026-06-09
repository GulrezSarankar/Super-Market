export const productImages = [
  'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1546470427-e5ac89f5b264?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=900&q=80',
];

export const seedProducts = [
  { id: 'p-101', name: 'Organic Greens Box', category: 'Produce', price: 9.8, stock: 38, reorder: 12, image: productImages[0], tag: 'Fresh' },
  { id: 'p-102', name: 'Hydroponic Lettuce', category: 'Produce', price: 3.6, stock: 9, reorder: 15, image: productImages[1], tag: 'Low stock' },
  { id: 'p-103', name: 'Berry Breakfast Mix', category: 'Fruit', price: 7.4, stock: 26, reorder: 10, image: productImages[2], tag: 'Popular' },
  { id: 'p-104', name: 'Cold Pressed Milk', category: 'Dairy', price: 4.9, stock: 41, reorder: 14, image: productImages[3], tag: 'Daily' },
  { id: 'p-105', name: 'Artisan Pantry Kit', category: 'Pantry', price: 14.5, stock: 18, reorder: 8, image: productImages[4], tag: 'Bundle' },
  { id: 'p-106', name: 'Golden Banana Crate', category: 'Fruit', price: 5.2, stock: 7, reorder: 18, image: productImages[5], tag: 'Low stock' },
];

export const seedUsers = [
  { id: 'u-1', name: 'Aarav Mehta', role: 'Store Manager', outlet: 'Emerald Central', status: 'Active' },
  { id: 'u-2', name: 'Nina Kapoor', role: 'Cashier', outlet: 'North Express', status: 'Active' },
  { id: 'u-3', name: 'Rohan Iyer', role: 'Inventory Lead', outlet: 'Emerald Central', status: 'Review' },
];

export const seedOrders = [
  { id: 'FM-2401', customer: 'Maya S.', total: 42.6, status: 'Packed', items: 7, time: '09:30' },
  { id: 'FM-2402', customer: 'Kiran D.', total: 67.2, status: 'Dispatch', items: 11, time: '10:15' },
  { id: 'FM-2403', customer: 'Priya R.', total: 28.4, status: 'Paid', items: 5, time: '11:05' },
];

export const seedSettings = {
  outletName: 'FreshMarket Ops',
  address: 'Emerald Central, Sector 18',
  taxRate: 7,
  deliveryFee: 3.5,
  lowStockAlerts: true,
};
