import guidedStart from '@/assets/campaign-builder-case/guided-start.png'
import campaignGuidanceIcon from '@/assets/campaign-builder-case/insights/campaign-guidance.svg'
import launchChecklist from '@/assets/campaign-builder-case/launch-checklist.png'
import legacyBuilder from '@/assets/campaign-builder-case/legacy-builder.png'
import researchBoard from '@/assets/campaign-builder-case/research-board.png'
import saveRecoveryIcon from '@/assets/campaign-builder-case/insights/save-recovery.svg'
import sidePanelEditing from '@/assets/campaign-builder-case/side-panel-editing.png'
import workflowOrderIcon from '@/assets/campaign-builder-case/insights/workflow-order.svg'
import workflowBranching from '@/assets/campaign-builder-case/workflow-branching.png'

type CaseStudyFigure = {
  src: string
  alt: string
  caption: string
  priority?: boolean
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
  title: 'Campaign Builder: One Workflow for Simple and Complex Campaigns',
  metadata: [
    'Role: Lead Product Designer; sole designer on the project',
    'Scope: Customer research, workflow structure, UI, prototyping, and an MVP design system',
    'Status: MVP concept; development did not begin because product priorities changed',
  ],
  introduction: [
    'Buzz.ai helps sales and marketing teams automate outreach. Its campaign builder is where they set up the steps of a campaign and decide what should happen next.',
    'I led discovery and MVP design for one workflow that could support sales managers, marketing teams, and others responsible for automating outreach.',
  ],
  heroFigure: {
    src: workflowBranching,
    alt: 'Proposed campaign builder with a branching workflow and launch checklist open',
    caption:
      'The proposed builder combines a predictable workflow with branching logic and a launch checklist',
    priority: true,
  },
  sections: [
    {
      title: 'Why the builder needed to change',
      paragraphs: [
        'The product had two campaign modes. Simple Campaigns supported linear sequences. Smart Campaigns added conditions and branches in a canvas editor, where users arranged steps manually.',
        'As campaigns grew, the canvas became harder to follow. Users had to make sense of long sequences and their branches while editing individual steps. New users also had to choose between Simple and Smart Campaigns before they understood which one they needed.',
        'One customer interview also highlighted a saving problem. A customer could rename a campaign and continue working, assuming the new name had been saved. The interface still required a separate confirmation.',
      ],
      figures: [
        {
          src: legacyBuilder,
          alt: 'Legacy Smart Campaign Builder with a manually arranged branching workflow',
          caption:
            'In the old editor, users had to arrange the canvas as well as build the campaign.',
        },
      ],
    },
    {
      title: 'What I owned',
      paragraphs: [
        'I was the sole product designer, working closely with the Product Manager. A Lead Engineer helped validate the product matrix.',
        'I interviewed customers, reviewed feedback, and turned the findings into questions to test and priorities for the MVP. I then designed the workflow structure and interface, built prototypes, and presented the proposal to the team. My work also included the design system for the MVP.',
      ],
      figures: [],
    },
    {
      title: 'Research and evidence',
      paragraphs: [
        'I spoke with three Buzz.ai customers about how they built campaigns and showed them early prototypes. Their feedback pointed to three needs: less visual clutter, campaign logic that was easier to follow, and a starting point that did not require choosing a campaign type upfront.',
        'I also reviewed around 15–20 campaign editor suggestions in Canny, the product’s feedback board. These raised concerns about campaign structure, editing, and setup. Support tickets and internal feedback surfaced recurring concerns about how to tell whether a campaign was ready to launch.',
        'Together, these sources suggested that refreshing the existing canvas would leave important parts of the problem unresolved.',
      ],
      figures: [
        {
          src: researchBoard,
          alt: 'Research board connecting customer feedback to workflow and editing decisions',
          caption:
            'Customer feedback connected research evidence to decisions about workflow structure, starting a campaign, and editing.',
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
            'The existing canvas made complex sequences difficult to scan as they grew. This led to a vertical workflow with predictable step placement.',
          ],
          figures: [],
        },
        {
          title: 'Users needed guidance before choosing campaign complexity',
          icon: campaignGuidanceIcon,
          paragraphs: [
            'The separate Simple and Smart Campaign entry points asked people to choose a mode before they understood the task. This led to one guided starting point with conditions and branches revealed when relevant.',
          ],
          figures: [],
        },
        {
          title: 'Editing needed visible save and recovery safeguards',
          icon: saveRecoveryIcon,
          paragraphs: [
            'A customer interview exposed unclear save behaviour, and six of seven internal participants prioritised warnings and recovery. This made draft states, warnings, and recovery controls priorities for the MVP concept.',
          ],
          figures: [],
        },
      ],
    },
    {
      title: 'The decision: one vertical workflow',
      paragraphs: [
        'I considered improving the Smart Campaign canvas, but keeping it would still require users to arrange steps manually and choose between two campaign modes.',
        'I proposed a single builder with a vertical workflow. Steps would have a predictable place in the sequence, and users could add conditions and branches as the campaign needed them. This traded free placement on the canvas for a consistent reading order. The design still needed to make branching paths clear; a vertical layout alone would not solve that.',
      ],
      figures: [],
      subsections: [
        {
          title: 'Give people a clear first step',
          paragraphs: [
            'I removed the choice between Simple and Smart Campaigns from the proposed starting flow. The side panel showed the available steps so users could begin building the campaign straight away.',
            'Conditions and branches appeared when relevant. This let the concept support more complex campaigns without asking everyone to understand those options at the start.',
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
            'Selecting a step opened its settings in a side panel, with the workflow still visible alongside it. I used this layout so people could focus on the details of a task and still see where it belonged in the sequence.',
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
            'I designed the flow so users could work on an incomplete campaign. When they were ready to launch, a checklist showed what was missing and pointed to the step that needed attention.',
            'Missing inputs and connection issues appeared alongside the workflow, so users could see where each problem occurred without leaving the campaign.',
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
                'Branching paths and connection issues stay visible in the workflow while the campaign is prepared for launch.',
            },
          ],
        },
      ],
    },
    {
      title: 'What the internal test told me',
      paragraphs: [
        'I created a concept test in Windy for seven colleagues from Sales, Customer Success, Support, and Product. It combined prototypes with multiple-choice and open-ended questions about the main campaign-building flows.',
        'Six of the seven participants prioritised warnings about unsaved changes and the ability to undo a deletion or recover a step. Together with the saving problem raised in the customer interview, this made save status and recovery priorities for the MVP. I explored draft states, warnings, and recovery controls as part of the editing experience.',
        'The test helped identify what the team considered most important. It did not establish whether customers could build or edit campaigns more easily; that still needed to be tested with campaign creators.',
      ],
      figures: [],
    },
    {
      title: 'Where the project ended',
      paragraphs: [
        'Product priorities changed, and the project stopped before development.',
        'I delivered a proposal for how one campaign builder could support both simple and branching campaigns, with MVP priorities and prototypes covering setup, step editing, and launch checks. This gave the team a concrete design to review beyond the original request to refresh Smart Campaign Builder.',
        'The next step would have been to test the full flow with customers: could they build a campaign, follow its branches, change a step, and resolve an issue before launch? Those findings would guide the final MVP scope with engineering.',
      ],
      figures: [],
    },
  ],
} as const
