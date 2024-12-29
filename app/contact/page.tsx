import { Metadata } from 'next'
import { ContactForm } from '@/components/contact-form'
import { BUSINESS_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact Us | QJ Kitchen',
  description: 'Get in touch with QJ Kitchen for inquiries about our home-cooked meals, catering services, or special orders.',
}

export default function ContactPage() {
  return (
    <div className="py-12 space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We'd love to hear from you. Get in touch with us for any inquiries.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <ContactForm />
          </div>
        </section>

        <section className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Contact Information</h2>
            <div className="space-y-3">
              <p className="flex items-center space-x-2">
                <span className="font-medium">Email:</span>
                <a 
                  href={`mailto:${BUSINESS_CONFIG.contact.email}`}
                  className="text-primary hover:underline"
                >
                  {BUSINESS_CONFIG.contact.email}
                </a>
              </p>
              <p className="flex items-center space-x-2">
                <span className="font-medium">Phone:</span>
                <a 
                  href={`tel:${BUSINESS_CONFIG.contact.phone}`}
                  className="text-primary hover:underline"
                >
                  {BUSINESS_CONFIG.contact.phone}
                </a>
              </p>
              <p className="flex items-center space-x-2">
                <span className="font-medium">Location:</span>
                <span>{BUSINESS_CONFIG.location.city}, {BUSINESS_CONFIG.location.country}</span>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Business Hours</h2>
            <div className="space-y-2">
              <p className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 AM - 8:00 PM</span>
              </p>
              <p className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 AM - 6:00 PM</span>
              </p>
              <p className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Follow Us</h2>
            <div className="flex space-x-4">
              {BUSINESS_CONFIG.social.instagram && (
                <a href={BUSINESS_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Instagram
                </a>
              )}
              {BUSINESS_CONFIG.social.facebook && (
                <a href={BUSINESS_CONFIG.social.facebook} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Facebook
                </a>
              )}
              {BUSINESS_CONFIG.social.twitter && (
                <a href={BUSINESS_CONFIG.social.twitter} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Twitter
                </a>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
