"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { staggerContainerVariants, staggerItemVariants } from "@/lib/animations";
import { Award, TrendingUp, Users, Target } from "lucide-react";

const timelineEvents = [
    {
        year: "2015",
        title: "Foundation",
        description: "Founded by Ato Daniel Gebretatiyos Solomon, bringing over 25 years of deep-rooted experience in business, finance, and logistics. Established as a privately-owned enterprise with an initial investment of 20 million Birr.",
        icon: Target,
    },
    {
        year: "2014 EC",
        title: "Milestone Growth",
        description: "Achieved remarkable turnover exceeding 12 million Birr, demonstrating sustained growth and market acceptance. Rapid evolution from sole proprietorship to premier industry partner.",
        icon: TrendingUp,
    },
    {
        year: "Decade+",
        title: "Export Excellence",
        description: "Over a decade of export operations contributing significantly to generating vital foreign currency for Ethiopia's economy. Established presence across the Horn of Africa.",
        icon: Award,
    },
    {
        year: "Today",
        title: "National Impact",
        description: "A dynamic force in Ethiopian trade, powering infrastructure and industry. Premier partner for wholesale, logistics, and sustainable solutions across the nation.",
        icon: Users,
    },
];

export function StorySection() {
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
                    <div className="max-w-3xl mb-20">
                        <div className="inline-flex items-center gap-2 mb-4 text-[#4065a9] font-medium">
                            <div className="w-12 h-px bg-[#4065a9]" />
                            <span className="uppercase tracking-widest text-sm">Our Journey</span>
                        </div>
                        <h2 className="mb-6">A Decade of Integrity & Impact</h2>
                        <p className="text-lg text-steel-light leading-relaxed">
                            Built on the foundation of 25+ years of leadership experience, DAN GTS has evolved into one of Ethiopia&apos;s
                            most trusted partners in trade, logistics, and infrastructure development.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Founder Spotlight */}
                <ScrollReveal delay={0.2}>
                    <div className="mb-24 grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-[#4065a9] to-[#d4af37] rounded-2xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500" />
                            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-asphalt bg-charcoal">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#4065a9] to-charcoal flex items-center justify-center">
                                            <Users className="w-16 h-16 text-foreground" />
                                        </div>
                                        <p className="text-steel text-sm">Founder Portrait</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-3xl mb-4">
                                Ato Daniel Gebretatiyos Solomon
                            </h3>
                            <div className="text-[#d4af37] font-medium mb-4 uppercase tracking-wide text-sm">
                                Founder & Visionary Leader
                            </div>
                            <p className="text-steel-light leading-relaxed mb-6">
                                With over 25 years of deep-rooted experience in business, finance, and the logistics sector,
                                Ato Daniel established this privately-owned enterprise to be a dynamic force in Ethiopian trade.
                                His leadership combines financial acumen with a long-term vision for growth, ensuring steady expansion
                                and strong market presence.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-charcoal/50 border border-asphalt rounded-lg">
                                    <div className="text-2xl font-bold text-foreground mb-1">25+</div>
                                    <div className="text-xs text-steel uppercase tracking-wider">Years Experience</div>
                                </div>
                                <div className="p-4 bg-charcoal/50 border border-asphalt rounded-lg">
                                    <div className="text-2xl font-bold text-foreground mb-1">20M</div>
                                    <div className="text-xs text-steel uppercase tracking-wider">Birr Initial Investment</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#4065a9] via-[#d4af37] to-[#4065a9] opacity-50 md:-translate-x-1/2" />

                    {/* Timeline Events */}
                    <div className="space-y-16">
                        {timelineEvents.map((event, index) => {
                            const Icon = event.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <ScrollReveal key={index} delay={index * 0.1}>
                                    <div className={`relative grid md:grid-cols-2 gap-8 ${!isEven ? "md:flex-row-reverse" : ""}`}>
                                        {/* Content */}
                                        <div className={`${isEven ? "md:text-right md:pr-12" : "md:pl-12 md:col-start-2"}`}>
                                            <div className="group relative">
                                                <div className="absolute -inset-2 bg-gradient-to-r from-[#4065a9]/20 to-[#d4af37]/20 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
                                                <div className="relative p-6 bg-charcoal/80 backdrop-blur-sm border border-asphalt rounded-xl hover:border-[#4065a9]/50 transition-colors duration-300">
                                                    <div className={`flex items-center gap-3 mb-3 ${isEven ? "md:justify-end" : ""}`}>
                                                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#4065a9] to-charcoal">
                                                            <Icon className="w-5 h-5 text-foreground" />
                                                        </div>
                                                        <div className="text-2xl font-bold text-[#d4af37]">{event.year}</div>
                                                    </div>
                                                    <h3 className="text-2xl mb-3">{event.title}</h3>
                                                    <p className="text-steel-light leading-relaxed">{event.description}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Timeline Marker */}
                                        <div className="absolute left-0 md:left-1/2 top-8 -translate-x-1/2">
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                whileInView={{ scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                                                className="relative"
                                            >
                                                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#4065a9] to-[#d4af37] relative z-10" />
                                                <div className="absolute inset-0 rounded-full bg-[#4065a9] animate-ping opacity-75" />
                                            </motion.div>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            );
                        })}
                    </div>
                </div>

                {/* Core Values */}
                <ScrollReveal delay={0.4}>
                    <div className="mt-24 text-center">
                        <h3 className="text-3xl mb-12">Driven by Core Values</h3>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
                            {["Integrity", "National Development", "Reliability", "Growth", "Innovation"].map((value, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -5 }}
                                    className="p-6 bg-charcoal/50 border border-asphalt rounded-lg hover:border-[#4065a9]/50 transition-colors duration-300"
                                >
                                    <div className="text-4xl mb-2">•</div>
                                    <div className="font-medium text-foreground">{value}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
