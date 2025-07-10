"use client"

import Image from 'next/image'
import Link from 'next/link'
import { services } from '@/data/content'
import { Button } from '../ui/neon-button'

export function ServicesSection() {
  return (
    <div className="bg-gray-50 relative z-0">
      <section 
        id="services-section" 
        className="py-20 opacity-100 will-change-transform"
        style={{ 
          transform: 'translate3d(0, 0, 0)',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Services</h2>
            <p className="text-lg text-gray-600">Choose your flavor of AI magic</p>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-[1600px]">
              {services.map((service, index) => (
                <div key={index} className="relative">
                  <div className={`relative bg-white p-6 rounded-[24px] shadow-lg text-center h-full flex flex-col ${index >= 2 ? 'blur-[8px]' : ''}`}>
                    <div className="flex-1">
                      <div className="relative w-24 h-24 mx-auto my-6 rounded-full overflow-hidden shrink-0 bg-gradient-to-br from-[#e04221] via-[#e04221] to-[#e04221]/80 p-[2px]">
                        <div className="w-full h-full rounded-full overflow-hidden bg-white">
                          <div className="relative w-full h-full">
                            <img
                              src={`/animation/${service.icon}`}
                              alt={service.title}
                              className="object-contain w-full h-full p-2"
                              loading="eager"
                            />
                          </div>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-center text-gray-900 mt-0 h-14 flex items-center justify-center">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-center mt-4 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    {index < 2 && (
                      <div className="mt-8">
                        <Link 
                          href={index === 1 ? '/ai-supermodels' : '#'} 
                          target={index === 1 ? "_blank" : undefined}
                          rel={index === 1 ? "noopener noreferrer" : undefined}
                        >
                          <button
                            className="bg-[#e04221] text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                          >
                            Visit
                          </button>
                        </Link>
                      </div>
                    )}
                  </div>
                  {index >= 2 && (
                    <div className="absolute inset-0 flex items-center justify-center z-30 translate-y-20">
                      <div className="bg-gradient-to-r from-[#e04221] via-[#e04221] to-[#e04221]/80 p-[1px] rounded-[24px] shadow-xl">
                        <div className="bg-white px-6 py-3 rounded-[24px]">
                          <span className="text-gray-900 font-bold text-lg">Coming Soon</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 