import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function OrderSuccessPage() {
  return (
    <div className="container flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-8">
      <div className="text-center">
        <CheckCircle className="mx-auto mb-4 h-12 w-12 text-green-500" />
        <h1 className="mb-2 text-3xl font-bold">Order Confirmed!</h1>
        <p className="mb-8 text-muted-foreground">
          Thank you for your order. We&apos;ll send you an email with the order details.
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <Link href="/menu">Continue Shopping</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/orders">View Orders</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}