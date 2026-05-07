"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { User2, TrendingUp, Users, Shield } from "lucide-react";

const team = [
    {
        name: "Ato Daniel Gebretatiyos Solomon",
        title: "Founder & Proprietor",
        bio: "As the driving force behind DAN GTS, Ato Daniel combines deep financial acumen with a long-term vision for growth. His more than 25 years of experience across multiple sectors inform the strategic direction of the company, ensuring its steady expansion and strong market presence.",
        icon: Shield,
        gradient: "from-[#4065a9] to-[#2d4a7c]",
    },
    {
        name: "Bruno de Bersigny Rözler",
        title: "Marketing & Operations Manager",
        bio: "Bruno leads our commercial and operational strategy, bringing extensive expertise in banking, logistics, and East African market development—particularly within the petrochemical sector. His hands-on approach strengthens our market positioning and accelerates our growth.",
        icon: TrendingUp,
        gradient: "from-[#d4af37] to-[#b8962f]",
    },
    {
        name: "Solomon Kenea Ordofa",
        title: "Senior Head of Marketing & Sales",
        bio: "With over two decades of experience in sales, customer relations, and international markets, Solomon provides strategic oversight for all marketing and sales activities in Ethiopia. His leadership and client-focused vision are integral to our continued success.",
        icon: Users,
        gradient: "from-[#4065a9] via-[#5c7fb8] to-[#d4af37]",
    },
    {
        name: "W/ro. Yemisrach Yimer",
        title: "Administrative Manager & Executive Assistant",
        bio: "Yemisrach ensures organizational excellence through meticulous management and dedicated support. Her six years of experience and keen attention to detail enable seamless operations, allowing our leadership to focus on strategic priorities.",
        icon: User2,
        gradient: "from-[#b8962f] to-[#4065a9]",
    },
];

export function TeamSection() {
    return (
        <section className="section-spacing bg-gradient-to-b from-graphite via-charcoal to-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#4065a9] to-transparent" />
                <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#d4af37] to-transparent" />
            </div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <div className="inline-flex items-center gap-2 mb-4 text-[#4065a9] font-medium">
                            <div className="w-12 h-px bg-[#4065a9]" />
                            <span className="uppercase tracking-widest text-sm">Our Team</span>
                            <div className="w-12 h-px bg-[#4065a9]" />
                        </div>
                        <h2 className="mb-6">Meet Our Leadership</h2>
                        <p className="text-lg text-steel-light">
                            Guided by integrity, driven by excellence. Our experienced leadership team brings decades of combined
                            expertise to ensure DAN GTS delivers on its commitment to quality and national progress.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {team.map((member, index) => {
                        const Icon = member.icon;
                        return (
                            <ScrollReveal key={index} delay={index * 0.1}>
                                <motion.div
                                    whileHover={{ y: -8 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="group relative h-full"
                                >
                                    {/* Glow Effect */}
                                    <div className={`absolute -inset-1 bg-gradient-to-br ${member.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`} />

                                    {/* Card */}
                                    <div className="relative h-full p-8 bg-charcoal/80 backdrop-blur-sm border border-asphalt rounded-2xl hover:border-[#4065a9]/50 transition-all duration-300 overflow-hidden">
                                        {/* Background Pattern */}
                                        <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                                            <Icon className="w-full h-full" />
                                        </div>

                                        {/* Icon with Photo Placeholder */}
                                        <div className="relative mb-6">
                                            <div className={`inline-flex w-20 h-20 rounded-full bg-gradient-to-br ${member.gradient} items-center justify-center relative z-10`}>
                                                <Icon className="w-10 h-10 text-foreground" />
                                            </div>
                                            <div className={`absolute inset-0 w-20 h-20 rounded-full bg-gradient-to-br ${member.gradient} blur-lg opacity-50`} />
                                        </div>

                                        {/* Name */}
                                        <h3 className="text-2xl mb-2 relative z-10">{member.name}</h3>

                                        {/* Title */}
                                        <div className="text-[#d4af37] font-medium mb-4 uppercase tracking-wide text-sm relative z-10">
                                            {member.title}
                                        </div>

                                        {/* Bio */}
                                        <p className="text-steel-light leading-relaxed relative z-10">
                                            {member.bio}
                                        </p>

                                        {/* Hover Accent Line */}
                                        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${member.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                    </div>
                                </motion.div>
                            </ScrollReveal>
                        );
                    })}
                </div>

                {/* Leadership Values */}
                <ScrollReveal delay={0.4}>
                    <div className="mt-20 text-center">
                        <div className="inline-flex flex-col items-center gap-6 p-8 bg-gradient-to-r from-graphite to-charcoal border border-asphalt rounded-2xl max-w-3xl mx-auto">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4065a9] to-[#d4af37] flex items-center justify-center">
                                <Shield className="w-6 h-6 text-foreground" />
                            </div>
                            <div>
                                <h3 className="text-2xl mb-3">Guided by Integrity, Driven by Excellence</h3>
                                <p className="text-steel-light leading-relaxed">
                                    Our leadership team is united by a shared commitment to quality, ethical practice, and
                                    the unwavering pursuit of excellence. Together, we build solutions that power Ethiopia&apos;s future.
                                </p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
