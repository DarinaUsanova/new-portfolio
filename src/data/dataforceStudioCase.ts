import registryImage from '@/assets/dataforce-studio-case/registry.png'
import screensImage from '@/assets/dataforce-studio-case/screens.png'
import tracesImage from '@/assets/dataforce-studio-case/traces.png'
import workflowImage from '@/assets/dataforce-studio-case/workflow.png'

type CaseStudyFigure = {
  src: string
  alt: string
  caption: string
  priority?: boolean
}

type CaseStudySection = {
  title: string
  showHeading?: boolean
  paragraphs: readonly string[]
  figures: readonly CaseStudyFigure[]
}

type DataforceStudioCase = {
  title: string
  metadata: readonly string[]
  introduction: readonly string[]
  heroFigure: CaseStudyFigure
  sections: readonly CaseStudySection[]
}

export const dataforceStudioCase: DataforceStudioCase = {
  title: 'DataForce Studio: One Workspace for Machine Learning Teams',
  metadata: [
    'Role: Founding Product Designer; sole designer',
    'Scope: Product structure, navigation, key workflows, prototyping, and design system',
    'Timeline: 2024–2025; one year from idea to MVP',
    'Team: Company founders, CEO, one frontend engineer, and two backend engineers',
    'Status: Launched and used in customers’ production workflows',
  ],
  introduction: [
    'I led product design for DataForce Studio, bringing the main stages of machine-learning work into one workspace. As the founding and sole designer, I helped take the product from an early idea to a first release used by enterprise customers.',
  ],
  heroFigure: {
    src: workflowImage,
    alt: 'DataForce Studio workflow showing connected input, gate, processor, and output nodes',
    caption: 'Prompt Optimization workflow',
    priority: true,
  },
  sections: [
    {
      title: 'The problem',
      paragraphs: [
        'Machine-learning teams often used separate tools to prepare data, train models, put them into use, and monitor their performance. Moving between these tools meant keeping track of related work in different places and piecing together its progress.',
        'DataForce Solutions set out to bring these stages into one product. The challenge was to make the work easier to follow while preserving the flexibility and control that experienced teams needed.',
      ],
      figures: [],
    },
    {
      title: 'My role',
      paragraphs: [
        'I joined at the idea stage and worked with the founders, CEO, and engineers to define the first version of the product.',
        'I owned the product structure, navigation, key workflows, prototypes, and design system. A central part of my work was deciding how the system’s underlying complexity should appear in the interface: what users needed to see, how related work should connect, and where they needed control.',
        'I refined the designs as technical constraints and product priorities evolved.',
      ],
      figures: [],
    },
    {
      title: 'What informed the design',
      paragraphs: [
        'The initial direction came from the founders’ experience as ML engineers and data scientists, alongside informal feedback from peers at European Python conferences. These sources helped frame the problem and shape the MVP scope.',
      ],
      figures: [],
    },
    {
      title: 'Connecting the stages of work',
      paragraphs: [
        'I organised the product around the main stages of machine-learning work. The navigation reflected how teams moved from preparing data to developing and using models.',
        'Within that structure, I made the connections between related items and their status visible. The aim was to help users follow their work across stages and understand how individual activities fitted into the wider process.',
      ],
      figures: [],
    },
    {
      title: 'Making room for iteration',
      paragraphs: [
        'Improving prompts—the instructions given to AI models—required a more flexible approach. The work did not follow a fixed sequence, so a single step-by-step form could not represent the process.',
        'I designed a workflow that supported iteration, keeping the connections between steps and their current status visible as users refined their prompts.',
      ],
      figures: [],
    },
    {
      title: 'Keeping the growing product consistent',
      paragraphs: [
        'As the MVP expanded, I developed reusable components and interaction patterns in the design system. This gave the team a shared foundation for adding new product areas and kept familiar actions consistent across the interface.',
      ],
      figures: [],
    },
    {
      title: 'Product UI',
      showHeading: false,
      paragraphs: [],
      figures: [
        {
          src: registryImage,
          alt: 'DataForce Studio Registry showing collections, deployments, satellites, and secrets',
          caption:
            'The Registry brings collections, deployments, satellites, and secrets into the same Data Team Space.',
        },
        {
          src: screensImage,
          alt: 'DataForce Studio prompt optimization workspace with task settings, model comparison, workflow progress, and charts',
          caption: 'Selected UI elements used across the product.',
        },
        {
          src: tracesImage,
          alt: 'DataForce Studio trace view for Workflow.run showing nested steps and request attributes',
          caption:
            'The trace view exposes a workflow run, its nested steps, and request attributes.',
        },
      ],
    },
    {
      title: 'Release and validation',
      paragraphs: [
        'During development, the seven-person team reviewed and tested the core flows. These internal reviews provided feedback on the product’s structure and behaviour.',
        'Within a year, we launched an MVP covering the main stages of machine-learning work. The first enterprise customers used it in production workflows, and the team demonstrated the product and tested features at European Python conferences.',
        'The project delivered a working product and a design foundation for continued development. The evidence was qualitative; without consistent product metrics, we could not quantify changes in usability or efficiency.',
      ],
      figures: [],
    },
  ],
} as const
