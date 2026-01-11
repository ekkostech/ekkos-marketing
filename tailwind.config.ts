import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Core Palette
        void: '#050508',
        obsidian: '#0a0a10',
        onyx: '#12121c',
        graphite: '#1a1a28',
        slate: '#252536',

        // Accent Spectrum
        neural: { purple: '#8b5cf6' },
        synapse: { pink: '#d946ef' },
        memory: { blue: '#3b82f6' },
        success: { emerald: '#10b981' },
        warning: { amber: '#f59e0b' },
        danger: { rose: '#f43f5e' },
        info: { cyan: '#06b6d4' },

        // Glass System
        glass: {
          clear: 'rgba(255, 255, 255, 0.03)',
          frosted: 'rgba(255, 255, 255, 0.06)',
          solid: 'rgba(255, 255, 255, 0.10)',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(255, 255, 255, 0.15)',
        },
      },

      backgroundImage: {
        'gradient-neural': 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 25%, #a855f7 50%, #d946ef 75%, #ec4899 100%)',
        'gradient-ocean': 'linear-gradient(135deg, #0ea5e9 0%, #3b82f6 50%, #6366f1 100%)',
        'gradient-aurora': 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 50%, #d946ef 100%)',
      },

      boxShadow: {
        'glow-purple': '0 0 60px rgba(139, 92, 246, 0.4)',
        'glow-pink': '0 0 60px rgba(217, 70, 239, 0.4)',
        'glow-blue': '0 0 60px rgba(59, 130, 246, 0.4)',
      },

      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },

      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'gradient-shift': 'gradientShift 8s ease infinite',
      },

      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        glow: {
          '0%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}

export default config
