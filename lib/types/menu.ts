export type MenuCategory = 'Rice Dishes' | 'Soups' | 'Stews' | 'Sides' | 'Grills'

export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: MenuCategory
  unit: 'portion' | 'piece'
  minimumOrder?: number
  available?: boolean
}

export interface MenuSection {
  id: string
  name: string
  description: string
  items: MenuItem[]
}
