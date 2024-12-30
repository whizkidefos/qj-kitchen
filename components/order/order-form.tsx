'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/components/ui/use-toast'
import { formatPrice } from '@/lib/utils/price'
import { MenuSelection } from './menu-selection'
import { useCart } from '@/hooks/use-cart'
import { MenuItem } from '@/lib/types/menu'

type OrderType = 'delivery' | 'catering'

// Temporary menu items - replace with actual data
const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Jollof Rice',
    description: 'Traditional Nigerian Jollof Rice cooked with rich tomato sauce and special spices',
    price: 15.00,
    image: '/images/menu/jollof-rice.jpg',
    category: 'Rice Dishes',
    unit: 'litre'
  },
  {
    id: '2',
    name: 'Fried Rice',
    description: 'Nigerian Style Fried Rice with mixed vegetables and protein',
    price: 15.00,
    image: '/images/menu/fried-rice.jpg',
    category: 'Rice Dishes',
    unit: 'litre'
  },
  {
    id: '3',
    name: 'Chicken Stew',
    description: 'Rich and flavorful chicken stew made with fresh tomatoes and bell peppers',
    price: 20.00,
    image: '/images/menu/chicken-stew.jpg',
    category: 'Stews',
    unit: 'litre'
  },
  {
    id: '4',
    name: 'Egusi Soup',
    description: 'Traditional Nigerian soup made with ground melon seeds and spinach',
    price: 25.00,
    image: '/images/menu/egusi-soup.jpg',
    category: 'Soups',
    unit: 'litre'
  },
  {
    id: '5',
    name: 'Moi Moi',
    description: 'Steamed bean pudding made with ground beans, peppers, and spices',
    price: 12.00,
    image: '/images/menu/moi-moi.jpg',
    category: 'Sides',
    unit: 'pack'
  },
  {
    id: '6',
    name: 'Beef Suya',
    description: 'Spicy grilled beef skewers marinated in ground peanuts and African spices',
    price: 18.00,
    image: '/images/menu/suya.jpg',
    category: 'Grills',
    unit: 'pack'
  }
]

export function OrderForm() {
  const [orderType, setOrderType] = useState<OrderType>('delivery')
  const [loading, setLoading] = useState(false)
  const { items, clearCart, total } = useCart()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    
    if (orderType === 'delivery' && items.length === 0) {
      toast({
        variant: 'destructive',
        title: 'No items selected',
        description: 'Please select at least one item from the menu.',
      })
      return
    }

    setLoading(true)

    try {
      // TODO: Implement order submission
      await new Promise(resolve => setTimeout(resolve, 1000))

      toast({
        title: 'Order submitted!',
        description: 'We\'ll confirm your order shortly.',
      })

      // Reset form and cart
      event.currentTarget.reset()
      clearCart()
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'There was a problem submitting your order. Please try again.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Order Type</h2>
        <RadioGroup
          defaultValue="delivery"
          onValueChange={(value) => setOrderType(value as OrderType)}
          className="grid gap-4 md:grid-cols-2"
        >
          <div>
            <RadioGroupItem
              value="delivery"
              id="delivery"
              className="peer sr-only"
            />
            <Label
              htmlFor="delivery"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-background p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <span className="text-lg font-semibold">Delivery</span>
              <span className="text-sm text-muted-foreground">
                Fresh meals delivered to your door
              </span>
            </Label>
          </div>
          <div>
            <RadioGroupItem
              value="catering"
              id="catering"
              className="peer sr-only"
            />
            <Label
              htmlFor="catering"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-background p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <span className="text-lg font-semibold">Catering</span>
              <span className="text-sm text-muted-foreground">
                Professional catering for events
              </span>
            </Label>
          </div>
        </RadioGroup>
      </div>

      {orderType === 'delivery' && (
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">Select Items</h2>
          <MenuSelection menuItems={menuItems} />
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="date">
            {orderType === 'delivery' ? 'Delivery Date' : 'Event Date'}
          </Label>
          <Input id="date" name="date" type="date" required />
        </div>
      </div>

      {orderType === 'delivery' ? (
        <div className="space-y-2">
          <Label htmlFor="address">Delivery Address</Label>
          <Textarea
            id="address"
            name="address"
            required
            className="min-h-[100px]"
          />
        </div>
      ) : (
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="venue">Event Venue</Label>
            <Input id="venue" name="venue" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="guests">Number of Guests</Label>
            <Input
              id="guests"
              name="guests"
              type="number"
              min="10"
              required
            />
          </div>
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="notes">Special Requirements</Label>
        <Textarea
          id="notes"
          name="notes"
          placeholder="Any dietary requirements or special requests?"
          className="min-h-[100px]"
        />
      </div>

      <Button type="submit" className="w-full" size="lg" disabled={loading}>
        {loading ? 'Processing...' : `Submit Order ${orderType === 'delivery' ? `(${formatPrice(total)})` : ''}`}
      </Button>
    </form>
  )
}
