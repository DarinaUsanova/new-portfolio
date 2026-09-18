import newPrompt from '@/assets/custom-prompts-case/new-prompt.png'
import newPromptLightbox from '@/assets/custom-prompts-case/lightbox/new-prompt.webp'
import postAiCommentStep from '@/assets/custom-prompts-case/post-ai-comment-step.png'
import postAiCommentStepLightbox from '@/assets/custom-prompts-case/lightbox/post-ai-comment-step.webp'
import postAiCommentStepNewPrompt from '@/assets/custom-prompts-case/post-ai-comment-step-new-prompt.png'
import postAiCommentStepNewPromptLightbox from '@/assets/custom-prompts-case/lightbox/post-ai-comment-step-new-prompt.webp'
import postAiCommentStepSelectPrompts from '@/assets/custom-prompts-case/post-ai-comment-step-select-prompts.png'
import postAiCommentStepSelectPromptsLightbox from '@/assets/custom-prompts-case/lightbox/post-ai-comment-step-select-prompts.webp'
import postAiCommentStepValidation from '@/assets/custom-prompts-case/post-ai-comment-step-validation.png'
import postAiCommentStepValidationLightbox from '@/assets/custom-prompts-case/lightbox/post-ai-comment-step-validation.webp'
import promptsTable from '@/assets/custom-prompts-case/prompts-table.png'
import promptsTableLightbox from '@/assets/custom-prompts-case/lightbox/prompts-table.webp'
import promptsTableModal from '@/assets/custom-prompts-case/prompts-table-modal.png'
import promptsTableModalLightbox from '@/assets/custom-prompts-case/lightbox/prompts-table-modal.webp'

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
  title: 'Custom Prompts: From Preset Tones to a Reusable AI Writing System',
  metadata: [
    'Role: Product Designer; sole designer on the project',
    'Scope: Product analysis, competitive review, prompt library, prompt creation and editing, campaign integration, validation, and edge cases',
    'Team: Product Manager and engineers',
    'Status: Launched',
  ],
  introduction: [
    'I led the product design for Custom Prompts in Buzz.ai’s AI Comments workflow, giving outreach teams more control over the style, language, and structure of comments generated for LinkedIn campaigns.',
  ],
  heroFigure: {
    ...figure(
      newPrompt,
      'Buzz.ai New Prompt dialog with a filled prompt, dynamic placeholders, system prompt, and default setting',
      'Custom prompts give teams direct control over how AI-generated comments are written',
      newPromptLightbox,
    ),
    priority: true,
  },
  sections: [
    {
      title: 'Why AI Comments needed more control',
      paragraphs: [
        'Buzz.ai helps sales teams automate outreach on LinkedIn. AI Comments lets them respond to prospects’ posts during a campaign, but the quality of the generated comment depends on how clearly the AI is guided.',
        'Before Custom Prompts, users could choose only from a small set of preset tones, such as Positive, Question, Joke, or Formal. That made the feature quick to configure, but it did not let teams control the message structure, angle, language, or level of personalization.',
        'The limitation became especially visible in multilingual outreach. Without an explicit language instruction, the AI could respond in the language of the post instead of the language the campaign was meant to use. The new system also had to fit existing campaign workflows without disrupting active setups.',
      ],
      figures: [],
    },
    {
      title: 'What I owned',
      paragraphs: [
        'I led the product design from problem framing through implementation. I analyzed the existing AI Comments workflow, reviewed comparable AI writing controls, defined the prompt management model, designed the creation and editing flows, integrated prompts into the Post AI Comment step, and specified validation and edge cases with product and engineering.',
      ],
      figures: [],
    },
    {
      title: 'Research and evidence',
      paragraphs: [
        'I reviewed customer feedback about the existing AI Comments workflow and where preset tones fell short. I also compared how other AI writing tools let people guide generated text. The feedback and review showed that tone alone was not enough: teams needed reusable instructions for style, structure, language, and messaging intent.',
        'I used internal validation with the product team to review the proposed flow and interaction model before implementation. This was directional validation rather than end-user usability testing, so it helped the team assess the concept but could not establish how customers would use it at scale.',
      ],
      figures: [],
    },
    {
      title: 'Key insights',
      paragraphs: [],
      figures: [],
      subsections: [
        {
          title: 'Tone presets were too narrow for real outreach strategies',
          icon: 'sliders',
          paragraphs: [
            'The existing options described a general mood, but not what the comment should say or how it should be written. Therefore, the new model needed to support freeform instructions rather than simply add more tone labels.',
          ],
          figures: [],
        },
        {
          title: 'Prompts needed to be reusable across campaigns',
          icon: 'library',
          paragraphs: [
            'Writing the same instructions inside every campaign step would make teams repeat work and make consistent messaging harder to maintain. Therefore, prompts needed a shared home where teams could create, review, and reuse them.',
          ],
          figures: [],
        },
        {
          title: 'Control had to stay close to campaign setup',
          icon: 'workflow',
          paragraphs: [
            'A separate prompt library could make reuse easier, but it could also add another place to configure a campaign. Therefore, users needed both a central library and a way to create or select a prompt directly from the Post AI Comment step.',
          ],
          figures: [],
        },
        {
          title: 'More control also required clearer safeguards',
          icon: 'shield',
          paragraphs: [
            'Custom instructions introduced new failure cases: a step without a prompt, a prompt deleted while still in use, or a library with no available prompts. Therefore, validation, warnings, and empty states had to be part of the feature rather than an afterthought.',
          ],
          figures: [],
        },
      ],
    },
    {
      title: 'The decision: build a prompt system, not a longer tone menu',
      paragraphs: [
        'I considered expanding the list of tone presets or putting a freeform prompt field only inside the campaign step. More presets would still limit the messaging strategy, while step-only prompts would make reuse difficult. I chose a connected system: a centralized prompt library for management and a lightweight prompt selector inside campaign setup.',
        'The trade-off was a larger product surface with more states to design. In return, teams could create instructions once, reuse them across campaigns, and still configure a comment at the moment they were building the workflow.',
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
            'I designed a centralized prompt library where teams could create, edit, preview, and delete custom prompts. Each prompt had a name, an icon, and instructions for how the AI should respond. The library made prompts reusable and gave teams a place to maintain a consistent messaging system.',
            'A shared library turns one-off AI instructions into reusable campaign assets.',
          ],
          figures: [
            figure(
              promptsTable,
              'Buzz.ai AI Comment Prompts library with saved prompts and management actions',
              'A shared library turns one-off AI instructions into reusable campaign assets.',
              promptsTableLightbox,
            ),
          ],
        },
        {
          title: 'Let users define the behaviour of a comment',
          paragraphs: [
            'The creation flow let users write their own instructions, choose whether a prompt should be used by default for new campaign steps, and add dynamic placeholders for prospect information. This gave teams control over tone, language, structure, and personalization in one place.',
            'I also made the system prompt expandable. Users could inspect the base instructions already applied by Buzz.ai without having to see them during every configuration task. Length validation for prompt names and content helped keep the inputs usable inside the AI workflow.',
            'Users can define the instructions that shape a generated comment and understand which base rules the product adds.',
          ],
          figures: [
            figure(
              postAiCommentStepNewPrompt,
              'Buzz.ai Post AI Comment step with the New Prompt dialog open',
              'A new prompt can also be created directly from the campaign step.',
              postAiCommentStepNewPromptLightbox,
            ),
          ],
        },
        {
          title: 'Connect the library to the campaign step',
          paragraphs: [
            'Custom prompts were integrated directly into the Post AI Comment step. Users could select one or more saved prompts, preview them before choosing, or create a new prompt without leaving campaign setup.',
            'When multiple prompts were attached to one step, the system rotated between them during generation. This reduced repetitive comments while keeping the output within the intended messaging strategy.',
            'The prompt library stays available where comment behaviour is configured.',
          ],
          figures: [
            figure(
              postAiCommentStep,
              'Buzz.ai Post AI Comment step with multiple selected prompts and a tooltip explaining prompt rotation',
              'Multiple prompts can rotate during generation to make comments less repetitive.',
              postAiCommentStepLightbox,
            ),
            figure(
              postAiCommentStepSelectPrompts,
              'Buzz.ai Select prompts dialog with searchable prompt cards and a New Prompt action',
              'The prompt library stays available where comment behaviour is configured.',
              postAiCommentStepSelectPromptsLightbox,
            ),
          ],
        },
        {
          title: 'Keep unusual states from breaking the workflow',
          paragraphs: [
            'I designed safeguards for the boundaries of the system. A campaign step could not be left without at least one prompt. Deleting a prompt already used in campaigns triggered a warning, and empty and disabled states explained what users could do next.',
            'Validation and warnings make prompt behaviour predictable when users reach an edge case.',
          ],
          figures: [
            figure(
              postAiCommentStepValidation,
              'Buzz.ai Post AI Comment step showing a validation message when no prompt is selected',
              'Validation keeps a campaign step from being saved without a prompt.',
              postAiCommentStepValidationLightbox,
            ),
            figure(
              promptsTableModal,
              'Buzz.ai delete prompt confirmation modal explaining where the prompt is currently used',
              'A warning explains the effect of deleting a prompt that is already used in campaigns.',
              promptsTableModalLightbox,
            ),
          ],
        },
      ],
    },
    {
      title: 'Validation and outcome',
      paragraphs: [
        'I reviewed the proposed workflow with the product team before implementation. The internal validation helped us check whether the library, prompt creation flow, campaign integration, and safeguards formed a coherent system. It did not replace customer usability testing, so the post-launch feedback was important for understanding whether the feature worked in practice.',
        'Custom Prompts changed AI Comments from a small set of tone shortcuts into a reusable writing system. Teams could define the style, structure, language, and personalization of generated comments, then apply those instructions across campaign steps.',
        'Roughly four months after launch, the team received substantially fewer complaints about incorrect AI responses and language mismatches. Users also described the feature as much easier to use. These were qualitative product signals rather than a measured production metric, but they indicated that the new system made AI Comments more useful and dependable in everyday outreach.',
        'The next meaningful step would be to measure how often teams create and reuse prompts, whether prompt reuse improves campaign setup time, and whether language-related issues continue to decline across different outreach segments.',
      ],
      figures: [],
    },
  ],
} as const
