"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Shield, Award, Users, CheckCircle2 } from "lucide-react";

export function TrustSection() {
    return (
        <section className="section-spacing bg-gradient-to-b from-charcoal to-background relative overflow-hidden">
            <div className="container-custom relative z-10">
                {/* Section Header */}
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <div className="inline-flex items-center gap-2 mb-4 text-[#d4af37] font-medium">
                            <Shield className="w-5 h-5" />
                            <span className="uppercase tracking-widest text-sm">Trust & Authority</span>
                        </div>
                        <h2 className="mb-6">A Decade of Proven Excellence</h2>
                        <p className="text-lg text-steel-light">
                            Built on integrity, validated by performance, trusted by Ethiopia&apos;s leading enterprises.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Trust Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {[
                        {
                            icon: Shield,
                            title: "Reliability",
                            description: "Consistent delivery, unwavering quality, and dependable partnerships across every sector we serve.",
                            stats: ["10+ Years", "Zero Compromises"],
                        },
                        {
                            icon: Award,
                            title: "Compliance",
                            description: "Full regulatory adherence, transparent operations, and industry-leading standards in all business activities.",
                            stats: ["100% Compliant", "Audited Annually"],
                        },
                        {
                            icon: Users,
                            title: "National Scale",
                            description: "Operations spanning the entire nation, serving major infrastructure and industrial development projects.",
                            stats: ["Nationwide", "Multi-Sector"],
                        },
                    ].map((pillar, index) => {
                        const Icon = pillar.icon;
                        return (
                            <ScrollReveal key={index} delay={index * 0.15}>
                                <div className="group relative h-full">
                                    <div className="absolute -inset-1 bg-gradient-to-b from-[#2d7a3e] to-[#d4af37] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                                    <div className="relative h-full p-8 bg-graphite border border-asphalt rounded-2xl hover:border-[#2d7a3e]/50 transition-all duration-300">
                                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#2d7a3e] to-[#1e5a2c] flex items-center justify-center mb-6">
                                            <Icon className="w-8 h-8 text-foreground" />
                                        </div>
                                        <h3 className="text-2xl mb-4">{pillar.title}</h3>
                                        <p className="text-steel-light leading-relaxed mb-6">
                                            {pillar.description}
                                        </p>
                                        <div className="flex gap-4">
                                            {pillar.stats.map((stat, idx) => (
                                                <div key={idx} className="px-4 py-2 bg-charcoal border border-asphalt rounded-lg text-sm font-medium text-[#2d7a3e]">
                                                    {stat}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>

                {/* Certifications & Standards */}
                <ScrollReveal delay={0.4}>
                    <div className="mb-20 p-12 bg-gradient-to-br from-graphite to-charcoal border border-asphalt rounded-2xl">
                        <div className="text-center mb-12">
                            <h3 className="text-2xl mb-3">Commitment to Excellence</h3>
                            <p className="text-steel-light">
                                Every operation governed by the highest standards of business integrity
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                "Quality Assurance",
                                "Safety Standards",
                                "Environmental Compliance",
                                "Ethical Practices",
                                "Financial Transparency",
                                "Regulatory Adherence",
                                "Industry Leadership",
                                "Stakeholder Trust",
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="flex items-center gap-3 p-4 bg-background/50 border border-asphalt rounded-lg"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-[#2d7a3e] flex-shrink-0" />
                                    <span className="text-sm text-foreground">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>

                {/* Partner Showcase */}
                <ScrollReveal delay={0.5}>
                    <div className="text-center">
                        <h3 className="text-2xl mb-12">Trusted by Ethiopia&apos;s Leaders</h3>

                        {/* Partner Logos Grid - Abstract Placeholders */}
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
                            {[...Array(6)].map((_, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    className="aspect-video bg-graphite border border-asphalt rounded-lg hover:border-[#2d7a3e]/50 transition-colors duration-300 flex items-center justify-center"
                                >
                                    <div className="text-asphalt font-bold text-xs">PARTNER</div>
                                </motion.div>
                            ))}
                        </div>

                        <p className="mt-12 text-steel italic">
                            Strategic partnerships with government agencies, private enterprises, and international organizations.
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
