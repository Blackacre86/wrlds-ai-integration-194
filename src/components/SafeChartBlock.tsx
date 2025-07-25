import React from 'react';
import { ContentSection } from '@/data/blogPosts';
import ChartBlock from '@/components/blocks/ChartBlock';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';

type ChartSection = ContentSection & {
  type: 'chart';
  chartData: {
    title: string;
    data: Array<{ name: string; value: number }>;
  };
};

interface Props {
  section: ChartSection;
}

export default React.memo(function SafeChartBlock({ section }: Props) {
  try {
    // Validate chart data structure
    if (!section.chartData) {
      throw new Error('Missing chart data');
    }

    if (!section.chartData.title || !Array.isArray(section.chartData.data)) {
      throw new Error('Invalid chart data structure');
    }

    if (section.chartData.data.length === 0) {
      throw new Error('Empty chart data');
    }

    // Validate each data point
    const hasValidData = section.chartData.data.every(
      item => item && typeof item.name === 'string' && typeof item.value === 'number'
    );

    if (!hasValidData) {
      throw new Error('Invalid chart data points');
    }

    return <ChartBlock section={section} />;
  } catch (error) {
    console.error('Chart rendering error:', error);
    return (
      <Alert className="border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>
          Unable to display chart: {error instanceof Error ? error.message : 'Unknown error'}
        </AlertDescription>
      </Alert>
    );
  }
});