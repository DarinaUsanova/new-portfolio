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
  title: 'Voice notes for outreach',
  metadata: [
    'Scope: Voice messaging in Inbox and campaigns',
    'Team: Product Manager, engineers and QA',
    'Status: Launched',
  ],
  introduction: [
    'I led the design of Voice Notes for Buzz.ai from customer interviews through launch. Sales teams could exchange voice messages with prospects and reuse saved recordings in outreach campaigns without leaving Buzz.ai.',
  ],
  heroFigure: {
    src: inbox,
    alt: 'Buzz.ai Inbox conversation showing incoming and outgoing voice messages',
    caption:
      'Incoming and outgoing audio in the same conversation as text messages',
    priority: true,
  },
  sections: [
    {
      title: 'Why we added Voice Notes',
      paragraphs: [
        'Buzz.ai is a LinkedIn outreach platform for sales teams. Direct customers and white-label partners asked for voice messaging as another way to communicate with prospects.',
        'Users could not send audio inside Buzz.ai, and incoming LinkedIn voice messages did not appear in the Inbox. Recording, managing, and sending audio meant switching between tools. Prepared recordings also had no place in the campaign workflow.',
        'The request covered two workflows. Users needed to reply to a prospect in an active conversation and prepare a message for reuse in automated outreach. Both workflows needed access to the same recording library.',
      ],
      figures: [],
    },
    {
      title: 'What I owned',
      paragraphs: [
        'I was the sole product designer, working with the Product Manager, engineers, and QA. I interviewed customers, reviewed other messaging and outreach products, and used that input to define the feature.',
        'I designed recording, playback, saving, selection, receiving, and sending across the Inbox, campaign builder, and recording library. I also defined responses to user actions, validation when information was missing or incorrect, and less common situations. I documented the behaviour and worked with engineering and QA during development.',
      ],
      figures: [],
    },
    {
      title: 'Research',
      paragraphs: [
        'I conducted four interviews with direct customers and white-label partners. For the white-label interviews, I spoke with the business owners offering Buzz.ai under their own brand. During live calls, I walked participants through early prototypes and discussed how Voice Notes could support conversations and campaigns.',
        'I also reviewed how other messaging and outreach tools handled recording and playback. I used AI to analyse interview transcripts and group similar feedback. The interviews and prototype sessions shaped what the feature included and how it worked.',
      ],
      figures: [],
    },
    {
      title: 'Key insights',
      paragraphs: [],
      figures: [],
      subsections: [
        {
          title: 'Conversations needed recording, while campaigns needed saved audio',
          icon: 'conversation',
          paragraphs: [
            'In active conversations, customers wanted to record and send a quick message without leaving the thread. In campaigns, they wanted to choose a prepared recording. I kept recording in the conversation and put saved audio in a separate campaign step.',
          ],
          figures: [],
        },
        {
          title: 'Users needed a library for saved recordings',
          icon: 'library',
          paragraphs: [
            'Customers wanted to store, preview, rename, and manage recordings outside a single conversation or campaign. I designed a shared library where they could find a saved message and listen before using it again.',
          ],
          figures: [],
        },
      ],
    },
    {
      title: 'I made Send Voice Note a separate campaign step',
      paragraphs: [
        'I explored adding voice as a message type inside the existing Send Message step or giving it a separate campaign step. Keeping both inside Send Message meant fewer step types, but users would have to open that step to choose between text and audio.',
        'In prototype feedback, customers understood a separate voice step more easily in a campaign sequence. I made Send Voice Note a separate step. It added another step type, and users could see the voice action while building the campaign.',
      ],
      figures: [
        {
          src: addStep,
          alt: 'Buzz.ai Add Step dialog with Send Voice Note highlighted among campaign actions',
          caption:
            'A separate campaign step made the voice action visible in the sequence',
        },
      ],
      subsections: [
        {
          title: 'Choose the recording while setting up the campaign step',
          paragraphs: [
            'In Send Voice Note, users could browse saved recordings, listen to them, and select one before saving the step. They could also create a new recording and set how long the campaign should wait after the previous step.',
            'I added playback before selection so users could check the audio instead of relying on the recording\'s name.',
          ],
          figures: [
            {
              src: voiceNoteStep,
              alt: 'Buzz.ai Send Voice Note campaign step with an option to add a voice note and configure the wait time',
              caption:
                'The campaign step lets users add a saved voice note and set the wait time',
            },
            {
              src: sendVoiceNote,
              alt: 'Buzz.ai Send Voice Note step with the selected recording playing in the audio player',
              caption:
                'Users can listen to a recording before saving the step',
            },
            {
              src: addRecording,
              alt: 'Buzz.ai Select Voice Note dialog with recordings from the library and a New Voice Note action',
              caption:
                'Users can choose a saved recording or create a new one',
            },
          ],
        },
        {
          title: 'Make recordings available outside the campaign',
          paragraphs: [
            'Campaigns and the Inbox used the same library. Users could listen to, rename, download, or delete recordings there.',
            'When creating a Voice Note, users could name it, see its waveform, and listen before saving. The dialog kept the recording and playback controls together so users could check the audio before saving it to the library.',
          ],
          figures: [
            {
              src: resources,
              alt: 'Buzz.ai Voice Notes recording library with saved recordings and management actions',
              caption:
                'A saved recording is available in both campaigns and conversations',
            },
            {
              src: resourcesNew,
              alt: 'Buzz.ai Add New Voice Note dialog with a name field and waveform preview',
              caption:
                'Users can name a new recording, review its waveform, and listen before saving',
            },
          ],
        },
        {
          title: 'Keep voice messages inside the conversation',
          paragraphs: [
            'In the Inbox, users could record a one-off message in an open thread or choose a saved recording from the library. A one-off reply stayed in that thread, while saved recordings remained available for reuse.',
            'Incoming LinkedIn voice messages also appeared in the Inbox after launch. Users could receive and send audio in the same thread without switching tools.',
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
      title: 'What we shipped',
      paragraphs: [
        'We launched Voice Notes in the Inbox, campaign builder, and recording library. I delivered the designs and specifications for how these parts worked together and supported engineering and QA during development.',
        'Users could create, review, store, select, and send recordings within Buzz.ai.',
        "Within the post-launch period we measured, an estimated 43% of Buzz.ai's direct users used Voice Notes. White-label users were excluded.",
      ],
      figures: [],
    },
    {
      title: 'What I would explore next',
      paragraphs: [
        'I would explore turning written messages into audio with a selected AI voice or a user\'s own voice, only with explicit permission. The launch did not include this. It would require research into authenticity, consent, user trust, and control over generated audio.',
        'I would measure how often users return to Voice Notes and whether they reuse saved recordings across conversations and campaigns.',
      ],
      figures: [],
    },
  ],
} as const
