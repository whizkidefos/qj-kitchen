export interface CateringPackage {
  id: string
  name: string
  description: string
  pricePerPerson: number
  minimumGuests: number
  items: string[]
  includes: string[]
  image: string
}

export interface CateringBooking {
  packageId: string
  date: string
  time: string
  numberOfGuests: number
  venue: string
  name: string
  email: string
  phone: string
  notes?: string
}
