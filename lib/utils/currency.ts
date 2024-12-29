import { BUSINESS_CONFIG } from '../constants'

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat(BUSINESS_CONFIG.currency.locale, {
    style: 'currency',
    currency: BUSINESS_CONFIG.currency.code,
  }).format(amount)
}

export const calculateVAT = (amount: number): number => {
  return amount * 0.20 // 20% VAT rate in the UK
}

export const calculateTotal = (subtotal: number, deliveryFee: number = 0): {
  subtotal: number
  vat: number
  deliveryFee: number
  total: number
} => {
  const vat = calculateVAT(subtotal)
  const total = subtotal + vat + deliveryFee

  return {
    subtotal,
    vat,
    deliveryFee,
    total,
  }
}
