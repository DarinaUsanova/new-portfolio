import campaignBuilderCover from '@/assets/campaign-builder-cover.png'
import customPromptsCover from '@/assets/custom-prompts-cover.png'
import dataforceStudioCover from '@/assets/dataforce-studio-case/workflow.png'
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
    title: 'Campaign Builder: One Workflow for Simple and Complex Campaigns',
    description:
      'I explored how teams create complex campaigns and used those insights to design a single builder. It helps teams see how everything fits together, make changes, and catch issues before launch.',
    company: 'Buzz.ai',
    role: 'Product Designer',
    year: '2026',
    cover: campaignBuilderCover,
    href: '/projects/campaign-builder-discovery',
  },
  {
    title: 'Voice Notes for Outreach',
    description:
      'Designed a voice messaging feature for the Buzz.ai sales outreach platform. Users can send quick voice messages in conversations or add pre-recorded voice notes to campaigns.',
    company: 'Buzz.ai',
    role: 'Product Designer',
    year: '2026',
    cover: voiceMessagingCover,
    href: '/projects/voice-notes-for-outreach',
  },
  {
    title: 'Custom Prompts: From Preset Tones to a Reusable AI Writing System',
    description:
      'I designed a reusable prompt system for Buzz.ai’s AI Comments, helping outreach teams control the style, language, and structure of generated LinkedIn comments.',
    company: 'Buzz.ai',
    role: 'Product Designer',
    year: '2025',
    cover: customPromptsCover,
    href: '/projects/custom-prompts-ai-comments',
  },
  {
    title: 'DataForce Studio: One Workspace for Machine Learning Teams',
    description:
      'I helped take DataForce Studio from an early idea to a first release, bringing the main stages of machine-learning work into one workspace for enterprise teams.',
    company: 'DataForce Solutions',
    role: 'Founding Product Designer',
    year: '2025',
    cover: dataforceStudioCover,
    href: '/projects/dataforce-studio',
  },
] as const
