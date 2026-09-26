import newPrompt from '@/assets/custom-prompts-case/new-prompt.png'
import postAiCommentStep from '@/assets/custom-prompts-case/post-ai-comment-step.png'
import postAiCommentStepNewPrompt from '@/assets/custom-prompts-case/post-ai-comment-step-new-prompt.png'
import postAiCommentStepSelectPrompts from '@/assets/custom-prompts-case/post-ai-comment-step-select-prompts.png'
import postAiCommentStepValidation from '@/assets/custom-prompts-case/post-ai-comment-step-validation.png'
import promptsTable from '@/assets/custom-prompts-case/prompts-table.png'
import promptsTableModal from '@/assets/custom-prompts-case/prompts-table-modal.png'

type CaseStudyFigure = {
  src: string
  lightboxSrc?: string
  alt: string
  caption: string
  priority?: boolean
}

type InsightIconName = 'library' | 'shield' | 'sliders' | 'workflow'

type CaseStudySubsection = {
  title: string
  paragraphs: string[]
  figures: CaseStudyFigure[]
  icon?: InsightIconName
}

type CaseStudySection = {
  title: string
  paragraphs: string[]
  figures: CaseStudyFigure[]
  subsections?: CaseStudySubsection[]
}

type CustomPromptsCase = {
  title: string
  metadata: string[]
  introduction: string[]
  heroFigure: CaseStudyFigure
  sections: CaseStudySection[]
}

const figure = (src: string, alt: string, caption: string, lightboxSrc?: string): CaseStudyFigure => ({
  src,
  lightboxSrc,
  alt,
  caption,
})

export const customPromptsCase: CustomPromptsCase = {
  title: 'Custom Prompts: A reusable writing system for AI comments',
  metadata: [
    'Role: Product Designer; sole designer on the project',
    'Scope: Product analysis, prompt management, campaign integration, validation, and edge cases',
    'Team: Product Manager and engineers',
    'Status: Launched',
  ],
  introduction: [
    'I led the design of Custom Prompts, a shared prompt library and campaign-step flow that let outreach teams set the tone, language, and structure of LinkedIn comments.',
  ],
  heroFigure: {
    ...figure(
      newPrompt,
      'Buzz.ai New Prompt dialog with a filled prompt, dynamic placeholders, system prompt, and default setting',
      'Custom prompts let teams define how AI-generated comments should be written',
      newPrompt,
    ),
    priority: true,
  },
  sections: [
    {
      title: 'Why AI Comments needed more control',
      paragraphs: [
        "Buzz.ai helps sales teams automate outreach on LinkedIn. AI Comments lets them respond to prospects' posts during a campaign, but the quality of each comment depends on the instructions behind it.",
        'Before Custom Prompts, users could choose only from a small set of preset tones, such as Positive, Question, Joke, or Formal. That made the feature quick to configure, but teams could not control the message structure, angle, language, or level of personalization.',
        'The limitation became especially visible in multilingual outreach. Without an explicit language instruction, the AI could respond in the language of the post instead of the language the campaign was meant to use. The new system also had to fit into existing campaign workflows without forcing teams to rebuild active campaigns.',
      ],
      figures: [],
    },
    {
      title: 'What I owned',
      paragraphs: [
        'I led the product design from problem framing through implementation. I analyzed the existing AI Comments workflow, reviewed comparable AI writing controls, and defined the prompt management model. I designed the creation and editing flows, integrated prompts into the Post AI Comment step, and specified validation and edge cases with product and engineering.',
      ],
      figures: [],
    },
    {
      title: 'Research and evidence',
      paragraphs: [
        'I reviewed customer feedback about the existing AI Comments workflow and where preset tones fell short. I also compared how other AI writing tools let people guide generated text. Together, they pointed to a gap between choosing a tone and explaining what a team wanted a comment to do. Teams needed reusable instructions for style, structure, language, and messaging intent.',
        'I reviewed the proposed flow and interaction model with the product team before implementation. This was directional validation, not end-user usability testing. It helped us assess the concept, but it could not tell us how easily customers would learn or use it.',
      ],
      figures: [],
    },
    {
      title: 'What the research showed',
      paragraphs: [],
      figures: [],
      subsections: [
        {
          title: 'Tone presets were too narrow for real outreach strategies',
          icon: 'sliders',
          paragraphs: [
            'Tone presets described a general mood, not what a comment should say or how it should be written. The new model needed freeform instructions rather than a longer list of tone labels.',
          ],
          figures: [],
        },
        {
          title: 'Prompts needed to be reusable across campaigns',
          icon: 'library',
          paragraphs: [
            'If users had to write the same instructions inside every campaign step, they would repeat work and have a harder time keeping messaging consistent. Prompts needed a shared home for creation, review, and reuse.',
          ],
          figures: [],
        },
        {
          title: 'Control had to stay close to campaign setup',
          icon: 'workflow',
          paragraphs: [
            'A separate prompt library would make reuse easier, but it could also add another place to configure a campaign. Users needed to create or select a prompt directly from the Post AI Comment step as well as from the library.',
          ],
          figures: [],
        },
        {
          title: 'More control also required clearer safeguards',
          icon: 'shield',
          paragraphs: [
            'Custom instructions introduced new failure cases: a step without a prompt, a prompt deleted while still in use, or a library with no available prompts. Validation, warnings, and empty states had to cover those cases from the start.',
          ],
          figures: [],
        },
      ],
    },
    {
      title: 'Why I chose a prompt system',
      paragraphs: [
        'I considered expanding the list of tone presets or putting a freeform prompt field only inside the campaign step. More presets would still limit the messaging strategy, while step-only prompts would make reuse difficult. I chose a connected system: a shared prompt library for management and a lightweight prompt selector inside campaign setup.',
        'That added more states to design, but it let teams create instructions once, reuse them across campaigns, and still configure a comment while building the workflow.',
      ],
      figures: [],
    },
    {
      title: 'Solution',
      paragraphs: [],
      figures: [],
      subsections: [
        {
          title: 'Give prompts a shared home',
          paragraphs: [
            'I designed a shared prompt library where teams could create, edit, preview, and delete prompts. Each prompt had a name, an icon, and instructions for how the AI should respond. The library gave those instructions a place to live and made them easier to reuse across campaigns.',
            'Teams no longer had to rewrite the same instructions in every campaign.',
          ],
          figures: [
            figure(
              promptsTable,
              'Buzz.ai AI Comment Prompts library with saved prompts and management actions',
              'A shared library for prompts teams use across campaigns.',
              promptsTable,
            ),
          ],
        },
        {
          title: 'Let users define comment behavior',
          paragraphs: [
            'The creation flow let users write their own instructions, choose whether to use a prompt by default for new campaign steps, and add dynamic placeholders for prospect information. This let teams set tone, language, structure, and personalization in one place.',
            'I made the system prompt expandable. Users could inspect the base instructions that Buzz.ai already applied when they needed them, while the main form stayed focused on their own prompt. Length validation for prompt names and content kept the inputs usable in the AI workflow.',
            'Users could define the instructions behind a generated comment and see which base rules the product added.',
          ],
          figures: [
            figure(
              postAiCommentStepNewPrompt,
              'Buzz.ai Post AI Comment step with the New Prompt dialog open',
              'A new prompt can also be created directly from the campaign step.',
              postAiCommentStepNewPrompt,
            ),
          ],
        },
        {
          title: 'Connect the library to the campaign step',
          paragraphs: [
            'Custom prompts were integrated directly into the Post AI Comment step. Users could select one or more saved prompts, preview them before choosing, or create a new prompt without leaving campaign setup.',
            'When multiple prompts were attached to one step, the system rotated between them during generation. This reduced repeated comments without changing the instructions the team had chosen.',
          ],
          figures: [
            figure(
              postAiCommentStep,
              'Buzz.ai Post AI Comment step with multiple selected prompts and a tooltip explaining prompt rotation',
              'Multiple prompts can rotate during generation to make comments less repetitive.',
              postAiCommentStep,
            ),
            figure(
              postAiCommentStepSelectPrompts,
              'Buzz.ai Select prompts dialog with searchable prompt cards and a New Prompt action',
              'Saved prompts can be selected without leaving campaign setup.',
              postAiCommentStepSelectPrompts,
            ),
          ],
        },
        {
          title: 'Handle missing and in-use prompts',
          paragraphs: [
            'I designed states for the cases where a prompt was missing or already in use. A campaign step could not be left without at least one prompt. Deleting a prompt already used in campaigns triggered a warning, and empty and disabled states explained what users could do next.',
            'Together, these states blocked an incomplete step and made deletion consequences clear.',
          ],
          figures: [
            figure(
              postAiCommentStepValidation,
              'Buzz.ai Post AI Comment step showing a validation message when no prompt is selected',
              'Validation keeps a campaign step from being saved without a prompt.',
              postAiCommentStepValidation,
            ),
            figure(
              promptsTableModal,
              'Buzz.ai delete prompt confirmation modal explaining where the prompt is currently used',
              'A warning explains the effect of deleting a prompt that is already used in campaigns.',
              promptsTableModal,
            ),
          ],
        },
      ],
    },
    {
      title: 'Validation and outcome',
      paragraphs: [
        'I reviewed the proposed workflow with the product team before implementation. The review covered the library, prompt creation, campaign integration, and safeguards as one flow. It did not replace customer usability testing, so post-launch feedback was important for learning how customers used the feature.',
        'Custom Prompts changed AI Comments from a small set of tone shortcuts into a reusable set of instructions. Teams could define the tone, structure, language, and personalization of generated comments, then apply those instructions across campaign steps.',
        'Roughly four months after launch, the team reported fewer complaints about incorrect AI responses and language mismatches. Some users also described the feature as easier to use. This feedback was encouraging, but it was not a measured production metric, so I cannot say how large the improvement was.',
        'I would next measure how often teams create and reuse prompts, whether reuse shortens campaign setup, and whether language-related issues continue to decline across different outreach segments.',
      ],
      figures: [],
    },
  ],
} as const
