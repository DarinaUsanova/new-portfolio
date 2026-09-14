import campaignBuilderCover from '@/assets/campaign-builder-cover.png'
import voiceMessagingCover from '@/assets/voice-messaging-cover.png'

export const siteConfig = {
  name: 'Darina Usanova',
  role: 'Product Designer',
  email: 'darinushkaaaa@gmail.com',
  bio: 'Currently Design Lead at Buzz.ai. I work across both product and brand, helping shape the visual identity and user experience. I make data-informed decisions and bring both strategic clarity and hands-on execution to the work. Big on functional design, clarity, and intentional choices.',
  previous: 'Previously at DataForce Solutions and RZD.',
  availability:
    'I’m always open to connecting with thoughtful people and collaborating on ambitious projects.',
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
    title: 'Voice Messaging for Outreach',
    description:
      'Designed a voice messaging feature for the Buzz.ai sales outreach platform. Users can send quick voice messages in conversations or add pre-recorded voice notes to campaigns.',
    company: 'Buzz.ai',
    role: 'Product Designer',
    year: '2026',
    cover: voiceMessagingCover,
  },
] as const
