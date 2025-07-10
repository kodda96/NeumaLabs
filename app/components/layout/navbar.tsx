"use client"

import Link from 'next/link'
import { NAVIGATION } from '@/data/constants'
import { ContactForm } from '../ui/contact-form'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { signIn } from 'next-auth/react'
import SignInModal from '../ui/sign-in-modal'
import { useSession, signOut } from 'next-auth/react'

export function Navbar() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '#services-section') {
      e.preventDefault()
      const servicesSection = document.getElementById('services-section')
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 px-4 py-4 bg-white">
        {/* User Avatar or Sign In Button absolutely positioned at the right end */}
        {session && session.user ? (
          <div className="absolute right-8 top-1/2 -translate-y-1/2">
            <button
              onClick={() => setIsDropdownOpen((v) => !v)}
              className="focus:outline-none"
            >
              <img
                src={session.user.image || ''}
                alt="User Avatar"
                className="w-10 h-10 rounded-full border-2 border-gray-200 shadow-sm object-cover"
              />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 z-50">
                <div className="flex flex-col items-center p-4">
                  <img
                    src={session.user.image || ''}
                    alt="User Avatar"
                    className="w-16 h-16 rounded-full border-2 border-gray-200 object-cover mb-2"
                  />
                  <div className="font-semibold text-gray-900">{session.user.name}</div>
                  <div className="text-gray-500 text-sm mb-2">{session.user.email}</div>
                  <button
                    onClick={() => { setIsDropdownOpen(false); signOut(); }}
                    className="text-[#e04221] font-medium hover:underline focus:outline-none transition-colors mt-2"
                    style={{ background: 'none', border: 'none' }}
                  >
                    Log Out
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => setIsSignInOpen(true)}
            className="text-[#e04221] font-medium hover:underline focus:outline-none transition-colors absolute right-8 top-1/2 -translate-y-1/2"
            style={{ background: 'none', border: 'none' }}
          >
            Sign In
          </button>
        )}
        <nav className="flex h-14 items-center justify-between rounded-[24px] border border-gray-200 bg-white/80 px-6 backdrop-blur-sm shadow-lg max-w-6xl mx-auto relative">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between h-14">
              {/* Logo */}
              <Link href="/" className="text-xl text-black">
                <span className="font-black">Neuma</span>
                <span className="font-normal">Labs</span>
              </Link>

              {/* Right side navigation and button */}
              <div className="flex items-center space-x-8">
                {/* Navigation Links */}
                <div className="hidden md:flex items-center space-x-8">
                  {NAVIGATION.company.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleScroll(e, link.href)}
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                {/* Contact Us Button */}
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="bg-[#e04221] text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <ContactForm 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
      <SignInModal isOpen={isSignInOpen} onClose={() => setIsSignInOpen(false)} />
    </>
  )
} 