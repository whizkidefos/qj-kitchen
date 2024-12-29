import { PaymentStatus } from '../payment-config'

export type OrderType = 'delivery' | 'catering'

export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image?: string
  category: string
  unit?: 'litre' | 'pack' | 'serving'
  minimumOrder?: number
}

export interface CateringPackage {
  id: string
  name: string
  description: string
  pricePerPerson: number
  minimumGuests: number
  items: MenuItem[]
  includes: string[]
}

export interface OrderItem {
  item: MenuItem
  quantity: number
  specialInstructions?: string
}

export interface DeliveryDetails {
  address: string
  postcode: string
  instructions?: string
  contactNumber: string
}

export interface CateringDetails {
  eventType: string
  eventDate: string
  numberOfGuests: number
  venue: string
  specialRequirements?: string
}

export interface Order {
  id: string
  userId: string
  type: OrderType
  items: OrderItem[]
  subtotal: number
  vat: number
  deliveryFee: number
  total: number
  status: PaymentStatus
  paymentMethod: string
  createdAt: string
  delivery?: DeliveryDetails
  catering?: CateringDetails
}
