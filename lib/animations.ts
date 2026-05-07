import { Variants } from "framer-motion";

// Animation Variants for Framer Motion
export const fadeInVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: [0.33, 1, 0.68, 1],
        },
    },
};

export const slideUpVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.33, 1, 0.68, 1],
        },
    },
};

export const slideInLeftVariants: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.33, 1, 0.68, 1],
        },
    },
};

export const slideInRightVariants: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.33, 1, 0.68, 1],
        },
    },
};

export const scaleInVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [0.33, 1, 0.68, 1],
        },
    },
};

export const staggerContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

export const staggerItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.33, 1, 0.68, 1],
        },
    },
};

// Magnetic Button Effect
export const magneticVariants: Variants = {
    rest: { scale: 1 },
    hover: {
        scale: 1.05,
        transition: {
            duration: 0.3,
            ease: "easeOut",
        },
    },
    tap: {
        scale: 0.95,
    },
};

// GSAP Animation Configs
export const gsapConfig = {
    duration: 1,
    ease: "power3.out",
    stagger: 0.1,
};

export const parallaxConfig = {
    speed: 0.5,
    ease: "linear",
};

// Easing Functions
export const easings = {
    easeOutCubic: [0.33, 1, 0.68, 1],
    easeInOutCubic: [0.65, 0, 0.35, 1],
    easeSpring: [0.34, 1.56, 0.64, 1],
} as const;

// Animation Durations
export const durations = {
    fast: 0.2,
    normal: 0.4,
    slow: 0.6,
    slower: 1,
} as const;
