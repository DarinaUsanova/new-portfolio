import campaignBuilderCover800 from '@/assets/campaign-builder-cover-800.webp'
import campaignBuilderCover1800 from '@/assets/campaign-builder-cover-1800.webp'
import customPromptsCover800 from '@/assets/custom-prompts-cover-800.webp'
import customPromptsCover1800 from '@/assets/custom-prompts-cover-1800.webp'
import dataforceStudioCover800 from '@/assets/dataforce-studio-cover-800.webp'
import dataforceStudioCover1800 from '@/assets/dataforce-studio-cover-1800.webp'
import buzzSelfServeActivationPoster from '@/assets/buzz-self-serve-activation-poster.jpg'
import buzzSelfServeActivationVideo from '@/assets/buzz-self-serve-activation-preview.mp4'
import voiceMessagingCover800 from '@/assets/voice-messaging-cover-800.webp'
import voiceMessagingCover1800 from '@/assets/voice-messaging-cover-1800.webp'

export const siteConfig = {
  name: 'Darina Usanova',
  role: 'Product Designer',
  email: 'darinushkaaaa@gmail.com',
  bio: 'I’m a Design Lead at Buzz.ai, where I work on new AI features and core product features used by sales and marketing teams. Before that, I was the founding designer at DataForce Solutions. I helped shape the product from its early idea through its first clients.',
  previous:
    'I like getting involved while the team is still deciding what to build and why. I ask questions, talk through ideas, and stay close to the details once design work begins. That’s often where I can make a product easier to use.',
  links: {
    linkedin: 'https://www.linkedin.com/in/darina-usanova',
    telegram: 'https://t.me/darinushkaaa',
    resume: 'https://drive.google.com/file/d/1c-3yjYYKsorsCeHhUxXSbJmPpriwFujW/view?usp=sharing',
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
    cover: buzzSelfServeActivationPoster,
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
    cover: campaignBuilderCover1800,
    coverSrcSet: `${campaignBuilderCover800} 800w, ${campaignBuilderCover1800} 1800w`,
    href: '/projects/campaign-builder-discovery',
  },
  {
    title: 'Voice notes for outreach',
    description:
      'Designed a voice messaging feature for the Buzz.ai sales outreach platform. Users can send quick voice messages in conversations or add pre-recorded voice notes to campaigns.',
    company: 'Buzz.ai',
    role: 'Product Designer',
    year: '2026',
    cover: voiceMessagingCover1800,
    coverSrcSet: `${voiceMessagingCover800} 800w, ${voiceMessagingCover1800} 1800w`,
    href: '/projects/voice-notes-for-outreach',
  },
  {
    title: 'Custom prompts for AI comments',
    description:
      'I designed a reusable prompt system for Buzz.ai’s AI Comments, helping outreach teams control the style, language, and structure of generated LinkedIn comments.',
    company: 'Buzz.ai',
    role: 'Product Designer',
    year: '2025',
    cover: customPromptsCover1800,
    coverSrcSet: `${customPromptsCover800} 800w, ${customPromptsCover1800} 1800w`,
    href: '/projects/custom-prompts-ai-comments',
  },
  {
    title: 'Machine learning workspace',
    description:
      'I helped take DataForce Studio from an early idea to a first release, bringing the main stages of machine-learning work into one workspace for enterprise teams.',
    company: 'DataForce Solutions',
    role: 'Founding Product Designer',
    year: '2024–2025',
    cover: dataforceStudioCover1800,
    coverSrcSet: `${dataforceStudioCover800} 800w, ${dataforceStudioCover1800} 1800w`,
    href: '/projects/dataforce-studio',
  },
] as const
