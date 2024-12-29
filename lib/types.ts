export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'mains' | 'soups' | 'desserts' | 'drinks';
  unit: 'plate' | 'litre' | 'piece';
};

export type CartItem = MenuItem & {
  quantity: number;
};

export type OrderDetails = {
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
};

export type CateringPackage = {
  id: string;
  name: string;
  description: string;
  price: number;
  minGuests: number;
  maxGuests: number;
  includes: string[];
  image: string;
  items: MenuItem[];
};

export type CateringBooking = {
  packageId: string;
  date: string;
  guests: number;
  eventTypes: string[];
  specialRequests?: string;
  customerInfo: CustomerInfo;
};

export type CustomerInfo = {
  name: string;
  email: string;
  phone: string;
  address: string;
};