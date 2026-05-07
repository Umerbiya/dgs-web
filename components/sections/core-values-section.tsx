"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Shield, Award, Clock, Leaf, Handshake } from "lucide-react";

const coreValues = [
    {
        icon: Shield,
        title: "Integrity",
        description: "Honesty and transparency in every transaction. We build trust through ethical practices and unwavering commitment to our word.",
        gradient: "from-[#4065a9] to-[#2d4a7c]",
    },
    {
        icon: Award,
        title: "Quality",
        description: "Excellence in every product and service. We maintain rigorous standards that exceed international specifications.",
        gradient: "from-[#d4af37] to-[#b8962f]",
    },
    {
        icon: Clock,
        title: "Reliability",
        description: "Consistent delivery and dependable partnerships. Our clients trust us because we always deliver on our promises.",
        gradient: "from-[#4065a9] to-[#d4af37]",
    },
    {
        icon: Leaf,
        title: "Sustainability",
        description: "Future-focused solutions for lasting impact. We invest in sustainable practices and eco-friendly innovations.",
        gradient: "from-[#2d7a3e] to-[#1e5a2c]",
    },
    {
        icon: Handshake,
        title: "Partnership",
        description: "Collaborative success built on mutual benefit. We view every relationship as a long-term partnership, not just a transaction.",
        gradient: "from-[#b8962f] to-[#4065a9]",
    },
];

export function CoreValuesSection() {
    return (
        <section className="section-spacing bg-gradient-to-b from-charcoal to-graphite relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-40 bg-dot-pattern" />

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 mb-4 text-[#d4af37] font-medium">
                            <div className="w-12 h-px bg-[#d4af37]" />
                            <span className="uppercase tracking-widest text-sm">Our Foundation</span>
                            <div className="w-12 h-px bg-[#d4af37]" />
                        </div>
                        <h2 className="mb-6">Core Values</h2>
                        <p className="text-lg text-steel-light">
                            The principles that guide our decisions, shape our culture,
                            and define how we serve our partners and nation.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Values Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {coreValues.map((value, index) => {
                        const Icon = value.icon;
                        const isLarge = index < 2; // First two are larger

                        return (
                            <ScrollReveal
                                key={index}
                                delay={index * 0.1}
                                className={isLarge && index === 0 ? "lg:col-span-1" : ""}
                            >
                                <motion.div
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="group relative h-full"
                                >
                                    {/* Glow Effect */}
                                    <div className={`absolute -inset-1 bg-gradient-to-br ${value.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`} />

                                    {/* Card */}
                                    <div className="relative h-full p-8 bg-graphite border border-asphalt rounded-2xl hover:border-[#4065a9]/50 transition-all duration-300 flex flex-col">
                                        {/* Background Icon */}
                                        <div className="absolute top-4 right-4 opacity-5">
                                            <Icon className="w-32 h-32" />
                                        </div>

                                        {/* Icon */}
                                        <div className={`inline-flex w-16 h-16 rounded-xl bg-gradient-to-br ${value.gradient} items-center justify-center mb-6`}>
                                            <Icon className="w-8 h-8 text-foreground" />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-2xl font-bold text-foreground mb-4">{value.title}</h3>

                                        {/* Description */}
                                        <p className="text-steel-light leading-relaxed flex-grow">
                                            {value.description}
                                        </p>

                                        {/* Hover Accent */}
                                        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl`} />
                                    </div>
                                </motion.div>
                            </ScrollReveal>
                        );
                    })}
                </div>

                {/* Bottom Statement */}
                <ScrollReveal delay={0.6}>
                    <div className="mt-16 text-center">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-[#4065a9] to-[#d4af37] rounded-full"
                        >
                            <Shield className="w-6 h-6 text-foreground" />
                            <span className="text-foreground font-semibold text-lg">
                                Guided by integrity, driven by excellence
                            </span>
                        </motion.div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
