"use client";

import { useCart } from "@/hooks/use-cart";
import { CheckoutForm } from "@/components/checkout/checkout-form";
import { CartItems } from "@/components/cart/cart-items";
import { CartSummary } from "@/components/cart/cart-summary";
import { redirect } from "next/navigation";

export default function CheckoutPage() {
  const { items } = useCart();

  if (items.length === 0) {
    redirect("/menu");
  }

  return (
    <div className="container py-8">
      <h1 className="mb-8 text-3xl font-bold">Checkout</h1>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-lg border p-6">
            <h2 className="mb-4 text-xl font-semibold">Order Summary</h2>
            <CartItems />
            <CartSummary />
          </div>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="mb-4 text-xl font-semibold">Delivery Information</h2>
          <CheckoutForm />
        </div>
      </div>
    </div>
  );
}