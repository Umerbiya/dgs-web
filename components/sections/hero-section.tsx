"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { staggerContainerVariants, staggerItemVariants } from "@/lib/animations";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-graphite to-charcoal">
            {/* Animated Background Grid */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
            linear-gradient(to right, #374151 1px, transparent 1px),
            linear-gradient(to bottom, #374151 1px, transparent 1px)
          `,
                    backgroundSize: '80px 80px',
                }} />
            </div>

            {/* Full-width Background Image Overlay */}
            <div className="absolute inset-0 opacity-30">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('/images/hero-infrastructure.jpg')`,
                        filter: 'grayscale(50%)',
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
            </div>

            {/* Glowing Orbs */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(64, 101, 169, 0.15) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                }}
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
            />

            {/* Hero Content */}
            <div className="container-custom relative z-10 text-center">
                <motion.div
                    variants={staggerContainerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-5xl mx-auto"
                >
                    {/* Eyebrow Text */}
                    {/* <motion.div
                        variants={staggerItemVariants}
                        className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-asphalt bg-charcoal/50 backdrop-blur-sm"
                    >
                        <div className="w-2 h-2 rounded-full bg-[#4065a9] animate-pulse" />
                        <span className="text-sm font-medium text-steel-light tracking-wide uppercase">
                            Founded 2015 · Privately Owned · Integrity-Driven
                        </span>
                    </motion.div> */}

                    {/* Main Headline */}
                    <motion.h1
                        variants={staggerItemVariants}
                        className="mb-6 mt-20 text-balance"
                    >
                        <span className="block bg-gradient-to-r from-white via-white to-steel-light bg-clip-text text-transparent">
                            Powering Ethiopia&apos;s
                        </span>
                        <span className="block bg-gradient-to-r from-[#4065a9] to-[#d4af37] bg-clip-text text-transparent">
                            Infrastructure, Industry & Trade
                        </span>
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p
                        variants={staggerItemVariants}
                        className="mb-12 text-lg md:text-xl text-steel-light max-w-3xl mx-auto leading-relaxed"
                    >
                        A decade of delivering excellence across wholesale trade, logistics, and infrastructure development.
                        Building Ethiopia&apos;s future with unwavering commitment to quality and national progress.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={staggerItemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link href="/portfolio">
                            <MagneticButton
                                className="group relative px-8 py-4 bg-gradient-to-r from-[#4065a9] to-[#2d4a7c] text-foreground rounded-full font-medium text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(64,101,169,0.4)]"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Explore Our Capabilities
                                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-[#4065a9] to-[#336aa3] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </MagneticButton>
                        </Link>

                        <Link href="/contact">
                            <MagneticButton
                                className="group px-8 py-4 bg-transparent border-2 border-asphalt text-foreground rounded-full font-medium text-lg transition-all duration-300 hover:border-[#d4af37] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                            >
                                <span className="flex items-center gap-2">
                                    Contact DAN GTS
                                    <ArrowRight className="w-5 h-5" />
                                </span>
                            </MagneticButton>
                        </Link>
                    </motion.div>

                    {/* Stats Preview */}
                    <motion.div
                        variants={staggerItemVariants}
                        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
                    >
                        {[
                            { value: "2015", label: "Founded" },
                            { value: "25+", label: "Years of Leadership" },
                            { value: "6", label: "Core Services" },
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="relative group"
                            >
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#4065a9] to-[#d4af37] rounded-lg opacity-0 group-hover:opacity-20 blur transition-opacity duration-500" />
                                <div className="relative p-6 bg-charcoal/50 backdrop-blur-sm border border-asphalt rounded-lg">
                                    <div className="text-4xl font-bold bg-gradient-to-r from-white to-steel-light bg-clip-text text-transparent mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-steel uppercase tracking-wider">
                                        {stat.label}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <a href="#capabilities" className="flex flex-col items-center gap-2 text-steel hover:text-[#4065a9] transition-colors cursor-pointer">
                    <span className="text-xs uppercase tracking-widest">Explore More</span>
                    <div className="w-10 h-10 border-2 border-asphalt rounded-full flex items-center justify-center hover:border-[#4065a9] transition-colors">
                        <ChevronDown className="w-5 h-5" />
                    </div>
                </a>
            </motion.div>
        </section>
    );
}
