export interface PhaseOffer {
  price: string;
  name: string;
  features: string[];
  isPopular?: boolean;
  badge?: string;
}

export interface Phase {
  id: number;
  name: string;
  level: string;
  goal: string;
  problem: string;
  solution: string[];
  endResult: string;
  mastermind: PhaseOffer;
  privateClient: PhaseOffer;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  phase?: number;
  image?: string;
}

export const phases: Phase[] = [
  {
    id: 1,
    name: 'Tell Your Story',
    level: 'Beginner',
    goal: 'Name your defining moment and share your "why."',
    problem: 'Many accomplished women leaders still feel lacking confidence speaking, particularly when the conversation turns personal. They have the experience and wisdom, yet struggle to identify the defining moment that explains why they lead and what their story truly means.',
    solution: [
      'Discover the truth of your defining moment and turn that lived experience into the foundation of your voice and message'
    ],
    endResult: 'Clarity of their message & story',
    mastermind: {
      price: '$6,000',
      name: 'Mastermind Experience',
      features: [
        '90-day mastermind with 4 self-guided trainings',
        'Quarterly in-person retreat',
        'Supportive group space to develop and share their story',
        'True Influence Method Journal for Truth Tellers'
      ]
    },
    privateClient: {
      price: '$20,000',
      name: 'Private Client Experience',
      badge: 'Private Advisory',
      features: [
        'Everything in the mastermind',
        'Private 1:1 advisory for an individualized training path',
        'Transformative, personalized insights from Joanna',
        'Deep support to identify and articulate the defining moment with precision',
        'Finish with a message they can confidently bring into public leadership'
      ]
    }
  },
  {
    id: 2,
    name: 'Move the Room',
    level: 'Beginner',
    goal: 'Deliver your story in a way that emotionally connects and influences.',
    problem: 'Once women begin sharing their story, self-doubt often kicks in. They don\'t know which of their skills to lead with, nor why their story matters to others. They want to know what makes their story unique. They ask: Do I belong on a stage? Am I qualified to lead?',
    solution: [
      'Create a signature talk following a 7-min structure',
      'Delivered with bravery and clarity, they bring the audience on a journey from the stage about how their lived experience yielded the purposeful solution they now offer that helps the world'
    ],
    endResult: 'Develop your signature talk',
    mastermind: {
      price: '$8,000',
      name: 'Mastermind Experience',
      features: [
        '90-day mastermind with 6 self-guided trainings',
        'Quarterly in-person retreat',
        'Featured speaker slot',
        'Supportive group space to practice',
        'Handbook for Leaders Who Speak',
        'Personalized feedback to help develop a talk that moves the audience'
      ]
    },
    privateClient: {
      price: '$40,000',
      name: 'Private Client Experience',
      badge: 'Private Advisory',
      features: [
        'Everything in the mastermind',
        'Private 1:1 advisory for an individualized training path',
        'Transformative, personalized insights from Joanna',
        'Customized guidance for message refinement',
        'Precision talk development for influence and decision-making'
      ]
    }
  },
  {
    id: 3,
    name: 'Master Your Message',
    level: 'Intermediate',
    goal: 'Build thought leadership through a memorable, repeatable story that influences your audiences through emotional resonance.',
    problem: 'At this stage, leaders may still feel a level of imposter syndrome with standing out when speaking truth for a greater purpose. Their old story may not fully reflect what they truly believe, and holds them back from leading at a greater level of influence. They want to overcome doubt about standing and being seen in their unique message about the greater purpose for your business. As a result, leading from the stage feels scary, incomplete or misaligned.',
    solution: [
      'Clarify the full leadership message by helping them:',
      'Name their target audience in detail',
      'Define their secret sauce',
      'Articulate their actionable, relevant solution',
      'Tell the story with emotional resonance'
    ],
    endResult: 'Create thought leader-level resonance with your audience by standing in your unique value',
    mastermind: {
      price: '$10,000',
      name: 'Mastermind Experience',
      features: [
        '90-day mastermind with 6 self-guided trainings',
        'Quarterly in-person retreat',
        'True Influence Method Journal',
        'Featured speaker slot',
        'Supportive group space to practice your signature talk for emotional resonance',
        'Expert, personalized feedback to sharpen your key differentiator and distinctive leadership message',
        'BONUS: Professional photo & video of your talk to elevate brand'
      ]
    },
    privateClient: {
      price: '$80,000',
      name: 'Private Client Experience',
      badge: 'Private Advisory',
      features: [
        'Everything in the mastermind',
        'Private 1:1 advisory for an individualized training path',
        'Transformative, personalized insights from Joanna',
        'Customized feedback that shapes your mental discipline of standing in thought leader-level visibility',
        'Organize lived experience and key differentiator into a perspective that resonates specifically with your audience'
      ]
    }
  },
  {
    id: 4,
    name: 'Build Your Team',
    level: 'Advanced',
    goal: 'Turn your message into healed leadership frameworks that create safety, inclusion and belonging to improve culture, performance and profit.',
    problem: 'Leaders who lack safety in standing in truth behind their values and purpose, want to overcome their permission-seeking, performative and inefficient style, so they better lead teams, culture and organizational performance.',
    solution: [
      'Translate healed leadership insights into mentorship systems that create',
      'Psychological Wellbeing & Safety',
      'Belonging & Inclusion',
      'Clarity of Values and Purpose',
      'Stronger performance & deeper contribution'
    ],
    endResult: 'Use healed leadership frameworks that create psychological safety and inclusion for a culture of trust, performance and profit.',
    mastermind: {
      price: '$12,000',
      name: 'Mastermind Experience',
      features: [
        '90-day mastermind with 6 self-guided trainings',
        'Quarterly in-person retreat',
        'Featured speaker slot',
        'Supportive group space to practice mentorship frameworks',
        'Expert, personalized feedback to turn your "why," vision and message into a usable healed leadership framework',
        'Build sustainable internal team results through frameworks that build trust, clarity, and stronger team performance',
        'BONUS: Professional photo & video of your talk to elevate brand'
      ]
    },
    privateClient: {
      price: '$140,000',
      name: 'Private Client Experience',
      badge: 'Application Only',
      features: [
        'Everything in the mastermind',
        'Private advisory is by application only.',
        'Private 1:1 advisory for an individualized training path',
        'Transformative, personalized insights from Joanna',
        'Customized training to design leadership systems inside the organization',
        'Turn your "why," secret sauce and purposeful message into a usable team framework',
        'Build sustainable internal team results'
      ]
    }
  },
  {
    id: 5,
    name: 'Be Remembered',
    level: 'Legacy',
    goal: 'Create a Legacy Blueprint for identity, capital, and contribution that lasts beyond your lifetime, standing in the value of your path, work and impact. Includes a succession plan and legacy letter.',
    problem: 'Many leaders create tremendous value, but never formally design the architecture for that value to continue after them into the future through their family, team and future leaders. They lack clarity about the unique value of their contribution, and don\'t have an effective succession plan nor an architecture for their legacy to meaningfully impact the future.',
    solution: [
      'Use legacy frameworks to define',
      'Impact thesis',
      'Resource allocation',
      'Defining contributions',
      'Secret sauce',
      'Succession plan',
      'Legacy letter'
    ],
    endResult: 'Create a Legacy Blueprint standing in the value of your identity, capital and contribution that lasts beyond your lifetime. Includes impact thesis, succession plan and legacy letter.',
    mastermind: {
      price: '$14,000',
      name: 'Mastermind Experience',
      features: [
        '90-day mastermind with 6 self-guided trainings',
        'Quarterly in-person retreat',
        'Clarify values, leadership architecture, and next-generation influence',
        'Retreat speaking experience with professional digital and brand assets',
        'BONUS: Professional photo & video to expand brand voice'
      ]
    },
    privateClient: {
      price: '$1,000,000',
      name: 'Private Client Experience',
      badge: 'Application Only',
      isPopular: true,
      features: [
        'Everything in the mastermind',
        'Private advisory is by application only.',
        'Highly curated, closed-door luxury retreat with fellow Private Legacy clients',
        'Private 1:1 relationship and custom training path',
        'Transformative, deep insights from Joanna beyond traditional advising programs',
        'Personal and precise feedback and guidance for your impact thesis, legacy blueprint and succession plan architecture',
        'Support in designing specific structures that carry your value and leadership forward across generations'
      ]
    }
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'Phase 1 was transformative. I finally found the confidence to share my story and understand why my leadership journey matters.',
    author: 'Sarah Mitchell',
    title: 'CEO, Tech Innovations'
  },
  {
    id: '2',
    quote: 'The signature talk framework from Phase 2 changed everything. I now connect emotionally with every audience I speak to.',
    author: 'Jennifer Walsh',
    title: 'Founder, Leadership Collective'
  },
  {
    id: '3',
    quote: 'Standing in my unique value after Phase 3 elevated my brand and positioned me as a thought leader in my industry.',
    author: 'Dr. Amanda Chen',
    title: 'Executive Director, Global Health Initiative'
  }
];

export const entryOffers = [
  {
    id: 'free',
    name: 'Discover the Truth Behind Your Story',
    price: 'Free',
    description: 'A free video training introducing the first breakthrough: the realization that the story you once hid may be the very story that unlocks your leadership.',
    icon: 'Play',
    cta: 'Get Free Training',
    ctaLink: '/#contact'
  },
  {
    id: 'low-ticket',
    name: 'What Is Your Million Dollar Message?',
    price: '$29',
    description: 'A video lesson to discover the story that unlocks your truth and your brand. Many leaders struggle to articulate the deeper message behind their work.',
    icon: 'Star',
    isPopular: true,
    cta: 'Get Started - $29',
    ctaLink: '/#contact'
  }
];

export const targetAudience = [
  {
    who: 'Accomplished women leaders',
    details: ['CEOs', 'Founders', 'Executives', 'Creators', 'Public figures']
  },
  {
    who: 'What they struggle with',
    details: [
      'Lack of confidence speaking, and self-doubt',
      'Imposter syndrome about belonging',
      'Lack of clarity around the story that shaped their leadership',
      'Feeling unsafe telling the truth of their real story',
      'Lack of clarity of the unique value of their contribution'
    ]
  }
];

export const endResults = [
  {
    phase: 1,
    result: 'Clarity of their message & story',
    description: 'Discover the truth of your defining moment and turn that lived experience into the foundation of your voice and message.'
  },
  {
    phase: 2,
    result: 'Develop your signature talk',
    description: 'Create a signature talk following a 7-min structure that emotionally connects and influences.'
  },
  {
    phase: 3,
    result: 'Thought leader-level resonance',
    description: 'Stand in your unique value with a memorable, repeatable story that influences through emotional resonance.'
  },
  {
    phase: 4,
    result: 'Healed leadership frameworks',
    description: 'Create safety, inclusion and belonging to improve culture, performance and profit.'
  },
  {
    phase: 5,
    result: 'Legacy Blueprint',
    description: 'Create a lasting legacy with impact thesis, succession plan and legacy letter.'
  }
];
