import guidedStart from '@/assets/campaign-builder-case/empty-state-choose-first-block.png'
import campaignGuidanceIcon from '@/assets/campaign-builder-case/insights/campaign-guidance.svg'
import launchChecklist from '@/assets/campaign-builder-case/checklist-item-points.png'
import legacyBuilder from '@/assets/campaign-builder-case/smart-campaign-case-v2.png'
import researchBoard from '@/assets/campaign-builder-case/campaigns-research.png'
import saveRecoveryIcon from '@/assets/campaign-builder-case/insights/save-recovery.svg'
import sidePanelEditing from '@/assets/campaign-builder-case/manual-task-configuration.png'
import workflowOrderIcon from '@/assets/campaign-builder-case/insights/workflow-order.svg'
import workflowBranching from '@/assets/campaign-builder-case/workflow-overview-with-visible-issues-and-checklist-guidance.png'

type CaseStudyFigure = {
  src: string
  alt: string
  caption: string
  height?: number
  priority?: boolean
  width?: number
}

type CaseStudySubsection = {
  title: string
  paragraphs: string[]
  figures: CaseStudyFigure[]
  icon?: string
}

type CaseStudySection = {
  title: string
  paragraphs: string[]
  figures: CaseStudyFigure[]
  subsections?: CaseStudySubsection[]
}

type CampaignBuilderCase = {
  title: string
  metadata: string[]
  introduction: string[]
  heroFigure: CaseStudyFigure
  sections: CaseStudySection[]
}

export const campaignBuilderCase: CampaignBuilderCase = {
  title: 'Unified campaign builder',
  metadata: [
    'Scope: Campaign structure, editor and launch checklist',
    'Team: Product Manager and Lead Engineer',
    'Status: MVP concept',
  ],
  introduction: [
    "I researched and designed an MVP concept for Buzz.ai's campaign builder. The proposal brought sequential and branching campaigns into one workflow.",
  ],
  heroFigure: {
    src: workflowBranching,
    alt: 'Proposed campaign builder with a branching workflow and launch checklist open',
    caption:
      'The proposed builder keeps every campaign in one vertical sequence, with branches and launch issues visible in context',
    height: 1500,
    priority: true,
    width: 2400,
  },
  sections: [
    {
      title: 'Why the builder needed to change',
      paragraphs: [
        'Buzz.ai helps sales and marketing teams automate outreach. Its campaign builder is where they set up the steps of a campaign and decide what should happen next.',
        'The product had two campaign modes. Simple Campaigns let users arrange steps in a single sequence. Smart Campaigns added conditions and branches in a canvas editor, where users arranged steps manually.',
        'Long campaigns were hard to scan in the canvas. Users had to follow long sequences and branches while editing individual steps. New users also had to choose between Simple and Smart Campaigns before they understood which one they needed.',
        'One customer interview exposed a saving problem. A customer could rename a campaign and keep working, believing the change was saved. The interface still required a separate confirmation.',
      ],
      figures: [
        {
          src: legacyBuilder,
          alt: 'Legacy Smart Campaign Builder with a manually arranged branching workflow',
          caption:
            'In the old editor, users had to arrange the canvas as well as build the campaign.',
          height: 1560,
          width: 2400,
        },
      ],
    },
    {
      title: 'What I owned',
      paragraphs: [
        'I was the sole product designer, working closely with the Product Manager. A Lead Engineer helped validate the product matrix.',
        'I interviewed customers, reviewed feedback, and turned the findings into questions and MVP priorities. I then designed the workflow structure and interface, built prototypes, and presented the proposal to the team. I also defined the MVP design system.',
      ],
      figures: [],
    },
    {
      title: 'Research and evidence',
      paragraphs: [
        'I spoke with three Buzz.ai customers about how they built campaigns and showed them early prototypes. Their feedback pointed to three needs: less visual clutter, easier-to-follow campaign logic, and a starting point that did not require choosing a campaign type upfront.',
        "I also reviewed 15 to 20 campaign editor suggestions in Canny, the product's feedback board. They raised concerns about campaign structure, editing, and setup. Support tickets and team feedback kept raising the same question. When is a campaign ready to launch?",
        'The issues went beyond the canvas.',
      ],
      figures: [
        {
          src: researchBoard,
          alt: 'Research board connecting customer feedback to workflow and editing decisions',
          caption:
            'Customer feedback connected research evidence to decisions about workflow structure, starting a campaign, and editing',
          height: 1560,
          width: 2400,
        },
      ],
    },
    {
      title: 'Key insights',
      paragraphs: [],
      figures: [],
      subsections: [
        {
          title: 'Long workflows needed a predictable reading order',
          icon: workflowOrderIcon,
          paragraphs: [
            'The existing canvas made complex sequences difficult to scan as they grew. I translated that finding into a vertical workflow where each step had a clear place in the sequence.',
          ],
          figures: [],
        },
        {
          title: 'Users needed guidance before choosing a campaign type',
          icon: campaignGuidanceIcon,
          paragraphs: [
            'Users had to choose between Simple and Smart Campaigns before they understood what building a campaign involved. I designed one starting flow. Users could add steps first, then add conditions or branches when needed.',
          ],
          figures: [],
        },
        {
          title: 'Users needed to see what was saved and be able to recover their work',
          icon: saveRecoveryIcon,
          paragraphs: [
            'A customer interview showed that it was not always clear whether changes had been saved. Six of seven colleagues in the internal test also prioritised warnings and ways to recover work. Together, these findings set three MVP priorities: drafts, warnings, and recovery options.',
          ],
          figures: [],
        },
      ],
    },
    {
      title: 'The proposal: one vertical workflow',
      paragraphs: [
        'I considered improving the Smart Campaign canvas, but keeping it would still require users to arrange steps manually and choose between two campaign modes.',
        'I proposed a single builder with a vertical workflow. Each step had a predictable place in the sequence, and users could add conditions and branches when the campaign needed them. The trade-off was less freedom to arrange steps, but a consistent reading order. Branches still needed to be easy to follow. A vertical layout alone would not solve that.',
      ],
      figures: [],
      subsections: [
        {
          title: 'Give people a clear first step',
          paragraphs: [
            'I removed the choice between Simple and Smart Campaigns from the proposed starting flow. The side panel showed the available steps so users could begin building the campaign straight away.',
            'Conditions and branches appeared when relevant. The same flow still supported branches when a campaign needed them.',
          ],
          figures: [
            {
              src: guidedStart,
              alt: 'Campaign builder with a guided starting point and available steps in a side panel',
              caption:
                'Start by adding a step. Add conditions and branches as the campaign takes shape.',
            },
          ],
        },
        {
          title: 'Keep the campaign in view while editing a step',
          paragraphs: [
            'Selecting a step opened its settings in a side panel, with the workflow still visible alongside it. Users could focus on the details of a task and still see where it belonged in the sequence.',
          ],
          figures: [
            {
              src: sidePanelEditing,
              alt: 'Campaign builder step settings open in a side panel beside the workflow',
              caption:
                'The selected step and its place in the campaign stay visible beside its settings.',
            },
          ],
        },
        {
          title: 'Let people build a draft, then check it before launch',
          paragraphs: [
            'The flow let users work on an incomplete campaign. When they were ready to launch, a checklist showed what was missing and pointed to the step that needed attention.',
            'Missing information and connection issues appeared alongside the workflow, so users could see where each problem occurred without leaving the campaign.',
          ],
          figures: [
            {
              src: launchChecklist,
              alt: 'Campaign builder launch checklist pointing to an incomplete step',
              caption:
                'Each checklist item points to something that needs fixing before launch.',
            },
            {
              src: workflowBranching,
              alt: 'Campaign builder workflow with readable branching paths and launch issues in context',
              caption:
                'The workflow keeps branch paths and connection issues visible while users prepare the campaign for launch',
              height: 1500,
              width: 2400,
            },
          ],
        },
      ],
    },
    {
      title: 'What the internal test told me',
      paragraphs: [
        'I ran a concept test in Windy with seven colleagues from Sales, Customer Success, Support, and Product. It showed prototypes and asked multiple-choice and open-ended questions about building a campaign.',
        'Six of the seven participants prioritised warnings about unsaved changes and the ability to undo a deletion or recover a step. Together with the customer interview, these findings set two MVP priorities: showing whether changes were saved and letting users recover their work. I explored drafts, warnings, and recovery options in the editing flow.',
        'The test showed what the team considered most important. It did not show whether customers could build or edit campaigns more easily; that still needed to be tested with campaign creators.',
      ],
      figures: [],
    },
    {
      title: 'Where the project ended',
      paragraphs: [
        'Product priorities changed, and the project stopped before development.',
        'I delivered a proposal for one builder that could support simple and branching campaigns. It included MVP priorities and prototypes for setup, step editing, and launch checks. The proposal went beyond the original request to update Smart Campaign Builder.',
        'The next step would have been to test the full flow with customers. Could they build a campaign, follow its branches, change a step, and resolve an issue before launch? Those results would have helped the team decide what to include in the MVP.',
      ],
      figures: [],
    },
  ],
} as const
