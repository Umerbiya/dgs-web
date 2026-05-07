"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Globe, Shield, CheckCircle2, Award } from "lucide-react";

const complianceItems = [
    "International Trade Standards",
    "Quality Management Systems",
    "Product Safety Regulations",
    "Environmental Compliance",
    "Ethical Sourcing Practices",
    "Documentation Standards",
    "Transportation Regulations",
    "Import/Export Compliance",
];

export function ComplianceSection() {
    return (
        <section className="section-spacing bg-gradient-to-b from-graphite to-background relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
            linear-gradient(to right, #4065a9 1px, transparent 1px),
            linear-gradient(to bottom, #4065a9 1px, transparent 1px)
          `,
                    backgroundSize: '60px 60px',
                }} />
            </div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 mb-4 text-[#4065a9] font-medium">
                            <div className="w-12 h-px bg-[#4065a9]" />
                            <span className="uppercase tracking-widest text-sm">Compliance</span>
                            <div className="w-12 h-px bg-[#4065a9]" />
                        </div>
                        <h2 className="mb-6">International Standards</h2>
                        <p className="text-lg text-steel-light">
                            Full regulatory adherence ensuring safety, reliability, and trust
                            across all our operations and product lines.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Statement */}
                    <ScrollReveal>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-br from-[#4065a9] to-[#d4af37] rounded-3xl opacity-10 blur-2xl" />

                            <div className="relative p-10 bg-graphite border border-asphalt rounded-2xl">
                                <div className="flex items-start gap-6">
                                    <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-[#4065a9] to-[#d4af37] flex items-center justify-center">
                                        <Globe className="w-8 h-8 text-foreground" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-foreground mb-4">Global Compliance</h3>
                                        <p className="text-steel-light leading-relaxed mb-6">
                                            At DAN GTS, quality reigns supreme. We are unwavering in our commitment
                                            to upholding the highest standards, ensuring that every product we handle
                                            meets stringent international regulations.
                                        </p>
                                        <p className="text-steel-light leading-relaxed">
                                            With a dedicated team focused on quality assurance, we conduct rigorous
                                            inspections, testing, and certifications to assure the reliability and
                                            safety of all our imports and exports.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Right - Compliance List */}
                    <ScrollReveal delay={0.2}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {complianceItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-3 p-4 bg-graphite border border-asphalt rounded-lg hover:border-[#4065a9]/50 transition-all duration-300"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-[#4065a9] flex-shrink-0" />
                                    <span className="text-sm text-foreground">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>

                {/* Trust Reinforcement */}
                <ScrollReveal delay={0.4}>
                    <div className="mt-20 relative">
                        <div className="absolute -inset-2 bg-gradient-to-r from-[#4065a9] to-[#d4af37] rounded-3xl opacity-10 blur-xl" />

                        <div className="relative p-10 bg-gradient-to-br from-graphite to-charcoal border border-asphalt rounded-2xl">
                            <div className="text-center mb-10">
                                <h3 className="text-2xl mb-3">Why Quality Matters</h3>
                                <p className="text-steel-light max-w-2xl mx-auto">
                                    In infrastructure and industry, quality isn&apos;t optional—it&apos;s essential.
                                    Our commitment protects your investments and ensures operational success.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8 text-center">
                                {[
                                    {
                                        icon: Shield,
                                        title: "Risk Reduction",
                                        description: "Minimize operational risks with verified, compliant products",
                                    },
                                    {
                                        icon: Award,
                                        title: "Partner Confidence",
                                        description: "Build trust with stakeholders through consistent quality",
                                    },
                                    {
                                        icon: Globe,
                                        title: "Market Access",
                                        description: "Meet international requirements for global trade",
                                    },
                                ].map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <motion.div
                                            key={index}
                                            whileHover={{ y: -5 }}
                                            className="group"
                                        >
                                            <div className="inline-flex w-14 h-14 rounded-xl bg-gradient-to-br from-[#4065a9] to-[#d4af37] items-center justify-center mb-4">
                                                <Icon className="w-7 h-7 text-foreground" />
                                            </div>
                                            <h4 className="text-lg font-bold text-foreground mb-2">{item.title}</h4>
                                            <p className="text-sm text-steel-light">{item.description}</p>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
