import stepOneOnboarding from '@/assets/buzz-self-serve-activation-step-1.png'
import stepTwoOnboarding from '@/assets/buzz-self-serve-activation-step-2.png'
import stepThreeOnboarding from '@/assets/buzz-self-serve-activation-step-3.png'
import stepFourOnboarding from '@/assets/buzz-self-serve-activation-step-4.png'
import signupScreen from '@/assets/buzz-self-serve-activation-signup.png'
import signupResearch from '@/assets/buzz-self-serve-activation-signup-research.png'
import onboardingChecklist from '@/assets/buzz-self-serve-activation-checklist.png'
import onboardingCompleteVideo from '@/assets/buzz-self-serve-activation-onboarding-complete.mp4'
import askBuzz from '@/assets/buzz-self-serve-activation-askbuzz.png'
import onboardingVideo from '@/assets/buzz-self-serve-activation-onboard-last.mp4'
import emailVerification from '@/assets/buzz-self-serve-activation-email-verification.png'

export type CaseStudyPlaceholder = {
  label: string
  caption: string
  image?: string
  video?: string
}

type CaseStudySubsection = {
  title: string
  paragraphs: readonly string[]
  figures: readonly CaseStudyPlaceholder[]
  carousel?: readonly CaseStudyPlaceholder[]
}

type CaseStudyJourney = {
  audience: string
  before: string
  after: string
}

type CaseStudySection = {
  title: string
  navigationLabel: string
  paragraphs: readonly string[]
  figures: readonly CaseStudyPlaceholder[]
  journeys?: readonly CaseStudyJourney[]
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
  title: 'Self-serve signup and onboarding',
  metadata: [
    'Scope: Signup, qualification and in-product onboarding',
    'Team: Product, Sales, leadership and engineering',
    'Status: Launched',
  ],
  introduction: [
    'Buzz relied on Sales to give potential customers access and on onboarding calls to help paying customers get started. I designed two self-serve experiences: signup and qualification for product exploration, and in-product onboarding for setup after purchase. Both launched.',
    'I led the design from research through implementation, working with Product and Sales to define priorities and with engineers to bring both experiences into the product.',
  ],
  heroFigure: {
    label: 'Buzz signup screen with Google, Microsoft, and email options',
    caption: 'Self-serve signup gives potential customers a direct way into Buzz.',
    image: signupScreen,
  },
  sections: [
    {
      title: 'Overview',
      navigationLabel: 'Overview',
      paragraphs: [
        'Getting started with Buzz depended on people at two stages. Potential customers had to request a demo, speak with Sales, and wait for an account. After purchase, customers attended onboarding calls to connect accounts, configure integrations, and learn the platform.',
        'As Buzz introduced Free Signup and Buy Now, I worked on two paths. One let potential customers explore independently while giving Sales the information needed to qualify leads. The other helped paying customers complete setup inside the product.',
      ],
      journeys: [
        {
          audience: 'Free Signup',
          before: 'Demo, Sales conversation, and manual account creation.',
          after: 'Create an account, complete qualification, and explore Buzz.',
        },
        {
          audience: 'Buy Now',
          before: 'Onboarding calls to connect accounts and configure the product.',
          after: 'Complete a short questionnaire, then follow in-product setup guidance.',
        },
      ],
      figures: [],
    },
    {
      title: 'Self-serve signup and account access',
      navigationLabel: 'Signup & access',
      paragraphs: [
        'Potential customers wanted to evaluate Buzz before committing. Sales still needed enough context to assess new leads. The design had to make account creation straightforward while keeping qualification in the path to product access.',
      ],
      figures: [],
      subsections: [
        {
          title: 'Review how self-serve products handle signup',
          paragraphs: [
            'I reviewed signup flows in Attio, Apollo, Clay, Lemlist, and other self-serve products. This gave me reference points for account creation and the questions asked before users entered the product.',
          ],
          figures: [
            {
              label: 'Competitive research board comparing signup flows',
              caption: 'Signup flows reviewed to inform account creation and qualification in Buzz.',
              image: signupResearch,
            },
          ],
        },
        {
          title: 'Separate account creation from qualification',
          paragraphs: [
            'I prioritised Google and Microsoft signup to simplify account creation and avoid a separate email-verification step. Email signup remained available as an alternative.',
            'The first screen asked only for what was needed to create an account. Qualification followed afterwards, so users could complete one task before moving to the next.',
          ],
          figures: [],
        },
        {
          title: 'Support email verification and account recovery',
          paragraphs: [
            'Users signing up with email needed to verify their address before continuing. I included verification and recovery states so they could resolve access problems without contacting support. Sign-in and password recovery were part of the same account-access scope.',
          ],
          figures: [
            {
              label: 'Email verification',
              caption: 'Email signup includes a verification step before users continue into Buzz.',
              image: emailVerification,
            },
          ],
        },
        {
          title: 'Collect qualification information in stages',
          paragraphs: [
            'For users creating a new workspace, I divided qualification into four short steps: personal details, workspace, company, and final questions. The questionnaire was mandatory because Sales needed the information to assess and assign new leads.',
            'Users joining an existing workspace through an invitation followed a shorter path. They entered Buzz after the workspace step, skipping the remaining qualification questions.',
          ],
          figures: [],
          carousel: [
            {
              label: 'Personal details, step 1 of 4',
              caption: 'Personal details come first, with progress showing the four-step questionnaire.',
              image: stepOneOnboarding,
            },
            {
              label: 'Workspace details with an option to join an existing workspace, step 2 of 4',
              caption: 'The workspace step separates new workspaces from the shorter path for invited users.',
              image: stepTwoOnboarding,
            },
            {
              label: 'Company name and team size, step 3 of 4',
              caption: 'Company name and team size give Sales context for qualifying the new workspace.',
              image: stepThreeOnboarding,
            },
            {
              label: 'Discovery source and current tools, step 4 of 4',
              caption: 'The final questions capture how users found Buzz and which tools they already use.',
              image: stepFourOnboarding,
            },
          ],
        },
      ],
    },
    {
      title: 'Post-purchase onboarding',
      navigationLabel: 'Post-purchase onboarding',
      paragraphs: [
        'Buy Now customers had already committed to Buzz. Their next challenge was to complete setup and start using the product without relying on onboarding calls.',
        'A short questionnaire collected workspace and company details before entry; account connections and other setup tasks happened inside the product.',
      ],
      figures: [],
      subsections: [
        {
          title: 'Define the essential setup tasks',
          paragraphs: [
            'Conversations with Sales and the Chief Revenue Officer identified the activities customers needed the most help with during onboarding calls. I used these priorities to define a checklist covering account connections, integrations, and first product actions.',
          ],
          figures: [],
        },
        {
          title: 'Turn onboarding calls into a flexible checklist',
          paragraphs: [
            'The checklist adapted to the purchased package. I chose a flexible checklist because customers could begin with different parts of Buzz and needed to prioritise tasks relevant to their work.',
          ],
          figures: [
            {
              label: 'Buzz setup checklist showing completed tasks and the remaining AskBuzz task',
              caption: 'The checklist brings setup tasks, completion progress, and credit rewards into one place.',
              image: onboardingChecklist,
            },
          ],
        },
        {
          title: 'Keep setup easy to resume',
          paragraphs: [
            'The checklist opened automatically on the first visit without blocking access to the product. Customers could pause or skip onboarding and return later without losing progress or earned credits.',
          ],
          figures: [
            {
              label: 'Getting started checklist interaction',
              caption: 'Customers can collapse the onboarding checklist and continue exploring Buzz, then return to setup later.',
              video: onboardingVideo,
            },
          ],
        },
        {
          title: 'Guide the first action and reward completion',
          paragraphs: [
            'Each checklist task opened the relevant product area and explained the next action. For AskBuzz, the product’s AI assistant, a prompt guided customers to send their first message and receive a response. Completing the task updated progress and awarded 10 credits.',
            'I proposed free credits as an incentive for completing setup tasks. AskBuzz carried a larger reward to encourage discovery of the new AI capability.',
          ],
          figures: [
            {
              label: 'AskBuzz conversation screen with an onboarding prompt explaining the first task and its reward',
              caption: 'An in-context prompt guides the first AskBuzz conversation and explains the 10-credit reward.',
              image: askBuzz,
            },
            {
              label: 'Buzz setup checklist with every onboarding task completed',
              caption: 'When all onboarding tasks are complete, the checklist confirms the finished setup and earned credits.',
              video: onboardingCompleteVideo,
            },
          ],
        },
        {
          title: 'Keep the first release focused',
          paragraphs: [
            'An earlier concept used AskBuzz to collect the initial customer details through a conversation. We deferred this AI-led questionnaire because of implementation complexity and launched a structured questionnaire. The first-conversation task in AskBuzz remained part of the onboarding checklist.',
          ],
          figures: [],
        },
      ],
    },
    {
      title: 'Outcome and learnings',
      navigationLabel: 'Outcome & learnings',
      paragraphs: [
        'Both experiences launched. Potential customers can now create an account and explore Buzz without first speaking with Sales. Paying customers have in-product guidance for essential setup after purchase.',
        'The work connected two parts of self-serve: independent access and guided setup. Signup needed a focused sequence to create and qualify an account; setup needed flexibility so customers could make progress at their own pace.',
        'The delivery timeline did not allow for end-user usability testing before development. Customer feedback remains limited, and we do not yet have enough evidence to quantify the impact on activation or usability.',
      ],
      figures: [],
      subsections: [
        {
          title: 'What I would measure next',
          paragraphs: [
            'For signup, I would track completion of account creation, email verification, and each qualification step to identify where users leave the flow.',
            'For onboarding, I would measure time to the first meaningful setup action, checklist completion, and requests for assistance. I would also test whether credit rewards encourage task completion and whether that progress translates into continued product use.',
          ],
          figures: [],
        },
      ],
    },
  ],
} as const
