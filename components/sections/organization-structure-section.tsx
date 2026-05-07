"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { User, Building2, Shield, Users, ArrowDown } from "lucide-react";

const orgNodes = [
    {
        level: 1,
        title: "Founder & Proprietor",
        name: "Ato Daniel Gebretatiyos Solomon",
        color: "from-[#4065a9] to-[#2d4a7c]",
    },
    {
        level: 2,
        nodes: [
            {
                title: "Marketing & Operations",
                name: "Bruno de Bersigny Rözler",
                color: "from-[#d4af37] to-[#b8962f]",
            },
            {
                title: "Marketing & Sales",
                name: "Solomon Kenea Ordofa",
                color: "from-[#4065a9] to-[#d4af37]",
            },
            {
                title: "Administration",
                name: "W/ro. Yemisrach Yimer",
                color: "from-[#b8962f] to-[#4065a9]",
            },
        ],
    },
];

const governancePrinciples = [
    {
        icon: Shield,
        title: "Integrity-First Governance",
        description: "All decisions are guided by ethical standards and transparency.",
    },
    {
        icon: Building2,
        title: "Private Ownership Clarity",
        description: "Sole proprietorship ensuring agile decision-making and accountability.",
    },
    {
        icon: Users,
        title: "Collaborative Leadership",
        description: "Empowered team structure with clear roles and responsibilities.",
    },
];

export function OrganizationStructureSection() {
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
                            <span className="uppercase tracking-widest text-sm">Organization</span>
                            <div className="w-12 h-px bg-[#4065a9]" />
                        </div>
                        <h2 className="mb-6">Organizational Structure</h2>
                        <p className="text-lg text-steel-light">
                            A lean, efficient organization built for agility and accountability.
                            Private ownership ensures direct decision-making and unwavering commitment to our partners.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Org Chart */}
                <ScrollReveal delay={0.2}>
                    <div className="max-w-4xl mx-auto mb-20">
                        {/* Top Level - Founder */}
                        <div className="flex justify-center mb-8">
                            <motion.div
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="relative group"
                            >
                                <div className={`absolute -inset-1 bg-gradient-to-br ${orgNodes[0].color} rounded-2xl opacity-20 group-hover:opacity-40 blur-xl transition-opacity duration-500`} />
                                <div className="relative px-8 py-6 bg-graphite border-2 border-[#4065a9] rounded-2xl text-center">
                                    <div className={`inline-flex w-16 h-16 rounded-xl bg-gradient-to-br ${orgNodes[0].color} items-center justify-center mb-4`}>
                                        <User className="w-8 h-8 text-foreground" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-1">{orgNodes[0].title}</h3>
                                    <p className="text-steel-light">{orgNodes[0].name}</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Connector */}
                        <div className="flex justify-center mb-8">
                            <div className="flex flex-col items-center">
                                <div className="w-px h-8 bg-gradient-to-b from-[#4065a9] to-asphalt" />
                                <ArrowDown className="w-5 h-5 text-asphalt" />
                            </div>
                        </div>

                        {/* Second Level */}
                        <div className="grid md:grid-cols-3 gap-6">
                            {(orgNodes[1]?.nodes ?? []).map((node, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="relative group"
                                >
                                    <div className={`absolute -inset-1 bg-gradient-to-br ${node.color} rounded-xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`} />
                                    <div className="relative px-6 py-5 bg-graphite border border-asphalt rounded-xl text-center hover:border-[#4065a9]/50 transition-colors">
                                        <div className={`inline-flex w-12 h-12 rounded-lg bg-gradient-to-br ${node.color} items-center justify-center mb-3`}>
                                            <User className="w-6 h-6 text-foreground" />
                                        </div>
                                        <h4 className="text-sm font-bold text-foreground mb-1">{node.title}</h4>
                                        <p className="text-xs text-steel-light">{node.name}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>

                {/* Governance Principles */}
                <ScrollReveal delay={0.4}>
                    <div className="relative">
                        <div className="absolute -inset-2 bg-gradient-to-r from-[#4065a9] to-[#d4af37] rounded-3xl opacity-10 blur-xl" />
                        <div className="relative p-10 bg-graphite border border-asphalt rounded-2xl">
                            <div className="text-center mb-10">
                                <h3 className="text-2xl mb-3">Governance Principles</h3>
                                <p className="text-steel-light">
                                    The foundations of our organizational excellence
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8">
                                {governancePrinciples.map((principle, index) => {
                                    const Icon = principle.icon;
                                    return (
                                        <motion.div
                                            key={index}
                                            whileHover={{ y: -5 }}
                                            className="text-center group"
                                        >
                                            <div className="inline-flex w-16 h-16 rounded-xl bg-gradient-to-br from-[#4065a9] to-[#d4af37] items-center justify-center mb-4">
                                                <Icon className="w-8 h-8 text-foreground" />
                                            </div>
                                            <h4 className="text-lg font-bold text-foreground mb-2">{principle.title}</h4>
                                            <p className="text-sm text-steel-light">{principle.description}</p>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Private Ownership Statement */}
                <ScrollReveal delay={0.5}>
                    <div className="mt-16 text-center">
                        <div className="inline-flex items-center gap-4 px-8 py-4 bg-charcoal border border-asphalt rounded-full">
                            <Building2 className="w-6 h-6 text-[#4065a9]" />
                            <span className="text-foreground font-medium">
                                Privately Owned Sole Proprietorship
                            </span>
                            <span className="text-steel">|</span>
                            <span className="text-steel-light">
                                Direct Accountability & Agile Decision-Making
                            </span>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
