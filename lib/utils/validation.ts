import { DELIVERY_ZONES, MINIMUM_ORDER_AMOUNTS } from '../constants'

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function isValidUKPhoneNumber(phone: string): boolean {
  const phoneRegex = /^(?:(?:\+44)|(?:0))(?:\d\s?){9,10}$/
  return phoneRegex.test(phone)
}

export function isValidUKPostcode(postcode: string): boolean {
  const postcodeRegex = /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/i
  return postcodeRegex.test(postcode)
}

export function isValidDeliveryZone(postcode: string): boolean {
  // TODO: Implement actual delivery zone checking
  return true
}

export function validateOrderAmount(amount: number, orderType: 'delivery' | 'catering'): {
  valid: boolean
  message?: string
} {
  const minimumAmount = MINIMUM_ORDER_AMOUNTS[orderType]

  if (amount < minimumAmount) {
    return {
      valid: false,
      message: `Minimum order amount for ${orderType} is £${minimumAmount.toFixed(2)}`,
    }
  }

  return { valid: true }
}

export function validateCateringDetails(details: {
  eventDate: string
  numberOfGuests: number
  venue: string
}): {
  valid: boolean
  errors: Record<string, string>
} {
  const errors: Record<string, string> = {}

  // Event date must be in the future
  const eventDate = new Date(details.eventDate)
  if (eventDate <= new Date()) {
    errors.eventDate = 'Event date must be in the future'
  }

  // Minimum number of guests
  if (details.numberOfGuests < 10) {
    errors.numberOfGuests = 'Minimum number of guests is 10'
  }

  // Venue is required
  if (!details.venue.trim()) {
    errors.venue = 'Venue is required'
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  }
}

export function validateDeliveryDetails(details: {
  address: string
  postcode: string
  contactNumber: string
}): {
  valid: boolean
  errors: Record<string, string>
} {
  const errors: Record<string, string> = {}

  // Address validation
  if (!details.address.trim()) {
    errors.address = 'Address is required'
  }

  // Postcode validation
  if (!isValidUKPostcode(details.postcode)) {
    errors.postcode = 'Invalid UK postcode'
  } else if (!isValidDeliveryZone(details.postcode)) {
    errors.postcode = 'Sorry, we don\'t deliver to this area'
  }

  // Phone number validation
  if (!isValidUKPhoneNumber(details.contactNumber)) {
    errors.contactNumber = 'Invalid UK phone number'
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  }
}
