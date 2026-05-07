"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Shield, Quote } from "lucide-react";

export function TrustStatementSection() {
    return (
        <section className="section-spacing bg-gradient-to-b from-charcoal to-graphite relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(45deg, #4065a9 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                }} />
            </div>

            <div className="container-custom relative z-10">
                {/* Trust Statement */}
                <ScrollReveal>
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <div className="inline-flex items-center gap-2 mb-6 text-[#d4af37] font-medium">
                            <Shield className="w-5 h-5" />
                            <span className="uppercase tracking-widest text-sm">Why Choose DAN GTS</span>
                        </div>

                        <div className="relative">
                            <Quote className="absolute -top-4 -left-4 w-12 h-12 text-[#4065a9]/20" />
                            <blockquote className="text-2xl md:text-3xl font-serif text-foreground leading-relaxed mb-8">
                                DAN GTS is a leading force in Ethiopian trade and manufacturing, powering the nation&apos;s
                                infrastructure and industry. We deliver excellence across a diversified portfolio, built
                                on a foundation of <span className="text-[#4065a9]">integrity</span>,
                                <span className="text-[#d4af37]"> ethical practice</span>, and unwavering commitment to our clients.
                            </blockquote>
                        </div>

                        <p className="text-lg text-steel-light">
                            Choose DAN GTS for quality, reliability, and solutions that drive progress.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Partner Logos Section */}
                <ScrollReveal delay={0.2}>
                    <div className="text-center">
                        <h3 className="text-xl mb-8 text-steel">Trusted by Ethiopia&apos;s Leading Organizations</h3>

                        {/* Partner Logos Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
                            {[
                                "Government Partner",
                                "Infrastructure Client",
                                "Industry Partner",
                                "Export Client",
                                "Logistics Partner",
                                "Trade Partner",
                            ].map((partner, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05, borderColor: "rgba(64, 101, 169, 0.5)" }}
                                    className="aspect-[3/2] bg-graphite border border-asphalt rounded-xl flex items-center justify-center p-4 transition-all duration-300"
                                >
                                    <div className="text-center">
                                        <div className="w-12 h-12 mx-auto mb-2 rounded-lg bg-gradient-to-br from-[#4065a9]/20 to-[#d4af37]/20 flex items-center justify-center">
                                            <span className="text-xl font-bold text-[#4065a9]">
                                                {partner.split(' ').map(w => w[0]).join('')}
                                            </span>
                                        </div>
                                        <span className="text-xs text-steel">{partner}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <p className="mt-10 text-steel italic text-sm">
                            Strategic partnerships with government agencies, private enterprises, and international organizations.
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
