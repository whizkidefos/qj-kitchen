"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { CateringPackage } from "@/lib/types/catering";
import { formatPrice } from "@/lib/utils";

interface PackageCardProps {
  package: CateringPackage;
  onSelect: (pkg: CateringPackage) => void;
}

export function PackageCard({ package: pkg, onSelect }: PackageCardProps) {
  return (
    <Card className="flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={pkg.image}
          alt={pkg.name}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="space-y-1">
          <h3 className="text-2xl font-bold">{pkg.name}</h3>
          <p className="text-muted-foreground">{pkg.description}</p>
        </div>
        <div className="mt-2">
          <span className="text-3xl font-bold">{formatPrice(pkg.pricePerPerson)}</span>
          <span className="text-muted-foreground"> per person</span>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Menu Items</h4>
            <ul className="space-y-2">
              {pkg.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Package Includes</h4>
            <ul className="space-y-2">
              {pkg.includes.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-sm text-muted-foreground">
            Minimum {pkg.minimumGuests} guests
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          onClick={() => onSelect(pkg)}
        >
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
}