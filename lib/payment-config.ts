export const STRIPE_CONFIG = {
  CURRENCY: "gbp",
  PAYMENT_METHODS: ["card", "paypal"],
  SUPPORTED_COUNTRIES: ["GB"],
  LOCALE: "en-GB",
}

export const PAYMENT_STATUS = {
  PENDING: "pending",
  PROCESSING: "processing",
  COMPLETED: "completed",
  FAILED: "failed",
  REFUNDED: "refunded",
} as const

export type PaymentStatus = typeof PAYMENT_STATUS[keyof typeof PAYMENT_STATUS]

export const BANK_DETAILS = {
  accountName: "QJ Kitchen Ltd", // Update with actual details
  sortCode: "", // Add actual sort code
  accountNumber: "", // Add actual account number
  bankName: "", // Add bank name
  reference: "ORDER_ID", // Will be replaced with actual order ID
}
