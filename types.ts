
export interface KPIMetric {
  id: string;
  label: string;
  value: string | number;
  unit?: string;
  trend: 'up' | 'down' | 'neutral';
  trendValue: string;
  sparkline: { x: number; y: number }[];
  status: 'operational' | 'warning' | 'critical';
}

export interface SystemEvent {
  id: string;
  timestamp: string;
  source: string;
  message: string;
  type: 'info' | 'warning' | 'error' | 'success';
}

export interface SystemNotification {
  id: string;
  timestamp: string;
  title: string;
  message: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  read: boolean;
}

export interface HistoricalData {
  time: string;
  cpu: number;
  memory: number;
  network: number;
  requests: number;
}

export type NavigationItem = 'Overview' | 'Notifications' | 'Systems' | 'Analytics' | 'Activity Logs' | 'Settings';
