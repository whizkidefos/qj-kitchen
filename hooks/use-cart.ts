"use client";

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem } from '@/lib/types/cart';
import { MenuItem } from '@/lib/types/menu';
import { calculateDeliveryFee } from '@/lib/utils/price';

interface CartStore {
  items: CartItem[];
  addItem: (item: MenuItem) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  subtotal: number;
  deliveryFee: number;
  total: number;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => {
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id);
          if (existingItem) {
            return {
              items: state.items.map((i) =>
                i.id === item.id
                  ? { ...i, quantity: i.quantity + 1 }
                  : i
              ),
            };
          }
          return { items: [...state.items, { ...item, quantity: 1 }] };
        });
      },
      removeItem: (itemId) => {
        set((state) => ({
          items: state.items.filter((i) => i.id !== itemId),
        }));
      },
      updateQuantity: (itemId, quantity) => {
        if (quantity < 1) return;
        set((state) => ({
          items: state.items.map((item) =>
            item.id === itemId ? { ...item, quantity } : item
          ),
        }));
      },
      clearCart: () => set({ items: [] }),
      get subtotal() {
        return get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },
      get deliveryFee() {
        const subtotal = get().subtotal;
        return calculateDeliveryFee(subtotal);
      },
      get total() {
        return get().subtotal + get().deliveryFee;
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);