'use client';

import { GlassCard } from '@/components/ui/GlassCard';
import { ArrowRight, RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

interface LoopStepProps {
  step: string;
  name: string;
  description: string;
  delay?: number;
  isLast?: boolean;
}

export function LoopStep({
  step,
  name,
  description,
  delay = 0,
  isLast = false,
}: LoopStepProps) {
  return (
    <div className="flex items-center gap-4">
      <GlassCard
        variant="elevated"
        glow="purple"
        hover="lift"
        delay={delay}
        className="flex-1 p-6 group"
      >
        {/* Step Number */}
        <div className="flex items-center gap-4 mb-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm">{step}</span>
          </div>
          <h3 className="text-xl font-bold text-white">
            {name}
          </h3>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed pl-14">
          {description}
        </p>
      </GlassCard>

      {/* Arrow or Loop Back */}
      {!isLast && (
        <ArrowRight className="flex-shrink-0 w-8 h-8 text-purple-400 hidden md:block" />
      )}
      {isLast && (
        <div className="flex-shrink-0 hidden md:flex items-center justify-center w-12 h-12 rounded-full border-2 border-purple-400 border-dashed animate-pulse">
          <RefreshCw className="w-6 h-6 text-purple-400" />
        </div>
      )}
    </div>
  );
}

interface LoopDiagramProps {
  steps: Array<{
    step: string;
    name: string;
    description: string;
  }>;
}

export function LoopDiagram({ steps }: LoopDiagramProps) {
  return (
    <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-1 md:gap-4">
      {steps.map((stepData, index) => (
        <LoopStep
          key={stepData.step}
          {...stepData}
          delay={index * 0.1}
          isLast={index === steps.length - 1}
        />
      ))}
    </div>
  );
}
