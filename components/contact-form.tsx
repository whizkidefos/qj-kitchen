'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/components/ui/use-toast'

export function ContactForm() {
  const [loading, setLoading] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)

    const formData = new FormData(event.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    }

    try {
      // TODO: Implement contact form submission
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulated delay
      
      toast({
        title: 'Message sent!',
        description: 'We\'ll get back to you as soon as possible.',
      })
      
      // Reset form
      event.currentTarget.reset()
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'There was a problem sending your message. Please try again.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="space-y-2">
        <Input
          name="name"
          placeholder="Your Name"
          required
          disabled={loading}
        />
      </div>
      <div className="space-y-2">
        <Input
          name="email"
          type="email"
          placeholder="Your Email"
          required
          disabled={loading}
        />
      </div>
      <div className="space-y-2">
        <Input
          name="subject"
          placeholder="Subject"
          required
          disabled={loading}
        />
      </div>
      <div className="space-y-2">
        <Textarea
          name="message"
          placeholder="Your Message"
          required
          disabled={loading}
          className="min-h-[150px]"
        />
      </div>
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}
