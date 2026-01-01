'use client';

import { useEffect, useState, useRef } from 'react';
import { Brain, CheckCircle2 } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';

/**
 * IntelligenceTrace - Streaming "Live Intelligence Trace" component
 *
 * Shows outcome-focused narration of what ekkOS is doing, without revealing architecture.
 * This gives emotional proof, not technical proof.
 */

interface TraceMessage {
  text: string;
  delay: number; // ms before showing next message
  icon?: 'brain' | 'check';
}

const TRACE_SEQUENCES: TraceMessage[][] = [
  // Sequence 1: Authentication setup
  [
    { text: 'ekkOS_Search: Looking for similar authentication solutions…', delay: 1200 },
    { text: 'ekkOS_Context: Found relevant setup from your past work', delay: 1400 },
    { text: 'ekkOS_Recall: Applying your preferred conventions', delay: 1000 },
    { text: 'ekkOS_Conflict: Validating against your rules…', delay: 1100 },
    { text: 'ekkOS_Conflict: No conflicts detected', delay: 800, icon: 'check' },
    { text: 'ekkOS_Forge: Ready to capture this solution', delay: 2000, icon: 'check' },
  ],
  // Sequence 2: API integration
  [
    { text: 'ekkOS_Search: Searching for API integration patterns…', delay: 1300 },
    { text: 'ekkOS_Context: Found 3 relevant solutions', delay: 1200 },
    { text: 'ekkOS_Recall: Matching your error handling preferences', delay: 1000 },
    { text: 'ekkOS_Conflict: Checking against existing code style…', delay: 1100 },
    { text: 'ekkOS_Conflict: All checks passed', delay: 800, icon: 'check' },
    { text: 'ekkOS_Outcome: Verified solution ready', delay: 2000, icon: 'check' },
  ],
  // Sequence 3: Bug fix
  [
    { text: 'ekkOS_Search: Looking for patterns matching this error…', delay: 1200 },
    { text: 'ekkOS_Recall: Found similar issue you solved last month', delay: 1400 },
    { text: 'ekkOS_Context: Applying the fix that worked before', delay: 1100 },
    { text: 'ekkOS_Conflict: Validating against your codebase…', delay: 1000 },
    { text: 'ekkOS_Outcome: Solution verified', delay: 800, icon: 'check' },
    { text: 'ekkOS_Forge: Capturing for next time', delay: 2000, icon: 'check' },
  ],
];

export function IntelligenceTrace() {
  const [currentSequence, setCurrentSequence] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState<TraceMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sequence = TRACE_SEQUENCES[currentSequence];

    if (currentMessageIndex < sequence.length) {
      setIsTyping(true);

      const timer = setTimeout(() => {
        setVisibleMessages(prev => [...prev, sequence[currentMessageIndex]]);
        setIsTyping(false);
        setCurrentMessageIndex(prev => prev + 1);

        // Auto-scroll to bottom
        if (containerRef.current) {
          containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
      }, sequence[currentMessageIndex].delay);

      return () => clearTimeout(timer);
    } else {
      // Wait and reset to next sequence
      const resetTimer = setTimeout(() => {
        setVisibleMessages([]);
        setCurrentMessageIndex(0);
        setCurrentSequence((prev) => (prev + 1) % TRACE_SEQUENCES.length);
      }, 3000);

      return () => clearTimeout(resetTimer);
    }
  }, [currentMessageIndex, currentSequence]);

  return (
    <div className="max-w-2xl mx-auto">
      <GlassCard variant="elevated" className="p-6 bg-black/40 border-purple-500/20">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/10">
          <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
            <Brain className="w-4 h-4 text-purple-400" />
          </div>
          <div>
            <div className="text-sm font-medium text-white">ekkOS Intelligence</div>
            <div className="text-xs text-white/40">Live activity trace</div>
          </div>
          <div className="ml-auto flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-green-400">Active</span>
          </div>
        </div>

        {/* Trace Messages */}
        <div
          ref={containerRef}
          className="font-mono text-sm space-y-2 min-h-[180px] max-h-[200px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/10"
        >
          {visibleMessages.map((msg, i) => (
            <div
              key={i}
              className="flex items-start gap-2 animate-fade-in"
              style={{ animationDelay: '0ms' }}
            >
              <span className="text-purple-400 select-none">→</span>
              <span className={msg.icon === 'check' ? 'text-green-400' : 'text-white/70'}>
                {msg.text}
              </span>
              {msg.icon === 'check' && (
                <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
              )}
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex items-center gap-2 text-white/40">
              <span className="text-purple-400 select-none">→</span>
              <span className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: '300ms' }} />
              </span>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-4 pt-4 border-t border-white/10">
          <p className="text-xs text-white/40 text-center">
            While your AI works, ekkOS quietly recalls what worked before, applies your preferences, and helps you avoid repeat mistakes.
          </p>
        </div>
      </GlassCard>
    </div>
  );
}
