import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | QJ Kitchen',
  description: 'Learn about QJ Kitchen\'s story, our passion for home-cooked meals, and our commitment to quality catering services in Manchester.',
}

export default function AboutPage() {
  return (
    <div className="py-12 space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">About QJ Kitchen</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Bringing the warmth of home-cooked meals to Manchester homes and events
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 items-center py-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Our Story</h2>
          <p className="text-muted-foreground">
            Founded in Manchester, QJ Kitchen began with a simple mission: to bring
            authentic, home-cooked meals to busy families and professionals.
          </p>
        </div>
        <div className="aspect-video bg-muted rounded-lg"></div>
      </section>

      <section className="bg-muted py-12 px-4 rounded-lg">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-2xl font-semibold text-center">Our Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="p-4 bg-background rounded-lg space-y-2">
              <h3 className="font-semibold">Home-Cooked Meals</h3>
              <p className="text-sm text-muted-foreground">
                Fresh, delicious meals delivered in litres or food packs
              </p>
            </div>
            <div className="p-4 bg-background rounded-lg space-y-2">
              <h3 className="font-semibold">Event Catering</h3>
              <p className="text-sm text-muted-foreground">
                Professional catering for all your special occasions
              </p>
            </div>
            <div className="p-4 bg-background rounded-lg space-y-2">
              <h3 className="font-semibold">Custom Orders</h3>
              <p className="text-sm text-muted-foreground">
                Tailored menus to meet your specific requirements
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Why Choose Us</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h3 className="font-semibold">Fresh Ingredients</h3>
            <p className="text-muted-foreground">
              We use only the freshest, highest quality ingredients
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Authentic Taste</h3>
            <p className="text-muted-foreground">
              Traditional recipes with authentic flavors
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Flexible Options</h3>
            <p className="text-muted-foreground">
              Various portion sizes and customizable menus
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Reliable Service</h3>
            <p className="text-muted-foreground">
              Punctual delivery and professional service
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
