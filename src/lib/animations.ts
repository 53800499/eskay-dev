import { Variants, TargetAndTransition } from 'framer-motion';

export const fadeIn = (direction: 'up' | 'down' | 'left' | 'right' = 'up', delay = 0): Variants => ({
  hidden: {
    y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
    x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
    opacity: 0,
    rotateZ: direction === 'left' ? -10 : direction === 'right' ? 10 : 0,
  },
  show: {
    y: 0,
    x: 0,
    opacity: 1,
    rotateZ: 0,
    transition: {
      type: 'spring',
      duration: 1.2,
      delay,
      bounce: 0.4,
    },
  },
});

export const staggerContainer = (staggerChildren = 0.1): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
    },
  },
});

export const textVariant = (delay = 0): Variants => ({
  hidden: {
    y: 50,
    opacity: 0,
    rotateX: 90,
  },
  show: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      type: 'spring',
      duration: 1.25,
      delay,
      bounce: 0.4,
    },
  },
});

export const slideIn = (direction: 'left' | 'right' | 'up' | 'down', type: string, delay: number, duration: number): Variants => ({
  hidden: {
    x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
    y: direction === 'up' ? '100%' : direction === 'down' ? '-100%' : 0,
    rotateX: 90,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    rotateX: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export const zoomIn = (delay: number, duration: number): Variants => ({
  hidden: {
    scale: 0,
    opacity: 0,
    rotateY: 180,
  },
  show: {
    scale: 1,
    opacity: 1,
    rotateY: 0,
    transition: {
      type: 'spring',
      delay,
      duration,
      bounce: 0.4,
    },
  },
});

export const rotateIn = (delay: number, duration: number): Variants => ({
  hidden: {
    rotateX: -180,
    rotateY: -180,
    opacity: 0,
  },
  show: {
    rotateX: 0,
    rotateY: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      delay,
      duration,
      bounce: 0.4,
    },
  },
});

export const floatIn = (delay: number, duration: number): TargetAndTransition => ({
  y: [0, -20, 0],
  rotateX: [0, 5, 0],
  rotateY: [0, 5, 0],
  transition: {
    duration,
    delay,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: 'easeInOut',
  },
});

export const scaleIn = (delay: number, duration: number): Variants => ({
  hidden: {
    scale: 0.8,
    opacity: 0,
    rotateX: 90,
  },
  show: {
    scale: 1,
    opacity: 1,
    rotateX: 0,
    transition: {
      type: 'spring',
      delay,
      duration,
      bounce: 0.4,
    },
  },
});

export const cardHover: TargetAndTransition = {
  scale: 1.05,
  rotateY: 10,
  rotateX: 5,
  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  transition: {
    duration: 0.3,
    ease: 'easeInOut',
  },
};

export const buttonHover: TargetAndTransition = {
  scale: 1.1,
  rotateZ: 5,
  rotateY: 10,
  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  transition: {
    duration: 0.2,
    ease: 'easeInOut',
  },
};

export const iconHover: TargetAndTransition = {
  scale: 1.2,
  rotate: 360,
  rotateY: 180,
  transition: {
    duration: 0.5,
    ease: 'easeInOut',
  },
};

export const image3D: TargetAndTransition = {
  rotateY: [0, 15, 0],
  rotateX: [0, 5, 0],
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: 'easeInOut',
  },
};

export const waveText = (delay = 0): Variants => ({
  hidden: {
    y: 0,
  },
  show: {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      delay,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut',
    },
  },
});

export const sectionPerspective: Variants = {
  hidden: {
    opacity: 0,
    rotateX: 90,
    y: 100,
  },
  show: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: {
      type: 'spring',
      duration: 1.5,
      bounce: 0.4,
    },
  },
};

export const parallaxEffect: TargetAndTransition = {
  y: [0, -20],
  transition: {
    duration: 2,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: 'easeInOut',
  },
}; 