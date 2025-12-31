
import React, { useState, useEffect } from 'react';
import { NavigationItem } from './types';
import { KPI_DATA } from './constants';
import TopNav from './components/TopNav';
import Sidebar from './components/Sidebar';
import KPICard from './components/KPICard';
import SystemsGraph from './components/SystemsGraph';
import ActivityFeed from './components/ActivityFeed';
import NotificationsPanel from './components/NotificationsPanel';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavigationItem>('Overview');
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const renderContent = () => {
    if (activeTab === 'Notifications') {
      return (
        <div className="grid grid-cols-1 gap-6 h-[calc(100vh-250px)]">
           <NotificationsPanel />
        </div>
      );
    }

    // Default Overview dashboard
    return (
      <div className="space-y-8">
        {/* KPI Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
          {KPI_DATA.map((kpi) => (
            <KPICard key={kpi.id} {...kpi} />
          ))}
        </div>

        {/* Main Content Grid - Updated to include Notifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8">
            <SystemsGraph />
          </div>
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="h-[250px]">
              <NotificationsPanel />
            </div>
            <div className="flex-1 min-h-[350px]">
              <ActivityFeed />
            </div>
          </div>
        </div>

        {/* Data Tables / Advanced View Placeholder */}
        <div className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/60 rounded-xl overflow-hidden shadow-sm transition-colors">
          <div className="p-6 border-b border-slate-200 dark:border-slate-800/60 flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-widest">Global Microservices</h3>
            <div className="flex gap-4">
              <input 
                type="text" 
                placeholder="Filter nodes..." 
                className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded px-3 py-1.5 text-xs text-slate-600 dark:text-slate-300 focus:outline-none focus:border-teal-500/50 transition-all w-48"
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800/60 transition-colors">
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">ID</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Service</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Cluster</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Status</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest text-right">Throughput</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800/60">
                {[
                  { id: 'S-8821', name: 'Auth-Service-A', cluster: 'AWS-US-E1', status: 'Healthy', load: '124 req/s' },
                  { id: 'S-4590', name: 'Payment-Gate-Proxy', cluster: 'GCP-ASIA-S1', status: 'Draining', load: '0 req/s' },
                  { id: 'S-7712', name: 'User-Meta-Store', cluster: 'AZR-EU-W2', status: 'Healthy', load: '2.1k req/s' },
                  { id: 'S-1002', name: 'Inbound-L-Balancer', cluster: 'AWS-US-E1', status: 'Healthy', load: '4.8k req/s' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4 text-xs font-mono text-slate-400 dark:text-slate-500">{row.id}</td>
                    <td className="px-6 py-4 text-xs font-bold text-slate-800 dark:text-slate-200">{row.name}</td>
                    <td className="px-6 py-4 text-xs text-slate-500 dark:text-slate-400">{row.cluster}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                        row.status === 'Healthy' ? 'bg-teal-500/10 text-teal-600 dark:text-teal-400' : 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
                      }`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-xs font-mono text-slate-600 dark:text-slate-300 text-right">{row.load}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 bg-grid transition-colors duration-300">
      <TopNav isDark={isDark} toggleTheme={toggleTheme} />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeItem={activeTab} setActiveItem={setActiveTab} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-8 space-y-8">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <nav className="flex items-center gap-2 text-[10px] text-slate-400 dark:text-slate-500 font-mono uppercase tracking-widest mb-2 transition-colors">
                <span className="hover:text-teal-600 dark:hover:text-teal-500 cursor-pointer">Frontier</span>
                <span>/</span>
                <span className="text-slate-600 dark:text-slate-300">Cluster Node 01</span>
                <span>/</span>
                <span className="text-teal-600 dark:text-teal-400">{activeTab}</span>
              </nav>
              <h1 className="text-3xl font-bold tracking-tighter text-slate-900 dark:text-slate-100">{activeTab}</h1>
            </div>
            
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Export PDF
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/50 rounded-lg text-xs font-bold text-teal-600 dark:text-teal-400 hover:bg-teal-500/20 transition-all glow-teal">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                Deploy Changes
              </button>
            </div>
          </div>

          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;
