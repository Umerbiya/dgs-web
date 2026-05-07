"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import { slideUpVariants } from "@/lib/animations";

interface ScrollRevealProps {
    children: ReactNode;
    delay?: number;
    className?: string;
}

export function ScrollReveal({ children, delay = 0, className = "" }: ScrollRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={slideUpVariants}
            transition={{ delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
