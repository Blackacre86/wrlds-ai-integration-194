// src/components/blocks/ChartBlock.tsx
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ContentSection } from '@/data/blogPosts';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

type ChartSection = { type: 'chart'; chartData: any };
interface Props { section: ChartSection }

export default React.memo(function ChartBlock({ section }: Props) {
  if (!section.chartData) return null;
  const colors = ['#000000', '#666666', '#999999', '#CCCCCC'];
  return (
    <Card className="border-2 border-black mb-8" role="figure" aria-label={section.chartData.title}>
      <CardContent className="p-6">
        <h4 className="text-xl font-semibold mb-4 text-black text-center">
          {section.chartData.title}
        </h4>
        <div className="h-64 w-full">
          {section.chartData.title.includes('Market Growth') ? (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={section.chartData.data}>
                <XAxis dataKey="name" stroke="#000" />
                <YAxis stroke="#000" />
                <Bar dataKey="value" fill="#000000" />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={section.chartData.data}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={entry => `${entry.name}: ${entry.value}%`}
                >
                  {section.chartData.data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>
      </CardContent>
    </Card>
  );
});
