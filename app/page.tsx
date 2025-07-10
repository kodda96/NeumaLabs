import Image from 'next/image'
import Link from 'next/link'
import { HeroSection } from './components/sections/hero'
import { ServicesSection } from './components/sections/services'
import { InfluencerSection } from './components/sections/influencer'
// import { TeamSection } from './components/sections/team'
import { ContactSection } from './components/sections/contact'

interface Service {
  title: string;
  description: string;
  icon: string;
}

interface TeamMember {
  name: string;
  title: string;
  description: string;
  icon: string;
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <InfluencerSection />
      {/* <TeamSection /> */}
      <ContactSection />
    </>
  )
}

const services: Service[] = [
  {
    title: "AI Supermodels, No Drama",
    description: "Lifelike AI models for your clothing brand. No model tantrums, no last-minute cancellations.",
    icon: "👗"
  },
  {
    title: "Insta-Worthy AI Content",
    description: "Studio-quality images & videos, minus the overpriced camera crew.",
    icon: "📸"
  },
  {
    title: "Chatbots That Don't Annoy",
    description: "Smart AI that actually understands humans (no more robotic 'I don't understand' nonsense).",
    icon: "🤖"
  },
  {
    title: "AI That Saves You Money",
    description: "Less spending, more profiting. We turn 'budget-friendly' into an art form.",
    icon: "💰"
  },
  {
    title: "AI Consulting",
    description: "Got wild ideas? Let's make them happen. No AI nonsense, just real solutions.",
    icon: "🧠"
  }
]
