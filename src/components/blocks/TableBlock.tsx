// src/components/blocks/TableBlock.tsx
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ContentSection } from '@/data/blogPosts';

type TableSection = ContentSection & {
  type: 'table';
  tableData: {
    headers: string[];
    rows: string[][];
  };
};
interface Props { section: TableSection }

export default React.memo(function TableBlock({ section }: Props) {
  if (!section.tableData) return null;
  return (
    <Card className="border-2 border-black mb-6 md:mb-8 overflow-hidden" role="table">
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full min-w-full">
            <thead className="bg-black text-white">
              <tr>
                {section.tableData.headers.map((h) => (
                  <th key={h} className="p-3 md:p-4 text-left font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.tableData.rows.map((row, rIdx) => (
                <tr key={rIdx} className={rIdx % 2 ? 'bg-white' : 'bg-gray-50'}>
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="p-3 md:p-4 border-b border-gray-200">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
});
