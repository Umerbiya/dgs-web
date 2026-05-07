"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { ArrowRight, Rocket } from "lucide-react";
import Link from "next/link";

export function CTAStripSection() {
    return (
        <section className="py-20 bg-gradient-to-r from-graphite via-charcoal to-graphite relative overflow-hidden">
            {/* Background Glow Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#4065a9]/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl" />
            </div>

            {/* Top Border Gradient */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4065a9] to-transparent" />

            {/* Bottom Border Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

            <div className="container-custom relative z-10">
                <ScrollReveal>
                    <div className="text-center max-w-4xl mx-auto">
                        {/* Icon */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#4065a9] to-[#d4af37] mb-6"
                        >
                            <Rocket className="w-8 h-8 text-foreground" />
                        </motion.div>

                        {/* Headline */}
                        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
                            <span className="bg-gradient-to-r from-white via-white to-steel-light bg-clip-text text-transparent">
                                Let&apos;s Build the Future
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-[#4065a9] to-[#d4af37] bg-clip-text text-transparent">
                                Together
                            </span>
                        </h2>

                        {/* Subtext */}
                        <p className="text-lg md:text-xl text-steel-light mb-10 max-w-2xl mx-auto">
                            Partner with Ethiopia&apos;s trusted leader in infrastructure, industry, and trade.
                            Together, we power progress.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact">
                                <MagneticButton
                                    className="group relative px-10 py-5 bg-gradient-to-r from-[#4065a9] to-[#2d4a7c] text-foreground rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(64,101,169,0.5)]"
                                >
                                    <span className="relative z-10 flex items-center gap-3">
                                        Start a Partnership
                                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                    </span>
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-[#336aa3] to-[#4065a9]"
                                        initial={{ x: "100%" }}
                                        whileHover={{ x: 0 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </MagneticButton>
                            </Link>

                            <Link href="/portfolio">
                                <MagneticButton
                                    className="group px-10 py-5 bg-transparent border-2 border-asphalt text-foreground rounded-full font-semibold text-lg transition-all duration-300 hover:border-[#d4af37] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
                                >
                                    <span className="flex items-center gap-3">
                                        Explore Services
                                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                    </span>
                                </MagneticButton>
                            </Link>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
