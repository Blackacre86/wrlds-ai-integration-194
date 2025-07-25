import React from 'react';
import { ContentSection } from '@/data/blogPosts';
import TableBlock from '@/components/blocks/TableBlock';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';

type TableSection = ContentSection & {
  type: 'table';
  tableData: {
    headers: string[];
    rows: string[][];
  };
};

interface Props {
  section: TableSection;
}

export default React.memo(function SafeTableBlock({ section }: Props) {
  try {
    // Validate table data structure
    if (!section.tableData) {
      throw new Error('Missing table data');
    }

    if (!Array.isArray(section.tableData.headers) || !Array.isArray(section.tableData.rows)) {
      throw new Error('Invalid table data structure');
    }

    if (section.tableData.headers.length === 0) {
      throw new Error('Empty table headers');
    }

    // Validate each row has correct number of columns
    const headerCount = section.tableData.headers.length;
    const hasValidRows = section.tableData.rows.every(
      row => Array.isArray(row) && row.length === headerCount
    );

    if (!hasValidRows) {
      throw new Error('Table rows do not match header count');
    }

    return <TableBlock section={section} />;
  } catch (error) {
    console.error('Table rendering error:', error);
    return (
      <Alert className="border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>
          Unable to display table: {error instanceof Error ? error.message : 'Unknown error'}
        </AlertDescription>
      </Alert>
    );
  }
});