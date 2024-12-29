import { BUSINESS_CONFIG } from '../constants'

export function formatDate(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return dateObj.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function formatTime(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return dateObj.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
  })
}

export function formatDateTime(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return `${formatDate(dateObj)} at ${formatTime(dateObj)}`
}

export function isBusinessHours(): boolean {
  const now = new Date()
  const day = now.getDay()
  const hours = now.getHours()

  // Sunday is closed
  if (day === 0) return false

  // Monday to Friday: 9 AM - 8 PM
  if (day >= 1 && day <= 5) {
    return hours >= 9 && hours < 20
  }

  // Saturday: 10 AM - 6 PM
  if (day === 6) {
    return hours >= 10 && hours < 18
  }

  return false
}

export function getNextAvailableDeliveryTime(): Date {
  const now = new Date()
  const deliveryDate = new Date(now)

  // Add minimum preparation time (e.g., 2 hours)
  deliveryDate.setHours(deliveryDate.getHours() + 2)

  // If outside business hours, set to next opening time
  if (!isBusinessHours()) {
    const day = deliveryDate.getDay()

    // If Sunday, move to Monday
    if (day === 0) {
      deliveryDate.setDate(deliveryDate.getDate() + 1)
      deliveryDate.setHours(9, 0, 0, 0)
    }
    // If it's past closing time, move to next day's opening time
    else if (day >= 1 && day <= 5 && deliveryDate.getHours() >= 20) {
      deliveryDate.setDate(deliveryDate.getDate() + 1)
      deliveryDate.setHours(9, 0, 0, 0)
    }
    // If Saturday and past closing time, move to Monday
    else if (day === 6 && deliveryDate.getHours() >= 18) {
      deliveryDate.setDate(deliveryDate.getDate() + 2)
      deliveryDate.setHours(9, 0, 0, 0)
    }
  }

  return deliveryDate
}

export function isValidDeliveryTime(date: Date): boolean {
  const day = date.getDay()
  const hours = date.getHours()

  // No deliveries on Sunday
  if (day === 0) return false

  // Monday to Friday: 9 AM - 8 PM
  if (day >= 1 && day <= 5) {
    return hours >= 9 && hours < 20
  }

  // Saturday: 10 AM - 6 PM
  if (day === 6) {
    return hours >= 10 && hours < 18
  }

  return false
}
