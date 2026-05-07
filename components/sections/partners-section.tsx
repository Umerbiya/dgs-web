"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Building2, Globe, Handshake, Award, Users, Landmark } from "lucide-react";

const partnerCategories = [
    {
        title: "Strategic Partners",
        icon: Handshake,
        description: "Long-term alliances with key suppliers and distributors ensuring reliable supply chains.",
        partners: [
            { name: "International Supplier", type: "Bitumen & Petrochemical", region: "Global" },
            { name: "Steel Manufacturer", type: "Industrial Steel", region: "International" },
            { name: "Logistics Partner", type: "Transportation", region: "Regional" },
        ],
        color: "from-[#4065a9] to-[#2d4a7c]",
    },
    {
        title: "Government & Infrastructure",
        icon: Landmark,
        description: "Supporting Ethiopia's national development through public-private collaboration.",
        partners: [
            { name: "Road Authority", type: "Infrastructure", region: "Ethiopia" },
            { name: "Construction Ministry", type: "Development", region: "Ethiopia" },
            { name: "Trade Ministry", type: "Regulatory", region: "Ethiopia" },
        ],
        color: "from-[#d4af37] to-[#b8962f]",
    },
    {
        title: "Regional Trade",
        icon: Globe,
        description: "Expanding reach across the Horn of Africa and beyond.",
        partners: [
            { name: "Djibouti Port", type: "Logistics Hub", region: "Djibouti" },
            { name: "Regional Trader", type: "Distribution", region: "Horn of Africa" },
            { name: "Export Partner", type: "Commodities", region: "International" },
        ],
        color: "from-[#4065a9] to-[#d4af37]",
    },
];

export function PartnersSection() {
    return (
        <section className="section-spacing bg-gradient-to-b from-background to-charcoal relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-40 bg-dot-pattern" />

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 mb-4 text-[#4065a9] font-medium">
                            <div className="w-12 h-px bg-[#4065a9]" />
                            <span className="uppercase tracking-widest text-sm">Our Network</span>
                            <div className="w-12 h-px bg-[#4065a9]" />
                        </div>
                        <h1 className="mb-6">Partners & Collaborations</h1>
                        <p className="text-lg text-steel-light">
                            Building success through strategic alliances. Our network of trusted partners
                            enables us to deliver excellence at scale across Ethiopia and beyond.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Partner Categories */}
                <div className="space-y-12 mb-20">
                    {partnerCategories.map((category, categoryIndex) => {
                        const Icon = category.icon;
                        return (
                            <ScrollReveal key={categoryIndex} delay={categoryIndex * 0.15}>
                                <div className="relative">
                                    <div className={`absolute -inset-2 bg-gradient-to-br ${category.color} rounded-3xl opacity-10 blur-xl`} />

                                    <div className="relative p-8 bg-graphite border border-asphalt rounded-2xl">
                                        {/* Category Header */}
                                        <div className="flex items-start gap-6 mb-8">
                                            <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                                                <Icon className="w-8 h-8 text-foreground" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-foreground mb-2">{category.title}</h3>
                                                <p className="text-steel-light">{category.description}</p>
                                            </div>
                                        </div>

                                        {/* Partners Grid */}
                                        <div className="grid md:grid-cols-3 gap-6">
                                            {category.partners.map((partner, partnerIndex) => (
                                                <motion.div
                                                    key={partnerIndex}
                                                    whileHover={{ y: -5, scale: 1.02 }}
                                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                                    className="group p-6 bg-charcoal border border-asphalt rounded-xl hover:border-[#4065a9]/50 transition-all duration-300"
                                                >
                                                    {/* Partner Logo Placeholder */}
                                                    <div className={`w-full aspect-[3/2] rounded-lg bg-gradient-to-br ${category.color} opacity-20 flex items-center justify-center mb-4`}>
                                                        <Building2 className="w-12 h-12 text-foreground/50" />
                                                    </div>

                                                    <h4 className="text-foreground font-medium mb-1">{partner.name}</h4>
                                                    <div className="text-sm text-steel-light mb-2">{partner.type}</div>
                                                    <div className="inline-flex items-center gap-1 text-xs text-steel">
                                                        <Globe className="w-3 h-3" />
                                                        {partner.region}
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>

                {/* Collaboration Philosophy */}
                <ScrollReveal delay={0.5}>
                    <div className="relative max-w-4xl mx-auto">
                        <div className="absolute -inset-4 bg-gradient-to-br from-[#4065a9] to-[#d4af37] rounded-3xl opacity-20 blur-2xl" />

                        <div className="relative p-10 bg-graphite border-2 border-[#4065a9]/30 rounded-3xl text-center">
                            <div className="inline-flex w-20 h-20 rounded-2xl bg-gradient-to-br from-[#4065a9] to-[#d4af37] items-center justify-center mb-8">
                                <Handshake className="w-10 h-10 text-foreground" />
                            </div>

                            <h3 className="text-3xl font-bold text-foreground mb-6">Collaboration Philosophy</h3>

                            <p className="text-xl text-steel-light max-w-2xl mx-auto leading-relaxed mb-8">
                                We believe in partnerships built on mutual respect, shared goals, and long-term value creation.
                                Every collaboration is an opportunity to strengthen Ethiopia&apos;s economic foundation together.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4">
                                {["Mutual Trust", "Shared Success", "Long-term Vision", "Transparency"].map((value, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-charcoal border border-asphalt rounded-full text-sm text-steel-light"
                                    >
                                        {value}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Partner Stats */}
                <ScrollReveal delay={0.6}>
                    <div className="mt-16 grid md:grid-cols-4 gap-6">
                        {[
                            { icon: Handshake, value: "10+", label: "Strategic Partners" },
                            { icon: Landmark, value: "5+", label: "Government Projects" },
                            { icon: Globe, value: "3", label: "Countries Served" },
                            { icon: Award, value: "100%", label: "Partner Retention" },
                        ].map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -5 }}
                                    className="p-6 bg-graphite border border-asphalt rounded-xl text-center hover:border-[#4065a9]/50 transition-colors"
                                >
                                    <Icon className="w-8 h-8 text-[#4065a9] mx-auto mb-3" />
                                    <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                                    <div className="text-sm text-steel-light">{stat.label}</div>
                                </motion.div>
                            );
                        })}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
