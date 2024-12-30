import { Metadata } from 'next'
import { useState } from "react"
import { PackageCard } from "@/components/catering/package-card"
import { BookingDialog } from '@/components/catering/booking-dialog'
import { CateringPackage } from '@/lib/types/catering'

export const metadata: Metadata = {
  title: 'Catering Services | QJ Kitchen',
  description: 'Professional catering services for all your special events',
}

const cateringPackages: CateringPackage[] = [
  {
    id: 'basic',
    name: 'Essential Package',
    description: 'Perfect for intimate gatherings and small celebrations',
    pricePerPerson: 45,
    minimumGuests: 30,
    items: [
      '5 Main Dishes',
      '3 Side Dishes',
      '2 Desserts',
      'Unlimited Rice'
    ],
    includes: [
      'Basic Table Setup',
      'Service Staff',
      'Setup and Cleanup',
      '4-hour service'
    ],
    image: '/images/catering/basic.jpg'
  },
  {
    id: 'premium',
    name: 'Premium Package',
    description: 'Ideal for weddings and corporate events',
    pricePerPerson: 75,
    minimumGuests: 50,
    items: [
      '7 Main Dishes',
      '4 Side Dishes',
      '3 Desserts',
      'Unlimited Rice',
      'Beverage Station'
    ],
    includes: [
      'Premium Table Setup',
      'Full Service Staff',
      'Setup and Cleanup',
      '6-hour service',
      'Event Coordination'
    ],
    image: '/images/catering/premium.jpg'
  },
  {
    id: 'deluxe',
    name: 'Deluxe Package',
    description: 'Our finest offering for grand celebrations',
    pricePerPerson: 95,
    minimumGuests: 100,
    items: [
      '10 Main Dishes',
      '6 Side Dishes',
      '4 Desserts',
      'Unlimited Rice',
      'Premium Beverage Station',
      'Champagne Toast'
    ],
    includes: [
      'Luxury Table Setup',
      'Full Service Staff',
      'Setup and Cleanup',
      '8-hour service',
      'Event Coordination',
      'Custom Menu Planning'
    ],
    image: '/images/catering/deluxe.jpg'
  }
]

export default function CateringPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/catering-hero.jpg"
            alt="Catering Services"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Catering Services
          </h1>
          <p className="mt-4 text-lg sm:text-xl max-w-3xl mx-auto">
            From intimate gatherings to grand celebrations, we make every event special
          </p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Packages</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Each package includes professional service staff and premium quality dishes.
                All prices are per person and include setup, service, and cleanup.
              </p>
            </div>

            <BookingDialog packages={cateringPackages} />
          </div>
        </div>
      </section>
    </div>
  )
}