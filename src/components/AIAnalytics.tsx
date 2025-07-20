
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, MessageSquare, Search, Target } from 'lucide-react';

interface AnalyticsData {
  searchQueries: number;
  chatInteractions: number;
  serviceMatches: number;
  topQueries: Array<{ query: string; count: number }>;
  userEngagement: Array<{ feature: string; usage: number }>;
}

export const AIAnalytics: React.FC = () => {
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    searchQueries: 0,
    chatInteractions: 0,
    serviceMatches: 0,
    topQueries: [],
    userEngagement: []
  });

  useEffect(() => {
    // In a real implementation, this would fetch from your analytics service
    const mockData: AnalyticsData = {
      searchQueries: 1247,
      chatInteractions: 892,
      serviceMatches: 356,
      topQueries: [
        { query: 'DUI defense', count: 45 },
        { query: 'restraining order help', count: 38 },
        { query: 'criminal charges', count: 32 },
        { query: 'traffic violations', count: 28 },
        { query: 'show cause hearing', count: 24 }
      ],
      userEngagement: [
        { feature: 'Smart Search', usage: 1247 },
        { feature: 'AI Chat', usage: 892 },
        { feature: 'Service Matcher', usage: 356 },
        { feature: 'Recommendations', usage: 678 }
      ]
    };
    setAnalytics(mockData);
  }, []);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Search Queries</CardTitle>
            <Search className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.searchQueries.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3 inline mr-1" />
              +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Chat Interactions</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.chatInteractions.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3 inline mr-1" />
              +8% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Service Matches</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.serviceMatches.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3 inline mr-1" />
              +15% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Top Search Queries</CardTitle>
            <CardDescription>Most common legal questions asked</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analytics.topQueries.map((query, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm font-medium">{query.query}</span>
                  <div className="flex items-center gap-2">
                    <Progress value={(query.count / 45) * 100} className="w-20" />
                    <Badge variant="secondary" className="text-xs">
                      {query.count}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Feature Usage</CardTitle>
            <CardDescription>AI feature engagement breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={analytics.userEngagement}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="usage"
                >
                  {analytics.userEngagement.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>User Engagement Trends</CardTitle>
          <CardDescription>Monthly usage across AI features</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={analytics.userEngagement}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="feature" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="usage" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};
