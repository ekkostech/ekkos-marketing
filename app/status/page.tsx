'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { GlassCard } from '@/components/ui/GlassCard';
import {
  CheckCircle2, AlertTriangle, XCircle, RefreshCw,
  Server, Database, Globe, Cpu, Shield, Clock,
  ArrowLeft, ExternalLink, BookOpen, FileText, Loader2
} from 'lucide-react';

type ServiceStatus = 'operational' | 'degraded' | 'outage' | 'maintenance';

interface ServiceData {
  service_id: string;
  service_name: string;
  description: string;
  icon: string;
  status: ServiceStatus;
  response_time_ms: number | null;
  checked_at: string | null;
  uptime_30d: number;
}

interface IncidentData {
  id: string;
  title: string;
  description: string;
  status: 'investigating' | 'identified' | 'monitoring' | 'resolved';
  severity: 'minor' | 'major' | 'critical';
  affected_services: string[];
  started_at: string;
  resolved_at: string | null;
}

interface StatusResponse {
  services: ServiceData[];
  incidents: IncidentData[];
  lastUpdated: string;
  overall: ServiceStatus;
  stats: {
    avgUptime: string;
    avgResponseTime: number | null;
    majorIncidents: number;
  };
}

const statusConfig = {
  operational: {
    label: 'Operational',
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/20',
    borderColor: 'border-emerald-500/30',
    icon: CheckCircle2,
  },
  degraded: {
    label: 'Degraded',
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/20',
    borderColor: 'border-amber-500/30',
    icon: AlertTriangle,
  },
  outage: {
    label: 'Outage',
    color: 'text-red-400',
    bgColor: 'bg-red-500/20',
    borderColor: 'border-red-500/30',
    icon: XCircle,
  },
  maintenance: {
    label: 'Maintenance',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/20',
    borderColor: 'border-blue-500/30',
    icon: RefreshCw,
  },
};

// Map icon strings to components
const iconMap: Record<string, typeof Server> = {
  Server,
  Database,
  Globe,
  Cpu,
  Shield,
  BookOpen,
  FileText,
};

const serviceUrls: Record<string, string> = {
  'memory-api': 'https://api.ekkos.dev',
  'mcp-server': 'https://mcp.ekkos.dev',
  'platform': 'https://platform.ekkos.dev',
  'docs': 'https://docs.ekkos.dev',
  'marketing': 'https://ekkos.dev',
  'blog': 'https://blog.ekkos.dev',
};

export default function StatusPage() {
  const [data, setData] = useState<StatusResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchStatus = useCallback(async (showRefreshIndicator = false) => {
    if (showRefreshIndicator) {
      setIsRefreshing(true);
    }

    try {
      const response = await fetch('/api/status', {
        cache: 'no-store',
      });

      if (!response.ok) {
        throw new Error('Failed to fetch status');
      }

      const result: StatusResponse = await response.json();
      setData(result);
      setError(null);
    } catch (err) {
      console.error('Failed to fetch status:', err);
      setError('Unable to fetch live status. Showing cached data.');
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchStatus();

    // Auto-refresh every 30 seconds
    const interval = setInterval(() => fetchStatus(), 30000);
    return () => clearInterval(interval);
  }, [fetchStatus]);

  const handleRefresh = () => {
    fetchStatus(true);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black via-purple-950/20 to-black flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-purple-400 animate-spin mx-auto mb-4" />
          <p className="text-white/60">Loading status...</p>
        </div>
      </div>
    );
  }

  const services = data?.services || [];
  const incidents = data?.incidents || [];
  const overallStatus = data?.overall || 'operational';
  const stats = data?.stats || { avgUptime: '99.99', avgResponseTime: null, majorIncidents: 0 };
  const lastUpdated = data?.lastUpdated ? new Date(data.lastUpdated) : new Date();

  const overallConfig = statusConfig[overallStatus];
  const OverallIcon = overallConfig.icon;

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950/20 to-black">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to ekkOS
        </Link>

        {/* Error banner */}
        {error && (
          <div className="max-w-4xl mx-auto mb-6">
            <div className="px-4 py-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm">
              {error}
            </div>
          </div>
        )}

        {/* Header */}
        <div className="text-center mb-12">
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${overallConfig.bgColor} ${overallConfig.borderColor} border mb-6`}>
            <OverallIcon className={`w-10 h-10 ${overallConfig.color}`} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">System Status</h1>
          <p className={`text-2xl font-semibold ${overallConfig.color} mb-2`}>
            {overallStatus === 'operational'
              ? 'All Systems Operational'
              : overallStatus === 'degraded'
                ? 'Some Systems Degraded'
                : overallStatus === 'outage'
                  ? 'Service Disruption'
                  : 'Scheduled Maintenance'}
          </p>
          <div className="flex items-center justify-center gap-4 text-white/40 text-sm">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Last updated: {lastUpdated.toLocaleTimeString()}
            </span>
            <button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="flex items-center gap-1 hover:text-white/60 transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              Refresh
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-xl font-semibold text-white mb-6">Services</h2>
          <div className="space-y-4">
            {services.map((service) => {
              const config = statusConfig[service.status];
              const StatusIcon = config.icon;
              const ServiceIcon = iconMap[service.icon] || Globe;
              const serviceUrl = serviceUrls[service.service_id];

              return (
                <GlassCard
                  key={service.service_id}
                  variant="elevated"
                  className="p-5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                        <ServiceIcon className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-white font-medium">{service.service_name}</h3>
                          {serviceUrl && (
                            <a
                              href={serviceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white/30 hover:text-white/50 transition-colors"
                            >
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                        <p className="text-sm text-white/50">{service.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right hidden sm:block">
                        <p className="text-sm text-white/60">Uptime</p>
                        <p className="text-white font-mono">{service.uptime_30d.toFixed(2)}%</p>
                      </div>
                      {service.response_time_ms && (
                        <div className="text-right hidden md:block">
                          <p className="text-sm text-white/60">Latency</p>
                          <p className="text-white font-mono">{service.response_time_ms}ms</p>
                        </div>
                      )}
                      <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${config.bgColor} ${config.borderColor} border`}>
                        <StatusIcon className={`w-4 h-4 ${config.color}`} />
                        <span className={`text-sm font-medium ${config.color}`}>
                          {config.label}
                        </span>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>

        {/* Uptime Summary */}
        <div className="max-w-4xl mx-auto mb-12">
          <GlassCard variant="elevated" className="p-6">
            <h2 className="text-xl font-semibold text-white mb-4">30-Day Uptime</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div>
                <p className="text-3xl font-bold text-emerald-400">{stats.avgUptime}%</p>
                <p className="text-sm text-white/50">Overall Uptime</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">{stats.majorIncidents}</p>
                <p className="text-sm text-white/50">Major Incidents</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">
                  {stats.avgResponseTime ? `${stats.avgResponseTime}ms` : '<50ms'}
                </p>
                <p className="text-sm text-white/50">Avg Response Time</p>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Recent Incidents */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-xl font-semibold text-white mb-6">Recent Incidents</h2>
          {incidents.length === 0 ? (
            <GlassCard variant="subtle" className="p-8 text-center">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <p className="text-white/60">No incidents reported in the last 90 days</p>
            </GlassCard>
          ) : (
            <div className="space-y-4">
              {incidents.map((incident) => (
                <GlassCard key={incident.id} variant="elevated" className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-white font-medium">{incident.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        incident.severity === 'critical'
                          ? 'bg-red-500/20 text-red-400'
                          : incident.severity === 'major'
                            ? 'bg-amber-500/20 text-amber-400'
                            : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {incident.severity}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        incident.status === 'resolved'
                          ? 'bg-emerald-500/20 text-emerald-400'
                          : incident.status === 'monitoring'
                            ? 'bg-blue-500/20 text-blue-400'
                            : 'bg-amber-500/20 text-amber-400'
                      }`}>
                        {incident.status.charAt(0).toUpperCase() + incident.status.slice(1)}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-white/50 mb-2">
                    {new Date(incident.started_at).toLocaleDateString()}
                    {incident.resolved_at && ` - Resolved ${new Date(incident.resolved_at).toLocaleDateString()}`}
                  </p>
                  <p className="text-sm text-white/70">{incident.description}</p>
                  {incident.affected_services.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {incident.affected_services.map((svc) => (
                        <span key={svc} className="text-xs px-2 py-1 rounded bg-white/5 text-white/50">
                          {svc}
                        </span>
                      ))}
                    </div>
                  )}
                </GlassCard>
              ))}
            </div>
          )}
        </div>

        {/* Subscribe */}
        <div className="max-w-4xl mx-auto">
          <GlassCard variant="elevated" glow="purple" className="p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Stay Updated</h2>
            <p className="text-white/60 mb-6">
              Get notified about scheduled maintenance and service disruptions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://twitter.com/ekkos_ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
              >
                Follow @ekkos_ai
                <ExternalLink className="w-4 h-4" />
              </a>
              <Link
                href="/support"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium transition-colors"
              >
                Contact Support
              </Link>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Background glow */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[150px]" />
      </div>
    </div>
  );
}
