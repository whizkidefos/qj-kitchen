"use client";

import { useState } from 'react';
import { MenuFilters } from '@/components/menu/menu-filters';
import { MenuItemCard } from '@/components/menu/menu-item-card';
import { menuItems } from '@/lib/menu-data';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="container py-8">
      <h1 className="mb-8 text-3xl font-bold">Our Menu</h1>
      <MenuFilters
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredItems.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}