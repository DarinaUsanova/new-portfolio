import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)))
const outputRoot = join(projectRoot, 'dist')
const siteOrigin = 'https://darinausanova.com'

const pages = [
  {
    path: 'projects/buzz-self-serve-activation',
    title: 'Self-serve signup and onboarding | Darina Usanova',
    description:
      'I designed Buzz’s signup and onboarding experience so potential customers could explore the product independently and paying customers could complete essential setup without relying on onboarding calls.',
    image: 'buzz-self-serve-activation-poster',
    imageWidth: 960,
    imageHeight: 578,
    imageAlt: 'Self-serve signup and onboarding project cover',
  },
  {
    path: 'projects/campaign-builder-discovery',
    title: 'Unified campaign builder | Darina Usanova',
    description:
      "I researched and designed an MVP concept for Buzz.ai's campaign builder, bringing sequential and branching campaigns into one workflow.",
    image: 'campaign-builder-cover',
    imageAlt: 'Unified campaign builder project cover',
  },
  {
    path: 'projects/voice-notes-for-outreach',
    title: 'Voice notes for outreach | Darina Usanova',
    description:
      'Designed a voice messaging feature for the Buzz.ai sales outreach platform. Users can send quick voice messages in conversations or add pre-recorded voice notes to campaigns.',
    image: 'voice-messaging-cover',
    imageAlt: 'Voice notes for outreach project cover',
  },
  {
    path: 'projects/custom-prompts-ai-comments',
    title: 'Custom prompts for AI comments | Darina Usanova',
    description:
      'I designed a reusable prompt system for Buzz.ai’s AI Comments, helping outreach teams control the style, language, and structure of generated LinkedIn comments.',
    image: 'custom-prompts-cover',
    imageAlt: 'Custom prompts for AI comments project cover',
  },
  {
    path: 'projects/dataforce-studio',
    title: 'Machine learning workspace | Darina Usanova',
    description:
      'I helped take DataForce Studio from an early idea to a first release, bringing the main stages of machine-learning work into one workspace for enterprise teams.',
    image: 'dataforce-studio-cover',
    imageAlt: 'Machine learning workspace project cover',
  },
]

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

const template = await readFile(join(outputRoot, 'index.html'), 'utf8')
const assets = await readdir(join(outputRoot, 'assets'))

const playgroundDirectory = join(outputRoot, 'sandbox')
await mkdir(playgroundDirectory, { recursive: true })
await writeFile(
  join(playgroundDirectory, 'index.html'),
  template.replace(/<title>[^<]*<\/title>/, '<title>Playground — Darina Usanova</title>'),
)

for (const page of pages) {
  const imageFile = assets.find((file) => file.startsWith(`${page.image}-`) && /\.(png|jpg)$/.test(file))
  if (!imageFile) throw new Error(`Could not find the built cover image for ${page.path}`)

  const pageUrl = `${siteOrigin}/${page.path}`
  const imageUrl = `${siteOrigin}/assets/${imageFile}`
  const title = escapeHtml(page.title)
  const description = escapeHtml(page.description)
  const metadata = [
    `<meta name="description" content="${description}" />`,
    `<link rel="canonical" href="${pageUrl}" />`,
    '<meta property="og:type" content="website" />',
    `<meta property="og:url" content="${pageUrl}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:image" content="${imageUrl}" />`,
    `<meta property="og:image:width" content="${page.imageWidth ?? 1800}" />`,
    `<meta property="og:image:height" content="${page.imageHeight ?? 1200}" />`,
    `<meta property="og:image:alt" content="${escapeHtml(page.imageAlt)}" />`,
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
    `<meta name="twitter:image" content="${imageUrl}" />`,
  ].join('\n    ')
  const html = template
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(/<meta\s+name="description"[^>]*\/>/, '')
    .replace(/<meta\s+(?:property="og:[^"]+"|name="twitter:[^"]+")[^>]*\/>\s*/g, '')
    .replace('</head>', `    ${metadata}\n  </head>`)
  const pageDirectory = join(outputRoot, page.path)

  await mkdir(pageDirectory, { recursive: true })
  await writeFile(join(pageDirectory, 'index.html'), html)
}
