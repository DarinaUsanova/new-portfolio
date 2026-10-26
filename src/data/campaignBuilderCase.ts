import guidedStart from '@/assets/campaign-builder-case/empty-state-choose-first-block.png'
import campaignGuidanceIcon from '@/assets/campaign-builder-case/insights/campaign-guidance.svg'
import launchChecklist from '@/assets/campaign-builder-case/checklist-item-points.png'
import oldManualTask from '@/assets/campaign-builder-case/manual-task-configuration-old.png'
import legacyBuilder from '@/assets/campaign-builder-case/smart-campaign-case-v2.png'
import impactEffortMatrix from '@/assets/campaign-builder-case/impact-effort-matrix.png'
import researchBoard from '@/assets/campaign-builder-case/campaigns-research.png'
import saveRecoveryIcon from '@/assets/campaign-builder-case/insights/save-recovery.svg'
import sidePanelEditing from '@/assets/campaign-builder-case/manual-task-configuration.png'
import workflowOrderIcon from '@/assets/campaign-builder-case/insights/workflow-order.svg'
import workflowBranching from '@/assets/campaign-builder-case/workflow-overview-with-visible-issues-and-checklist-guidance.png'
import wyndeRenameTest from '@/assets/campaign-builder-case/wynde-rename-first-click.png'
import type { CaseStudyComparisonProps } from '@/components/CaseStudyComparison'

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
  comparison?: CaseStudyComparisonProps
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
    'Team: Head of Product and Lead Engineer',
    'Status: Discovery completed; MVP concept',
  ],
  introduction: [
    "The project started as a redesign of Buzz.ai's Smart Campaign Builder. After reviewing feedback on both campaign types, I proposed a single builder for simple and branching campaigns.",
  ],
  heroFigure: {
    src: workflowBranching,
    alt: 'Proposed campaign builder with a branching workflow and launch checklist open',
    caption:
      'The proposed editor starts with a sequence and adds branches when a campaign needs them.',
    height: 1500,
    priority: true,
    width: 2400,
  },
  sections: [
    {
      title: 'Challenge',
      paragraphs: [
        'Buzz.ai helps sales and marketing teams automate outreach. Its campaign builder is where they set up the steps of a campaign and decide what should happen next.',
        'Customers chose between Simple Campaigns, which followed a single sequence, and Smart Campaigns, which added conditions and branches on a manually arranged canvas.',
        'Long branching campaigns were difficult to scan. People also had to choose a campaign mode before they knew whether they would need conditions.',
      ],
      figures: [
        {
          src: legacyBuilder,
          alt: 'Legacy Smart Campaign Builder with a manually arranged branching workflow',
          caption:
            'The previous Smart editor asked users to arrange the canvas as well as build the campaign.',
          height: 1560,
          width: 2400,
        },
      ],
    },
    {
      title: 'My role',
      paragraphs: [
        'I owned the research and concept as the sole product designer. I identified problems shared by both campaign modes and reviewed the priorities with the Head of Product and Lead Engineer.',
        'I designed the prototypes, ran an internal study, interviewed three customers, and delivered the discovery summary.',
      ],
      figures: [],
    },
    {
      title: 'Research and priorities',
      paragraphs: [
        'I mapped roughly 15–20 Canny suggestions from customers and the internal team into eight problem clusters, then drew out five insights. Users reported problems in both Simple and Smart Campaigns.',
        'For example, several comments described having to save in more than one place or assuming a change had been saved when it had not. I took that as a sign that the editor needed clearer save feedback. An unsaved-changes warning became one hypothesis to explore.',
      ],
      figures: [
        {
          src: researchBoard,
          alt: 'Discovery board with Canny feedback clusters, interface audit, competitor research, hypotheses and interview analysis',
          caption:
            'The board contains Canny clusters, interface issues, comparable products, hypotheses, and test findings.',
          height: 1560,
          width: 2400,
        },
      ],
      subsections: [
        {
          title: 'Find the recurring problems',
          icon: workflowOrderIcon,
          paragraphs: [
            'Long workflows were hard to read. Users also struggled to start a campaign and tell whether their work was saved. Some had to leave the campaign to edit a step; others were blocked by validation before they had finished a draft.',
          ],
          figures: [],
        },
        {
          title: 'Audit the interface and study other builders',
          icon: campaignGuidanceIcon,
          paragraphs: [
            'I audited the existing step editor and recorded issues with required fields, crowded controls, and error messages. I also looked at Apollo, Lemlist, Attio, Dify, and Amplemarket to see how they handled workflow creation.',
            'I explored a guided first step, fixed positions for new steps, settings in a side panel, and validation at launch. These were ideas to test with Buzz customers.',
          ],
          figures: [],
        },
        {
          title: 'Choose priorities for the first iterations',
          icon: saveRecoveryIcon,
          paragraphs: [
            'I put the hypotheses on an impact–effort matrix and reviewed them with the Head of Product and Lead Engineer.',
            'The high-impact, lower-effort ideas in green became the starting point for the first iterations. They included a guided start, a launch checklist, clearer validation, a warning about unsaved changes, and step duplication. I also prototyped a vertical workflow and side-panel editing from the higher-effort group to see how one builder could handle both campaign types.',
          ],
          figures: [
            {
              src: impactEffortMatrix,
              alt: 'Impact–effort matrix of campaign builder hypotheses, with high-impact ideas grouped by lower and higher implementation effort',
              caption: 'Green notes mark the first-iteration priorities. Blue notes group ideas that needed more effort.',
              height: 1590,
              width: 2400,
            },
          ],
        },
      ],
    },
    {
      title: 'One builder for both',
      paragraphs: [
        'I proposed one builder where people could start with a simple sequence and add conditions or branches when the campaign needed them.',
        'I considered keeping free placement on the canvas. In a vertical workflow, the system positioned each step, so users could follow the sequence without arranging it themselves. This reduced their control over the layout. I still needed to test whether long branches stayed readable.',
      ],
      figures: [],
      subsections: [
        {
          title: 'Start with a step, not a campaign mode',
          paragraphs: [
            'Users could add a first step before deciding whether the campaign needed conditions. The same workflow could grow branches later.',
          ],
          figures: [
            {
              src: guidedStart,
              alt: 'Campaign builder with a guided starting point and available steps in a side panel',
              caption:
                'The empty state points to the first step in the side panel.',
            },
          ],
        },
        {
          title: 'Keep the workflow visible while editing',
          paragraphs: [
            'I chose a side panel instead of a full-screen modal. Users could still see the selected step and its position in the campaign while editing it.',
          ],
          figures: [],
          comparison: {
            beforeSrc: oldManualTask,
            afterSrc: sidePanelEditing,
            beforeAlt: 'Old Smart Campaign Builder with a Manual Task modal covering the workflow',
            afterAlt: 'Proposed Manual Task settings in a side panel beside the visible workflow',
            caption: 'Manual Task in the old Smart Campaign Builder (left) and my proposed side-panel editor (right), which keeps the workflow visible.',
          },
        },
        {
          title: 'Let people finish the draft before validating launch',
          paragraphs: [
            'Users could leave steps incomplete while building a campaign. When they tried to launch it, a checklist pointed to the fields and connections that still needed work.',
          ],
          figures: [
            {
              src: launchChecklist,
              alt: 'Campaign builder launch checklist pointing to an incomplete step',
              caption:
                'The checklist links missing task content to its step in the workflow.',
            },
            {
              src: workflowBranching,
              alt: 'Campaign builder workflow with readable branching paths and launch issues in context',
              caption:
                'A disconnected Enrich data step appears beside the campaign branches and in the launch checklist.',
              height: 1500,
              width: 2400,
            },
          ],
        },
      ],
    },
    {
      title: 'Prototype testing',
      paragraphs: [
        'I showed the prototypes to three customers and ran an 11-question Wynde study with seven colleagues who worked closely with customers.',
        'In the internal study, all seven participants added the first campaign step. Five of seven found and fixed a validation error before saving the campaign, and five of seven configured both branches of a condition. Of the two remaining participants, one was blocked by a prototype bug and the other skipped some questions, so their incomplete results were inconclusive.',
        'The results gave me confidence in the guided start and supported the checklist and condition flows. I would retest the latter two with a stable prototype and longer, more complex customer campaigns.',
      ],
      figures: [],
      subsections: [
        {
          title: 'One place to rename a campaign',
          paragraphs: [
            'In a Wynde first-click task, colleagues looked for the rename action in both the header and side panel. In the customer interviews, the title in the header was the expected place.',
            'I kept one rename action beside the title in the final concept.',
          ],
          figures: [
            {
              src: wyndeRenameTest,
              alt: 'Wynde first-click heatmap for the question of where to rename a campaign, with clicks in the header and side panel',
              caption: 'The first-click heatmap shows clicks in both the header and side panel.',
              height: 1590,
              width: 2400,
            },
          ],
        },
        {
          title: 'Safe editing became a priority',
          paragraphs: [
            'In the internal study, unsaved-changes warnings and undo or recovery were among the most selected priorities. A customer also described renaming a campaign and continuing to work without realising a separate confirmation was still needed.',
            'We included an unsaved-changes warning among the first-iteration priorities. Undo and recovery needed more engineering work, so they stayed in the higher-effort group.',
          ],
          figures: [],
        },
      ],
    },
    {
      title: 'Outcome and next step',
      paragraphs: [
        'I took a request to redesign Smart Campaign Builder and turned it into a research-backed MVP direction for one builder. Customer interviews and internal testing confirmed the key findings from my discovery. I gave the team clear priorities and tested prototypes to build from.',
        'Development paused while the company focused its resources elsewhere. The MVP remains the direction we plan to move forward with when capacity returns. The next round of testing will focus on longer, more complex campaigns.',
      ],
      figures: [],
    },
  ],
} as const
