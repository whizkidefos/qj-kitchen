export const BUSINESS_CONFIG = {
  name: "QJ Kitchen",
  location: {
    city: "Manchester",
    country: "United Kingdom",
    timezone: "Europe/London",
  },
  currency: {
    code: "GBP",
    symbol: "£",
    locale: "en-GB",
  },
  contact: {
    email: "info@qjkitchen.com", // Update with actual email
    phone: "+44", // Update with actual phone number
    address: "", // Add full business address
  },
  social: {
    instagram: "",
    facebook: "",
    twitter: "",
  },
}

export const DELIVERY_ZONES = {
  // Define delivery zones and pricing
  manchester: {
    name: "Manchester City",
    minOrder: 20.00,
    deliveryFee: 5.00,
  },
  // Add more zones as needed
}

export const MINIMUM_ORDER_AMOUNTS = {
  delivery: 20.00,
  catering: 100.00,
}

export const VAT_RATE = 0.20 // 20% VAT

export const PAYMENT_METHODS = {
  CARD: "card",
  PAYPAL: "paypal",
  BANK_TRANSFER: "bank_transfer",
}
