
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
    title: 'What to Expect When Facing Criminal Charges: A Step-by-Step Guide',
    slug: 'what-to-expect-criminal-charges-guide',
    excerpt: 'Understanding the criminal justice process can reduce anxiety and help you make informed decisions. Learn what happens from arraignment to resolution.',
    date: 'January 15, 2025',
    author: 'Attorney Joe Brava',
    category: 'Criminal Defense',
    imageUrl: '/lovable-uploads/6a396c18-f5b0-4821-bc71-bcc05bb64089.png',
    keywords: [
      'criminal charges',
      'criminal defense process',
      'arraignment',
      'criminal court',
      'Massachusetts criminal law',
      'defense attorney',
      'legal representation'
    ],
    metaDescription: 'Learn what to expect when facing criminal charges in Massachusetts. A step-by-step guide from a former prosecutor turned defense attorney.',
    content: [
      {
        type: 'paragraph',
        content: 'Facing criminal charges can be overwhelming and confusing. Understanding the process ahead can help reduce anxiety and empower you to make informed decisions about your defense. Here\'s what you can expect from arraignment to resolution.'
      },
      {
        type: 'heading',
        content: 'The Arraignment Process'
      },
      {
        type: 'paragraph',
        content: 'Your first court appearance is the arraignment, where you\'ll be formally notified of the charges against you. The judge will read the charges, inform you of your rights, and ask how you plead. This is also when bail conditions are typically set.'
      },
      {
        type: 'heading',
        content: 'Pre-Trial Motions and Discovery'
      },
      {
        type: 'paragraph',
        content: 'After arraignment, your attorney will review all evidence through the discovery process. This includes police reports, witness statements, and any physical evidence. Your lawyer may file motions to suppress evidence or dismiss charges if appropriate.'
      },
      {
        type: 'heading',
        content: 'Plea Negotiations'
      },
      {
        type: 'paragraph',
        content: 'Most criminal cases are resolved through plea negotiations rather than trial. Your attorney will work with prosecutors to potentially reduce charges or penalties. Every decision remains yours, but experienced counsel can guide you through the options.'
      },
      {
        type: 'quote',
        content: 'Knowledge is power in criminal defense. Understanding the process helps you work more effectively with your attorney and make the best decisions for your situation.'
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
    imageUrl: '/lovable-uploads/92cc4676-3f43-4a6e-9bbe-1cb528cc4386.png',
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
    imageUrl: '/lovable-uploads/810c64ae-5dff-4a0a-ab8b-555b99cf604a.png',
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
        content: 'The greatest advantage of hiring a former prosecutor isn\'t just understanding the law—it\'s understanding how the system actually works from the inside.'
      }
    ]
  }
];
