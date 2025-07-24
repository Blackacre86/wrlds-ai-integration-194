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
    id: '4',
    title: 'Domestic Violence Defense: Why Experience Matters - A Former Prosecutor\'s Perspective',
    slug: 'domestic-violence-defense-experience-matters',
    excerpt: 'In Massachusetts, domestic violence charges can upend lives overnight. As a former Assistant District Attorney, I bring unique insider experience to defense strategy.',
    date: '2024-01-15',
    author: 'Attorney Joe Brava',
    category: 'Domestic Violence',
    imageUrl: '/lovable-uploads/2228ddd2-e50e-4f5e-b0f4-5744b4b264cb.png',
    keywords: [
      'domestic violence defense',
      'former prosecutor',
      'Massachusetts domestic violence',
      'criminal defense attorney',
      'domestic violence charges',
      'coercive control'
    ],
    metaDescription: 'Expert domestic violence defense from a former Massachusetts prosecutor. Learn why prosecutorial experience matters for your defense strategy.',
    content: [
      {
        type: 'paragraph',
        content: 'In Massachusetts, domestic violence charges can upend lives overnight. With 19 domestic violence homicides reported in 2023 alone, and recent expansions to include coercive control as abuse under state law, the stakes are higher than ever. As a former Assistant District Attorney (ADA) in Massachusetts, I\'ve prosecuted these cases, collaborating closely with law enforcement and victim advocates. Now, as a criminal defense attorney, that insider experience offers a unique lens. It turns prosecution tactics into defense advantages.'
      },
      {
        type: 'heading',
        content: 'The Prosecutor\'s Playbook: An Insider\'s Edge'
      },
      {
        type: 'paragraph',
        content: 'Working hand-in-hand with police during investigations, I saw how evidence is gathered as a former prosecutor. This includes everything from 911 calls and witness statements to forensic details. Victim advocates provided crucial insights into survivor needs, shaping how cases were charged under M.G.L. c. 209A, Massachusetts\' key domestic violence statute.'
      },
      {
        type: 'paragraph',
        content: 'This perspective reveals blind spots many defense attorneys miss. Prosecutors often overcharge to leverage plea deals, assuming emotional dynamics will pressure defendants. But with my background, I anticipate these moves: spotting weak links in "he-said-she-said" narratives, challenging biased assumptions, or highlighting inconsistencies in reports. For instance, coercive control (now legally recognized) involves non-physical patterns like isolation or threats. I know how advocates frame these, allowing me to counter with evidence of mutual conflict or fabrication.'
      },
      {
        type: 'heading',
        content: 'Beyond the Courtroom: Empathy from Both Sides'
      },
      {
        type: 'paragraph',
        content: 'What sets my approach apart? It\'s not just strategy; it\'s empathy forged from duality. As an ADA, I advocated for victims, ensuring their voices drove justice. That taught me the system\'s human side. I learned how trauma influences testimony and why cases sometimes escalate without intent. Now, defending clients, I use that to humanize them, negotiating resolutions that prioritize rehabilitation over punishment. Statistics show domestic violence rates dipping slightly in MA, but individual lives hang in the balance.'
      },
      {
        type: 'quote',
        content: 'Think outside the courtroom: Like a whistleblower exposing corporate secrets, my prosecutorial past uncovers systemic flaws. I decode "pro-victim" policies that can inadvertently bias proceedings, arming clients with defenses rooted in fairness.'
      },
      {
        type: 'heading',
        content: 'Why This Matters for Your Defense'
      },
      {
        type: 'paragraph',
        content: 'Hiring a former prosecutor isn\'t about shortcuts. It\'s about leveling the field. We understand how DAs build cases, predict their strategies, and negotiate from strength. In Massachusetts\' evolving DV landscape, this insight can mean dismissed charges, reduced sentences, or alternative dispositions.'
      },
      {
        type: 'paragraph',
        content: 'If you\'re facing domestic violence allegations in Massachusetts, an attorney with this dual perspective can make all the difference. Contact my office for a confidential consultation. Let\'s navigate this together.'
      }
    ]
  },
  {
    id: '1',
    title: 'What to Expect When Charged in Massachusetts: A Step-by-Step Guide',
    slug: 'what-to-expect-criminal-charges-guide',
    excerpt: 'Understanding the criminal justice process can reduce anxiety and help you make informed decisions. Learn what happens from arraignment to resolution with this comprehensive step-by-step guide.',
    date: '2024-01-10',
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
        type: 'heading',
        content: 'Step 5: Trial or Plea Resolution'
      },
      {
        type: 'paragraph',
        content: 'If your case doesn\'t resolve through plea negotiations, it will proceed to trial. You have the right to choose between a jury trial (decided by 6 or 12 jurors) or a bench trial (decided by a judge). The prosecution must prove your guilt beyond a reasonable doubt.'
      },
      {
        type: 'icon-list',
        items: [
          'Jury Trial: Best when the facts are complicated or you need jurors to connect emotionally with your story',
          'Bench Trial: Best for cases that hinge on technical legal arguments where a judge can decide quickly',
          'Plea Agreement: Best when you want a predictable resolution and lower overall risk'
        ]
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
  }
];
