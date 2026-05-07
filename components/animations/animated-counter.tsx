"use client";

import { useEffect, useRef } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface AnimatedCounterProps {
    end: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
    decimals?: number;
    className?: string;
}

export function AnimatedCounter({
    end,
    duration = 2.5,
    suffix = "",
    prefix = "",
    decimals = 0,
    className = "",
}: AnimatedCounterProps) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <div ref={ref} className={className}>
            {inView && (
                <CountUp
                    end={end}
                    duration={duration}
                    suffix={suffix}
                    prefix={prefix}
                    decimals={decimals}
                    separator=","
                    useEasing
                    easingFn={(t, b, c, d) => {
                        // Custom easing function (easeOutCubic)
                        return c * ((t = t / d - 1) * t * t + 1) + b;
                    }}
                />
            )}
        </div>
    );
}
