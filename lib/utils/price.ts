export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  }).format(price)
}

export const calculateTotal = (items: { price: number; quantity: number }[]): number => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0)
}

export const calculateVAT = (amount: number): number => {
  return amount * 0.20 // 20% VAT
}

export const calculateDeliveryFee = (subtotal: number): number => {
  // Free delivery over £50
  if (subtotal >= 50) return 0
  // Standard delivery fee
  return 5.00
}
