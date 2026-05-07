"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Shield, Award, CheckCircle2 } from "lucide-react";

export function QualityPhilosophySection() {
    return (
        <section className="section-spacing bg-gradient-to-b from-background to-charcoal relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
            linear-gradient(to right, #374151 1px, transparent 1px),
            linear-gradient(to bottom, #374151 1px, transparent 1px)
          `,
                    backgroundSize: '80px 80px',
                }} />
            </div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 mb-4 text-[#4065a9] font-medium">
                            <div className="w-12 h-px bg-[#4065a9]" />
                            <span className="uppercase tracking-widest text-sm">Quality Assurance</span>
                            <div className="w-12 h-px bg-[#4065a9]" />
                        </div>
                        <h1 className="mb-6">Quality & Standards</h1>
                        <p className="text-lg text-steel-light">
                            Risk reduction for partners and institutions. Our commitment to quality
                            ensures reliability, safety, and performance in every product we deliver.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Quality Philosophy Hero */}
                <ScrollReveal delay={0.2}>
                    <div className="relative max-w-4xl mx-auto mb-20">
                        <div className="absolute -inset-4 bg-gradient-to-br from-[#4065a9] to-[#d4af37] rounded-3xl opacity-20 blur-2xl" />

                        <div className="relative p-12 bg-graphite border-2 border-[#4065a9]/30 rounded-3xl text-center">
                            {/* Icon */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                className="inline-flex w-24 h-24 rounded-2xl bg-gradient-to-br from-[#4065a9] to-[#d4af37] items-center justify-center mb-8"
                            >
                                <Shield className="w-12 h-12 text-foreground" />
                            </motion.div>

                            {/* Main Statement */}
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-white via-white to-steel-light bg-clip-text text-transparent">
                                    Quality is Our
                                </span>
                                <br />
                                <span className="bg-gradient-to-r from-[#4065a9] to-[#d4af37] bg-clip-text text-transparent">
                                    Foundation
                                </span>
                            </h2>

                            <p className="text-xl text-steel-light max-w-2xl mx-auto leading-relaxed">
                                At DAN GTS, rigorous standards guide everything from sourcing to delivery.
                                We don&apos;t just meet specifications—we exceed them, ensuring every product
                                delivers verified performance and builds lasting trust.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Quality Pillars */}
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: Shield,
                            title: "Rigorous Standards",
                            description: "Every product undergoes comprehensive quality checks against international benchmarks.",
                            color: "from-[#4065a9] to-[#2d4a7c]",
                        },
                        {
                            icon: Award,
                            title: "Verified Performance",
                            description: "Independent testing and certification ensure our products meet or exceed specifications.",
                            color: "from-[#d4af37] to-[#b8962f]",
                        },
                        {
                            icon: CheckCircle2,
                            title: "Lasting Trust",
                            description: "Consistent quality builds the trust that underpins our long-term partnerships.",
                            color: "from-[#4065a9] to-[#d4af37]",
                        },
                    ].map((pillar, index) => {
                        const Icon = pillar.icon;
                        return (
                            <ScrollReveal key={index} delay={index * 0.15}>
                                <motion.div
                                    whileHover={{ y: -8 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="group relative h-full"
                                >
                                    <div className={`absolute -inset-1 bg-gradient-to-br ${pillar.color} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`} />

                                    <div className="relative h-full p-8 bg-graphite border border-asphalt rounded-2xl hover:border-[#4065a9]/50 transition-all duration-300 flex flex-col items-center text-center">
                                        <div className={`inline-flex w-16 h-16 rounded-xl bg-gradient-to-br ${pillar.color} items-center justify-center mb-6`}>
                                            <Icon className="w-8 h-8 text-foreground" />
                                        </div>
                                        <h3 className="text-xl font-bold text-foreground mb-4">{pillar.title}</h3>
                                        <p className="text-steel-light">{pillar.description}</p>

                                        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${pillar.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl`} />
                                    </div>
                                </motion.div>
                            </ScrollReveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
