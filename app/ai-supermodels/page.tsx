"use client"

import Image from 'next/image'
import { Button } from '../components/ui/neon-button'
import { ContactForm } from '../components/ui/contact-form'
import { useState } from 'react'
import { Navbar } from '../components/layout/navbar'

export default function AISupermodelsPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="text-gray-900 pt-24">
        {/* Hero Section */}
        <section className="pb-1 py-20 flex items-center justify-center relative overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Create stunning fashion photos with <br /> <span className="italic text-[#e04221]">Neuma</span> AI models
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Perfect for fashion brands that value quality, speed, and flexibility. Bring your products to life at a fraction of the cost.
            </p>
          </div>
        </section>

        {/* Example Image Section */}
        <section className="pt-1 pb-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/neumaModels/model.png"
                alt="AI Model Showcase"
                width={1200}
                height={800}
                className="w-full h-auto object-scale-down"
                priority
              />
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              How <span className="italic text-[#e04221]">it</span> works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold mb-4 text-gray-900">1. Upload</div>
                <p className="text-gray-600 mb-6">Upload the images of your products</p>
                <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/neumaModels/upload.jpg"
                    alt="Upload Process"
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-4 text-gray-900">2. Transform</div>
                <p className="text-gray-600 mb-6">Select the model and background</p>
                <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/neumaModels/transform.png"
                    alt="Transform your products"
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-4 text-gray-900">3. Share</div>
                <p className="text-gray-600">Add to your website, social media profile or digital campaign</p>
                <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/neumaModels/share.png"
                    alt="Share your images"
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-10 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              AI solutions to <span className="italic text-[#e04221]">boost</span> your fashion brand
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Ever-growing model portfolio</h3>
                <p className="text-gray-600">Our unique selection of AI generated models includes diverse body types, ethnicities, and ages.</p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Flat-lay to on-model</h3>
                <p className="text-gray-600">Turn your packshot images into stunning on-model photos. No photoshoot required.</p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Swap backgrounds</h3>
                <p className="text-gray-600">Enhance basic photos or create stunning lifestyle images with just one click.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Ready to transform your fashion photography?</h2>
            <button
              onClick={() => setIsFormOpen(true)}
              className="bg-[#e04221] text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]">
              Get Started Now
            </button>
          </div>
        </section>

        <ContactForm 
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
        />
      </main>
    </div>
  )
} 