"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Target, Award, Shield, Eye } from "lucide-react";

const standards = [
    {
        icon: Eye,
        title: "Vision",
        content: "To be Ethiopia's leading partner in trade, wholesale, and manufacturing; powering progress with integrity, excellence, and sustainable solutions.",
        gradient: "from-[#4065a9] to-[#2d4a7c]",
    },
    {
        icon: Target,
        title: "Mission",
        content: "At DAN GTS, our mission is to provide innovative trading solutions that empower businesses and individuals to thrive in the global market. We are dedicated to building long-lasting partnerships with trustworthy suppliers and clients, offering a range of high-quality products, and ensuring seamless import-export processes. Our overarching goal is to create value for all stakeholders, drive economic growth, and contribute significantly to the prosperity of Ethiopia, Djibouti, and the surrounding regions.",
        gradient: "from-[#d4af37] to-[#b8962f]",
    },
];

const values = [
    {
        icon: Shield,
        title: "Quality Assurance",
        description: "At DAN GTS, quality reigns supreme. We are unwavering in our commitment to upholding the highest standards, ensuring that every product we handle meets stringent international regulations. With a dedicated team focused on quality assurance, we conduct rigorous inspections, testing, and certifications to assure the reliability and safety of all our imports and exports. This steadfast dedication to quality not only builds trust with our clients but also ensures that we consistently deliver products that exceed their expectations.",
        highlights: ["Rigorous Inspections", "International Standards", "Certifications", "Reliability & Safety"],
    },
];

export function StandardsSection() {
    return (
        <section className="section-spacing bg-gradient-to-b from-background via-graphite to-charcoal relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
            linear-gradient(to right, #4065a9 1px, transparent 1px),
            linear-gradient(to bottom, #4065a9 1px, transparent 1px)
          `,
                    backgroundSize: '80px 80px',
                }} />
            </div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <div className="inline-flex items-center gap-2 mb-4 text-[#4065a9] font-medium">
                            <div className="w-12 h-px bg-[#4065a9]" />
                            <span className="uppercase tracking-widest text-sm">Our Standards</span>
                            <div className="w-12 h-px bg-[#4065a9]" />
                        </div>
                        <h2 className="mb-6">The Principles We Uphold</h2>
                        <p className="text-lg text-steel-light">
                            Quality is our foundation. At DAN GTS, rigorous standards guide everything from sourcing to delivery.
                            We don&apos;t just meet specifications—we exceed them, ensuring every product delivers verified performance
                            and builds lasting trust.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Vision & Mission */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {standards.map((standard, index) => {
                        const Icon = standard.icon;
                        return (
                            <ScrollReveal key={index} delay={index * 0.1}>
                                <motion.div
                                    whileHover={{ y: -8 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="group relative h-full"
                                >
                                    {/* Glow Effect */}
                                    <div className={`absolute -inset-1 bg-gradient-to-br ${standard.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`} />

                                    {/* Card */}
                                    <div className="relative h-full p-8 bg-graphite border border-asphalt rounded-2xl hover:border-[#4065a9]/50 transition-all duration-300">
                                        {/* Icon */}
                                        <div className={`inline-flex w-16 h-16 rounded-xl bg-gradient-to-br ${standard.gradient} items-center justify-center mb-6`}>
                                            <Icon className="w-8 h-8 text-foreground" />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-3xl mb-4">{standard.title}</h3>

                                        {/* Content */}
                                        <p className="text-steel-light leading-relaxed">
                                            {standard.content}
                                        </p>

                                        {/* Accent Line */}
                                        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${standard.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                    </div>
                                </motion.div>
                            </ScrollReveal>
                        );
                    })}
                </div>

                {/* Quality Assurance - Full Width */}
                {values.map((value, index) => {
                    const Icon = value.icon;
                    return (
                        <ScrollReveal key={index} delay={0.3}>
                            <div className="relative group">
                                {/* Glow Effect */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#4065a9] to-[#d4af37] rounded-2xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500" />

                                {/* Card */}
                                <div className="relative p-10 bg-gradient-to-br from-charcoal to-graphite border border-asphalt rounded-2xl hover:border-[#4065a9]/50 transition-all duration-300">
                                    <div className="grid md:grid-cols-[auto_1fr] gap-8 items-start">
                                        {/* Icon Section */}
                                        <div className="flex flex-col items-center md:items-start">
                                            <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#4065a9] to-[#d4af37] flex items-center justify-center mb-4">
                                                <Icon className="w-10 h-10 text-foreground" />
                                            </div>
                                            <h3 className="text-3xl mb-2">{value.title}</h3>
                                        </div>

                                        {/* Content Section */}
                                        <div>
                                            <p className="text-steel-light leading-relaxed mb-6">
                                                {value.description}
                                            </p>

                                            {/* Highlights */}
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                                {value.highlights.map((highlight, idx) => (
                                                    <div key={idx} className="p-4 bg-background/50 border border-asphalt rounded-lg hover:border-[#4065a9]/50 transition-colors duration-300">
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#4065a9] to-[#d4af37]" />
                                                            <span className="text-sm font-medium text-foreground">{highlight}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    );
                })}

                {/* Bottom Message */}
                <ScrollReveal delay={0.4}>
                    <div className="mt-16 text-center">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-[#4065a9] to-[#2d4a7c] rounded-full"
                        >
                            <Award className="w-6 h-6 text-foreground" />
                            <span className="text-foreground font-medium text-lg">
                                Quality is Our Foundation
                            </span>
                        </motion.div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
