export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: ContentSection[];
  date: string;
  author: string;
  category: string;
  imageUrl?: string;
  keywords?: string[];
  metaDescription?: string;
}

export interface ContentSection {
  type: 'paragraph' | 'heading' | 'subheading' | 'list' | 'quote' | 'table' | 'stats' | 'chart' | 'icon-list' | 'bibliography';
  content?: string;
  items?: string[];
  tableData?: {
    headers: string[];
    rows: string[][];
  };
  statsData?: {
    value: string;
    label: string;
    icon?: string;
  }[];
  chartData?: {
    title: string;
    data: { name: string; value: number; }[];
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'What to Expect When Charged in Massachusetts: A Step-by-Step Guide',
    slug: 'what-to-expect-criminal-charges-guide',
    excerpt: 'Understanding the criminal justice process can reduce anxiety and help you make informed decisions. Learn what happens from arraignment to resolution with this comprehensive step-by-step guide.',
    date: 'January 15, 2025',
    author: 'Attorney Joe Brava',
    category: 'Criminal Defense',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop&sat=-100',
    keywords: [
      'charged with crime in Massachusetts',
      'MA criminal process',
      'criminal defense attorney',
      'Massachusetts criminal charges',
      'criminal court process',
      'criminal defense lawyer'
    ],
    metaDescription: 'Complete guide to the Massachusetts criminal justice process. Learn what to expect when charged with a crime in MA from arrest to resolution.',
    content: [
      {
        type: 'quote',
        content: 'Understanding the criminal justice process reduces stress and empowers you to make informed decisions about your defense. Knowledge is your greatest ally when facing criminal charges.'
      },
      {
        type: 'stats',
        statsData: [
          {
            value: '6',
            label: 'Key Steps in MA Criminal Process',
            icon: 'TrendingUp'
          },
          {
            value: '72hrs',
            label: 'Typical Time to Arraignment',
            icon: 'Users'
          },
          {
            value: '90%',
            label: 'Cases Resolved Before Trial',
            icon: 'Shield'
          }
        ]
      },
      {
        type: 'heading',
        content: 'Step 1: Arrest or Criminal Summons'
      },
      {
        type: 'paragraph',
        content: 'Criminal charges in Massachusetts begin with either an arrest or the issuance of a criminal summons. Police may arrest you if they have probable cause to believe you committed a crime, or they may issue a summons requiring you to appear in court at a later date.'
      },
      {
        type: 'icon-list',
        items: [
          'Remain silent - anything you say can be used against you in court',
          'Request an attorney immediately - this is your constitutional right',
          'Do not resist arrest, even if you believe the charges are unfounded',
          'For misdemeanors without arrest, you may receive a clerk magistrate\'s hearing'
        ]
      },
      {
        type: 'heading',
        content: 'Step 2: Clerk Magistrate\'s Hearing (Show Cause)'
      },
      {
        type: 'paragraph',
        content: 'For certain misdemeanor charges that didn\'t result in arrest, you may be summoned to a clerk magistrate\'s hearing, also known as a "show cause" hearing. This is an informal proceeding where a complainant must convince a clerk magistrate that probable cause exists to issue a criminal complaint.'
      },
      {
        type: 'table',
        tableData: {
          headers: ['Hearing Type', 'When Required', 'Possible Outcomes'],
          rows: [
            ['Show Cause', 'Non-arrest misdemeanors', 'Complaint issued or dismissed'],
            ['Arraignment', 'After arrest or complaint', 'Bail set, plea entered'],
            ['Pretrial Conference', 'Most cases', 'Plea negotiations, motion practice']
          ]
        }
      },
      {
        type: 'heading',
        content: 'Step 3: Arraignment - Your First Court Appearance'
      },
      {
        type: 'paragraph',
        content: 'The arraignment is your first formal court appearance. During this proceeding, you will be officially notified of the charges against you, informed of your constitutional rights, and asked to enter a plea. The judge will also address the issue of bail or release conditions.'
      },
      {
        type: 'icon-list',
        items: [
          'Charges will be read aloud and explained to you',
          'Your constitutional rights will be outlined by the judge',
          'You will enter a plea (typically "not guilty" at this stage)',
          'Bail conditions will be set or you may be released on personal recognizance',
          'The court will appoint counsel if you cannot afford an attorney'
        ]
      },
      {
        type: 'heading',
        content: 'Step 4: Pretrial Proceedings and Discovery'
      },
      {
        type: 'paragraph',
        content: 'The pretrial phase involves the exchange of evidence (discovery), pretrial conferences to resolve procedural issues, and the filing of various motions. This is often the most important phase of your case, where skilled defense work can significantly impact the outcome.'
      },
      {
        type: 'stats',
        statsData: [
          {
            value: '30-90',
            label: 'Days for Discovery Process',
            icon: 'Database'
          },
          {
            value: '85%',
            label: 'Cases with Plea Negotiations',
            icon: 'Users'
          },
          {
            value: '15%',
            label: 'Cases Dismissed on Motions',
            icon: 'Shield'
          }
        ]
      },
      {
        type: 'heading',
        content: 'Step 5: Trial or Plea Resolution'
      },
      {
        type: 'paragraph',
        content: 'If your case doesn\'t resolve through plea negotiations, it will proceed to trial. You have the right to choose between a jury trial (decided by 6 or 12 jurors) or a bench trial (decided by a judge). The prosecution must prove your guilt beyond a reasonable doubt.'
      },
      {
        type: 'table',
        tableData: {
          headers: ['Trial Type', 'Decision Makers', 'Best For'],
          rows: [
            ['Jury Trial', '6-12 jurors', 'Complex cases, emotional appeals'],
            ['Bench Trial', 'Judge only', 'Technical legal issues, professional defendants'],
            ['Plea Agreement', 'Negotiated', 'Guaranteed outcome, reduced penalties']
          ]
        }
      },
      {
        type: 'heading',
        content: 'Step 6: Verdict and Sentencing'
      },
      {
        type: 'paragraph',
        content: 'If you are found not guilty (acquitted), your case ends and you are free to go. If found guilty, the court will proceed to sentencing, which may include fines, probation, community service, or incarceration. You have the right to appeal a conviction.'
      },
      {
        type: 'quote',
        content: 'Every criminal case is unique, and having experienced legal representation from the beginning can make the difference between conviction and acquittal, or between harsh penalties and favorable resolutions.'
      },
      {
        type: 'icon-list',
        items: [
          'Sentencing options include fines, probation, community service, or jail time',
          'You have the right to appeal both the conviction and the sentence',
          'Some convictions can be sealed or expunged after a waiting period',
          'Experienced defense counsel can negotiate for alternative sentencing options'
        ]
      }
    ]
  },
  {
    id: '2',
    title: 'Domestic Violence Defense: Why Experience Matters',
    slug: 'domestic-violence-defense-experience-matters',
    excerpt: 'Domestic violence allegations require immediate, experienced legal representation. Learn why having the right attorney can make all the difference in your case.',
    date: 'January 8, 2025',
    author: 'Attorney Joe Brava',
    category: 'Domestic Violence',
    imageUrl: '/lovable-uploads/429cf62b-eccf-43e9-943b-5ed52555fed2.png',
    keywords: [
      'domestic violence defense',
      'domestic violence charges',
      'restraining order',
      'Massachusetts domestic violence',
      'criminal defense attorney',
      'domestic violence lawyer'
    ],
    metaDescription: 'Expert domestic violence defense in Massachusetts. Learn why experience matters when facing domestic violence charges and restraining orders.',
    content: [
      {
        type: 'paragraph',
        content: 'Domestic violence allegations can devastate your personal life, career, and future opportunities. These cases require immediate attention and strategic defense from an attorney who understands both the legal complexities and the emotional dynamics involved.'
      },
      {
        type: 'heading',
        content: 'The Immediate Impact'
      },
      {
        type: 'paragraph',
        content: 'When domestic violence charges are filed, the consequences begin immediately. You may face restraining orders that prevent you from returning home, contacting family members, or even picking up your children from school. Swift legal action is essential to protect your rights.'
      },
      {
        type: 'heading',
        content: 'Understanding the Evidence'
      },
      {
        type: 'paragraph',
        content: 'Domestic violence cases often involve complex evidence including 911 calls, medical records, photographs, and witness testimony. An experienced attorney knows how to analyze this evidence, identify weaknesses in the prosecution\'s case, and develop effective counter-strategies.'
      },
      {
        type: 'heading',
        content: 'Long-term Consequences'
      },
      {
        type: 'paragraph',
        content: 'Beyond immediate penalties, domestic violence convictions can affect employment, housing, custody arrangements, and gun ownership rights. Experienced defense counsel understands these collateral consequences and works to minimize their impact.'
      },
      {
        type: 'quote',
        content: 'In domestic violence cases, the difference between an experienced attorney and an inexperienced one can be the difference between preserving your future and losing everything you\'ve worked for.'
      }
    ]
  },
  {
    id: '3',
    title: 'Why Former Prosecutors Make Different Defense Attorneys',
    slug: 'former-prosecutors-different-defense-attorneys',
    excerpt: 'Having prosecuted over 1,000 cases gives unique insights into how the other side thinks and operates. Learn the advantages of hiring a former prosecutor for your defense.',
    date: 'January 2, 2025',
    author: 'Attorney Joe Brava',
    category: 'Legal Insights',
    imageUrl: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?q=80&w=2076&auto=format&fit=crop&sat=-100',
    keywords: [
      'former prosecutor',
      'defense attorney',
      'criminal defense',
      'Massachusetts attorney',
      'prosecutorial experience',
      'legal strategy'
    ],
    metaDescription: 'Discover the unique advantages of hiring a former prosecutor for your criminal defense. Learn how prosecutorial experience benefits your case.',
    content: [
      {
        type: 'paragraph',
        content: 'As a former prosecutor who handled over 1,000 cases, I bring a unique perspective to criminal defense. Understanding how prosecutors think, what evidence they prioritize, and how they build their cases provides significant advantages for my clients.'
      },
      {
        type: 'heading',
        content: 'Inside Knowledge of Prosecutorial Strategy'
      },
      {
        type: 'paragraph',
        content: 'Having been on the other side of the courtroom, I understand prosecutorial priorities and decision-making processes. This insight helps me anticipate their moves, identify weaknesses in their case, and develop more effective defense strategies.'
      },
      {
        type: 'heading',
        content: 'Relationships and Credibility'
      },
      {
        type: 'paragraph',
        content: 'Former prosecutors often maintain professional relationships with current prosecutors, judges, and court staff. This doesn\'t guarantee favorable outcomes, but it does facilitate more productive negotiations and communications throughout the legal process.'
      },
      {
        type: 'heading',
        content: 'Understanding Case Evaluation'
      },
      {
        type: 'paragraph',
        content: 'Prosecutors must evaluate cases based on evidence strength, witness credibility, and resource allocation. Having made these evaluations myself, I can better assess what prosecutors will prioritize and where they might be willing to negotiate.'
      },
      {
        type: 'heading',
        content: 'Realistic Expectations'
      },
      {
        type: 'paragraph',
        content: 'Prosecutorial experience provides realistic perspective on likely outcomes. I can help clients understand what to expect, when to fight, and when negotiation might serve their interests better than trial.'
      },
      {
        type: 'quote',
        content: 'The greatest advantage of hiring a former prosecutor isn\'t just understanding the law—it's understanding how the system actually works from the inside.'
      }
    ]
  }
];
