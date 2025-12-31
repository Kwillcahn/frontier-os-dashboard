
import { KPIMetric, SystemEvent, HistoricalData, SystemNotification } from './types';

export const KPI_DATA: KPIMetric[] = [
  {
    id: 'cpu',
    label: 'CPU LOAD',
    value: '42.8',
    unit: '%',
    trend: 'up',
    trendValue: '+2.4%',
    status: 'operational',
    sparkline: Array.from({ length: 10 }, (_, i) => ({ x: i, y: 30 + Math.random() * 20 }))
  },
  {
    id: 'memory',
    label: 'MEMORY',
    value: '14.2',
    unit: 'GB',
    trend: 'neutral',
    trendValue: '0.0%',
    status: 'operational',
    sparkline: Array.from({ length: 10 }, (_, i) => ({ x: i, y: 14 + Math.random() * 2 }))
  },
  {
    id: 'network',
    label: 'NETWORK IN',
    value: '892',
    unit: 'Mbps',
    trend: 'down',
    trendValue: '-12.1%',
    status: 'operational',
    sparkline: Array.from({ length: 10 }, (_, i) => ({ x: i, y: 700 + Math.random() * 300 }))
  },
  {
    id: 'latency',
    label: 'AVG LATENCY',
    value: '18',
    unit: 'ms',
    trend: 'up',
    trendValue: '+5.0%',
    status: 'warning',
    sparkline: Array.from({ length: 10 }, (_, i) => ({ x: i, y: 15 + Math.random() * 10 }))
  }
];

export const RECENT_EVENTS: SystemEvent[] = [
  {
    id: 'ev-1',
    timestamp: '2024-05-20T14:30:05Z',
    source: 'AUTH-SERVER',
    message: 'Global deployment of v2.4.0 successful across 12 nodes.',
    type: 'success'
  },
  {
    id: 'ev-2',
    timestamp: '2024-05-20T14:28:12Z',
    source: 'GATEWAY-04',
    message: 'High traffic detected from region US-EAST-1. Scaling instances.',
    type: 'info'
  },
  {
    id: 'ev-3',
    timestamp: '2024-05-20T14:25:01Z',
    source: 'DB-PRIMARY',
    message: 'Delayed replication detected. Latency above 500ms.',
    type: 'warning'
  },
  {
    id: 'ev-4',
    timestamp: '2024-05-20T14:20:44Z',
    source: 'CORE-SCHEDULER',
    message: 'Kernel exception caught in routine #712. Auto-recovered.',
    type: 'error'
  },
  {
    id: 'ev-5',
    timestamp: '2024-05-20T14:15:30Z',
    source: 'SECURITY-MESH',
    message: 'Regular integrity check completed. All systems clean.',
    type: 'success'
  }
];

export const MOCK_NOTIFICATIONS: SystemNotification[] = [
  {
    id: 'notif-1',
    timestamp: '2024-05-20T14:45:00Z',
    title: 'Security Vulnerability Patch',
    message: 'Urgent patch available for OpenSSL dependency on Node-04.',
    priority: 'high',
    read: false
  },
  {
    id: 'notif-2',
    timestamp: '2024-05-20T14:10:00Z',
    title: 'Storage Capacity Reached',
    message: 'Volume /data/archive is at 92% capacity. Clean up recommended.',
    priority: 'medium',
    read: false
  },
  {
    id: 'notif-3',
    timestamp: '2024-05-20T13:55:00Z',
    title: 'Scheduled Maintenance',
    message: 'Cluster re-balancing scheduled for 2024-05-21 02:00 UTC.',
    priority: 'low',
    read: true
  },
  {
    id: 'notif-4',
    timestamp: '2024-05-20T12:30:00Z',
    title: 'System Breach Attempt',
    message: 'Multiple failed login attempts detected from IP 192.168.1.105.',
    priority: 'critical',
    read: false
  }
];

export const GRAPH_DATA: HistoricalData[] = [
  { time: '00:00', cpu: 32, memory: 45, network: 120, requests: 450 },
  { time: '04:00', cpu: 28, memory: 44, network: 110, requests: 400 },
  { time: '08:00', cpu: 45, memory: 52, network: 240, requests: 890 },
  { time: '12:00', cpu: 67, memory: 61, network: 480, requests: 1240 },
  { time: '16:00', cpu: 58, memory: 59, network: 390, requests: 1100 },
  { time: '20:00', cpu: 42, memory: 50, network: 210, requests: 750 },
  { time: '23:59', cpu: 35, memory: 48, network: 150, requests: 520 },
];
