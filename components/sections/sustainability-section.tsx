"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Leaf, Zap, TrendingUp, Globe2 } from "lucide-react";

export function SustainabilitySection() {
    return (
        <section className="section-spacing bg-gradient-to-b from-graphite to-charcoal relative overflow-hidden">
            {/* Animated Background Lines */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute h-px bg-gradient-to-r from-transparent via-[#2d7a3e] to-transparent"
                        style={{
                            top: `${20 + i * 15}%`,
                            left: 0,
                            right: 0,
                            opacity: 0.1,
                        }}
                        animate={{
                            x: ['-100%', '100%'],
                        }}
                        transition={{
                            duration: 10 + i * 2,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 0.5,
                        }}
                    />
                ))}
            </div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <div className="inline-flex items-center gap-2 mb-4 text-[#2d7a3e] font-medium">
                            <Leaf className="w-5 h-5" />
                            <span className="uppercase tracking-widest text-sm">Sustainability & Vision</span>
                        </div>
                        <h2 className="mb-6">Building Tomorrow, Today</h2>
                        <p className="text-lg text-steel-light">
                            Leading Ethiopia&apos;s transition to sustainable mobility and green infrastructure for a cleaner, more prosperous future.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Main Feature - Electric Vehicles */}
                <ScrollReveal delay={0.2}>
                    <div className="mb-16 relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-[#2d7a3e] to-[#d4af37] rounded-3xl opacity-20 blur-2xl" />
                        <div className="relative grid md:grid-cols-2 gap-12 items-center p-12 bg-graphite border border-asphalt rounded-3xl">
                            {/* Visual Side */}
                            <div className="relative">
                                <div className="aspect-video rounded-xl bg-gradient-to-br from-charcoal to-graphite border border-asphalt flex items-center justify-center overflow-hidden">
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.1, 1],
                                            rotate: [0, 5, 0],
                                        }}
                                        transition={{
                                            duration: 6,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        <Zap className="w-32 h-32 text-[#2d7a3e]" />
                                    </motion.div>

                                    {/* Glowing Paths */}
                                    {[...Array(3)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#2d7a3e] to-transparent"
                                            style={{ top: `${30 + i * 20}%` }}
                                            animate={{
                                                opacity: [0, 1, 0],
                                                scaleX: [0, 1, 0],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                delay: i * 0.7,
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Content Side */}
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2d7a3e]/20 border border-[#2d7a3e]/50 rounded-full mb-6">
                                    <Zap className="w-4 h-4 text-[#2d7a3e]" />
                                    <span className="text-sm font-medium text-[#2d7a3e]">Electric Mobility Initiative</span>
                                </div>

                                <h3 className="text-3xl mb-4">Pioneering Electric Vehicles in Addis Ababa</h3>

                                <p className="text-steel-light leading-relaxed mb-6">
                                    As one of the first companies to import electric vehicles to Ethiopia&apos;s capital, we&apos;re driving the nation&apos;s green transportation revolution. Our commitment extends beyond vehicles to building the infrastructure for sustainable urban mobility.
                                </p>

                                <div className="space-y-3">
                                    {[
                                        "Zero-emission heavy trucks",
                                        "Electric vehicle charging infrastructure",
                                        "Reduced carbon footprint",
                                        "Future-ready urban transport",
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#2d7a3e] to-[#1e5a2c] flex items-center justify-center">
                                                <div className="w-2 h-2 rounded-full bg-foreground" />
                                            </div>
                                            <span className="text-foreground">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Impact Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            icon: Leaf,
                            title: "Green Infrastructure",
                            description: "Sustainable materials and eco-friendly construction practices",
                        },
                        {
                            icon: Zap,
                            title: "Clean Energy",
                            description: "Electric vehicles reducing urban air pollution",
                        },
                        {
                            icon: TrendingUp,
                            title: "Long-term Impact",
                            description: "Building resilient infrastructure for future generations",
                        },
                        {
                            icon: Globe2,
                            title: "National Scale",
                            description: "Sustainability initiatives across all operations",
                        },
                    ].map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <ScrollReveal key={index} delay={0.3 + index * 0.1}>
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="group p-6 bg-graphite border border-asphalt rounded-xl hover:border-[#2d7a3e]/50 transition-colors duration-300"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#2d7a3e]/20 to-transparent border border-[#2d7a3e]/30 flex items-center justify-center mb-4">
                                        <Icon className="w-6 h-6 text-[#2d7a3e]" />
                                    </div>
                                    <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                                    <p className="text-sm text-steel-light">{item.description}</p>
                                </motion.div>
                            </ScrollReveal>
                        );
                    })}
                </div>

                {/* Vision Statement */}
                <ScrollReveal delay={0.6}>
                    <div className="mt-20 text-center max-w-4xl mx-auto">
                        <div className="relative p-12 bg-gradient-to-br from-graphite to-charcoal border border-asphalt rounded-2xl overflow-hidden">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#2d7a3e] to-transparent" />
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

                            <blockquote className="text-2xl md:text-3xl font-serif leading-relaxed text-balance">
                                <span className="text-[#d4af37]">&ldquo;</span>
                                <span className="bg-gradient-to-r from-white to-steel-light bg-clip-text text-transparent">
                                    We envision an Ethiopia where economic growth and environmental stewardship move in harmony, where every road we build and every vehicle we import contributes to a sustainable, prosperous nation.
                                </span>
                                <span className="text-[#d4af37]">&rdquo;</span>
                            </blockquote>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
