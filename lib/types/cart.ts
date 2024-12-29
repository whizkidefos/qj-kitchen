import { MenuItem } from './menu'

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface CartSummary {
  subtotal: number;
  deliveryFee: number;
  vat: number;
  total: number;
}
