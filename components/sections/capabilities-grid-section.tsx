"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import {
    Construction,
    Factory,
    Truck,
    Cog,
    Zap,
    Settings
} from "lucide-react";

const capabilities = [
    {
        icon: Construction,
        title: "Infrastructure Materials",
        subtitle: "Bitumen & Asphalt",
        description: "Premium petrochemical products powering road construction across Ethiopia and the Horn of Africa.",
        gradient: "from-[#4065a9] to-[#2d4a7c]",
    },
    {
        icon: Factory,
        title: "Industrial Steel Supply",
        subtitle: "Steel Billets",
        description: "3SP medium to low carbon steel meeting exacting standards for steel and rebar manufacturing.",
        gradient: "from-[#d4af37] to-[#b8962f]",
    },
    {
        icon: Truck,
        title: "Nationwide Logistics",
        subtitle: "Road Haulage",
        description: "Comprehensive transportation network ensuring timely delivery to every corner of Ethiopia.",
        gradient: "from-[#4065a9] via-[#336aa3] to-[#2d4a7c]",
    },
    {
        icon: Cog,
        title: "Construction Equipment",
        subtitle: "Rental Services",
        description: "Extensive fleet of heavy plant and machinery keeping construction projects on track.",
        gradient: "from-[#b8962f] to-[#8a6f23]",
    },
    {
        icon: Zap,
        title: "Sustainable Mobility",
        subtitle: "EVs & Trucks",
        description: "Pioneering electric vehicle retail and heavy-duty truck imports for eco-friendly transport.",
        gradient: "from-[#4065a9] to-[#d4af37]",
    },
    {
        icon: Settings,
        title: "Spare Parts Distribution",
        subtitle: "RÖLTEK",
        description: "Leading wholesale distributor of branded and own-brand commercial vehicle spare parts.",
        gradient: "from-[#d4af37] via-[#b8962f] to-[#4065a9]",
    },
];

export function CapabilitiesGridSection() {
    return (
        <section id="capabilities" className="section-spacing bg-gradient-to-b from-charcoal via-graphite to-background relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-40 bg-dot-pattern" />

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 mb-4 text-[#4065a9] font-medium">
                            <div className="w-12 h-px bg-[#4065a9]" />
                            <span className="uppercase tracking-widest text-sm">Core Capabilities</span>
                            <div className="w-12 h-px bg-[#4065a9]" />
                        </div>
                        <h2 className="mb-6">Comprehensive Solutions Across Key Sectors</h2>
                        <p className="text-lg text-steel-light">
                            Your single-source partner for infrastructure, industry, and trade.
                            Six integrated capabilities delivering excellence at scale.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Capabilities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {capabilities.map((capability, index) => {
                        const Icon = capability.icon;
                        return (
                            <ScrollReveal key={index} delay={index * 0.1}>
                                <motion.div
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="group relative h-full cursor-pointer"
                                >
                                    {/* Glow Effect */}
                                    <div className={`absolute -inset-1 bg-gradient-to-br ${capability.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`} />

                                    {/* Card */}
                                    <div className="relative h-full p-8 bg-graphite border border-asphalt rounded-2xl hover:border-[#4065a9]/50 transition-all duration-300 overflow-hidden flex flex-col">
                                        {/* Background Icon */}
                                        <div className="absolute top-4 right-4 opacity-5">
                                            <Icon className="w-24 h-24" />
                                        </div>

                                        {/* Icon */}
                                        <div className={`inline-flex w-14 h-14 rounded-xl bg-gradient-to-br ${capability.gradient} items-center justify-center mb-5`}>
                                            <Icon className="w-7 h-7 text-foreground" />
                                        </div>

                                        {/* Subtitle */}
                                        <div className="text-sm text-[#4065a9] font-medium uppercase tracking-wider mb-2">
                                            {capability.subtitle}
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-foreground mb-3">{capability.title}</h3>

                                        {/* Description */}
                                        <p className="text-steel-light text-sm leading-relaxed flex-grow">
                                            {capability.description}
                                        </p>

                                        {/* Hover Accent Line */}
                                        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${capability.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
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
