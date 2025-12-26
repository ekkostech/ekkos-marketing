'use client';

import { Download, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

const logoSizes = [
  { name: 'Square (1:1)', width: 1000, height: 1000, ratio: '1:1' },
  { name: 'Wide (16:9)', width: 1920, height: 1080, ratio: '16:9' },
  { name: 'Portrait (9:16)', width: 1080, height: 1920, ratio: '9:16' },
  { name: '4K UHD (16:9)', width: 3840, height: 2160, ratio: '16:9' },
  { name: '4K Square', width: 3840, height: 3840, ratio: '1:1' },
  { name: '4K Portrait', width: 2160, height: 3840, ratio: '9:16' },
  { name: '8K UHD', width: 7680, height: 4320, ratio: '16:9' },
  { name: 'Social Media Square', width: 1200, height: 1200, ratio: '1:1' },
  { name: 'Twitter Header', width: 1500, height: 500, ratio: '3:1' },
  { name: 'LinkedIn Banner', width: 1584, height: 396, ratio: '4:1' },
  { name: 'Facebook Cover', width: 820, height: 312, ratio: '2.6:1' },
  { name: 'Instagram Post', width: 1080, height: 1080, ratio: '1:1' },
  { name: 'Instagram Story', width: 1080, height: 1920, ratio: '9:16' },
];

const wallpaperSizes = [
  { name: 'Desktop HD', width: 1920, height: 1080, ratio: '16:9', category: 'desktop' },
  { name: 'Desktop 4K', width: 3840, height: 2160, ratio: '16:9', category: 'desktop' },
  { name: 'Desktop 5K', width: 5120, height: 2880, ratio: '16:9', category: 'desktop' },
  { name: 'Desktop 8K', width: 7680, height: 4320, ratio: '16:9', category: 'desktop' },
  { name: 'Ultrawide 21:9', width: 3440, height: 1440, ratio: '21:9', category: 'desktop' },
  { name: 'Ultrawide 32:9', width: 5120, height: 1440, ratio: '32:9', category: 'desktop' },
  { name: 'Mobile Portrait', width: 1080, height: 1920, ratio: '9:16', category: 'mobile' },
  { name: 'Mobile Landscape', width: 1920, height: 1080, ratio: '16:9', category: 'mobile' },
  { name: 'Tablet Portrait', width: 1536, height: 2048, ratio: '3:4', category: 'tablet' },
  { name: 'Tablet Landscape', width: 2048, height: 1536, ratio: '4:3', category: 'tablet' },
];

const profileImageSizes = [
  { name: 'Small (128×128)', width: 128, height: 128, ratio: '1:1' },
  { name: 'Medium (256×256)', width: 256, height: 256, ratio: '1:1' },
  { name: 'Large (512×512)', width: 512, height: 512, ratio: '1:1' },
  { name: 'XLarge (1024×1024)', width: 1024, height: 1024, ratio: '1:1' },
  { name: '2K (2048×2048)', width: 2048, height: 2048, ratio: '1:1' },
  { name: '4K (4096×4096)', width: 4096, height: 4096, ratio: '1:1' },
];

const profileVariants = [
  { name: 'Circular', shape: 'circle' as const },
  { name: 'Square', shape: 'square' as const },
  { name: 'Rounded Square', shape: 'rounded' as const },
];

const wallpaperStyles = [
  { name: 'Hero Style', type: 'hero' as const, description: 'Large faded ekkOS_ background with centered logo' },
  { name: 'Gradient Background', type: 'gradient' as const, description: 'Vibrant gradient with logo' },
  { name: 'Pattern Background', type: 'pattern' as const, description: 'Subtle pattern with logo' },
  { name: 'Minimal', type: 'minimal' as const, description: 'Clean minimal design' },
];

const colorThemes = [
  { name: 'Dark (Default)', bg: '#0a0a0f', text: '#ffffff' },
  { name: 'Light', bg: '#ffffff', text: '#0a0a0f' },
  { name: 'Purple Gradient', bg: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)', text: '#ffffff' },
  { name: 'Transparent Dark', bg: 'transparent', text: '#ffffff' },
  { name: 'Transparent Light', bg: 'transparent', text: '#0a0a0f' },
];

const glassThemes = [
  {
    name: 'Purple Glass',
    bg: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(99, 102, 241, 0.15) 100%)',
    border: 'rgba(139, 92, 246, 0.3)',
    blur: true,
    text: '#ffffff'
  },
  {
    name: 'Blue Glass',
    bg: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(14, 165, 233, 0.15) 100%)',
    border: 'rgba(59, 130, 246, 0.3)',
    blur: true,
    text: '#ffffff'
  },
  {
    name: 'Pink Glass',
    bg: 'linear-gradient(135deg, rgba(236, 72, 153, 0.15) 0%, rgba(219, 39, 119, 0.15) 100%)',
    border: 'rgba(236, 72, 153, 0.3)',
    blur: true,
    text: '#ffffff'
  },
  {
    name: 'Cyan Glass',
    bg: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(20, 184, 166, 0.15) 100%)',
    border: 'rgba(6, 182, 212, 0.3)',
    blur: true,
    text: '#ffffff'
  },
  {
    name: 'Amber Glass',
    bg: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(251, 146, 60, 0.15) 100%)',
    border: 'rgba(245, 158, 11, 0.3)',
    blur: true,
    text: '#ffffff'
  },
  {
    name: 'Frosted Dark',
    bg: 'rgba(10, 10, 15, 0.7)',
    border: 'rgba(255, 255, 255, 0.1)',
    blur: true,
    text: '#ffffff'
  },
];

const taglines = [
  'Give your AI a real brain',
  'Memory that learns',
  'AI memory infrastructure',
  'The memory layer for AI',
  'Persistent AI memory',
  'Building AI that remembers',
];

type ImageFormat = 'svg' | 'png' | 'jpg';

export default function BrandPage() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [selectedTagline, setSelectedTagline] = useState(0);
  const [selectedFormat, setSelectedFormat] = useState<ImageFormat>('svg');
  const [selectedWallpaperFormat, setSelectedWallpaperFormat] = useState<'png' | 'jpg'>('png');
  const [selectedProfileShape, setSelectedProfileShape] = useState<'circle' | 'square' | 'rounded'>('circle');
  const [selectedWallpaperCategory, setSelectedWallpaperCategory] = useState<'all' | 'desktop' | 'mobile' | 'tablet'>('all');
  const [selectedWallpaperStyle, setSelectedWallpaperStyle] = useState<'hero' | 'gradient' | 'pattern' | 'minimal'>('hero');

  const generateLogoSVG = (width: number, height: number, bgColor: string, textColor: string) => {
    const fontSize = Math.min(width, height) * 0.18;
    const centerX = width / 2;
    const centerY = height / 2;
    const tmSize = fontSize * 0.3;

    const bgStyle = bgColor.startsWith('linear-gradient')
      ? `<defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#8b5cf6;stop-opacity:1" /><stop offset="100%" style="stop-color:#6366f1;stop-opacity:1" /></linearGradient></defs><rect width="${width}" height="${height}" fill="url(#grad)"/>`
      : `<rect width="${width}" height="${height}" fill="${bgColor}"/>`;

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  ${bgStyle}
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&amp;display=swap');
    .logo-text {
      font-family: 'Inter', sans-serif;
      font-weight: 900;
      fill: ${textColor};
    }
  </style>
  <text x="${centerX}" y="${centerY}" text-anchor="middle" dominant-baseline="central" class="logo-text" font-size="${fontSize}">
    ekkOS<tspan font-size="${fontSize * 0.85}" dy="0" dx="0">_</tspan><tspan font-size="${tmSize}" dy="${-fontSize * 0.35}">™</tspan>
  </text>
</svg>`;
  };

  const svgToImage = async (svgString: string, width: number, height: number, format: ImageFormat): Promise<Blob> => {
    return new Promise((resolve, reject) => {
      if (format === 'svg') {
        resolve(new Blob([svgString], { type: 'image/svg+xml' }));
        return;
      }

      const img = new Image();
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');

      img.onload = () => {
        if (ctx) {
          ctx.drawImage(img, 0, 0);
          canvas.toBlob(
            (blob) => {
              if (blob) resolve(blob);
              else reject(new Error('Failed to create blob'));
            },
            format === 'png' ? 'image/png' : 'image/jpeg',
            0.95
          );
        }
      };

      img.onerror = reject;
      img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgString)));
    });
  };

  const downloadLogo = async (size: typeof logoSizes[0], theme: typeof colorThemes[0]) => {
    const svg = generateLogoSVG(size.width, size.height, theme.bg, theme.text);
    const blob = await svgToImage(svg, size.width, size.height, selectedFormat);
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ekkos-logo-${size.ratio}-${theme.name.toLowerCase().replace(/\s+/g, '-')}.${selectedFormat}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const generateTaglineSVG = (width: number, height: number, tagline: string, bgColor: string, textColor: string) => {
    const logoFontSize = Math.min(width, height) * 0.12;
    const taglineFontSize = logoFontSize * 0.25;
    const centerX = width / 2;
    const logoY = height * 0.42;
    const taglineY = height * 0.58;
    const tmSize = logoFontSize * 0.3;

    const bgStyle = bgColor.startsWith('linear-gradient')
      ? `<defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#8b5cf6;stop-opacity:1" /><stop offset="100%" style="stop-color:#6366f1;stop-opacity:1" /></linearGradient></defs><rect width="${width}" height="${height}" fill="url(#grad)"/>`
      : `<rect width="${width}" height="${height}" fill="${bgColor}"/>`;

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  ${bgStyle}
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@900;400&amp;display=swap');
    .logo-text {
      font-family: 'Inter', sans-serif;
      font-weight: 900;
      fill: ${textColor};
    }
    .tagline-text {
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      fill: ${textColor};
      opacity: 0.7;
    }
  </style>
  <text x="${centerX}" y="${logoY}" text-anchor="middle" dominant-baseline="central" class="logo-text" font-size="${logoFontSize}">
    ekkOS<tspan font-size="${logoFontSize * 0.85}" dy="0" dx="0">_</tspan><tspan font-size="${tmSize}" dy="${-logoFontSize * 0.35}">™</tspan>
  </text>
  <text x="${centerX}" y="${taglineY}" text-anchor="middle" dominant-baseline="central" class="tagline-text" font-size="${taglineFontSize}">${tagline}</text>
</svg>`;
  };

  const downloadTagline = async (size: typeof logoSizes[0], theme: typeof colorThemes[0], tagline: string) => {
    const svg = generateTaglineSVG(size.width, size.height, tagline, theme.bg, theme.text);
    const blob = await svgToImage(svg, size.width, size.height, selectedFormat);
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ekkos-tagline-${size.ratio}-${theme.name.toLowerCase().replace(/\s+/g, '-')}.${selectedFormat}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const generateGlassSVG = (width: number, height: number, tagline: string, theme: typeof glassThemes[0]) => {
    const logoFontSize = Math.min(width, height) * 0.12;
    const taglineFontSize = logoFontSize * 0.25;
    const centerX = width / 2;
    const centerY = height / 2;
    const tmSize = logoFontSize * 0.3;

    // Parse gradient for glass effect
    const gradientMatch = theme.bg.match(/linear-gradient\(([^)]+)\)/);
    let bgDef = '';
    if (gradientMatch) {
      const parts = gradientMatch[1].split(',').map(p => p.trim());
      const angle = parts[0].replace('deg', '');
      const stops = parts.slice(1);
      bgDef = `<defs>
        <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          ${stops.map((stop, i) => {
            const color = stop.match(/rgba?\([^)]+\)/)?.[0] || 'rgba(139, 92, 246, 0.15)';
            return `<stop offset="${i === 0 ? '0%' : '100%'}" style="stop-color:${color}" />`;
          }).join('\n')}
        </linearGradient>
        <filter id="blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
        </filter>
      </defs>`;
    } else {
      bgDef = `<defs>
        <filter id="blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
        </filter>
      </defs>`;
    }

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  ${bgDef}
  <!-- Dark background -->
  <rect width="${width}" height="${height}" fill="#0a0a0f"/>

  <!-- Glass card with blur -->
  <rect x="${width * 0.1}" y="${height * 0.2}" width="${width * 0.8}" height="${height * 0.6}"
        rx="${Math.min(width, height) * 0.03}"
        fill="${gradientMatch ? 'url(#glassGrad)' : theme.bg}"
        stroke="${theme.border}"
        stroke-width="2"
        filter="${theme.blur ? 'url(#blur)' : 'none'}"/>

  <!-- Inner glow -->
  <rect x="${width * 0.1}" y="${height * 0.2}" width="${width * 0.8}" height="${height * 0.6}"
        rx="${Math.min(width, height) * 0.03}"
        fill="none"
        stroke="${theme.border}"
        stroke-width="1"
        opacity="0.5"/>

  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@900;400&amp;display=swap');
    .glass-logo {
      font-family: 'Inter', sans-serif;
      font-weight: 900;
      fill: ${theme.text};
      filter: drop-shadow(0 0 20px rgba(139, 92, 246, 0.5));
    }
    .glass-tagline {
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      fill: ${theme.text};
      opacity: 0.8;
    }
  </style>

  <!-- Logo text -->
  <text x="${centerX}" y="${centerY - logoFontSize * 0.2}" text-anchor="middle" dominant-baseline="central"
        class="glass-logo" font-size="${logoFontSize}">
    ekkOS<tspan font-size="${logoFontSize * 0.85}" dy="0" dx="0">_</tspan><tspan font-size="${tmSize}" dy="${-logoFontSize * 0.35}">™</tspan>
  </text>

  <!-- Tagline -->
  <text x="${centerX}" y="${centerY + logoFontSize * 0.6}" text-anchor="middle" dominant-baseline="central"
        class="glass-tagline" font-size="${taglineFontSize}">${tagline}</text>
</svg>`;
  };

  const downloadGlass = async (size: typeof logoSizes[0], theme: typeof glassThemes[0], tagline: string) => {
    const svg = generateGlassSVG(size.width, size.height, tagline, theme);
    const blob = await svgToImage(svg, size.width, size.height, selectedFormat);
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ekkos-glass-${size.ratio}-${theme.name.toLowerCase().replace(/\s+/g, '-')}.${selectedFormat}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const copyColor = (color: string) => {
    navigator.clipboard.writeText(color);
    setCopiedColor(color);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const generateWallpaperSVG = (
    width: number,
    height: number,
    bgColor: string,
    textColor: string,
    style: 'hero' | 'gradient' | 'pattern' | 'minimal',
    tagline?: string
  ) => {
    const logoFontSize = Math.min(width, height) * 0.08;
    const taglineFontSize = logoFontSize * 0.3;
    const centerX = width / 2;
    const centerY = height / 2;
    const tmSize = logoFontSize * 0.3;
    const backgroundTextSize = Math.min(width, height) * 0.4; // Large faded background text

    let defs = '';
    let backgroundElements = '';
    let logoElements = '';

    // Hero style - large faded ekkOS_ in background (stunning, matches homepage hero exactly)
    if (style === 'hero') {
      // Stunning background with sophisticated gradients
      defs = `<defs>
        <!-- Base background gradient: subtle depth -->
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#0a0a0f;stop-opacity:1" />
          <stop offset="20%" style="stop-color:#0f0f1a;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#0a0a0f;stop-opacity:1" />
          <stop offset="80%" style="stop-color:#0f0f1a;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#0a0a0f;stop-opacity:1" />
        </linearGradient>
        <!-- Subtle top glow: from-purple-500/5 -->
        <linearGradient id="topGlow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#8b5cf6;stop-opacity:0.05" />
          <stop offset="15%" style="stop-color:#8b5cf6;stop-opacity:0.02" />
          <stop offset="30%" style="stop-color:transparent;stop-opacity:0" />
        </linearGradient>
        <!-- Perfectly faded text: linear-gradient(180deg, rgba(139, 92, 246, 0.08) 0%, rgba(59, 130, 246, 0.04) 50%, transparent 100%) -->
        <linearGradient id="fadedText" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#8b5cf6;stop-opacity:0.08" />
          <stop offset="50%" style="stop-color:#3b82f6;stop-opacity:0.04" />
          <stop offset="100%" style="stop-color:transparent;stop-opacity:0" />
        </linearGradient>
        <!-- Top-left orb: purple-500/15 with beautiful blur falloff -->
        <radialGradient id="orb1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style="stop-color:#8b5cf6;stop-opacity:0.18" />
          <stop offset="40%" style="stop-color:#8b5cf6;stop-opacity:0.12" />
          <stop offset="70%" style="stop-color:#8b5cf6;stop-opacity:0.05" />
          <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:0" />
        </radialGradient>
        <!-- Bottom-right orb: blue-500/15 with beautiful blur falloff -->
        <radialGradient id="orb2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:0.18" />
          <stop offset="40%" style="stop-color:#3b82f6;stop-opacity:0.12" />
          <stop offset="70%" style="stop-color:#3b82f6;stop-opacity:0.05" />
          <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:0" />
        </radialGradient>
        <!-- Center orb: stunning gradient from-purple-500/10 to-blue-500/10 -->
        <linearGradient id="orb3Grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#8b5cf6;stop-opacity:0.12" />
          <stop offset="50%" style="stop-color:#a855f7;stop-opacity:0.10" />
          <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:0.12" />
        </linearGradient>
        <radialGradient id="orb3" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style="stop-color:url(#orb3Grad);stop-opacity:1" />
          <stop offset="50%" style="stop-color:url(#orb3Grad);stop-opacity:0.6" />
          <stop offset="80%" style="stop-color:url(#orb3Grad);stop-opacity:0.2" />
          <stop offset="100%" style="stop-color:url(#orb3Grad);stop-opacity:0" />
        </radialGradient>
        <!-- Additional subtle glow layers for depth -->
        <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style="stop-color:#a855f7;stop-opacity:0.08" />
          <stop offset="100%" style="stop-color:#a855f7;stop-opacity:0" />
        </radialGradient>
        <radialGradient id="glow2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:0.08" />
          <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:0" />
        </radialGradient>
      </defs>`;
      
      // Calculate orb sizes - perfectly scaled for stunning visual impact
      const orbSize = Math.min(width, height) * 0.18; // Slightly larger for more presence
      const centerOrbSize = Math.min(width, height) * 0.28; // Larger center orb
      const glowSize = Math.min(width, height) * 0.35; // Subtle glow layers
      
      backgroundElements = `
        <!-- Base background with depth -->
        <rect width="${width}" height="${height}" fill="url(#bgGrad)"/>
        <!-- Subtle top glow -->
        <rect width="${width}" height="${height * 0.4}" fill="url(#topGlow)"/>
        <!-- Center orb: stunning gradient, perfectly centered -->
        <ellipse cx="${centerX}" cy="${centerY}" rx="${centerOrbSize}" ry="${centerOrbSize}" fill="url(#orb3)" opacity="0.9"/>
        <!-- Additional glow layers for depth and richness -->
        <ellipse cx="${centerX}" cy="${centerY}" rx="${glowSize}" ry="${glowSize}" fill="url(#glow1)" opacity="0.4"/>
        <ellipse cx="${centerX}" cy="${centerY}" rx="${glowSize}" ry="${glowSize}" fill="url(#glow2)" opacity="0.4"/>
        <!-- Top-left orb: purple, beautifully positioned -->
        <ellipse cx="${width * 0.25}" cy="${height * 0.25}" rx="${orbSize}" ry="${orbSize}" fill="url(#orb1)"/>
        <!-- Bottom-right orb: blue, beautifully positioned -->
        <ellipse cx="${width * 0.75}" cy="${height * 0.75}" rx="${orbSize}" ry="${orbSize}" fill="url(#orb2)"/>
        <!-- Massive, perfectly faded ekkOS_ text - truly stunning and subtle (gradient handles opacity) -->
        <text x="${centerX}" y="${height * 0.095}" text-anchor="middle" dominant-baseline="hanging" font-family="Inter, sans-serif" font-weight="900" font-size="${backgroundTextSize}" fill="url(#fadedText)" letter-spacing="-0.03em">
          ekkOS<tspan font-size="${backgroundTextSize * 0.85}" dy="0" dx="0">_</tspan>
        </text>
      `;
      logoElements = `
        <text x="${centerX}" y="${centerY - (tagline ? taglineFontSize * 1.5 : 0)}" text-anchor="middle" dominant-baseline="central" font-family="Inter, sans-serif" font-weight="900" font-size="${logoFontSize}" fill="url(#logoGrad)">
          ekkOS<tspan font-size="${logoFontSize * 0.85}" dy="0" dx="0">_</tspan><tspan font-size="${tmSize * 0.8}" dy="${-logoFontSize * 0.35}">™</tspan>
        </text>
      `;
      defs += `
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#a855f7;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#3b82f6;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#a855f7;stop-opacity:1" />
        </linearGradient>
      `;
    }
    // Gradient style - stunning vibrant gradient background
    else if (style === 'gradient') {
      defs = `<defs>
        <!-- Stunning multi-stop gradient with rich colors -->
        <linearGradient id="wallGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0a0a0f;stop-opacity:1" />
          <stop offset="15%" style="stop-color:#1a0a2e;stop-opacity:1" />
          <stop offset="30%" style="stop-color:#2d1b4e;stop-opacity:0.8" />
          <stop offset="45%" style="stop-color:#8b5cf6;stop-opacity:0.4" />
          <stop offset="55%" style="stop-color:#3b82f6;stop-opacity:0.4" />
          <stop offset="70%" style="stop-color:#8b5cf6;stop-opacity:0.4" />
          <stop offset="85%" style="stop-color:#2d1b4e;stop-opacity:0.8" />
          <stop offset="100%" style="stop-color:#0a0a0f;stop-opacity:1" />
        </linearGradient>
        <!-- Rich purple glow with smooth falloff -->
        <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style="stop-color:#a855f7;stop-opacity:0.5" />
          <stop offset="40%" style="stop-color:#8b5cf6;stop-opacity:0.3" />
          <stop offset="70%" style="stop-color:#8b5cf6;stop-opacity:0.1" />
          <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:0" />
        </radialGradient>
        <!-- Rich blue glow with smooth falloff -->
        <radialGradient id="glow2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style="stop-color:#60a5fa;stop-opacity:0.5" />
          <stop offset="40%" style="stop-color:#3b82f6;stop-opacity:0.3" />
          <stop offset="70%" style="stop-color:#3b82f6;stop-opacity:0.1" />
          <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:0" />
        </radialGradient>
        <!-- Additional accent glow -->
        <radialGradient id="glow3" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style="stop-color:#c084fc;stop-opacity:0.3" />
          <stop offset="100%" style="stop-color:#c084fc;stop-opacity:0" />
        </radialGradient>
      </defs>`;
      backgroundElements = `
        <rect width="${width}" height="${height}" fill="url(#wallGrad)"/>
        <!-- Multiple glow layers for depth and richness -->
        <ellipse cx="${width * 0.2}" cy="${height * 0.3}" rx="${width * 0.35}" ry="${height * 0.35}" fill="url(#glow1)"/>
        <ellipse cx="${width * 0.8}" cy="${height * 0.7}" rx="${width * 0.35}" ry="${height * 0.35}" fill="url(#glow2)"/>
        <ellipse cx="${width * 0.5}" cy="${height * 0.5}" rx="${width * 0.4}" ry="${height * 0.4}" fill="url(#glow3)" opacity="0.6"/>
      `;
      logoElements = `
        <text x="${centerX}" y="${centerY - (tagline ? taglineFontSize * 1.5 : 0)}" text-anchor="middle" dominant-baseline="central" font-family="Inter, sans-serif" font-weight="900" font-size="${logoFontSize}" fill="${textColor}" opacity="0.95">
          ekkOS<tspan font-size="${logoFontSize * 0.85}" dy="0" dx="0">_</tspan><tspan font-size="${tmSize}" dy="${-logoFontSize * 0.35}">™</tspan>
        </text>
      `;
    }
    // Pattern style - subtle pattern background
    else if (style === 'pattern') {
      defs = `<defs>
        <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M 80 0 L 0 0 0 80" fill="none" stroke="${textColor}" stroke-width="0.5" opacity="0.08"/>
        </pattern>
        <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="1" fill="${textColor}" opacity="0.1"/>
        </pattern>
        <linearGradient id="patternBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0a0a0f;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#1a1a2e;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#0a0a0f;stop-opacity:1" />
        </linearGradient>
      </defs>`;
      backgroundElements = `
        <rect width="${width}" height="${height}" fill="url(#patternBg)"/>
        <rect width="${width}" height="${height}" fill="url(#grid)"/>
        <rect width="${width}" height="${height}" fill="url(#dots)"/>
      `;
      logoElements = `
        <text x="${centerX}" y="${centerY - (tagline ? taglineFontSize * 1.5 : 0)}" text-anchor="middle" dominant-baseline="central" font-family="Inter, sans-serif" font-weight="900" font-size="${logoFontSize}" fill="${textColor}" opacity="0.95">
          ekkOS<tspan font-size="${logoFontSize * 0.85}" dy="0" dx="0">_</tspan><tspan font-size="${tmSize}" dy="${-logoFontSize * 0.35}">™</tspan>
        </text>
      `;
    }
    // Minimal style - clean and simple
    else {
      if (bgColor.startsWith('linear-gradient')) {
        defs = `<defs>
          <linearGradient id="wallGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#8b5cf6;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#6366f1;stop-opacity:1" />
          </linearGradient>
        </defs>`;
        backgroundElements = `<rect width="${width}" height="${height}" fill="url(#wallGrad)"/>`;
      } else {
        defs = '';
        backgroundElements = `<rect width="${width}" height="${height}" fill="${bgColor}"/>`;
      }
      logoElements = `
        <text x="${centerX}" y="${centerY - (tagline ? taglineFontSize * 1.5 : 0)}" text-anchor="middle" dominant-baseline="central" font-family="Inter, sans-serif" font-weight="900" font-size="${logoFontSize}" fill="${textColor}" opacity="0.95">
          ekkOS<tspan font-size="${logoFontSize * 0.85}" dy="0" dx="0">_</tspan><tspan font-size="${tmSize}" dy="${-logoFontSize * 0.35}">™</tspan>
        </text>
      `;
    }

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  ${defs}
  ${backgroundElements}
  ${logoElements}
  ${tagline ? `<text x="${centerX}" y="${centerY + logoFontSize * 0.8}" text-anchor="middle" dominant-baseline="central" font-family="Inter, sans-serif" font-weight="400" font-size="${taglineFontSize}" fill="${textColor}" opacity="0.6">${tagline}</text>` : ''}
</svg>`;
  };

  const downloadWallpaper = async (size: typeof wallpaperSizes[0], theme: typeof colorThemes[0], style: 'hero' | 'gradient' | 'pattern' | 'minimal', tagline?: string) => {
    const svg = generateWallpaperSVG(size.width, size.height, theme.bg, theme.text, style, tagline);
    const blob = await svgToImage(svg, size.width, size.height, selectedWallpaperFormat);
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ekkos-wallpaper-${style}-${size.name.toLowerCase().replace(/\s+/g, '-')}-${theme.name.toLowerCase().replace(/\s+/g, '-')}.${selectedWallpaperFormat}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const generateProfileImageSVG = (width: number, height: number, bgColor: string, textColor: string, shape: 'circle' | 'square' | 'rounded') => {
    const fontSize = Math.min(width, height) * 0.25;
    const centerX = width / 2;
    const centerY = height / 2;
    const tmSize = fontSize * 0.3;
    const borderRadius = shape === 'rounded' ? Math.min(width, height) * 0.15 : 0;

    const bgStyle = bgColor.startsWith('linear-gradient')
      ? `<defs><linearGradient id="profGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#8b5cf6;stop-opacity:1" /><stop offset="100%" style="stop-color:#6366f1;stop-opacity:1" /></linearGradient></defs>`
      : '';

    const shapeElement = shape === 'circle'
      ? `<circle cx="${centerX}" cy="${centerY}" r="${Math.min(width, height) / 2}" fill="${bgColor.startsWith('linear-gradient') ? 'url(#profGrad)' : bgColor}"/>`
      : `<rect x="0" y="0" width="${width}" height="${height}" rx="${borderRadius}" fill="${bgColor.startsWith('linear-gradient') ? 'url(#profGrad)' : bgColor}"/>`;

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  ${bgStyle}
  ${shapeElement}
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&amp;display=swap');
    .profile-text {
      font-family: 'Inter', sans-serif;
      font-weight: 900;
      fill: ${textColor};
    }
  </style>
  <text x="${centerX}" y="${centerY}" text-anchor="middle" dominant-baseline="central" class="profile-text" font-size="${fontSize}">
    ekkOS<tspan font-size="${fontSize * 0.85}" dy="0" dx="0">_</tspan><tspan font-size="${tmSize}" dy="${-fontSize * 0.35}">™</tspan>
  </text>
</svg>`;
  };

  const downloadProfileImage = async (size: typeof profileImageSizes[0], theme: typeof colorThemes[0], shape: 'circle' | 'square' | 'rounded') => {
    const svg = generateProfileImageSVG(size.width, size.height, theme.bg, theme.text, shape);
    const blob = await svgToImage(svg, size.width, size.height, selectedFormat);
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ekkos-profile-${shape}-${size.name.toLowerCase().replace(/\s+/g, '-')}-${theme.name.toLowerCase().replace(/\s+/g, '-')}.${selectedFormat}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const filteredWallpapers = selectedWallpaperCategory === 'all'
    ? wallpaperSizes
    : wallpaperSizes.filter(w => w.category === selectedWallpaperCategory);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-6 transition-colors">
            ← Back to home
          </Link>
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Brand Kit
            </span>
          </h1>
          <p className="text-xl text-white/60 mb-6">
            Download official ekkOS_ logos, wallpapers, profile images, and brand assets for your publications
          </p>

          {/* Format Toggle */}
          <div className="inline-flex items-center gap-2 p-1 bg-white/5 border border-white/10 rounded-xl">
            <span className="text-sm text-white/40 px-3">Format:</span>
            {(['svg', 'png', 'jpg'] as const).map((format) => (
              <button
                key={format}
                onClick={() => setSelectedFormat(format)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  selectedFormat === format
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {format.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="mb-12 flex flex-wrap gap-3">
          <a href="#logos" className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-white/80 hover:text-white transition-all text-sm font-medium">
            📐 Logos
          </a>
          <a href="#wallpapers" className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-white/80 hover:text-white transition-all text-sm font-medium">
            🖼️ Wallpapers
          </a>
          <a href="#profiles" className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-white/80 hover:text-white transition-all text-sm font-medium">
            👤 Profile Images
          </a>
          <a href="#colors" className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-white/80 hover:text-white transition-all text-sm font-medium">
            🎨 Colors
          </a>
        </div>

        {/* Logo Preview */}
        <div id="logos" className="mb-16 p-12 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10">
          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="text-8xl font-black mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}>
                ekkOS<span className="text-purple-400 animate-pulse">_</span>
                <sup className="text-3xl text-purple-400/80 ml-1">™</sup>
              </div>
              <p className="text-white/60">Official Logo - Inter 900</p>
            </div>
          </div>
        </div>

        {/* Tagline Variants */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Logo with Tagline</h2>
          <p className="text-white/60 mb-6">
            Download logos with official taglines for marketing and promotional materials
          </p>

          {/* Tagline Preview */}
          <div className="mb-8 p-12 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-black mb-3" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}>
                  ekkOS<span className="text-purple-400 animate-pulse">_</span>
                  <sup className="text-2xl text-purple-400/80 ml-1">™</sup>
                </div>
                <p className="text-lg text-white/70" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {taglines[selectedTagline]}
                </p>
              </div>
            </div>
          </div>

          {/* Tagline Selector */}
          <div className="mb-8">
            <label className="text-sm text-white/60 mb-3 block">Select Tagline:</label>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {taglines.map((tagline, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedTagline(index)}
                  className={`p-4 rounded-lg border transition-all text-left ${
                    selectedTagline === index
                      ? 'bg-purple-500/20 border-purple-500 text-white'
                      : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${selectedTagline === index ? 'bg-purple-400' : 'bg-white/20'}`} />
                    <span className="text-sm">{tagline}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Tagline Downloads */}
          <div className="space-y-12">
            {colorThemes.map((theme) => (
              <div key={theme.name}>
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                  <div
                    className="w-6 h-6 rounded border border-white/20"
                    style={{ background: theme.bg === 'transparent' ? 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h10v10H0zM10 10h10v10H10z\' fill=\'%23666\'/%3E%3C/svg%3E")' : theme.bg }}
                  />
                  {theme.name} - {taglines[selectedTagline]}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {logoSizes.slice(0, 6).map((size) => (
                    <button
                      key={`${theme.name}-${size.name}`}
                      onClick={() => downloadTagline(size, theme, taglines[selectedTagline])}
                      className="group relative overflow-hidden rounded-xl border border-white/10 hover:border-purple-500/50 transition-all p-6 bg-white/5 hover:bg-white/10"
                    >
                      <div
                        className="flex flex-col items-center justify-center mb-4 rounded-lg overflow-hidden"
                        style={{
                          background: theme.bg === 'transparent'
                            ? 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h10v10H0zM10 10h10v10H10z\' fill=\'%23333\'/%3E%3C/svg%3E")'
                            : theme.bg,
                          aspectRatio: size.width / size.height,
                          minHeight: '140px',
                          padding: '1.5rem'
                        }}
                      >
                        <div
                          className="font-black text-center mb-1"
                          style={{
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 900,
                            color: theme.text,
                            fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)'
                          }}
                        >
                          ekkOS_<sup style={{ fontSize: '0.4em', marginLeft: '0.1em' }}>™</sup>
                        </div>
                        <div
                          className="text-center"
                          style={{
                            fontFamily: 'Inter, sans-serif',
                            color: theme.text,
                            opacity: 0.7,
                            fontSize: 'clamp(0.5rem, 1vw, 0.7rem)'
                          }}
                        >
                          {taglines[selectedTagline]}
                        </div>
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-white mb-1">{size.name}</p>
                        <p className="text-sm text-white/60">{size.width} × {size.height}px ({size.ratio})</p>
                      </div>
                      <div className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Download className="w-4 h-4 text-purple-400" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Glassmorphic Designs */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Glassmorphic Designs</h2>
              <p className="text-white/60">Premium frosted glass effects for modern, sophisticated branding</p>
            </div>
            <div className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-purple-300 text-sm font-semibold">
              ✨ Premium
            </div>
          </div>

          {/* Glass Preview Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {glassThemes.map((theme, index) => (
              <div
                key={theme.name}
                className="relative overflow-hidden rounded-2xl border border-white/10 p-8 group hover:scale-105 transition-transform duration-300"
                style={{
                  background: '#0a0a0f',
                }}
              >
                {/* Glass effect preview */}
                <div
                  className="absolute inset-4 rounded-xl"
                  style={{
                    background: theme.bg,
                    border: `2px solid ${theme.border}`,
                    backdropFilter: theme.blur ? 'blur(20px)' : 'none',
                    WebkitBackdropFilter: theme.blur ? 'blur(20px)' : 'none',
                  }}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center min-h-[200px]">
                  <div className="text-4xl font-black mb-2" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900, color: theme.text, textShadow: '0 0 20px rgba(139, 92, 246, 0.5)' }}>
                    ekkOS<span className="text-purple-400">_</span><sup className="text-lg">™</sup>
                  </div>
                  <p className="text-white/80 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {taglines[selectedTagline]}
                  </p>
                </div>

                {/* Theme name badge */}
                <div className="relative z-10 mt-4 text-center">
                  <span className="px-3 py-1 rounded-full bg-black/30 text-xs font-semibold text-white/80 backdrop-blur-sm">
                    {theme.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Glass Downloads */}
          <div className="space-y-12">
            {glassThemes.map((theme) => (
              <div key={theme.name}>
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                  <div
                    className="w-6 h-6 rounded border"
                    style={{
                      background: theme.bg,
                      borderColor: theme.border
                    }}
                  />
                  {theme.name} Glass - {taglines[selectedTagline]}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {logoSizes.slice(0, 9).map((size) => (
                    <button
                      key={`${theme.name}-${size.name}`}
                      onClick={() => downloadGlass(size, theme, taglines[selectedTagline])}
                      className="group relative overflow-hidden rounded-xl border border-white/10 hover:border-purple-500/50 transition-all p-6 bg-white/5 hover:bg-white/10"
                    >
                      <div
                        className="flex flex-col items-center justify-center mb-4 rounded-lg overflow-hidden relative"
                        style={{
                          background: '#0a0a0f',
                          aspectRatio: size.width / size.height,
                          minHeight: '140px',
                          padding: '1.5rem'
                        }}
                      >
                        {/* Glass card simulation */}
                        <div
                          className="absolute inset-4 rounded-lg"
                          style={{
                            background: theme.bg,
                            border: `1px solid ${theme.border}`,
                            backdropFilter: theme.blur ? 'blur(10px)' : 'none',
                            WebkitBackdropFilter: theme.blur ? 'blur(10px)' : 'none',
                          }}
                        />

                        {/* Logo */}
                        <div className="relative z-10">
                          <div
                            className="font-black text-center mb-1"
                            style={{
                              fontFamily: 'Inter, sans-serif',
                              fontWeight: 900,
                              color: theme.text,
                              fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                              textShadow: '0 0 10px rgba(139, 92, 246, 0.3)'
                            }}
                          >
                            ekkOS_<sup style={{ fontSize: '0.4em', marginLeft: '0.1em' }}>™</sup>
                          </div>
                          <div
                            className="text-center"
                            style={{
                              fontFamily: 'Inter, sans-serif',
                              color: theme.text,
                              opacity: 0.8,
                              fontSize: 'clamp(0.4rem, 0.8vw, 0.6rem)'
                            }}
                          >
                            {taglines[selectedTagline]}
                          </div>
                        </div>
                      </div>

                      <div className="text-left">
                        <p className="font-semibold text-white mb-1">{size.name}</p>
                        <p className="text-sm text-white/60">{size.width} × {size.height}px ({size.ratio})</p>
                      </div>

                      <div className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                        <Download className="w-4 h-4 text-purple-400" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Wallpapers */}
        <div id="wallpapers" className="mb-16 scroll-mt-20">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Wallpapers</h2>
              <p className="text-white/60">High-resolution wallpapers for desktop, mobile, and tablet devices</p>
            </div>
            <div className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-purple-300 text-sm font-semibold">
              🖼️ New
            </div>
          </div>

          {/* Sticky Format Selector for Wallpapers - Always Visible */}
          <div className="sticky top-4 z-20 mb-6 -mx-6 px-6 py-2 bg-[#0a0a0f]/95 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto">
              <div className="inline-flex items-center gap-2 p-1 bg-white/5 border border-white/10 rounded-xl">
                <span className="text-sm text-white/40 px-3">Wallpaper Format:</span>
                {(['png', 'jpg'] as const).map((format) => (
                  <button
                    key={format}
                    onClick={() => setSelectedWallpaperFormat(format)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                      selectedWallpaperFormat === format
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {format.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Style Selector - More Compact */}
          <div className="mb-4">
            <label className="text-sm text-white/60 mb-2 block">Select Style:</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {wallpaperStyles.map((style) => (
                <button
                  key={style.name}
                  onClick={() => setSelectedWallpaperStyle(style.type)}
                  className={`p-4 rounded-lg border transition-all text-left ${
                    selectedWallpaperStyle === style.type
                      ? 'bg-purple-500/20 border-purple-500 text-white'
                      : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className={`w-2 h-2 rounded-full ${selectedWallpaperStyle === style.type ? 'bg-purple-400' : 'bg-white/20'}`} />
                    <span className="font-semibold text-sm">{style.name}</span>
                  </div>
                  <p className="text-xs text-white/50 mt-1">{style.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter - More Compact */}
          <div className="mb-6">
            <label className="text-sm text-white/60 mb-2 block">Filter by Device:</label>
            <div className="inline-flex items-center gap-2 p-1 bg-white/5 border border-white/10 rounded-xl">
              {(['all', 'desktop', 'mobile', 'tablet'] as const).map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedWallpaperCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all capitalize ${
                    selectedWallpaperCategory === category
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {category === 'all' ? 'All Devices' : category}
                </button>
              ))}
            </div>
          </div>

          {/* Wallpaper Preview - More Compact */}
          <div className="mb-6 p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10">
            <div className="text-center mb-4">
              <p className="text-sm text-white/60 mb-4">{wallpaperStyles.find(s => s.type === selectedWallpaperStyle)?.description}</p>
              <div
                className="mx-auto rounded-xl overflow-hidden border border-white/10"
                style={{
                  width: '100%',
                  maxWidth: '600px',
                  aspectRatio: '16/9',
                  background: selectedWallpaperStyle === 'hero' 
                    ? 'linear-gradient(180deg, #0a0a0f 0%, #1a1a2e 50%, #0a0a0f 100%)'
                    : selectedWallpaperStyle === 'gradient'
                    ? 'linear-gradient(135deg, #1a0a2e 0%, #8b5cf6 25%, #3b82f6 50%, #8b5cf6 75%, #0a0a0f 100%)'
                    : selectedWallpaperStyle === 'pattern'
                    ? '#0a0a0f'
                    : '#0a0a0f',
                  position: 'relative'
                }}
              >
                {/* Preview background effects */}
                {selectedWallpaperStyle === 'hero' && (
                  <>
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/15 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-blue-500/15 rounded-full blur-3xl" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-black text-purple-500/8" style={{ fontFamily: 'Inter, sans-serif' }}>
                      ekkOS_
                    </div>
                  </>
                )}
                {selectedWallpaperStyle === 'gradient' && (
                  <>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-purple-500/20" />
                    <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-500/30 rounded-full blur-3xl" />
                  </>
                )}
                {selectedWallpaperStyle === 'pattern' && (
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                  }} />
                )}
                <div className="relative z-10 flex flex-col items-center justify-center h-full">
                  <div className="text-4xl font-black mb-2" style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 900,
                    background: selectedWallpaperStyle === 'hero' 
                      ? 'linear-gradient(90deg, #a855f7 0%, #3b82f6 50%, #a855f7 100%)'
                      : 'linear-gradient(90deg, #ffffff 0%, #ffffff 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                    ekkOS_<sup className="text-xl">™</sup>
                  </div>
                  {selectedWallpaperStyle !== 'hero' && (
                    <p className="text-white/60 text-sm">{taglines[selectedTagline]}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Wallpaper Downloads - More Compact */}
          <div className="space-y-8">
            {colorThemes.map((theme) => (
              <div key={theme.name}>
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                  <div
                    className="w-6 h-6 rounded border border-white/20"
                    style={{ background: theme.bg === 'transparent' ? 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h10v10H0zM10 10h10v10H10z\' fill=\'%23666\'/%3E%3C/svg%3E")' : theme.bg }}
                  />
                  {theme.name} - {wallpaperStyles.find(s => s.type === selectedWallpaperStyle)?.name}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredWallpapers.map((size) => {
                    // Generate preview based on style
                    const previewBg = selectedWallpaperStyle === 'hero'
                      ? 'linear-gradient(180deg, #0a0a0f 0%, #1a1a2e 50%, #0a0a0f 100%)'
                      : selectedWallpaperStyle === 'gradient'
                      ? 'linear-gradient(135deg, #1a0a2e 0%, #8b5cf6 25%, #3b82f6 50%, #8b5cf6 75%, #0a0a0f 100%)'
                      : selectedWallpaperStyle === 'pattern'
                      ? '#0a0a0f'
                      : theme.bg === 'transparent'
                      ? 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h10v10H0zM10 10h10v10H10z\' fill=\'%23333\'/%3E%3C/svg%3E")'
                      : theme.bg;

                    return (
                      <button
                        key={`${theme.name}-${size.name}`}
                        onClick={() => downloadWallpaper(size, theme, selectedWallpaperStyle, taglines[selectedTagline])}
                        className="group relative overflow-hidden rounded-xl border border-white/10 hover:border-purple-500/50 transition-all p-6 bg-white/5 hover:bg-white/10"
                      >
                        <div
                          className="flex flex-col items-center justify-center mb-4 rounded-lg overflow-hidden relative"
                          style={{
                            background: previewBg,
                            aspectRatio: size.width / size.height,
                            minHeight: '160px',
                            padding: '1.5rem',
                            position: 'relative'
                          }}
                        >
                          {/* Style-specific preview effects */}
                          {selectedWallpaperStyle === 'hero' && (
                            <>
                              <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-purple-500/15 rounded-full blur-2xl" />
                              <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-blue-500/15 rounded-full blur-2xl" />
                              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8vw] font-black text-purple-500/8" style={{ fontFamily: 'Inter, sans-serif' }}>
                                ekkOS_
                              </div>
                            </>
                          )}
                          {selectedWallpaperStyle === 'gradient' && (
                            <>
                              <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-purple-500/30 rounded-full blur-2xl" />
                              <div className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-blue-500/30 rounded-full blur-2xl" />
                            </>
                          )}
                          {selectedWallpaperStyle === 'pattern' && (
                            <div className="absolute inset-0 opacity-10" style={{
                              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                              backgroundSize: '20px 20px'
                            }} />
                          )}
                          <div className="relative z-10">
                            <div
                              className="font-black text-center mb-1"
                              style={{
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 900,
                                color: selectedWallpaperStyle === 'hero' ? 'transparent' : theme.text,
                                background: selectedWallpaperStyle === 'hero'
                                  ? 'linear-gradient(90deg, #a855f7 0%, #3b82f6 50%, #a855f7 100%)'
                                  : 'none',
                                WebkitBackgroundClip: selectedWallpaperStyle === 'hero' ? 'text' : 'unset',
                                WebkitTextFillColor: selectedWallpaperStyle === 'hero' ? 'transparent' : theme.text,
                                backgroundClip: selectedWallpaperStyle === 'hero' ? 'text' : 'unset',
                                fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                                opacity: 0.95
                              }}
                            >
                              ekkOS_<sup style={{ fontSize: '0.4em', marginLeft: '0.1em' }}>™</sup>
                            </div>
                            {selectedWallpaperStyle !== 'hero' && (
                              <div
                                className="text-center"
                                style={{
                                  fontFamily: 'Inter, sans-serif',
                                  color: theme.text,
                                  opacity: 0.6,
                                  fontSize: 'clamp(0.5rem, 1vw, 0.7rem)'
                                }}
                              >
                                {taglines[selectedTagline]}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="text-left">
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-semibold text-white">{size.name}</p>
                            <span className="px-2 py-0.5 rounded text-xs bg-purple-500/20 text-purple-300 border border-purple-500/30">
                              {size.category}
                            </span>
                          </div>
                          <p className="text-sm text-white/60">{size.width} × {size.height}px ({size.ratio})</p>
                        </div>
                        <div className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Download className="w-4 h-4 text-purple-400" />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Profile Images */}
        <div id="profiles" className="mb-16 scroll-mt-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Profile Images</h2>
              <p className="text-white/60">Custom avatar and profile picture options in multiple shapes and sizes</p>
            </div>
            <div className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-purple-300 text-sm font-semibold">
              👤 New
            </div>
          </div>

          {/* Shape Selector */}
          <div className="mb-8">
            <label className="text-sm text-white/60 mb-3 block">Select Shape:</label>
            <div className="inline-flex items-center gap-2 p-1 bg-white/5 border border-white/10 rounded-xl">
              {profileVariants.map((variant) => (
                <button
                  key={variant.name}
                  onClick={() => setSelectedProfileShape(variant.shape)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    selectedProfileShape === variant.shape
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {variant.name}
                </button>
              ))}
            </div>
          </div>

          {/* Profile Image Preview */}
          <div className="mb-8 p-12 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10">
            <div className="flex items-center justify-center gap-8 flex-wrap">
              {profileVariants.map((variant) => (
                <div key={variant.name} className="text-center">
                  <div
                    className={`mb-3 mx-auto bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center transition-all ${
                      selectedProfileShape === variant.shape ? 'ring-4 ring-purple-400 ring-offset-4 ring-offset-[#0a0a0f] scale-110' : 'opacity-50'
                    }`}
                    style={{
                      width: '120px',
                      height: '120px',
                      borderRadius: variant.shape === 'circle' ? '50%' : variant.shape === 'rounded' ? '20%' : '0',
                    }}
                  >
                    <div
                      className="font-black text-white"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 900,
                        fontSize: '2.5rem'
                      }}
                    >
                      ekkOS_<sup style={{ fontSize: '0.4em', marginLeft: '0.1em' }}>™</sup>
                    </div>
                  </div>
                  <p className="text-sm text-white/60">{variant.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Image Downloads */}
          <div className="space-y-12">
            {colorThemes.map((theme) => (
              <div key={theme.name}>
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                  <div
                    className="w-6 h-6 rounded border border-white/20"
                    style={{ background: theme.bg === 'transparent' ? 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h10v10H0zM10 10h10v10H10z\' fill=\'%23666\'/%3E%3C/svg%3E")' : theme.bg }}
                  />
                  {theme.name} Profile - {profileVariants.find(v => v.shape === selectedProfileShape)?.name}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {profileImageSizes.map((size) => (
                    <button
                      key={`${theme.name}-${size.name}`}
                      onClick={() => downloadProfileImage(size, theme, selectedProfileShape)}
                      className="group relative overflow-hidden rounded-xl border border-white/10 hover:border-purple-500/50 transition-all p-6 bg-white/5 hover:bg-white/10"
                    >
                      <div
                        className="flex items-center justify-center mb-4 rounded-lg overflow-hidden mx-auto"
                        style={{
                          background: theme.bg === 'transparent'
                            ? 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h10v10H0zM10 10h10v10H10z\' fill=\'%23333\'/%3E%3C/svg%3E")'
                            : theme.bg,
                          width: '140px',
                          height: '140px',
                          borderRadius: selectedProfileShape === 'circle' ? '50%' : selectedProfileShape === 'rounded' ? '20%' : '0',
                        }}
                      >
                        <div
                          className="font-black text-center"
                          style={{
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 900,
                            color: theme.text,
                            fontSize: '2rem'
                          }}
                        >
                          ekkOS_<sup style={{ fontSize: '0.4em', marginLeft: '0.1em' }}>™</sup>
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="font-semibold text-white mb-1">{size.name}</p>
                        <p className="text-sm text-white/60">{size.width} × {size.height}px ({size.ratio})</p>
                      </div>
                      <div className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Download className="w-4 h-4 text-purple-400" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Colors */}
        <div id="colors" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8">Brand Colors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-[#0a0a0f] border border-white/10" />
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/60">Background</span>
                <button
                  onClick={() => copyColor('#0a0a0f')}
                  className="flex items-center gap-1 text-xs text-white/40 hover:text-white transition-colors"
                >
                  {copiedColor === '#0a0a0f' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  #0a0a0f
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-purple-500 border border-white/10" />
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/60">Purple</span>
                <button
                  onClick={() => copyColor('#a855f7')}
                  className="flex items-center gap-1 text-xs text-white/40 hover:text-white transition-colors"
                >
                  {copiedColor === '#a855f7' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  #a855f7
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-blue-500 border border-white/10" />
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/60">Blue</span>
                <button
                  onClick={() => copyColor('#3b82f6')}
                  className="flex items-center gap-1 text-xs text-white/40 hover:text-white transition-colors"
                >
                  {copiedColor === '#3b82f6' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  #3b82f6
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 border border-white/10" />
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/60">Gradient</span>
                <button
                  onClick={() => copyColor('from-purple-400 via-blue-400 to-purple-500')}
                  className="flex items-center gap-1 text-xs text-white/40 hover:text-white transition-colors"
                >
                  {copiedColor === 'from-purple-400 via-blue-400 to-purple-500' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  Gradient
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Logo Downloads */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Download Logos</h2>
          <p className="text-white/60 mb-8">
            Click any logo to download. All logos are vector SVG format for perfect scaling.
          </p>

          {/* Download Grid */}
          {colorThemes.map((theme) => (
            <div key={theme.name} className="mb-12">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <div
                  className="w-6 h-6 rounded border border-white/20"
                  style={{ background: theme.bg === 'transparent' ? 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h10v10H0zM10 10h10v10H10z\' fill=\'%23666\'/%3E%3C/svg%3E")' : theme.bg }}
                />
                {theme.name}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {logoSizes.map((size) => (
                  <button
                    key={`${theme.name}-${size.name}`}
                    onClick={() => downloadLogo(size, theme)}
                    className="group relative overflow-hidden rounded-xl border border-white/10 hover:border-purple-500/50 transition-all p-6 bg-white/5 hover:bg-white/10"
                  >
                    <div
                      className="flex items-center justify-center mb-4 rounded-lg overflow-hidden"
                      style={{
                        background: theme.bg === 'transparent'
                          ? 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h10v10H0zM10 10h10v10H10z\' fill=\'%23333\'/%3E%3C/svg%3E")'
                          : theme.bg,
                        aspectRatio: size.width / size.height,
                        minHeight: '120px'
                      }}
                    >
                      <div
                        className="font-black text-center"
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: 900,
                          color: theme.text,
                          fontSize: 'clamp(1rem, 3vw, 2rem)',
                          padding: '1rem'
                        }}
                      >
                        ekkOS_<sup style={{ fontSize: '0.4em', marginLeft: '0.1em' }}>™</sup>
                      </div>
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-white mb-1">{size.name}</p>
                      <p className="text-sm text-white/60">{size.width} × {size.height}px ({size.ratio})</p>
                    </div>
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Download className="w-4 h-4 text-purple-400" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Usage Guidelines */}
        <div className="rounded-2xl bg-white/5 border border-white/10 p-8">
          <h2 className="text-2xl font-bold mb-6">Usage Guidelines</h2>
          <div className="space-y-4 text-white/60">
            <div className="flex gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2" />
              <p><strong className="text-white">Do</strong> use the official logo as provided without modifications</p>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2" />
              <p><strong className="text-white">Do</strong> maintain clear space around the logo (minimum 20% of logo height)</p>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2" />
              <p><strong className="text-white">Do</strong> use the provided color schemes or monochrome versions</p>
            </div>
            <div className="flex gap-3 mt-6">
              <div className="w-2 h-2 rounded-full bg-red-400 mt-2" />
              <p><strong className="text-white">Don't</strong> alter the logo's colors, proportions, or typography</p>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 rounded-full bg-red-400 mt-2" />
              <p><strong className="text-white">Don't</strong> add effects, shadows, or distortions to the logo</p>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 rounded-full bg-red-400 mt-2" />
              <p><strong className="text-white">Don't</strong> use the logo to imply endorsement without permission</p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-12 text-center">
          <p className="text-white/40">
            Questions about brand usage? Contact{' '}
            <a href="mailto:hello@ekkos.dev" className="text-purple-400 hover:text-purple-300 transition-colors">
              hello@ekkos.dev
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
