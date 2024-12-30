'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { BookingForm } from "@/components/catering/booking-form"
import { PackageCard } from "@/components/catering/package-card"
import { CateringPackage } from "@/lib/types/catering"

interface BookingDialogProps {
  packages: CateringPackage[]
}

export function BookingDialog({ packages }: BookingDialogProps) {
  const [selectedPackage, setSelectedPackage] = useState<CateringPackage | null>(null)

  return (
    <>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {packages.map((pkg) => (
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
    </>
  )
}
