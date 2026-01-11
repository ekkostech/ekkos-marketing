'use client';

import { useState } from 'react';

interface CollectiveStats {
  speedup: string;
  successRate: string;
  regressionReduction: string;
  patterns: number;
  episodes: number;
  memories: number;
  collective: number;
  applications: number;
  patternsCaptured: number;
  decisionsRemembered: number;
  timestamp: string;
  cached: boolean;
  fallback?: boolean;
}

// Static stats for marketing site - no API calls needed
// Note: Speedup varies by pattern library maturity (2-3x early, 10-15x mature)
const MARKETING_STATS: CollectiveStats = {
  speedup: '4.8x', // Typical after 1 month (45-80 patterns)
  successRate: '81%',
  regressionReduction: '92%',
  patterns: 62,
  episodes: 150,
  memories: 500,
  collective: 25,
  applications: 200,
  patternsCaptured: 62,
  decisionsRemembered: 150,
  timestamp: new Date().toISOString(),
  cached: true,
};

export function useLiveStats(_refreshInterval = 60000) {
  const [stats] = useState<CollectiveStats>(MARKETING_STATS);

  return { stats, loading: false, error: null };
}
