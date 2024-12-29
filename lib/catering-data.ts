export type Package = {
  id: string;
  name: string;
  description: string;
  price: number;
  minGuests: number;
  maxGuests: number;
  includes: string[];
  image: string;
};

export const packages: Package[] = [
  {
    id: 'basic',
    name: 'Essential Package',
    description: 'Perfect for intimate gatherings and small celebrations',
    price: 450, // per person
    minGuests: 30,
    maxGuests: 50,
    includes: [
      '5 Main Dishes',
      '3 Side Dishes',
      '2 Desserts',
      'Unlimited Rice',
      'Basic Table Setup',
      'Service Staff'
    ],
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033'
  },
  {
    id: 'premium',
    name: 'Premium Package',
    description: 'Ideal for weddings and corporate events',
    price: 750,
    minGuests: 50,
    maxGuests: 200,
    includes: [
      '7 Main Dishes',
      '4 Side Dishes',
      '3 Desserts',
      'Unlimited Rice',
      'Premium Table Setup',
      'Full Service Staff',
      'Beverage Station'
    ],
    image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38'
  },
  {
    id: 'deluxe',
    name: 'Deluxe Package',
    description: 'Our finest offering for grand celebrations',
    price: 1200,
    minGuests: 100,
    maxGuests: 500,
    includes: [
      '10 Main Dishes',
      '6 Side Dishes',
      '4 Desserts',
      'Unlimited Rice',
      'Luxury Table Setup',
      'Full Service Staff',
      'Premium Beverage Station',
      'Live Cooking Stations',
      'Custom Menu Planning'
    ],
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed'
  }
];