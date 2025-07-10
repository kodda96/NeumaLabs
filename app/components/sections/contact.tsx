"use client"

import { useState } from 'react'
import { ContactForm } from '../ui/contact-form'
import Image from 'next/image'

export function ContactSection() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-2 text-gray-900 flex items-center justify-center gap-3">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-white/20 to-white/5 p-2 shadow-lg backdrop-blur-sm transform-gpu">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 via-white/5 to-transparent animate-pulse will-change-transform" />
              <div className="absolute inset-0 rounded-xl bg-white/5 shadow-inner" />
              <Image
                src="/animation/call.gif"
                alt="Call icon"
                fill
                priority={true}
                loading="eager"
                className="object-contain p-1.5 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] rounded-xl will-change-transform"
                style={{
                  transform: 'translate3d(0, 0, 0)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden'
                }}
              />
            </div>
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600">Let's create something amazing together</p>
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl mb-6 text-gray-800">
            Want AI that actually works for your business?
            Shoot us a message, and let's cook up something amazing.
          </p>
          <button 
            onClick={() => setIsFormOpen(true)}
            className="bg-[#e04221] text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
          >
            Let's Chat
          </button>
        </div>
      </div>

      <ContactForm 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </section>
  )
} 