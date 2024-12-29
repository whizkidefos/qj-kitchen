"use client";

import { useState } from "react";
import { cateringPackages } from "@/lib/catering-data";
import { PackageCard } from "@/components/catering/package-card";
import { BookingForm } from "@/components/catering/booking-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CateringPackage } from "@/lib/types";

export default function CateringPage() {
  const [selectedPackage, setSelectedPackage] = useState<CateringPackage | null>(null);

  return (
    <div className="container py-8">
      <div className="mb-8 text-center">
        <h1 className="mb-4 text-4xl font-bold">Catering Packages</h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          From intimate gatherings to grand celebrations, our catering packages are
          designed to make your event memorable. Each package includes professional
          service staff and premium quality dishes.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {cateringPackages.map((pkg) => (
          <PackageCard
            key={pkg.id}
            package={pkg}
            onSelect={setSelectedPackage}
          />
        ))}
      </div>

      <Dialog open={!!selectedPackage} onOpenChange={() => setSelectedPackage(null)}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Book {selectedPackage?.name}</DialogTitle>
          </DialogHeader>
          {selectedPackage && (
            <BookingForm
              selectedPackage={selectedPackage}
              onClose={() => setSelectedPackage(null)}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}