'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { useCart } from '@/hooks/use-cart'
import { formatPrice } from '@/lib/utils/price'
import { MenuItem } from '@/lib/types/menu'
import Image from 'next/image'

interface MenuSelectionProps {
  menuItems: MenuItem[]
}

export function MenuSelection({ menuItems }: MenuSelectionProps) {
  const { items, addItem, removeItem, updateQuantity, subtotal, deliveryFee, total } = useCart()
  const [searchQuery, setSearchQuery] = useState('')

  const filteredItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const getItemQuantity = (itemId: string) => {
    const cartItem = items.find(item => item.id === itemId)
    return cartItem?.quantity || 0
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="search">Search Menu</Label>
          <Input
            id="search"
            placeholder="Search by name or category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <ScrollArea className="h-[400px] rounded-md border">
          <div className="p-4 grid gap-4">
            {filteredItems.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="relative w-20 h-20 rounded-md overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-1">
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    <p className="font-medium">{formatPrice(item.price)} per {item.unit}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => removeItem(item.id)}
                      disabled={getItemQuantity(item.id) === 0}
                    >
                      -
                    </Button>
                    <span className="w-8 text-center">{getItemQuantity(item.id)}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => addItem(item)}
                    >
                      +
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Order Summary</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Fee</span>
            <span>{formatPrice(deliveryFee)}</span>
          </div>
          <Separator />
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
