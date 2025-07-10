import { Service, TeamMember } from '@/types'
import { TEAM_MEMBERS } from './constants'

export const services: Service[] = [
  {
    title: "AI Agents, Always On",
    description: "Smart AI assistants that automate tasks, handle queries, and boost productivity.",
    icon: "agent.png"
  },
  {
    title: "AI Supermodels, No Drama",
    description: "Lifelike AI models for your clothing brand. No model tantrums, no last-minute cancellations.",
    icon: "model.png"
  },
  {
    title: "Insta-Worthy AI Content",
    description: "Studio-quality images & videos, minus the overpriced camera crew.",
    icon: "content.png"
  },
  {
    title: "Chatbots That Don't Annoy",
    description: "Smart AI that actually understands humans (no more robotic 'I don't understand' nonsense).",
    icon: "chat.png"
  }
]

export const team: TeamMember[] = [
  TEAM_MEMBERS.FOUNDER,
  TEAM_MEMBERS.CREATIVE_LEAD,
  TEAM_MEMBERS.TECH_GURU,
  TEAM_MEMBERS.CONSULTING_GENIUS
] 