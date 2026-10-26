import stepOneOnboarding from '@/assets/buzz-self-serve-activation-step-1.png'
import stepTwoOnboarding from '@/assets/buzz-self-serve-activation-step-2.png'
import stepThreeOnboarding from '@/assets/buzz-self-serve-activation-step-3.png'
import stepFourOnboarding from '@/assets/buzz-self-serve-activation-step-4.png'
import signupScreen from '@/assets/buzz-self-serve-activation-signup.png'
import signupComparison from '@/assets/buzz-signup-comparison.png'
import signupResearch from '@/assets/buzz-self-serve-activation-signup-research.png'
import onboardingChecklist from '@/assets/buzz-self-serve-activation-checklist.png'
import checklistComparison from '@/assets/buzz-onboarding-checklist-comparison.png'
import onboardingCompleteVideo from '@/assets/buzz-self-serve-activation-onboarding-complete.mp4'
import askBuzz from '@/assets/buzz-self-serve-activation-askbuzz.png'
import onboardingVideo from '@/assets/buzz-self-serve-activation-onboard-last.mp4'
import emailVerification from '@/assets/buzz-self-serve-activation-email-verification.png'

export type CaseStudyPlaceholder = {
  label: string
  caption: string
  height?: number
  image?: string
  priority?: boolean
  video?: string
  width?: number
}

type CaseStudySubsection = {
  title: string
  bullets?: readonly string[]
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
  metrics?: readonly { value: string; label: string }[]
  metricsNote?: string
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
    'Team: Product, Sales, Customer Success, leadership and engineering',
    'Status: Launched',
  ],
  introduction: [
    'Buzz is a sales outreach platform. This project introduced Free Signup and in-product setup for paying customers.',
  ],
  heroFigure: {
    label: 'Buzz signup screen with Google, Microsoft, and email options',
    caption: 'Self-serve signup gives potential customers a direct way into Buzz.',
    image: signupScreen,
    priority: true,
  },
  sections: [
    {
      title: 'Challenge',
      navigationLabel: 'Challenge',
      paragraphs: [
        'Potential customers had to speak with Sales to get access to Buzz. After purchase, each new customer needed several setup calls with Customer Success. Customer Success could not keep up with demand for setup calls.',
        'We had two weeks to introduce self-serve access and setup. Users needed to start independently, while Sales still needed context to qualify new leads.',
      ],
      figures: [],
    },
    {
      title: 'My role',
      navigationLabel: 'My role',
      paragraphs: [
        'I owned research and design for Free Signup and in-product onboarding, including user flows, UI, and interactions. I defined requirements with Product, Sales, and the CRO and prioritised the setup tasks. I worked with engineers during implementation.',
        'I proposed credit rewards and designed the completion modal as a WOW moment. After launch, I tracked signup and setup completion in Amplitude.',
      ],
      figures: [],
    },
    {
      title: 'Free Signup',
      navigationLabel: 'Free Signup',
      paragraphs: [
        'Sales needed qualification details before users entered the product.',
      ],
      figures: [],
      subsections: [
        {
          title: 'Research and hypotheses',
          paragraphs: [
            'I reviewed signup flows in Attio, Apollo, Clay, and Lemlist. The research led to six hypotheses:',
          ],
          bullets: [
            'Ask only for account details first. Collect qualification data after account creation',
            'Place Google and Microsoft above email and give them more visual emphasis as the fastest signup options',
            'Group related fields on one screen, such as company and team size, or discovery source and current tools',
            'Show a progress bar or step counter so users know how many steps remain',
            'Use predefined options, selectable chips, or searchable multi-selects to reduce typing. Include an Other option where needed',
            'Show input and password requirements before submission. Use specific inline errors that explain what to fix',
          ],
          figures: [
            {
              label: 'Competitive research board comparing signup flows',
              caption: 'My review of account creation and qualification flows.',
              image: signupResearch,
              height: 1560,
              width: 2400,
            },
          ],
        },
        {
          title: 'Separate account creation from qualification',
          paragraphs: [
            'I put Google and Microsoft first. Both take users straight to the questionnaire without a separate email verification step.',
            'For email signup, I kept one password field and showed its requirements before submission. Personal details moved to the questionnaire.',
          ],
          figures: [
            {
              label: 'Old paid signup compared with my proposed Free Signup design',
              caption: 'I adapted the paid signup form for the new Free Signup flow.',
              image: signupComparison,
              width: 2400,
              height: 1590,
            },
          ],
        },
        {
          title: 'Support email verification and account recovery',
          paragraphs: [
            'Users signing up with email must verify their address. I added resend and change-email options so users could recover from a missed message or an incorrect address.',
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
            'I split qualification into four steps with visible progress. Related fields stay together: company and team size, then discovery source and current tools.',
            'Invited users enter Buzz after the workspace step and skip the remaining qualification questions.',
          ],
          figures: [],
          carousel: [
            {
              label: 'Personal details, step 1 of 4',
              caption: 'Personal details come first, with progress showing the four-step questionnaire.',
              image: stepOneOnboarding,
              height: 1518,
              width: 2400,
            },
            {
              label: 'Workspace details with an option to join an existing workspace, step 2 of 4',
              caption: 'Invited users skip the remaining questions after joining a workspace.',
              image: stepTwoOnboarding,
              height: 1518,
              width: 2400,
            },
            {
              label: 'Company name and team size, step 3 of 4',
              caption: 'Company name and team size give Sales context for qualifying the new workspace.',
              image: stepThreeOnboarding,
              height: 1518,
              width: 2400,
            },
            {
              label: 'Discovery source and current tools, step 4 of 4',
              caption: 'The final questions capture how users found Buzz and which tools they already use.',
              image: stepFourOnboarding,
              height: 1518,
              width: 2400,
            },
          ],
        },
        {
          title: 'Keep Sales connected after signup',
          paragraphs: [
            'Each new Buzz Free signup creates a HubSpot contact and gets a Sales owner through round robin. Questionnaire answers give the owner context to assess fit, offer help, or discuss additional services after registration.',
          ],
          figures: [],
        },
      ],
    },
    {
      title: 'In-product onboarding',
      navigationLabel: 'In-product onboarding',
      paragraphs: [
        'I turned the setup tasks covered on Customer Success calls into guidance inside Buzz. Customers could connect their accounts and start working without waiting for a call.',
      ],
      figures: [],
      subsections: [
        {
          title: 'Onboarding research and hypotheses',
          paragraphs: [
            'I researched onboarding patterns and formed six hypotheses:',
          ],
          bullets: [
            'Focusing on essential setup would help users reach their first useful result sooner',
            'Requiring a real product action to complete each task would encourage users to try features',
            'Explaining each task’s purpose and linking directly to the relevant feature would help users complete it',
            'Letting users collapse the checklist and resume later would help them finish setup across multiple sessions',
            'Updating progress only after a successful action would help users understand what is complete and what remains',
            'Rewarding task completion with credits customers can use in Buzz would encourage them to continue exploring the product',
          ],
          figures: [],
        },
        {
          title: 'Focus the checklist on essential setup',
          paragraphs: [
            'My first checklist combined setup with renaming the workspace and answering questions about the team.',
            'As I worked through the required connections and integrations, I realised the list would become too long. I proposed removing the profile tasks to make room for essential setup and first product actions. I reviewed the final list with Sales and the Chief Revenue Officer.',
          ],
          figures: [
            {
              label: 'Initial and final onboarding checklists showing the shift from profile tasks to account connections and first product actions',
              caption: 'I replaced profile tasks with account connections and first product actions.',
              image: checklistComparison,
              width: 2400,
              height: 1590,
            },
          ],
        },
        {
          title: 'Turn onboarding calls into a flexible checklist',
          paragraphs: [
            'I chose a checklist with no fixed order. Customers could start with the tasks relevant to them, and the list adapted to their purchased package.',
          ],
          figures: [
            {
              label: 'Buzz setup checklist showing completed tasks and the remaining AskBuzz task',
              caption: 'Setup tasks, progress, and credit rewards in one checklist.',
              image: onboardingChecklist,
            },
          ],
        },
        {
          title: 'Keep setup easy to resume',
          paragraphs: [
            'The checklist opened on the first visit. Customers could collapse or skip it and use Buzz before completing every task. Progress and earned credits stayed saved so they could return at their own pace.',
          ],
          figures: [
            {
              label: 'Getting started checklist interaction',
              caption: 'Collapse the checklist, use Buzz, and return to setup later.',
              video: onboardingVideo,
              height: 1080,
              width: 1728,
            },
          ],
        },
        {
          title: 'Guide the first action and reward completion',
          paragraphs: [
            'I proposed free credits to encourage customers to try features. They could spend the credits inside Buzz, including on the AskBuzz AI assistant.',
            'Each task opened the relevant feature and showed what to do next. The AskBuzz task asked customers to send a message and receive a response. It awarded 10 credits, a larger reward to encourage discovery of the new feature.',
            'I designed the completion modal as a WOW moment to celebrate the first milestone for new users and show the credits they had earned.',
          ],
          figures: [
            {
              label: 'AskBuzz conversation screen with an onboarding prompt explaining the first task and its reward',
              caption: 'The first AskBuzz conversation earns 10 credits.',
              image: askBuzz,
            },
            {
              label: 'Buzz setup checklist with every onboarding task completed',
              caption: 'The completed checklist confirms progress and earned credits.',
              video: onboardingCompleteVideo,
              height: 1080,
              width: 1728,
            },
          ],
        },
        {
          title: 'Defer the Learning Center',
          paragraphs: [
            'We considered a dedicated Learning Center with topic-based lessons, tasks, and rewards. With two weeks for the project, we deferred it and focused on essential setup.',
          ],
          figures: [],
        },
      ],
    },
    {
      title: 'Results',
      navigationLabel: 'Results',
      metrics: [
        { value: '93%', label: 'Signup completion' },
        { value: '86%', label: 'Workspaces set up without a call' },
        { value: '−35%', label: 'Average Customer Success time per workspace' },
      ],
      paragraphs: [
        'Both experiences launched. New users can access Buzz independently, and paying customers can complete setup inside the product.',
        'Of users who started signup, 93% created an account, completed qualification, and entered Buzz. Of new paid workspaces, 86% completed the connections required for their package without a Customer Success call.',
        'I used Amplitude to track signup and setup completion over the first six weeks after launch. Average Customer Success time per new workspace is compared with the previous six weeks, when the team handled setup through calls.',
      ],
      figures: [],
    },
    {
      title: 'Learnings',
      navigationLabel: 'Learnings',
      paragraphs: [
        'Signup needed a clear sequence; setup needed flexibility. I kept required qualification questions before product access and let customers choose when to complete setup tasks inside Buzz.',
        'The deadline left no time for end-user usability testing before development. The results show completion and team workload, but do not explain where users struggle or whether credits encourage continued use. Those questions need user research.',
      ],
      figures: [],
    },
  ],
} as const
