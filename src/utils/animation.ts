
import { animations } from '@/styles/design-system';

// Helper function to create CSS animation string
export const createAnimation = (
  keyframeName: keyof typeof animations.keyframes,
  duration: keyof typeof animations.durations = 'normal',
  easing: keyof typeof animations.easings = 'easeInOut',
  delay = '0ms',
  iterationCount = '1',
  direction: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse' = 'normal',
  fillMode: 'none' | 'forwards' | 'backwards' | 'both' = 'both'
) => {
  return `${keyframeName} ${animations.durations[duration]} ${animations.easings[easing]} ${delay} ${iterationCount} ${direction} ${fillMode}`;
};

// Generate CSS keyframes string from our design system
export const generateKeyframes = () => {
  let keyframesCSS = '';
  
  Object.entries(animations.keyframes).forEach(([name, keyframes]) => {
    keyframesCSS += `@keyframes ${name} {`;
    
    Object.entries(keyframes).forEach(([key, value]) => {
      keyframesCSS += `${key} {`;
      
      Object.entries(value).forEach(([prop, val]) => {
        keyframesCSS += `${prop}: ${val};`;
      });
      
      keyframesCSS += `}`;
    });
    
    keyframesCSS += `}`;
  });
  
  return keyframesCSS;
};

// Animation presets for common elements
export const animationPresets = {
  fadeIn: createAnimation('fadeIn', 'normal', 'easeOut'),
  fadeInFast: createAnimation('fadeIn', 'fast', 'easeOut'),
  fadeInSlow: createAnimation('fadeIn', 'slow', 'easeOut'),
  
  slideInUp: createAnimation('slideInUp', 'normal', 'easeOut'),
  slideInDown: createAnimation('slideInDown', 'normal', 'easeOut'),
  slideInLeft: createAnimation('slideInLeft', 'normal', 'easeOut'),
  slideInRight: createAnimation('slideInRight', 'normal', 'easeOut'),
  
  pulse: createAnimation('pulse', 'slower', 'easeInOut', '0ms', 'infinite'),
  spin: createAnimation('spin', 'slowest', 'linear', '0ms', 'infinite'),
  bounce: createAnimation('bounce', 'slower', 'bounce', '0ms', 'infinite'),
  
  // Staggered animations for lists
  staggered: (index: number, baseDelay = 50) => ({
    animation: createAnimation('fadeIn', 'normal', 'easeOut', `${index * baseDelay}ms`),
  }),
  
  // Hover animations
  hover: {
    scale: {
      transition: 'transform 0.2s ease',
      transform: 'scale(1)',
      '&:hover': {
        transform: 'scale(1.05)',
      },
    },
    lift: {
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      transform: 'translateY(0)',
      boxShadow: 'none',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
};

// Intersection Observer hook for scroll animations
export const useScrollAnimation = (options = {}) => {
  // Implementation would go here - simplified for this example
  return {
    ref: null,
    inView: false,
  };
};