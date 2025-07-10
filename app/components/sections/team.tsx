"use client"

import Image from 'next/image'
import { TEAM_MEMBERS } from '@/data/constants'
import { Tilt } from '../ui/tilt'
import { Spotlight } from '../ui/spotlight'

export function TeamSection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Object.values(TEAM_MEMBERS).map((member) => (
            <Tilt 
              key={member.name}
              className="group relative h-full"
              rotationFactor={8}
              isRevese
              springOptions={{
                stiffness: 26.7,
                damping: 4.1,
                mass: 0.2,
              }}
            >
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center overflow-hidden h-full flex flex-col">
                <Spotlight
                  className="z-10 from-blue-100/50 via-blue-50/20 to-transparent blur-2xl"
                  size={200}
                />
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={member.icon}
                    alt={member.name}
                    fill
                    priority={true}
                    loading="eager"
                    quality={75}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzYvLy02Mzo6PkJBPjpBOjM6RUVIWElHTU1NNztVXVVLTUVNTUv/2wBDARUXFyAeIR4gIEtJSE5LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0v/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    sizes="(max-width: 768px) 128px, 128px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{
                      transform: 'translate3d(0, 0, 0)',
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden'
                    }}
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-white">{member.name}</h3>
                  <p className="text-[#e04221] font-medium mb-2">{member.title}</p>
                  <p className="text-sm text-gray-300">{member.description}</p>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  )
} 