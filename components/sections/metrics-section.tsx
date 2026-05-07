"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { AnimatedCounter } from "@/components/animations/animated-counter";
import { TrendingUp, DollarSign, Globe, Users } from "lucide-react";

const metrics = [
    {
        value: 25,
        suffix: "+",
        label: "Years Leadership",
        sublabel: "Executive Experience",
        icon: Users,
        color: "from-[#4065a9] to-[#2d4a7c]",
    },
    {
        value: 20,
        suffix: "M+",
        label: "Initial Investment",
        sublabel: "Million Birr Capital",
        icon: DollarSign,
        color: "from-[#d4af37] to-[#b8962f]",
    },
    {
        value: 10,
        suffix: "+",
        label: "Export Operations",
        sublabel: "Years of Foreign Currency",
        icon: TrendingUp,
        color: "from-[#4065a9] to-[#d4af37]",
    },
    {
        value: 2,
        suffix: "",
        label: "Regions Served",
        sublabel: "Ethiopia & Horn of Africa",
        icon: Globe,
        color: "from-[#b8962f] to-[#4065a9]",
    },
];

export function MetricsSection() {
    return (
        <section className="section-spacing bg-gradient-to-b from-background to-charcoal relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-40 bg-dot-pattern" />

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <div className="inline-flex items-center gap-2 mb-4 text-[#d4af37] font-medium">
                            <div className="w-12 h-px bg-[#d4af37]" />
                            <span className="uppercase tracking-widest text-sm">Impact & Growth</span>
                            <div className="w-12 h-px bg-[#d4af37]" />
                        </div>
                        <h2 className="mb-6">Driving National Progress</h2>
                        <p className="text-lg text-steel-light">
                            A decade of measurable impact on Ethiopia&apos;s economy through strategic investments,
                            consistent growth, and unwavering commitment to excellence.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {metrics.map((metric, index) => {
                        const Icon = metric.icon;
                        return (
                            <ScrollReveal key={index} delay={index * 0.1}>
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="relative group"
                                >
                                    {/* Glow Effect */}
                                    <div className={`absolute -inset-1 bg-gradient-to-r ${metric.color} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`} />

                                    {/* Card */}
                                    <div className="relative p-8 bg-graphite border border-asphalt rounded-2xl hover:border-[#4065a9]/50 transition-all duration-300 overflow-hidden">
                                        {/* Background Icon */}
                                        <div className="absolute top-4 right-4 opacity-10">
                                            <Icon className="w-20 h-20" />
                                        </div>

                                        {/* Content */}
                                        <div className="relative z-10">
                                            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${metric.color} mb-4`}>
                                                <Icon className="w-6 h-6 text-foreground" />
                                            </div>

                                            <div className="text-5xl font-bold bg-gradient-to-r from-white to-steel-light bg-clip-text text-transparent mb-2">
                                                <AnimatedCounter
                                                    end={metric.value}
                                                    suffix={metric.suffix}
                                                    className="inline-block"
                                                />
                                            </div>

                                            <div className="text-foreground font-medium mb-1">
                                                {metric.label}
                                            </div>

                                            <div className="text-sm text-steel">
                                                {metric.sublabel}
                                            </div>
                                        </div>

                                        {/* Bottom Accent */}
                                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#4065a9] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>
                                </motion.div>
                            </ScrollReveal>
                        );
                    })}
                </div>

                {/* Growth Visualization */}
                <ScrollReveal delay={0.4}>
                    <div className="mt-16 p-8 md:p-12 bg-graphite border border-asphalt rounded-2xl">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl mb-3">A Trajectory of Excellence</h3>
                            <p className="text-steel-light">
                                From foundation to national partnership, our growth reflects Ethiopia&apos;s economic momentum
                            </p>
                        </div>

                        {/* Simple Growth Bars */}
                        <div className="space-y-6 max-w-4xl mx-auto">
                            {[
                                { year: "2015", growth: 20, label: "Foundation Year" },
                                { year: "2017", growth: 45, label: "Expansion Phase" },
                                { year: "2019", growth: 70, label: "Market Leadership" },
                                { year: "2022", growth: 85, label: "National Impact" },
                                { year: "2026", growth: 100, label: "Innovation Era" },
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <div className="w-16 text-[#d4af37] font-bold">{item.year}</div>
                                    <div className="flex-1">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${item.growth}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                                            className="h-8 bg-gradient-to-r from-[#4065a9] to-[#d4af37] rounded-full relative overflow-hidden"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" style={{
                                                backgroundSize: '200% 100%',
                                                animation: 'shimmer 2s infinite',
                                            }} />
                                        </motion.div>
                                    </div>
                                    <div className="w-40 text-sm text-steel-light text-right">{item.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
        </section>
    );
}
