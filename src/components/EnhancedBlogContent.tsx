// src/components/EnhancedBlogContent.tsx
import React, { memo } from 'react';
import { ContentSection } from '@/data/blogPosts';
import { DollarSign, Users, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import ChartBlock from '@/components/blocks/ChartBlock';
import TableBlock from '@/components/blocks/TableBlock';

interface Props { content: ContentSection[] }
const iconMap = { DollarSign, Users, TrendingUp } as const;

function EnhancedBlogContent({ content }: Props) {
  return (
    <div className="prose prose-lg max-w-none">
      {content.map((section) => {
        const key = section.id ?? section.content ?? Math.random();

        switch (section.type) {
          case 'heading':
            return <h2 key={key} className="text-3xl font-bold mb-6 border-b-2 border-black">{section.content}</h2>;

          case 'subheading':
            return <h3 key={key} className="text-2xl font-semibold mb-4">{section.content}</h3>;

          case 'paragraph':
            return <p key={key} className="text-gray-800 mb-6 leading-relaxed">{section.content}</p>;

          case 'list':
            return (
              <ul key={key} className="list-disc pl-5 space-y-2 mb-6">
                {section.items?.map((item) => <li key={item}>{item}</li>)}
              </ul>
            );

          case 'icon-list':
            return (
              <div key={key} className="grid gap-4 mb-8">
                {section.items?.map((item, idx) => (
                  <Card key={item} className="border-2 border-black">
                    <CardContent className="p-4 flex items-start space-x-4">
                      <span className="bg-black text-white rounded w-8 h-8 flex items-center justify-center font-bold">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <p>{item}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            );

          case 'stats':
            return (
              <div key={key} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {section.statsData?.map((s) => {
                  const Icon = iconMap[s.icon as keyof typeof iconMap] || TrendingUp;
                  return (
                    <Card key={s.label} className="border-2 border-black text-center">
                      <CardContent className="p-6">
                        <Icon className="mx-auto mb-4 h-8 w-8 text-white bg-black p-2 rounded-full" />
                        <div className="text-3xl font-bold">{s.value}</div>
                        <div className="text-gray-700">{s.label}</div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            );

          case 'quote':
            return (
              <figure key={key} className="border-2 border-black bg-black text-white my-8 p-6 text-center">
                <blockquote className="italic text-xl leading-relaxed">“{section.content}”</blockquote>
              </figure>
            );

          case 'chart':
            return <ChartBlock key={key} section={section} />;

          case 'table':
            return <TableBlock key={key} section={section} />;

          case 'bibliography':
            return (
              <ol key={key} className="space-y-2 mb-8">
                {section.items?.map((cite) => (
                  <li key={cite} className="text-sm bg-gray-50 p-2 border-l-4 border-black">{cite}</li>
                ))}
              </ol>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}

export default memo(EnhancedBlogContent);
