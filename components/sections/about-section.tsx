"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Building2, TrendingUp, Globe, Award } from "lucide-react";

export function AboutSection() {
    return (
        <section className="section-spacing bg-gradient-to-b from-background to-charcoal relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
            linear-gradient(to right, #374151 1px, transparent 1px),
            linear-gradient(to bottom, #374151 1px, transparent 1px)
          `,
                    backgroundSize: '80px 80px',
                }} />
            </div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 mb-4 text-[#4065a9] font-medium">
                            <div className="w-12 h-px bg-[#4065a9]" />
                            <span className="uppercase tracking-widest text-sm">About DAN GTS</span>
                            <div className="w-12 h-px bg-[#4065a9]" />
                        </div>
                        <h1 className="mb-6">Our Story</h1>
                    </div>
                </ScrollReveal>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    {/* Story Content */}
                    <ScrollReveal>
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-3 mb-4">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#4065a9] to-[#2d4a7c] flex items-center justify-center">
                                    <Building2 className="w-7 h-7 text-foreground" />
                                </div>
                                <div>
                                    <div className="text-sm text-[#4065a9] uppercase tracking-wider">Founded</div>
                                    <div className="text-2xl font-bold text-foreground">2015</div>
                                </div>
                            </div>

                            <p className="text-lg text-steel-light leading-relaxed">
                                Founded on a legacy of expertise, DAN GTS began in 2015 under the visionary leadership of
                                <span className="text-foreground font-medium"> Ato Daniel Gebretatiyos Solomon</span>. With over
                                25 years of deep-rooted experience in business, finance, and the logistics sector, Ato Daniel
                                established this privately-owned enterprise to be a dynamic force in Ethiopian trade.
                            </p>

                            <p className="text-lg text-steel-light leading-relaxed">
                                What started as a dedicated sole proprietorship has rapidly evolved into a
                                <span className="text-[#d4af37] font-medium"> premier partner for industry</span>, driven by
                                integrity and a commitment to national progress.
                            </p>

                            {/* Key Values */}
                            <div className="flex flex-wrap gap-3 pt-4">
                                {["Integrity", "Excellence", "National Impact", "Private Ownership"].map((value, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-charcoal border border-asphalt rounded-full text-sm text-steel-light"
                                    >
                                        {value}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Visual Element */}
                    <ScrollReveal delay={0.2}>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-br from-[#4065a9] to-[#d4af37] rounded-3xl opacity-10 blur-2xl" />
                            <div className="relative aspect-square bg-graphite border border-asphalt rounded-2xl overflow-hidden">
                                {/* Abstract Business Visual */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-8xl font-bold bg-gradient-to-r from-[#4065a9] to-[#d4af37] bg-clip-text text-transparent">
                                            DAN
                                        </div>
                                        <div className="text-4xl font-bold text-asphalt">GTS</div>
                                        <div className="mt-4 text-sm text-steel uppercase tracking-widest">
                                            Import & Export
                                        </div>
                                    </div>
                                </div>
                                {/* Decorative Elements */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#4065a9]/20 to-transparent rounded-bl-full" />
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#d4af37]/20 to-transparent rounded-tr-full" />
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Growth Journey */}
                <ScrollReveal delay={0.3}>
                    <div className="relative">
                        <div className="absolute -inset-2 bg-gradient-to-r from-[#4065a9] to-[#d4af37] rounded-3xl opacity-10 blur-xl" />
                        <div className="relative p-10 bg-graphite border border-asphalt rounded-2xl">
                            <div className="text-center mb-10">
                                <h3 className="text-2xl mb-3">From Investment to Impact</h3>
                                <p className="text-steel-light">
                                    Our trajectory speaks to our reliability and strategic vision
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8">
                                {[
                                    {
                                        icon: TrendingUp,
                                        value: "20M+",
                                        label: "Initial Investment",
                                        sublabel: "Million Birr",
                                        color: "from-[#4065a9] to-[#2d4a7c]",
                                    },
                                    {
                                        icon: Award,
                                        value: "12M+",
                                        label: "Milestone Turnover",
                                        sublabel: "Million Birr (EC 2014)",
                                        color: "from-[#d4af37] to-[#b8962f]",
                                    },
                                    {
                                        icon: Globe,
                                        value: "10+",
                                        label: "Export Operations",
                                        sublabel: "Years of Foreign Currency",
                                        color: "from-[#4065a9] to-[#d4af37]",
                                    },
                                ].map((stat, index) => {
                                    const Icon = stat.icon;
                                    return (
                                        <motion.div
                                            key={index}
                                            whileHover={{ y: -5 }}
                                            className="text-center group"
                                        >
                                            <div className={`inline-flex w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} items-center justify-center mb-4`}>
                                                <Icon className="w-7 h-7 text-foreground" />
                                            </div>
                                            <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                                            <div className="text-foreground font-medium">{stat.label}</div>
                                            <div className="text-sm text-steel">{stat.sublabel}</div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Emphasis Statement */}
                <ScrollReveal delay={0.4}>
                    <div className="mt-16 text-center">
                        <blockquote className="text-xl md:text-2xl text-steel-light italic max-w-3xl mx-auto">
                            &quot;For over a decade, our export operations have contributed significantly to generating
                            vital foreign currency for Ethiopia&apos;s economy.&quot;
                        </blockquote>
                        <div className="mt-6 inline-flex items-center gap-3 text-[#4065a9]">
                            <div className="w-12 h-px bg-[#4065a9]" />
                            <span className="text-sm uppercase tracking-widest">National Contribution</span>
                            <div className="w-12 h-px bg-[#4065a9]" />
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
