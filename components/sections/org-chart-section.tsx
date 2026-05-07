"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Building2, User2, Users, TrendingUp, Briefcase, Package, Truck, DollarSign, Scale } from "lucide-react";

const orgStructure = {
    ceo: {
        name: "Daniel Gebretatiyos Solomon",
        title: "Sole Proprietor",
        icon: Building2,
    },
    departments: [
        {
            head: {
                name: "Yemisrach Yimer",
                title: "Head of Administration",
                icon: User2,
            },
            team: ["Administrative Assistants"],
        },
        {
            head: {
                name: "Bruno de Bersigny Rözler",
                title: "Head of Marketing & Operations",
                icon: TrendingUp,
            },
            subHead: {
                name: "Solomon Kenea Ordofa",
                title: "Sales & CS Manager",
                icon: Users,
            },
        },
        {
            head: {
                name: "Getnet Mose",
                title: "Head of Impex",
                icon: Package,
            },
        },
        {
            head: {
                name: "Beniyam Alemayehu",
                title: "Finance Head",
                icon: DollarSign,
            },
            team: [{ name: "Hanan Ali", title: "Senior Accountant" }],
        },
        {
            head: {
                name: "Abel Zewdu",
                title: "Head of Logistics",
                icon: Truck,
            },
            team: [
                { name: "Ashenafi Alemeraw", title: "Logistics Supervisor" },
                "Drivers & Machine Operators",
                "Warehouse Assistants"
            ],
        },
    ],
    advisor: {
        name: "Legal Advisor",
        title: "Corporate Counsel on Call",
        icon: Scale,
    },
    liaison: {
        name: "Eliyas Mulat",
        title: "Liaison Officer",
        icon: Briefcase,
    },
};

export function OrgChartSection() {
    return (
        <section className="section-spacing bg-gradient-to-b from-charcoal via-graphite to-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#4065a9] to-transparent" />
                <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#d4af37] to-transparent" />
            </div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <div className="inline-flex items-center gap-2 mb-4 text-[#4065a9] font-medium">
                            <div className="w-12 h-px bg-[#4065a9]" />
                            <span className="uppercase tracking-widest text-sm">Structure</span>
                            <div className="w-12 h-px bg-[#4065a9]" />
                        </div>
                        <h2 className="mb-6">Organizational Chart</h2>
                        <p className="text-lg text-steel-light">
                            Our streamlined organizational structure ensures efficient operations and clear lines of
                            communication, enabling us to deliver excellence across all business functions.
                        </p>
                    </div>
                </ScrollReveal>

                {/* CEO */}
                <ScrollReveal delay={0.1}>
                    <div className="flex justify-center mb-12">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="relative group"
                        >
                            <div className="absolute -inset-2 bg-gradient-to-r from-[#4065a9] to-[#d4af37] rounded-2xl opacity-30 blur-lg" />
                            <div className="relative p-6 bg-gradient-to-br from-[#4065a9] to-[#2d4a7c] border-2 border-[#4065a9] rounded-2xl min-w-[280px]">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-foreground/20 flex items-center justify-center">
                                        <Building2 className="w-6 h-6 text-foreground" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-foreground text-lg">{orgStructure.ceo.name}</div>
                                        <div className="text-[#d4af37] text-sm font-medium">{orgStructure.ceo.title}</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </ScrollReveal>

                {/* Connection Line */}
                <div className="flex justify-center mb-12">
                    <div className="w-px h-12 bg-gradient-to-b from-[#4065a9] to-transparent" />
                </div>

                {/* Top Level - Advisor and Liaison */}
                <ScrollReveal delay={0.2}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="p-5 bg-charcoal border border-asphalt rounded-xl hover:border-[#4065a9]/50 transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#d4af37] to-[#b8962f] flex items-center justify-center">
                                    <Scale className="w-5 h-5 text-foreground" />
                                </div>
                                <div>
                                    <div className="font-semibold text-foreground">{orgStructure.advisor.name}</div>
                                    <div className="text-steel-light text-sm">{orgStructure.advisor.title}</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="p-5 bg-charcoal border border-asphalt rounded-xl hover:border-[#4065a9]/50 transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#4065a9] to-[#2d4a7c] flex items-center justify-center">
                                    <Briefcase className="w-5 h-5 text-foreground" />
                                </div>
                                <div>
                                    <div className="font-semibold text-foreground">{orgStructure.liaison.name}</div>
                                    <div className="text-steel-light text-sm">{orgStructure.liaison.title}</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </ScrollReveal>

                {/* Departments Grid */}
                <ScrollReveal delay={0.3}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {orgStructure.departments.map((dept, index) => {
                            const Icon = dept.head.icon;
                            return (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -8 }}
                                    className="group relative"
                                >
                                    <div className="absolute -inset-1 bg-gradient-to-br from-[#4065a9] to-[#d4af37] rounded-xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity" />

                                    <div className="relative p-6 bg-graphite border border-asphalt rounded-xl hover:border-[#4065a9]/50 transition-colors h-full">
                                        {/* Department Head */}
                                        <div className="mb-4 pb-4 border-b border-asphalt">
                                            <div className="flex items-start gap-3 mb-2">
                                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#4065a9] to-[#2d4a7c] flex items-center justify-center flex-shrink-0">
                                                    <Icon className="w-5 h-5 text-foreground" />
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-foreground leading-tight">{dept.head.name}</div>
                                                    <div className="text-[#d4af37] text-sm mt-1">{dept.head.title}</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Sub-Head if exists */}
                                        {dept.subHead && (
                                            <div className="mb-4 pb-4 border-b border-asphalt">
                                                <div className="flex items-start gap-3">
                                                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#d4af37] to-[#b8962f] flex items-center justify-center flex-shrink-0">
                                                        <dept.subHead.icon className="w-4 h-4 text-foreground" />
                                                    </div>
                                                    <div>
                                                        <div className="font-medium text-foreground text-sm leading-tight">{dept.subHead.name}</div>
                                                        <div className="text-steel-light text-xs mt-1">{dept.subHead.title}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Team Members */}
                                        {dept.team && dept.team.length > 0 && (
                                            <div className="space-y-2">
                                                {dept.team.map((member, idx) => (
                                                    <div key={idx} className="flex items-center gap-2 text-sm">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-[#4065a9]" />
                                                        <span className="text-steel-light">
                                                            {typeof member === 'string' ? member : `${member.name} - ${member.title}`}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
