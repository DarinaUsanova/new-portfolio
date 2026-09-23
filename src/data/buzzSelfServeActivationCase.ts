import stepOneOnboarding from '@/assets/buzz-self-serve-activation-step-1.png'
import stepTwoOnboarding from '@/assets/buzz-self-serve-activation-step-2.png'
import stepThreeOnboarding from '@/assets/buzz-self-serve-activation-step-3.png'
import stepFourOnboarding from '@/assets/buzz-self-serve-activation-step-4.png'

export type CaseStudyPlaceholder = {
  label: string
  caption: string
  image?: string
}

type CaseStudySubsection = {
  title: string
  paragraphs: readonly string[]
  figures: readonly CaseStudyPlaceholder[]
  carousel?: readonly CaseStudyPlaceholder[]
}

type CaseStudySection = {
  title: string
  paragraphs: readonly string[]
  figures: readonly CaseStudyPlaceholder[]
  subsections?: readonly CaseStudySubsection[]
}

type BuzzSelfServeActivationCase = {
  title: string
  metadata: readonly string[]
  introduction: readonly string[]
  heroFigure: CaseStudyPlaceholder
  sections: readonly CaseStudySection[]
}

export const buzzSelfServeActivationCase: BuzzSelfServeActivationCase = {
  title: 'From Sales-Led Setup to Self-Serve Activation',
  metadata: [
    'Role: Product Designer; sole designer on the initiative',
    'Scope: Research, sign-in and signup, qualification, post-purchase onboarding, and implementation support',
    'Team: Product Manager, Sales, Chief Revenue Officer, company leadership, and engineers',
    'Status: Launched',
  ],
  introduction: [
    'I designed Buzz’s signup and onboarding experience so potential customers could explore the product independently and paying customers could complete essential setup without relying on onboarding calls.',
  ],
  heroFigure: {
    label: 'Signup and onboarding checklist',
    caption: 'From creating an account to completing essential setup independently.',
  },
  sections: [
    {
      title: 'Why Buzz needed a self-serve experience',
      paragraphs: [
        'Buzz helps sales teams find potential customers and automate outreach. Previously, accessing and setting up the product depended heavily on Sales and Customer Support.',
        'Potential customers had to request a demo, speak with Sales, and wait for an account to be created. After purchase, customers attended several onboarding calls to connect accounts, configure integrations, and learn how to use the platform.',
        'This approach required substantial time from customer-facing teams and created a barrier for potential customers who preferred to evaluate the product independently.',
        'As Buzz introduced Free Signup and Buy Now, it needed to support both independent product exploration and guided setup for paying customers.',
      ],
      figures: [
        {
          label: 'Previous and new customer journeys',
          caption: 'The previous journey through Sales and onboarding calls alongside the new self-serve paths.',
        },
      ],
    },
    {
      title: 'My contribution',
      paragraphs: [
        'As the sole designer, I shaped both journeys from research through launch. I worked with Product and Sales to define onboarding priorities and with engineering to carry the design through implementation.',
      ],
      figures: [],
    },
    {
      title: 'What shaped the design',
      paragraphs: [
        'I reviewed how Attio, Apollo, Clay, Lemlist, and other self-serve products handled signup and guided setup. Conversations with Sales and the Chief Revenue Officer identified the activities customers needed the most help with during onboarding calls, which became the basis for the checklist.',
      ],
      figures: [
        {
          label: 'Competitive signup and onboarding review',
          caption: 'Selected signup and onboarding patterns from the competitive review.',
        },
      ],
    },
    {
      title: 'Two entry points, different priorities',
      paragraphs: [
        'Free users wanted to evaluate Buzz before committing. The business needed enough information to qualify them and decide whether Sales should follow up.',
        'Buy Now customers had already purchased a package. Their priority was to get the product ready to use.',
        'I designed two paths around these needs. Free Signup prioritised account creation and qualification before product exploration. Buy Now customers completed a short questionnaire, then received setup guidance through an in-product checklist.',
      ],
      figures: [
        {
          label: 'Free Signup and Buy Now paths',
          caption: 'Free Signup → Qualification → Explore Buzz. Buy Now → Customer questionnaire → Guided setup.',
        },
      ],
    },
    {
      title: 'Opening Buzz to free users',
      paragraphs: [],
      figures: [],
      subsections: [
        {
          title: 'Keep account creation focused',
          paragraphs: [
            'I prioritised Google and Microsoft signup to simplify account creation and avoid a separate email-verification step. Email signup required verification and included recovery options so users could resolve verification problems without contacting support.',
            'The first screen asked only for the information needed to create an account. Qualification questions appeared afterwards, keeping the initial step focused.',
          ],
          figures: [
            {
              label: 'Signup screen',
              caption: 'Google and Microsoft are the primary signup options.',
            },
          ],
        },
        {
          title: 'Collect qualification information in stages',
          paragraphs: [
            'For users creating a new workspace, I split qualification into four short steps. The questionnaire was mandatory because Sales needed the information to assess and assign new leads.',
            'Users joining an existing workspace through an invitation followed a shorter path. They entered Buzz after the workspace step, skipping the remaining questions.',
          ],
          figures: [],
          carousel: [
            {
              label: 'Personal information step',
              caption: 'The first questionnaire step collects personal information.',
              image: stepOneOnboarding,
            },
            {
              label: 'Workspace information step',
              caption: 'The user names their workspace.',
              image: stepTwoOnboarding,
            },
            {
              label: 'Company information step',
              caption: 'Company questions capture the organisation context.',
              image: stepThreeOnboarding,
            },
            {
              label: 'Final qualification step',
              caption: 'The final step collects the remaining qualification details.',
              image: stepFourOnboarding,
            },
          ],
        },
      ],
    },
    {
      title: 'Guiding paying customers through setup',
      paragraphs: [],
      figures: [],
      subsections: [
        {
          title: 'Collect essential context after purchase',
          paragraphs: [
            'Buy Now customers completed a short questionnaire to establish their workspace and company profile before entering Buzz. This gave the business the basic customer information it needed, while more complex setup happened inside the product.',
            'An earlier concept collected this information through a conversation with AskBuzz, the product’s AI assistant. We removed it from the initial release because of implementation complexity and retained a structured questionnaire to meet the same need.',
          ],
          figures: [],
        },
        {
          title: 'Turn onboarding calls into a flexible checklist',
          paragraphs: [
            'I translated the setup priorities identified with Sales into a checklist covering account connections, integrations, and first product actions. The checklist adapted to the customer’s purchased package.',
            'I chose a checklist over a fixed sequence because customers could begin with different parts of Buzz. They needed the freedom to prioritise tasks relevant to their work.',
            'The checklist opened automatically on the first visit without blocking access to the rest of the product. Customers could pause or skip onboarding and return later without losing progress or earned credits.',
          ],
          figures: [
            {
              label: 'Getting started checklist',
              caption: 'The expanded checklist shows task guidance, progress, and rewards.',
            },
          ],
        },
        {
          title: 'Guide users where the work happens',
          paragraphs: [
            'Each checklist task opened the relevant product area and explained the next action.',
            'For example, the campaign task guided customers to create and save their first campaign. Saving it automatically completed the task, updated progress, and awarded credits.',
          ],
          figures: [
            {
              label: 'Task completion flow',
              caption: 'From selecting the campaign task to saving a campaign and seeing progress update.',
            },
          ],
        },
        {
          title: 'Reward meaningful progress',
          paragraphs: [
            'I proposed free credits as an incentive for completing setup tasks. Trying AskBuzz earned a larger reward to support discovery of the company’s new AI capability.',
          ],
          figures: [],
        },
      ],
    },
    {
      title: 'Launch and early results',
      paragraphs: [
        'Both Free Signup and post-purchase onboarding launched. Potential customers can now create an account and explore Buzz without first speaking with Sales. Buy Now customers can complete essential setup independently, and manual onboarding calls have decreased.',
        'The delivery timeline did not allow for end-user usability testing before development. Customer feedback remains limited, and we do not yet have enough evidence to quantify the impact on activation or usability.',
      ],
      figures: [],
    },
    {
      title: 'What I would measure next',
      paragraphs: [
        'I would measure where users leave the questionnaires, how quickly they complete meaningful setup actions, and how often they still need assistance.',
        'I would also evaluate whether credit rewards improve task completion and compare continued product use among customers who complete the checklist and those who skip it. These findings would help prioritise improvements to the self-serve experience.',
      ],
      figures: [],
    },
  ],
} as const
