'use client';

import { GlassCard } from '@/components/ui/GlassCard';
import { Layers } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

interface LayerProps {
  number: string;
  name: string;
  desc: string;
  delay?: number;
}

export function Layer({ number, name, desc, delay = 0 }: LayerProps) {
  return (
    <div
      className="flex items-start gap-4 p-4 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all animate-fade-in-up"
      style={{
        animationDelay: `${delay}s`,
        animationFillMode: 'both',
      }}
    >
      {/* Layer Number */}
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center">
        <span className="text-xs font-bold text-purple-400">{number}</span>
      </div>

      {/* Layer Info */}
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold text-white mb-1">
          {name}
        </h4>
        <p className="text-xs text-gray-400 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}

interface LayerListProps {
  layers: Array<{
    number: string;
    name: string;
    desc: string;
  }>;
  title?: string;
}

export function LayerList({ layers, title }: LayerListProps) {
  return (
    <div>
      {title && (
        <div className="flex items-center gap-3 mb-6">
          <Layers className="w-6 h-6 text-purple-400" />
          <h4 className="text-lg font-semibold text-white">{title}</h4>
        </div>
      )}

      <div className="space-y-3">
        {layers.map((layer, index) => (
          <Layer
            key={layer.number}
            {...layer}
            delay={index * 0.05}
          />
        ))}
      </div>
    </div>
  );
}
