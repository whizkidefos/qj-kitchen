import { Button } from "@/components/ui/button";
import { ChefHat, Clock, Package, UtensilsCrossed } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section - Full Width */}
      <section className="relative w-full h-[90vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
          alt="Delicious food spread"
          fill
          className="object-cover brightness-50 z-0"
          priority
        />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center text-white space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Fresh Home-Cooked Meals <br className="hidden sm:inline" />
              Delivered to Your Door
            </h1>
            <p className="mx-auto max-w-2xl text-lg sm:text-xl text-gray-100">
              Experience the comfort of home-cooked meals without the hassle. 
              From daily meals to special events, we've got you covered.
            </p>
            <div className="flex gap-4 mt-4">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link href="/order">Order Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <Link href="/menu">View Menu</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Choose from our range of services designed to meet your needs
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border bg-card p-8 text-card-foreground shadow-sm transition-all hover:shadow-md">
              <Package className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-3">Food Packs</h3>
              <p className="text-muted-foreground">
                Convenient meal packs perfect for individuals and families.
                Choose from our weekly rotating menu.
              </p>
            </div>
            <div className="rounded-xl border bg-card p-8 text-card-foreground shadow-sm transition-all hover:shadow-md">
              <Clock className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-3">Daily Meals</h3>
              <p className="text-muted-foreground">
                Fresh, home-cooked meals delivered in convenient portions.
                Perfect for busy professionals and families.
              </p>
            </div>
            <div className="rounded-xl border bg-card p-8 text-card-foreground shadow-sm transition-all hover:shadow-md">
              <ChefHat className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-3">Event Catering</h3>
              <p className="text-muted-foreground">
                Professional catering services for weddings, parties,
                and corporate events. Custom menus available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Us</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Experience the difference of authentic home cooking
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Fresh Ingredients",
                description: "We use only the freshest, highest quality ingredients in all our meals"
              },
              {
                title: "Authentic Taste",
                description: "Experience the authentic taste of home-cooked meals"
              },
              {
                title: "Flexible Options",
                description: "Choose from various portion sizes and customizable menus"
              },
              {
                title: "Fast Delivery",
                description: "Reliable delivery service to your doorstep"
              }
            ].map((feature, index) => (
              <div key={index} className="rounded-xl bg-background p-8 shadow-sm">
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Order?
            </h2>
            <p className="mx-auto max-w-2xl text-lg opacity-90">
              Experience the convenience of home-cooked meals delivered to your door
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
              <Link href="/order">Order Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}