import { Metadata } from 'next'
import { OrderForm } from '@/components/order/order-form'

export const metadata: Metadata = {
  title: 'Place Your Order | QJ Kitchen',
  description: 'Order fresh home-cooked meals and catering services from QJ Kitchen',
}

export default function OrderPage() {
  return (
    <div className="w-full">
      {/* Hero Section - Full Width */}
      <section className="relative w-full h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1555244162-803834f70033"
            alt="Order background"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Place Your Order
          </h1>
          <p className="mt-4 text-lg sm:text-xl max-w-3xl mx-auto">
            Choose from our selection of fresh home-cooked meals and catering services
          </p>
        </div>
      </section>

      {/* Order Form Section */}
      <section className="w-full py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <OrderForm />
          </div>
        </div>
      </section>
    </div>
  )
}
