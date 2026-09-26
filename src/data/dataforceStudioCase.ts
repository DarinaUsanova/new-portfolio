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
  title: 'DataForce Studio: One workspace for machine learning teams',
  metadata: [
    'Role: Founding and sole product designer',
    'Scope: Product structure, navigation, key workflows, prototyping, and design system',
    'Timeline: 2024–2025; one year from idea to MVP',
    'Team: Company founders, CEO, one frontend engineer, and two backend engineers',
    'Status: Launched; customers use it in production',
  ],
  introduction: [
    'I led product design for DataForce Studio and took it from an early idea to its first release. I was the first and only designer on the project.',
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
        'Machine-learning teams often used separate tools to prepare data, train and deploy models, and monitor them. Because each tool showed a different part of the work, teams had to piece together the state of a project as they moved between tools.',
        'We built DataForce Studio to bring these stages into one product. The interface had to make related work easier to follow without taking control away from experienced teams.',
      ],
      figures: [],
    },
    {
      title: 'My role',
      paragraphs: [
        'I joined at the idea stage and worked with the founders, CEO, and engineers to define the first version of the product.',
        'I owned the product structure, navigation, key workflows, prototypes, and design system. The product had a lot going on behind the scenes. I decided what users needed to see, how related work should connect, and where they needed control.',
        'I refined the designs with the engineers as technical constraints and product priorities changed.',
      ],
      figures: [],
    },
    {
      title: 'What informed the design',
      paragraphs: [
        'At that stage, we relied on the founders’ experience as ML engineers and data scientists and on informal conversations with peers at European Python conferences. That input helped us decide what belonged in the MVP.',
      ],
      figures: [],
    },
    {
      title: 'Connecting the stages of work',
      paragraphs: [
        'I organised the product around the main stages of machine-learning work. The navigation reflected how teams moved from preparing data to developing and using models.',
        'The structure let users follow related items across stages and see their status in one place.',
      ],
      figures: [],
    },
    {
      title: 'Making room for iteration',
      paragraphs: [
        'Improving prompts required a flexible workflow. Because the work did not follow a fixed sequence, a step-by-step form could not represent it.',
        'I designed a workflow for iteration. Users could refine prompts while seeing how the steps connected and where each step stood.',
      ],
      figures: [],
    },
    {
      title: 'Keeping the growing product consistent',
      paragraphs: [
        'As the MVP expanded, I built reusable components and interaction patterns. They gave the team a shared set of patterns for new screens and kept familiar actions consistent.',
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
            'The Registry groups collections, deployments, satellites, and secrets in a single Data Team Space.',
        },
        {
          src: screensImage,
          alt: 'DataForce Studio prompt optimization workspace with task settings, model comparison, workflow progress, and charts',
          caption:
            'Prompt settings, model comparisons, workflow progress, and charts used across the product.',
        },
        {
          src: tracesImage,
          alt: 'DataForce Studio trace view for Workflow.run showing nested steps and request attributes',
          caption:
            'The trace view shows a workflow run with its nested steps and request attributes.',
        },
      ],
    },
    {
      title: 'Release and validation',
      paragraphs: [
        'During development, the team reviewed and tested the core flows. These sessions helped us refine the product’s structure and behaviour.',
        'Within a year, we launched an MVP covering the main stages of machine-learning work. The product was ready for its first users at launch, and the first enterprise customers used it in production workflows soon after. The team also demonstrated the product and tested features at European Python conferences.',
        'Our evidence was qualitative. Without consistent product metrics, we could not quantify changes in usability or efficiency.',
      ],
      figures: [],
    },
  ],
} as const
