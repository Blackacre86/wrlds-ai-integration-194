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
        content: 'In Massachusetts, domestic violence charges can upend lives overnight. With 19 domestic violence homicides reported in 2023 alone and recent expansions to include coercive control as abuse under state law, the stakes are higher than ever. As a former Assistant District Attorney (ADA) in Massachusetts, I\'ve prosecuted these cases, collaborating closely with law enforcement and victim advocates. Now, as a criminal defense attorney, that insider experience provides a unique advantage, turning prosecution tactics into defense strengths.'
      },
      {
        type: 'heading',
        content: 'The Prosecutor\'s Playbook: An Insider\'s Edge'
      },
      {
        type: 'paragraph',
        content: 'As a former prosecutor, I worked closely with police to collect critical evidence, including 911 recordings, witness statements, and forensic details. Victim-witness advocates ensured survivors\' voices were central to every prosecution. These collaborations guided charging decisions under Massachusetts domestic violence statutes, including c. 265 § 13M (Assault & Battery on a Family or Household Member) and violations of 209A restraining orders.'
      },
      {
        type: 'paragraph',
        content: 'This perspective reveals blind spots many defense attorneys miss. Prosecutors often overcharge to leverage plea deals, relying on emotional dynamics to pressure defendants. With my background, I anticipate these moves by identifying weak links in "he-said-she-said" narratives, challenging biased assumptions, and exposing inconsistencies in police reports and witness testimony. For instance, coercive control, now legally recognized in Massachusetts, involves non-physical behaviors like isolation or threats. My experience with victim advocates allows me to understand precisely how such allegations are framed, empowering me to effectively counter with evidence demonstrating mutual conflict or fabrication.'
      },
      {
        type: 'heading',
        content: 'Beyond the Courtroom: Empathy from Both Sides'
      },
      {
        type: 'paragraph',
        content: 'What sets my approach apart is empathy shaped by experience from both sides. As an ADA, I advocated passionately for victims, ensuring their voices drove justice. This role taught me the human side of the criminal justice system, including how trauma influences testimony and why cases sometimes escalate without criminal intent. Now, defending clients, I utilize this understanding to humanize them in court and negotiate resolutions prioritizing rehabilitation over punishment. While statistics indicate a slight dip in domestic violence rates in Massachusetts, the impact on individual lives remains profound.'
      },
      {
        type: 'quote',
        content: 'Think outside the courtroom: Like a whistleblower exposing corporate secrets, my prosecutorial past helps uncover systemic flaws. I decode "pro-victim" policies that can inadvertently bias proceedings, equipping clients with defenses rooted firmly in fairness.'
      },
      {
        type: 'heading',
        content: 'Why This Matters for Your Defense'
      },
      {
        type: 'paragraph',
        content: 'Hiring a former prosecutor isn\'t about shortcuts—it\'s about leveling the playing field. We understand how district attorneys construct cases, predict their strategies, and negotiate from strength. In Massachusetts\' evolving domestic violence landscape, such insights can lead to dismissed charges, reduced sentences, or alternative resolutions. *Outcomes always depend on the unique facts and circumstances of each case.*'
      },
      {
        type: 'paragraph',
        content: 'If you\'re facing domestic violence allegations in Massachusetts, having an attorney with this dual perspective can make all the difference. Contact my office for a confidential consultation. Let\'s navigate this together.'
      }
    ]
  }
];
