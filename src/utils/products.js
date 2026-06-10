export function productBarcode(product, index = 0) {
  if (product.barcode) return String(product.barcode);
  const numericId = String(product.id || index).replace(/\D/g, '').padStart(3, '0');
  return `890100100${numericId.slice(-3)}`;
}

export function normalizeProducts(products) {
  return products.map((product, index) => ({
    ...product,
    barcode: productBarcode(product, index),
  }));
}
