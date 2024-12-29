import { MenuItem } from './types';

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Beef Caldereta',
    description: 'Tender beef stewed in tomato sauce with vegetables',
    price: 450,
    image: 'https://images.unsplash.com/photo-1574653853027-5382a3d23a15',
    category: 'mains',
    unit: 'litre'
  },
  {
    id: '2',
    name: 'Chicken Adobo',
    description: 'Classic Filipino adobo with chicken and potatoes',
    price: 400,
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d',
    category: 'mains',
    unit: 'litre'
  },
  {
    id: '3',
    name: 'Sinigang na Baboy',
    description: 'Sour soup with pork and vegetables',
    price: 400,
    image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f',
    category: 'soups',
    unit: 'litre'
  },
  {
    id: '4',
    name: 'Leche Flan',
    description: 'Creamy caramel custard dessert',
    price: 250,
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729',
    category: 'desserts',
    unit: 'piece'
  }
];