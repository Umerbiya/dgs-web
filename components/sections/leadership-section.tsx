"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { User, Linkedin, Mail } from "lucide-react";

const leaders = [
    {
        name: "Ato Daniel Gebretatiyos Solomon",
        title: "Founder & Proprietor",
        bio: "As the driving force behind DAN GTS, Ato Daniel combines deep financial acumen with a long-term vision for growth. His more than 25 years of experience across multiple sectors inform the strategic direction of the company, ensuring its steady expansion and strong market presence.",
        gradient: "from-[#4065a9] to-[#2d4a7c]",
    },
    {
        name: "Bruno de Bersigny Rözler",
        title: "Marketing & Operations Manager",
        bio: "Bruno leads our commercial and operational strategy, bringing extensive expertise in banking, logistics, and East African market development—particularly within the petrochemical sector. His hands-on approach strengthens our market positioning and accelerates our growth.",
        gradient: "from-[#d4af37] to-[#b8962f]",
    },
    {
        name: "Solomon Kenea Ordofa",
        title: "Senior Head of Marketing & Sales",
        bio: "With over two decades of experience in sales, customer relations, and international markets, Solomon provides strategic oversight for all marketing and sales activities in Ethiopia. His leadership and client-focused vision are integral to our continued success.",
        gradient: "from-[#4065a9] to-[#d4af37]",
    },
    {
        name: "W/ro. Yemisrach Yimer",
        title: "Administrative Manager & Executive Assistant",
        bio: "Yemisrach ensures organizational excellence through meticulous management and dedicated support. Her six years of experience and keen attention to detail enable seamless operations, allowing our leadership to focus on strategic priorities.",
        gradient: "from-[#b8962f] to-[#4065a9]",
    },
];

export function LeadershipSection() {
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
                            <span className="uppercase tracking-widest text-sm">Leadership</span>
                            <div className="w-12 h-px bg-[#d4af37]" />
                        </div>
                        <h2 className="mb-6">Meet Our Team</h2>
                        <p className="text-lg text-steel-light">
                            Guided by integrity, driven by excellence. Our leadership team brings decades of
                            combined experience across finance, logistics, and international trade.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Leadership Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {leaders.map((leader, index) => (
                        <ScrollReveal key={index} delay={index * 0.15}>
                            <motion.div
                                whileHover={{ y: -8 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="group relative h-full"
                            >
                                {/* Glow Effect */}
                                <div className={`absolute -inset-1 bg-gradient-to-br ${leader.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

                                {/* Card */}
                                <div className="relative h-full p-8 bg-graphite border border-asphalt rounded-2xl hover:border-[#4065a9]/50 transition-all duration-300 flex flex-col">
                                    <div className="flex items-start gap-6">
                                        {/* Portrait Placeholder */}
                                        <div className={`flex-shrink-0 w-24 h-24 rounded-xl bg-gradient-to-br ${leader.gradient} flex items-center justify-center`}>
                                            <User className="w-12 h-12 text-foreground/80" />
                                        </div>

                                        {/* Info */}
                                        <div className="flex-grow">
                                            <h3 className="text-xl font-bold text-foreground mb-1">{leader.name}</h3>
                                            <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${leader.gradient} text-foreground mb-4`}>
                                                {leader.title}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bio */}
                                    <p className="mt-6 text-steel-light leading-relaxed flex-grow">
                                        {leader.bio}
                                    </p>

                                    {/* Social Links */}
                                    <div className="mt-6 pt-4 border-t border-asphalt flex gap-3">
                                        <motion.a
                                            href="#"
                                            whileHover={{ y: -3 }}
                                            className="w-10 h-10 rounded-lg bg-charcoal border border-asphalt flex items-center justify-center hover:border-[#4065a9]/50 transition-colors"
                                        >
                                            <Linkedin className="w-4 h-4 text-steel-light" />
                                        </motion.a>
                                        <motion.a
                                            href="#"
                                            whileHover={{ y: -3 }}
                                            className="w-10 h-10 rounded-lg bg-charcoal border border-asphalt flex items-center justify-center hover:border-[#4065a9]/50 transition-colors"
                                        >
                                            <Mail className="w-4 h-4 text-steel-light" />
                                        </motion.a>
                                    </div>

                                    {/* Hover Accent */}
                                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${leader.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl`} />
                                </div>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
