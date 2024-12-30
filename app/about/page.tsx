import { Metadata } from 'next'
import { Check, Heart, Users, UtensilsCrossed } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | QJ Kitchen',
  description: 'Learn more about QJ Kitchen and our commitment to quality home-cooked meals',
}

const features = [
  {
    name: 'Fresh Ingredients',
    description: 'We use only the freshest ingredients sourced from local suppliers',
    icon: UtensilsCrossed,
  },
  {
    name: 'Made with Love',
    description: 'Every meal is prepared with care and attention to detail',
    icon: Heart,
  },
  {
    name: 'Quality Service',
    description: 'Our team is dedicated to providing exceptional service',
    icon: Check,
  },
  {
    name: 'Community Focus',
    description: 'We\'re proud to be part of and serve our local community',
    icon: Users,
  },
]

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/about-hero.jpg"
            alt="About QJ Kitchen"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Our Story
          </h1>
          <p className="mt-4 text-lg sm:text-xl max-w-3xl mx-auto">
            Bringing the authentic taste of home-cooked meals to your table
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Mission Section */}
          <section className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Our Mission</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                At QJ Kitchen, we're passionate about bringing the authentic taste of 
                home-cooked meals to your doorstep. Our mission is to provide fresh, 
                delicious, and nutritious meals that remind you of home.
              </p>
            </div>
          </section>

          {/* Features Grid */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-center">Why Choose Us</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <div
                    key={feature.name}
                    className="relative p-6 border rounded-lg transition-all hover:shadow-md"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{feature.name}</h3>
                    </div>
                    <p className="mt-4 text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Values Section with SVG Animation */}
          <section className="relative">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <svg
                className="absolute w-[1000px] h-[1000px] -top-[400px] -right-[400px] text-primary/5"
                viewBox="0 0 1000 1000"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="grid"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                <circle
                  cx="500"
                  cy="500"
                  r="400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="animate-[spin_60s_linear_infinite]"
                />
              </svg>
            </div>
            <div className="relative space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tight">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Quality, authenticity, and customer satisfaction are at the heart of 
                everything we do. We believe in creating not just meals, but memorable 
                dining experiences.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
