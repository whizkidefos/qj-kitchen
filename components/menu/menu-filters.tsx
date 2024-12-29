"use client";

import { Button } from "@/components/ui/button";

interface MenuFiltersProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function MenuFilters({ activeCategory, onCategoryChange }: MenuFiltersProps) {
  const categories = ['all', 'mains', 'soups', 'desserts', 'drinks'];

  return (
    <div className="flex gap-2 overflow-x-auto pb-4">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          className="capitalize"
        >
          {category}
        </Button>
      ))}
    </div>
  );
}