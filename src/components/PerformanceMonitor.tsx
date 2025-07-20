
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Activity, Clock, Zap, AlertTriangle, CheckCircle } from 'lucide-react';

interface PerformanceMetrics {
  aiResponseTime: number;
  searchLatency: number;
  embeddingHealth: 'healthy' | 'warning' | 'error';
  apiStatus: 'online' | 'degraded' | 'offline';
  lastUpdated: Date;
}

export const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    aiResponseTime: 0,
    searchLatency: 0,
    embeddingHealth: 'healthy',
    apiStatus: 'online',
    lastUpdated: new Date()
  });

  useEffect(() => {
    const checkPerformance = async () => {
      const start = Date.now();
      
      try {
        // Test AI service response time
        const aiStart = Date.now();
        // In a real implementation, make a test call to AI service
        await new Promise(resolve => setTimeout(resolve, Math.random() * 500 + 200));
        const aiTime = Date.now() - aiStart;

        // Test search latency
        const searchStart = Date.now();
        // In a real implementation, make a test search call
        await new Promise(resolve => setTimeout(resolve, Math.random() * 300 + 100));
        const searchTime = Date.now() - searchStart;

        setMetrics({
          aiResponseTime: aiTime,
          searchLatency: searchTime,
          embeddingHealth: aiTime < 1000 ? 'healthy' : aiTime < 2000 ? 'warning' : 'error',
          apiStatus: aiTime < 3000 ? 'online' : 'degraded',
          lastUpdated: new Date()
        });
      } catch (error) {
        console.error('Performance check failed:', error);
        setMetrics(prev => ({
          ...prev,
          embeddingHealth: 'error',
          apiStatus: 'offline',
          lastUpdated: new Date()
        }));
      }
    };

    checkPerformance();
    const interval = setInterval(checkPerformance, 30000); // Check every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy':
      case 'online':
        return 'text-green-600';
      case 'warning':
      case 'degraded':
        return 'text-yellow-600';
      case 'error':
      case 'offline':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy':
      case 'online':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'warning':
      case 'degraded':
        return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
      case 'error':
      case 'offline':
        return <AlertTriangle className="h-4 w-4 text-red-600" />;
      default:
        return <Activity className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">AI Response Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.aiResponseTime}ms</div>
            <p className="text-xs text-muted-foreground">
              {metrics.aiResponseTime < 500 ? 'Excellent' : metrics.aiResponseTime < 1000 ? 'Good' : 'Needs improvement'}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Search Latency</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.searchLatency}ms</div>
            <p className="text-xs text-muted-foreground">
              {metrics.searchLatency < 300 ? 'Fast' : metrics.searchLatency < 600 ? 'Average' : 'Slow'}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Embedding Health</CardTitle>
            {getStatusIcon(metrics.embeddingHealth)}
          </CardHeader>
          <CardContent>
            <div className={`text-lg font-bold capitalize ${getStatusColor(metrics.embeddingHealth)}`}>
              {metrics.embeddingHealth}
            </div>
            <p className="text-xs text-muted-foreground">Vector database status</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">API Status</CardTitle>
            {getStatusIcon(metrics.apiStatus)}
          </CardHeader>
          <CardContent>
            <div className={`text-lg font-bold capitalize ${getStatusColor(metrics.apiStatus)}`}>
              {metrics.apiStatus}
            </div>
            <p className="text-xs text-muted-foreground">Service availability</p>
          </CardContent>
        </Card>
      </div>

      {(metrics.embeddingHealth === 'error' || metrics.apiStatus === 'offline') && (
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            {metrics.apiStatus === 'offline' 
              ? 'AI services are currently offline. Please check your connection and try again.'
              : 'AI performance is degraded. Some features may be slower than usual.'
            }
          </AlertDescription>
        </Alert>
      )}

      <Card>
        <CardHeader>
          <CardTitle>System Status</CardTitle>
          <CardDescription>
            Last updated: {metrics.lastUpdated.toLocaleString()}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium">AI Services</h4>
              <div className="flex items-center gap-2">
                {getStatusIcon(metrics.embeddingHealth)}
                <span className="text-sm">Vector Embeddings</span>
                <Badge variant="outline" className={getStatusColor(metrics.embeddingHealth)}>
                  {metrics.embeddingHealth}
                </Badge>
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-medium">Performance Targets</h4>
              <div className="text-xs text-muted-foreground space-y-1">
                <div>AI Response: &lt; 1000ms (Current: {metrics.aiResponseTime}ms)</div>
                <div>Search: &lt; 500ms (Current: {metrics.searchLatency}ms)</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
