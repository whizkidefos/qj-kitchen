import { UtensilsCrossed } from "lucide-react";
import Link from "next/link";
import { BUSINESS_CONFIG } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 py-8 md:grid-cols-4 lg:py-12">
          <div className="col-span-2 flex flex-col space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <UtensilsCrossed className="h-6 w-6" />
              <span className="font-bold">QJ Kitchen</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Fresh home-cooked meals and professional catering services in Manchester.
            </p>
            <div className="flex space-x-4">
              {BUSINESS_CONFIG.social.instagram && (
                <Link href={BUSINESS_CONFIG.social.instagram} className="text-muted-foreground hover:text-foreground">
                  Instagram
                </Link>
              )}
              {BUSINESS_CONFIG.social.facebook && (
                <Link href={BUSINESS_CONFIG.social.facebook} className="text-muted-foreground hover:text-foreground">
                  Facebook
                </Link>
              )}
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="text-sm font-semibold">Services</h3>
            <ul className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <li><Link href="/menu" className="hover:text-foreground">Daily Meals</Link></li>
              <li><Link href="/catering" className="hover:text-foreground">Event Catering</Link></li>
              <li><Link href="/order" className="hover:text-foreground">Food Packs</Link></li>
            </ul>
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-foreground">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
              <li><Link href="/faq" className="hover:text-foreground">FAQ</Link></li>
            </ul>
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="text-sm font-semibold">Legal</h3>
            <ul className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <li><Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-foreground">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 border-t py-8 md:flex-row md:justify-between">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            {new Date().getFullYear()} QJ Kitchen. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <Link href="/contact" className="hover:text-foreground">
              {BUSINESS_CONFIG.contact.email}
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-foreground">
              {BUSINESS_CONFIG.contact.phone}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}