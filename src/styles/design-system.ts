
// Design system for BalkaniGo
// This file contains design tokens and theme configuration

export const colors = {
  // Primary colors
  primary: {
    50: '#e6f1ff',
    100: '#cce3ff',
    200: '#99c7ff',
    300: '#66abff',
    400: '#338fff',
    500: '#0073ff', // Primary brand color
    600: '#005cd9',
    700: '#0044b3',
    800: '#002d8c',
    900: '#001766',
  },
  
  // Secondary colors - inspired by Balkan cultural elements
  secondary: {
    50: '#fff0e6',
    100: '#ffe1cc',
    200: '#ffc399',
    300: '#ffa566',
    400: '#ff8733',
    500: '#ff6900', // Secondary brand color
    600: '#d95700',
    700: '#b34600',
    800: '#8c3500',
    900: '#662400',
  },
  
  // Accent colors representing different Balkan countries
  accent: {
    serbia: '#c6363c', // Serbian red
    croatia: '#0c4076', // Croatian blue
    greece: '#0d5eaf', // Greek blue
    bulgaria: '#00966e', // Bulgarian green
    romania: '#fcd116', // Romanian yellow
    slovenia: '#005da4', // Slovenian blue
    montenegro: '#c40308', // Montenegrin red
    albania: '#e41e20', // Albanian red
    northMacedonia: '#d20000', // North Macedonian red
    bosnia: '#002395', // Bosnian blue
    kosovo: '#244aa5', // Kosovo blue
  },
  
  // Neutral colors for text, backgrounds, etc.
  neutral: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
  
  // Success, warning, error, info colors
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',
};

export const typography = {
  fontFamily: {
    sans: 'Inter, system-ui, -apple-system, sans-serif',
    serif: 'Georgia, Cambria, "Times New Roman", Times, serif',
    mono: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    display: '"Playfair Display", Georgia, serif', // For headings with cultural flair
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
};

export const spacing = {
  px: '1px',
  0: '0',
  0.5: '0.125rem',
  1: '0.25rem',
  1.5: '0.375rem',
  2: '0.5rem',
  2.5: '0.625rem',
  3: '0.75rem',
  3.5: '0.875rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  11: '2.75rem',
  12: '3rem',
  14: '3.5rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
  44: '11rem',
  48: '12rem',
  52: '13rem',
  56: '14rem',
  60: '15rem',
  64: '16rem',
  72: '18rem',
  80: '20rem',
  96: '24rem',
};

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  none: 'none',
  // Colored shadows for emphasis
  primary: '0 10px 15px -3px rgba(0, 115, 255, 0.2), 0 4px 6px -2px rgba(0, 115, 255, 0.1)',
  secondary: '0 10px 15px -3px rgba(255, 105, 0, 0.2), 0 4px 6px -2px rgba(255, 105, 0, 0.1)',
};

export const borderRadius = {
  none: '0',
  sm: '0.125rem',
  DEFAULT: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  full: '9999px',
};

export const animations = {
  durations: {
    fastest: '100ms',
    faster: '150ms',
    fast: '200ms',
    normal: '300ms',
    slow: '400ms',
    slower: '500ms',
    slowest: '700ms',
  },
  easings: {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    bounce: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  },
  keyframes: {
    fadeIn: {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
    fadeOut: {
      from: { opacity: 1 },
      to: { opacity: 0 },
    },
    slideInUp: {
      from: { transform: 'translateY(20px)', opacity: 0 },
      to: { transform: 'translateY(0)', opacity: 1 },
    },
    slideInDown: {
      from: { transform: 'translateY(-20px)', opacity: 0 },
      to: { transform: 'translateY(0)', opacity: 1 },
    },
    slideInLeft: {
      from: { transform: 'translateX(-20px)', opacity: 0 },
      to: { transform: 'translateX(0)', opacity: 1 },
    },
    slideInRight: {
      from: { transform: 'translateX(20px)', opacity: 0 },
      to: { transform: 'translateX(0)', opacity: 1 },
    },
    pulse: {
      '0%, 100%': { opacity: 1 },
      '50%': { opacity: 0.5 },
    },
    spin: {
      from: { transform: 'rotate(0deg)' },
      to: { transform: 'rotate(360deg)' },
    },
    ping: {
      '75%, 100%': { transform: 'scale(2)', opacity: 0 },
    },
    bounce: {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-25%)' },
    },
  },
};

// Theme configuration
export const themeConfig = {
  light: {
    background: colors.neutral[50],
    foreground: colors.neutral[900],
    card: '#ffffff',
    cardForeground: colors.neutral[900],
    popover: '#ffffff',
    popoverForeground: colors.neutral[900],
    primary: colors.primary[500],
    primaryForeground: '#ffffff',
    secondary: colors.secondary[500],
    secondaryForeground: '#ffffff',
    muted: colors.neutral[100],
    mutedForeground: colors.neutral[500],
    accent: colors.neutral[100],
    accentForeground: colors.neutral[900],
    destructive: colors.error,
    destructiveForeground: '#ffffff',
    border: colors.neutral[200],
    input: colors.neutral[200],
    ring: colors.primary[500],
  },
  dark: {
    background: colors.neutral[900],
    foreground: colors.neutral[50],
    card: colors.neutral[800],
    cardForeground: colors.neutral[50],
    popover: colors.neutral[800],
    popoverForeground: colors.neutral[50],
    primary: colors.primary[400],
    primaryForeground: colors.neutral[900],
    secondary: colors.secondary[400],
    secondaryForeground: colors.neutral[900],
    muted: colors.neutral[800],
    mutedForeground: colors.neutral[400],
    accent: colors.neutral[800],
    accentForeground: colors.neutral[50],
    destructive: colors.error,
    destructiveForeground: colors.neutral[50],
    border: colors.neutral[700],
    input: colors.neutral[700],
    ring: colors.primary[400],
  },
};

// Breakpoints for responsive design
export const breakpoints = {
  xs: '480px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// Z-index scale
export const zIndices = {
  0: '0',
  10: '10',
  20: '20',
  30: '30',
  40: '40',
  50: '50',
  auto: 'auto',
  dropdown: '1000',
  sticky: '1100',
  banner: '1200',
  overlay: '1300',
  modal: '1400',
  popover: '1500',
  skipLink: '1600',
  toast: '1700',
  tooltip: '1800',
};