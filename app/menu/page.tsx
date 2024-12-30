import { Metadata } from 'next'
import { MenuSection } from '@/components/menu/menu-section'
import { menuItems } from '@/lib/menu-data'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: 'Menu | QJ Kitchen',
  description: 'Explore our delicious menu of home-cooked meals',
}

export default function MenuPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/menu-hero.jpg"
            alt="Our Menu"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Our Menu
          </h1>
          <p className="mt-4 text-lg sm:text-xl max-w-3xl mx-auto">
            Discover our selection of delicious home-cooked meals
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="all" className="space-y-8">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
                <TabsTrigger value="all">All Items</TabsTrigger>
                <TabsTrigger value="rice">Rice Dishes</TabsTrigger>
                <TabsTrigger value="soups">Soups & Stews</TabsTrigger>
                <TabsTrigger value="sides">Sides & Grills</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-12">
                <MenuSection
                  title="Rice Dishes"
                  items={menuItems.filter(item => item.category === 'Rice Dishes')}
                />
                <MenuSection
                  title="Soups & Stews"
                  items={menuItems.filter(item => 
                    item.category === 'Soups' || item.category === 'Stews'
                  )}
                />
                <MenuSection
                  title="Sides & Grills"
                  items={menuItems.filter(item => 
                    item.category === 'Sides' || item.category === 'Grills'
                  )}
                />
              </TabsContent>

              <TabsContent value="rice">
                <MenuSection
                  title="Rice Dishes"
                  items={menuItems.filter(item => item.category === 'Rice Dishes')}
                />
              </TabsContent>

              <TabsContent value="soups">
                <MenuSection
                  title="Soups & Stews"
                  items={menuItems.filter(item => 
                    item.category === 'Soups' || item.category === 'Stews'
                  )}
                />
              </TabsContent>

              <TabsContent value="sides">
                <MenuSection
                  title="Sides & Grills"
                  items={menuItems.filter(item => 
                    item.category === 'Sides' || item.category === 'Grills'
                  )}
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  )
}