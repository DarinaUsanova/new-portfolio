import campaignBuilderCover from '@/assets/campaign-builder-cover.png'
import customPromptsCover from '@/assets/custom-prompts-cover.png'
import dataforceStudioCover from '@/assets/dataforce-studio-cover.png'
import buzzSelfServeActivationCover from '@/assets/buzz-self-serve-activation-cover.png'
import buzzSelfServeActivationVideo from '@/assets/buzz-self-serve-activation.mp4'
import voiceMessagingCover from '@/assets/voice-messaging-cover.png'

export const siteConfig = {
  name: 'Darina Usanova',
  role: 'Product Designer',
  email: 'darinushkaaaa@gmail.com',
  bio: 'I’m a Design Lead at Buzz.ai, where I help build AI features and tools for sales and marketing teams. Before that, I was the founding designer at DataForce Solutions and helped take the product from an early idea to its first clients.',
  previous:
    'I like joining the conversation early, when we’re figuring out what to build and why. That means talking things through with the team and asking lots of questions. When we start designing, I care just as much about the details that make the product easier to use.',
  links: {
    linkedin: 'https://www.linkedin.com/in/darina-usanova',
    telegram: 'https://t.me/darinushkaaa',
    resume: 'https://example.com/resume-placeholder',
  },
} as const

export const projects = [
  {
    title: 'Self-serve signup and onboarding',
    description:
      'I designed Buzz’s signup and onboarding experience so potential customers could explore the product independently and paying customers could complete essential setup without relying on onboarding calls.',
    company: 'Buzz.ai',
    role: 'Product Designer',
    year: '2026',
    cover: buzzSelfServeActivationCover,
    href: '/projects/buzz-self-serve-activation',
    video: buzzSelfServeActivationVideo,
  },
  {
    title: 'Unified campaign builder',
    description:
      "I researched and designed an MVP concept for Buzz.ai's campaign builder, bringing sequential and branching campaigns into one workflow.",
    company: 'Buzz.ai',
    role: 'Product Designer',
    year: '2026',
    cover: campaignBuilderCover,
    href: '/projects/campaign-builder-discovery',
  },
  {
    title: 'Voice notes for outreach',
    description:
      'Designed a voice messaging feature for the Buzz.ai sales outreach platform. Users can send quick voice messages in conversations or add pre-recorded voice notes to campaigns.',
    company: 'Buzz.ai',
    role: 'Product Designer',
    year: '2026',
    cover: voiceMessagingCover,
    href: '/projects/voice-notes-for-outreach',
  },
  {
    title: 'Custom prompts for AI comments',
    description:
      'I designed a reusable prompt system for Buzz.ai’s AI Comments, helping outreach teams control the style, language, and structure of generated LinkedIn comments.',
    company: 'Buzz.ai',
    role: 'Product Designer',
    year: '2025',
    cover: customPromptsCover,
    href: '/projects/custom-prompts-ai-comments',
  },
  {
    title: 'Machine learning workspace',
    description:
      'I helped take DataForce Studio from an early idea to a first release, bringing the main stages of machine-learning work into one workspace for enterprise teams.',
    company: 'DataForce Solutions',
    role: 'Founding Product Designer',
    year: '2024–2025',
    cover: dataforceStudioCover,
    href: '/projects/dataforce-studio',
  },
] as const
