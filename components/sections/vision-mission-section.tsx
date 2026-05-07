"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Eye, Target, Quote } from "lucide-react";

export function VisionMissionSection() {
    return (
        <section className="section-spacing bg-gradient-to-b from-background to-charcoal relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(45deg, #4065a9 1px, transparent 1px)`,
                    backgroundSize: '80px 80px',
                }} />
            </div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <div className="inline-flex items-center gap-2 mb-4 text-[#4065a9] font-medium">
                            <div className="w-12 h-px bg-[#4065a9]" />
                            <span className="uppercase tracking-widest text-sm">Strategic Direction</span>
                            <div className="w-12 h-px bg-[#4065a9]" />
                        </div>
                        <h1 className="mb-6">Vision & Mission</h1>
                        <p className="text-lg text-steel-light">
                            Our guiding principles shape every decision, partnership, and innovation
                            as we work toward Ethiopia&apos;s brighter future.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Vision & Mission Cards */}
                <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
                    {/* Vision Card */}
                    <ScrollReveal>
                        <motion.div
                            whileHover={{ y: -10 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="group relative h-full"
                        >
                            <div className="absolute -inset-2 bg-gradient-to-br from-[#4065a9] to-[#2d4a7c] rounded-3xl opacity-20 group-hover:opacity-40 blur-xl transition-opacity duration-500" />

                            <div className="relative h-full p-10 bg-graphite border-2 border-[#4065a9]/30 rounded-3xl hover:border-[#4065a9] transition-all duration-300">
                                {/* Icon */}
                                <div className="inline-flex w-20 h-20 rounded-2xl bg-gradient-to-br from-[#4065a9] to-[#2d4a7c] items-center justify-center mb-8">
                                    <Eye className="w-10 h-10 text-foreground" />
                                </div>

                                {/* Title */}
                                <h2 className="text-4xl font-bold text-foreground mb-6">Vision</h2>

                                {/* Quote */}
                                <div className="relative">
                                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-[#4065a9]/30" />
                                    <blockquote className="text-xl md:text-2xl text-steel-light leading-relaxed italic pl-6">
                                        To be <span className="text-foreground font-medium">Ethiopia&apos;s leading partner</span> in trade,
                                        wholesale, and manufacturing; powering progress with
                                        <span className="text-[#4065a9]"> integrity</span>,
                                        <span className="text-[#d4af37]"> excellence</span>, and
                                        <span className="text-[#4065a9]"> sustainable solutions</span>.
                                    </blockquote>
                                </div>

                                {/* Decorative Line */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4065a9] to-[#2d4a7c] rounded-b-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </motion.div>
                    </ScrollReveal>

                    {/* Mission Card */}
                    <ScrollReveal delay={0.2}>
                        <motion.div
                            whileHover={{ y: -10 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="group relative h-full"
                        >
                            <div className="absolute -inset-2 bg-gradient-to-br from-[#d4af37] to-[#b8962f] rounded-3xl opacity-20 group-hover:opacity-40 blur-xl transition-opacity duration-500" />

                            <div className="relative h-full p-10 bg-graphite border-2 border-[#d4af37]/30 rounded-3xl hover:border-[#d4af37] transition-all duration-300">
                                {/* Icon */}
                                <div className="inline-flex w-20 h-20 rounded-2xl bg-gradient-to-br from-[#d4af37] to-[#b8962f] items-center justify-center mb-8">
                                    <Target className="w-10 h-10 text-foreground" />
                                </div>

                                {/* Title */}
                                <h2 className="text-4xl font-bold text-foreground mb-6">Mission</h2>

                                {/* Content */}
                                <div className="space-y-4 text-steel-light">
                                    <p className="text-lg leading-relaxed">
                                        At DAN GTS, our mission is to provide <span className="text-foreground">innovative trading solutions</span> that
                                        empower businesses and individuals to thrive in the global market.
                                    </p>
                                    <p className="text-lg leading-relaxed">
                                        We are dedicated to building <span className="text-[#d4af37]">long-lasting partnerships</span> with
                                        trustworthy suppliers and clients, offering a range of high-quality products, and ensuring seamless
                                        import-export processes.
                                    </p>
                                    <p className="text-lg leading-relaxed">
                                        Our goal is to create value for all stakeholders,
                                        <span className="text-foreground"> drive economic growth</span>, and contribute to the prosperity of
                                        Ethiopia, Djibouti, and the surrounding regions.
                                    </p>
                                </div>

                                {/* Decorative Line */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d4af37] to-[#b8962f] rounded-b-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </motion.div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
