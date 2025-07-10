"use client"

import Image from 'next/image'
import AutoScroll from "embla-carousel-auto-scroll"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel"
import { memo, useMemo, useState, useCallback, useEffect, useRef } from "react"
import type { EmblaOptionsType } from 'embla-carousel'
import dynamic from 'next/dynamic'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { GradientButton } from '../ui/gradient-button'
import { Button } from '../ui/neon-button'

const ContactForm = dynamic(() => import('../ui/contact-form').then(mod => mod.ContactForm), {
  ssr: false,
  loading: () => null
})

interface CarouselImageProps {
  src: string;
  alt: string;
  description: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  isHovered: boolean;
}

const CarouselImage = memo(function CarouselImage({ 
  src, 
  alt, 
  description, 
  onMouseEnter,
  onMouseLeave,
  isHovered 
}: CarouselImageProps) {
  return (
    <div 
      className={`relative h-96 rounded-xl overflow-hidden group will-change-transform ${isHovered ? 'scale-105 z-10' : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        transform: 'translate3d(0, 0, 0)',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden'
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={false}
        loading="lazy"
        quality={65}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzYvLy02Mzo6PkJBPjpBOjM6RUVIWElHTU1NNztVXVVLTUVNTUv/2wBDARUXFyAeIR4gIEtJSE5LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0v/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
        className="object-cover"
      />
      <div 
        className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      >
        <p className="text-white text-lg font-medium">
          {description}
        </p>
      </div>
    </div>
  )
})
CarouselImage.displayName = 'CarouselImage'

const influencerImages = [
  {
    id: "img-1",
    src: "/ai-influencer/1.png",
    alt: "AI Influencer Showcase 1",
    description: "Bringing your brand to life with AI-powered authenticity"
  },
  {
    id: "img-2",
    src: "/ai-influencer/2.png",
    alt: "AI Influencer Portfolio 1",
    description: "Creating engaging content that resonates with your audience"
  },
  {
    id: "img-3",
    src: "/ai-influencer/3.png",
    alt: "AI Influencer Lifestyle",
    description: "Crafting authentic lifestyle moments with AI precision"
  },
  {
    id: "img-4",
    src: "/ai-influencer/4.png",
    alt: "AI Fashion Showcase",
    description: "Elevating fashion with AI-driven creativity"
  },
  {
    id: "img-5",
    src: "/ai-influencer/5.png",
    alt: "AI Travel Content",
    description: "Exploring new horizons with AI-powered storytelling"
  },
  {
    id: "img-6",
    src: "/ai-influencer/6.png",
    alt: "AI Lifestyle Content",
    description: "Capturing life's moments through an AI lens"
  }
] as const

const InfluencerSection = memo(function InfluencerSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isScrolling, setIsScrolling] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "center" }, [
    Autoplay({ delay: 2000, stopOnInteraction: false })
  ]);

  const handleMouseEnter = useCallback((id: string) => {
    setHoveredId(id);
    setIsScrolling(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredId(null);
    setIsScrolling(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry) {
          const isIntersecting = entry.isIntersecting;
          setIsVisible(isIntersecting);
          setIsScrolling(isIntersecting);
        }
      },
      { 
        threshold: 0.1, 
        rootMargin: '50px',
        root: null 
      }
    );

    if (carouselRef.current) {
      requestAnimationFrame(() => {
        observer.observe(carouselRef.current!);
      });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const autoScrollPlugin = useMemo(() => {
    return AutoScroll({ 
      playOnInit: true,
      speed: 0.7,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
      active: isScrolling && isVisible,
      rootNode: (emblaRoot) => emblaRoot.parentElement
    });
  }, [isScrolling, isVisible]);

  const carouselOptions = useMemo<EmblaOptionsType>(() => ({
    loop: true,
    dragFree: true,
    skipSnaps: false,
    inViewThreshold: 0.5,
    containScroll: "trimSnaps",
    watchDrag: true,
    align: "center",
    direction: 'ltr',
    slidesToScroll: 1,
    speed: 15,
    breakpoints: {
      '(max-width: 640px)': { 
        align: 'center',
        slidesToScroll: 1
      },
      '(min-width: 641px)': { 
        align: 'center',
        slidesToScroll: 2
      }
    }
  }), []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Meet Aisha</h2>
          <p className="text-xl mb-8 text-gray-800">
            Say hello to our AI-powered superstar taking over social media. Always on-trend, always available, and never needs a coffee break. Want your own AI brand ambassador? We got you.
          </p>
          <div className="relative mt-12 carousel-container" ref={carouselRef}>
            <Carousel
              ref={emblaRef}
              opts={carouselOptions}
              plugins={[autoScrollPlugin]}
              className="w-full cursor-grab active:cursor-grabbing"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {influencerImages.map((image) => (
                  <CarouselItem 
                    key={image.id} 
                    className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                  >
                    <CarouselImage 
                      {...image} 
                      onMouseEnter={() => handleMouseEnter(image.id)}
                      onMouseLeave={handleMouseLeave}
                      isHovered={hoveredId === image.id}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="mt-12">
            <button 
              onClick={() => setIsFormOpen(true)}
              className="bg-[#e04221] text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
            >
              Create Your AI Influencer
            </button>
          </div>
        </div>
      </div>

      <ContactForm 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </section>
  )
})

export { InfluencerSection } 