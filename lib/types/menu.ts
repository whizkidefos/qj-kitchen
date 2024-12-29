export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  unit: 'litre' | 'pack' | 'serving';
  minimumOrder?: number;
  available?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  items: MenuItem[];
}
