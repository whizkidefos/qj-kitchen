'use client'

import { MenuItem } from '@/lib/types/menu'
import { MenuItemCard } from './menu-item-card'

interface MenuSectionProps {
  title: string
  items: MenuItem[]
}

export function MenuSection({ title, items }: MenuSectionProps) {
  if (items.length === 0) return null

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
