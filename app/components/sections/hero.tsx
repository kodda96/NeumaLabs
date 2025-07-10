"use client"

import { Particles } from '../ui/particles'
import { useCallback } from 'react'

export function HeroSection() {
  const scrollToServices = useCallback(() => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <section className="relative h-[100vh] min-h-[600px] flex items-center justify-center bg-white text-gray-900 overflow-hidden will-change-transform">
      {/* Background Scene */}
      <div className="absolute inset-0 z-20 transform-gpu flex items-center justify-center">
        <Particles />
        <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.1),rgba(255,255,255,0))]" />
      </div>

      <div className="pointer-events-none container mx-auto px-4 relative z-30 transform-gpu">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            Growing Smarter With AI
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 font-light italic">
            Because why pay more when AI can do it smarter?
          </p>
          <div>
            <button 
              className="pointer-events-auto bg-[#e04221] text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
              onClick={scrollToServices}
            >
              Let's Make Magic!
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 