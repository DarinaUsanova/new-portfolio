import addRecording from '@/assets/voice-notes-case/add-recording.png'
import addStep from '@/assets/voice-notes-case/add-step.png'
import inbox from '@/assets/voice-notes-case/inbox.png'
import resources from '@/assets/voice-notes-case/resources.png'
import resourcesNew from '@/assets/voice-notes-case/resources-new.png'
import sendVoiceNote from '@/assets/voice-notes-case/send-voice-note.png'
import voiceNoteStep from '@/assets/voice-notes-case/voice-note-step.png'

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
  icon?: 'conversation' | 'library'
}

type CaseStudySection = {
  title: string
  paragraphs: string[]
  figures: CaseStudyFigure[]
  subsections?: CaseStudySubsection[]
}

type VoiceNotesCase = {
  title: string
  metadata: string[]
  introduction: string[]
  heroFigure: CaseStudyFigure
  sections: CaseStudySection[]
}

export const voiceNotesCase: VoiceNotesCase = {
  title: 'Voice Notes: Bringing Voice to Conversations and Campaigns',
  metadata: [
    'Role: Product Designer; sole designer on the project',
    'Scope: Customer research, campaign and Inbox workflows, a recording library, interface behaviour, and support during development',
    'Timeline: Approximately three weeks',
    'Team: Product Manager, engineering, and QA',
    'Status: Launched',
  ],
  introduction: [
    'I led the design of Voice Notes for Buzz.ai, from customer interviews through launch. The feature let sales teams exchange voice messages with prospects and reuse saved recordings in outreach campaigns without leaving the product.',
  ],
  heroFigure: {
    src: inbox,
    alt: 'Buzz.ai Inbox conversation showing incoming and outgoing voice messages',
    caption:
      'Voice Notes brought incoming and outgoing audio into the same conversation as text messages',
    priority: true,
  },
  sections: [
    {
      title: 'Why we added Voice Notes',
      paragraphs: [
        'Buzz.ai is a LinkedIn outreach platform for sales teams. Direct customers and white-label partners had asked for voice messaging as a more personal way to communicate with prospects.',
        'Users could not send audio inside Buzz.ai, and incoming LinkedIn voice messages did not appear in the Inbox. Recording, managing, and sending audio meant switching between tools. Prepared recordings also had no place in the campaign workflow.',
        'The request involved two situations: replying to a prospect in an active conversation and preparing a message to reuse in automated outreach. The design needed to connect both to the same recording library.',
        'Voice needed to work in the conversation, in the campaign, and wherever users managed their recordings.',
      ],
      figures: [],
    },
    {
      title: 'What I owned',
      paragraphs: [
        'I was the sole product designer, working with the Product Manager, engineers, and QA. I interviewed customers, looked at how other messaging and outreach products worked, and used what I learned to define what the feature needed to do.',
        'I designed how users would record, play, save, select, receive, and send voice messages across the Inbox, campaign builder, and recording library. I also designed how the interface would respond to user actions, check for missing or incorrect information, and handle unusual situations. I documented how the feature should work and worked with engineering and QA throughout development.',
      ],
      figures: [],
    },
    {
      title: 'Research and evidence',
      paragraphs: [
        'I conducted four interviews with direct customers and white-label partners. For the white-label interviews, I spoke with the business owners offering Buzz.ai under their own brand. During live calls, I walked participants through early prototypes and discussed how Voice Notes could support conversations and campaigns.',
        'I also looked at how other messaging and outreach tools handled recording and playback. AI helped me analyse interview transcripts and group similar feedback. Customer interviews and feedback on the prototypes helped me decide what to include and how it should work.',
      ],
      figures: [],
    },
    {
      title: 'Key insights',
      paragraphs: [],
      figures: [],
      subsections: [
        {
          title: 'Conversations and campaigns needed different ways to use voice',
          icon: 'conversation',
          paragraphs: [
            'In active conversations, customers wanted to record and send a quick message without leaving the thread. In campaigns, they wanted to choose a prepared recording. I designed a way to record messages directly in a conversation and a separate campaign step for saved audio.',
          ],
          figures: [],
        },
        {
          title: 'Users needed to find and check recordings before reusing them',
          icon: 'library',
          paragraphs: [
            'Customers needed to store, preview, rename, and manage recordings beyond a single conversation or campaign. I designed a central library so they could find a saved message and listen to it before using it again.',
          ],
          figures: [],
        },
      ],
    },
    {
      title: 'The decision: a separate Voice Note step',
      paragraphs: [
        'I explored adding voice as a message type inside the existing Send Message step or giving it a separate campaign step. Keeping both inside Send Message meant fewer step types, but users would have to open that step to choose between text and audio.',
        'Customer feedback on the prototypes suggested that a separate voice step was easier to understand in a campaign sequence. I made Send Voice Note a separate step. This added another step type to the builder, but made the option to send a voice message visible while users built the campaign.',
      ],
      figures: [
        {
          src: addStep,
          alt: 'Buzz.ai Add Step dialog with Send Voice Note highlighted among campaign actions',
          caption:
            'Customer feedback on the prototypes suggested that a separate step for voice messages was easier to understand',
        },
      ],
      subsections: [
        {
          title: 'Choose the recording while setting up the campaign step',
          paragraphs: [
            'In Send Voice Note, users could browse saved recordings, listen to them, and select one before saving the step. They could also create a new recording and set how long the campaign should wait after the previous step.',
            'I added the option to listen to recordings before choosing one for a campaign. Users did not have to rely on the recording\'s name to identify the right audio.',
          ],
          figures: [
            {
              src: voiceNoteStep,
              alt: 'Buzz.ai Send Voice Note campaign step with an option to add a voice note and configure the wait time',
              caption:
                'Based on customer research, I designed Voice Notes as a separate campaign step',
            },
            {
              src: sendVoiceNote,
              alt: 'Buzz.ai Send Voice Note step with the selected recording playing in the audio player',
              caption:
                'Users can listen to the recording to check they have chosen the right one before saving the step',
            },
            {
              src: addRecording,
              alt: 'Buzz.ai Select Voice Note dialog with recordings from the library and a New Voice Note action',
              caption:
                'Users can choose a saved recording from the library or create a new one if none fits their needs',
            },
          ],
        },
        {
          title: 'Give reusable recordings a home outside the campaign',
          paragraphs: [
            'The central library held recordings that users could access from both campaigns and the Inbox. They could listen to, rename, download, or delete a recording there.',
            'When creating a Voice Note, users could name it and listen before saving. I used familiar recording and playback controls, with a waveform preview, to make it clear what had been recorded and let users check the audio.',
          ],
          figures: [
            {
              src: resources,
              alt: 'Buzz.ai Voice Notes recording library with saved recordings and management actions',
              caption:
                'A saved recording is available for the next campaign or conversation',
            },
            {
              src: resourcesNew,
              alt: 'Buzz.ai Add New Voice Note dialog with a name field and waveform preview',
              caption:
                'New recordings can be named and reviewed before they become available for reuse',
            },
          ],
        },
        {
          title: 'Keep voice messages inside the conversation',
          paragraphs: [
            'In the Inbox, users could record a one-time message in an open thread or select a saved recording from the library. A quick reply could stay specific to that conversation, while prepared messages remained available for reuse.',
            'Incoming LinkedIn voice messages also appeared in the Inbox after launch. Users could receive and send audio in the same thread, so they no longer had to switch tools for voice messages.',
          ],
          figures: [
            {
              src: inbox,
              alt: 'Buzz.ai Inbox thread with incoming and outgoing voice messages and the recording control in the composer',
              caption:
                'Receive a voice message and reply with a new or saved recording in the same thread',
            },
          ],
        },
      ],
    },
    {
      title: 'What we shipped and learned',
      paragraphs: [
        'We launched Voice Notes across the Inbox, campaign builder, and recording library. I delivered the designs and specifications for how these parts worked together and helped engineers and QA during development.',
        'The release brought incoming and outgoing audio into Buzz.ai conversations and made saved recordings available for campaign steps. It covered the full workflow from creating and reviewing a recording to storing, selecting, and sending it.',
        'After launch, we followed up with the interview participants. They shared positive feedback on the released feature, and we also received positive feedback from other users.',
        "An estimated 43% of Buzz.ai's direct users began using Voice Notes after launch, excluding users of white-label versions of the product.",
      ],
      figures: [],
    },
    {
      title: 'What I would explore next',
      paragraphs: [
        'One future possibility would be letting users write a message and turn it into audio using a selected AI voice or their own voice. This was not part of the launch and would need more research into authenticity, permission to use someone\'s voice, user trust, and control over the generated audio.',
        'A useful next step would be to understand how often users return to Voice Notes and whether they reuse saved recordings across conversations and campaigns.',
      ],
      figures: [],
    },
  ],
} as const
