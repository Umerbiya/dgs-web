"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Search, Eye, TestTube, BadgeCheck, Truck, ArrowRight } from "lucide-react";

const processSteps = [
    {
        icon: Search,
        step: "01",
        title: "Sourcing",
        description: "Strategic selection of verified suppliers and premium materials from trusted global sources.",
        color: "from-[#4065a9] to-[#2d4a7c]",
    },
    {
        icon: Eye,
        step: "02",
        title: "Inspection",
        description: "Comprehensive visual and technical inspection of all incoming materials and products.",
        color: "from-[#336aa3] to-[#4065a9]",
    },
    {
        icon: TestTube,
        step: "03",
        title: "Testing",
        description: "Rigorous laboratory testing against international specification standards.",
        color: "from-[#d4af37] to-[#b8962f]",
    },
    {
        icon: BadgeCheck,
        step: "04",
        title: "Certification",
        description: "Documentation and certification of quality parameters for full traceability.",
        color: "from-[#b8962f] to-[#8a6f23]",
    },
    {
        icon: Truck,
        step: "05",
        title: "Delivery",
        description: "Secure logistics ensuring product integrity from warehouse to final destination.",
        color: "from-[#4065a9] to-[#d4af37]",
    },
];

export function QualityProcessSection() {
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
                            <span className="uppercase tracking-widest text-sm">Our Process</span>
                            <div className="w-12 h-px bg-[#d4af37]" />
                        </div>
                        <h2 className="mb-6">Quality Assurance Process</h2>
                        <p className="text-lg text-steel-light">
                            A systematic, five-step process ensuring excellence at every stage,
                            from initial sourcing to final delivery.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Process Steps - Visual Flow */}
                <div className="relative">
                    {/* Connection Line (Desktop) */}
                    <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#4065a9] via-[#d4af37] to-[#4065a9]" />

                    {/* Steps Grid */}
                    <div className="grid lg:grid-cols-5 gap-6 lg:gap-4">
                        {processSteps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <ScrollReveal key={index} delay={index * 0.1}>
                                    <motion.div
                                        whileHover={{ y: -10 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        className="group relative"
                                    >
                                        {/* Glow Effect */}
                                        <div className={`absolute -inset-2 bg-gradient-to-br ${step.color} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`} />

                                        {/* Card */}
                                        <div className="relative p-6 bg-graphite border border-asphalt rounded-2xl hover:border-[#4065a9]/50 transition-all duration-300 text-center h-full flex flex-col">
                                            {/* Step Number */}
                                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-[#4065a9] to-[#d4af37] rounded-full text-xs font-bold text-foreground">
                                                Step {step.step}
                                            </div>

                                            {/* Icon */}
                                            <div className={`inline-flex w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} items-center justify-center mb-5 mx-auto mt-4`}>
                                                <Icon className="w-8 h-8 text-foreground" />
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-lg font-bold text-foreground mb-3">{step.title}</h3>

                                            {/* Description */}
                                            <p className="text-sm text-steel-light flex-grow">
                                                {step.description}
                                            </p>

                                            {/* Arrow (except last) */}
                                            {index < processSteps.length - 1 && (
                                                <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                                                    <ArrowRight className="w-6 h-6 text-asphalt" />
                                                </div>
                                            )}

                                            {/* Hover Accent */}
                                            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl`} />
                                        </div>
                                    </motion.div>
                                </ScrollReveal>
                            );
                        })}
                    </div>
                </div>

                {/* Process Assurance Statement */}
                <ScrollReveal delay={0.6}>
                    <div className="mt-16 text-center">
                        <div className="inline-flex flex-col md:flex-row items-center gap-4 p-8 bg-graphite border border-asphalt rounded-2xl">
                            <div className="flex items-center gap-3">
                                <BadgeCheck className="w-8 h-8 text-[#4065a9]" />
                                <span className="text-foreground font-medium">100% Quality Verified</span>
                            </div>
                            <div className="hidden md:block w-px h-8 bg-asphalt" />
                            <div className="flex items-center gap-3">
                                <TestTube className="w-8 h-8 text-[#d4af37]" />
                                <span className="text-foreground font-medium">Lab-Tested Products</span>
                            </div>
                            <div className="hidden md:block w-px h-8 bg-asphalt" />
                            <div className="flex items-center gap-3">
                                <Truck className="w-8 h-8 text-[#4065a9]" />
                                <span className="text-foreground font-medium">Secure Delivery</span>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
