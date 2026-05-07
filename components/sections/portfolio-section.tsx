"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { MagneticButton } from "@/components/animations/magnetic-button";
import {
    Construction,
    Factory,
    Truck,
    Cog,
    Zap,
    Settings,
    ArrowRight
} from "lucide-react";
import Link from "next/link";

const services = [
    {
        id: "infrastructure",
        icon: Construction,
        title: "Infrastructure Development",
        subtitle: "Bitumen & Asphalt Supply",
        description: "We provide the essential materials for durable, high-quality roads. As a key supplier of paving grade bitumen and cutbacks, we fuel road construction projects across Ethiopia and the Horn of Africa with premium petrochemical products.",
        details: ["Paving grade bitumen", "Cutback solutions", "Asphalt products", "Regional distribution network"],
        gradient: "from-[#4065a9] to-[#2d4a7c]",
    },
    {
        id: "steel",
        icon: Factory,
        title: "Industrial Steel Supply",
        subtitle: "Steel Billets & Manufacturing",
        description: "We supply the backbone of the steel industry. Our 3SP medium to low carbon steel meets the exacting standards of steel and rebar manufacturing, supporting the framework of national development.",
        details: ["3SP steel billets", "Medium to low carbon steel", "Rebar manufacturing support", "Quality-certified products"],
        gradient: "from-[#d4af37] to-[#b8962f]",
    },
    {
        id: "logistics",
        icon: Truck,
        title: "Logistics & Transport",
        subtitle: "Nationwide Road Haulage",
        description: "We ensure your goods move seamlessly. Our comprehensive road haulage and nationwide transportation network guarantees timely, efficient, and reliable delivery to every corner of Ethiopia.",
        details: ["Fleet management", "Nationwide coverage", "Timely delivery", "Supply chain optimization"],
        gradient: "from-[#4065a9] via-[#336aa3] to-[#2d4a7c]",
    },
    {
        id: "equipment",
        icon: Cog,
        title: "Construction Equipment Rental",
        subtitle: "Heavy Plant & Machinery",
        description: "We equip your ambitions. Access our extensive fleet of heavy plant and machinery for rent, delivering top-tier equipment to keep your construction projects on track and on budget.",
        details: ["Heavy machinery rental", "Construction equipment", "Technical support", "Flexible terms"],
        gradient: "from-[#b8962f] to-[#8a6f23]",
    },
    {
        id: "mobility",
        icon: Zap,
        title: "Sustainable Mobility",
        subtitle: "EVs & Heavy-Duty Trucks",
        description: "We are at the forefront of transportation evolution. We import heavy-duty trucks and automobiles, with a dedicated focus on electric vehicles, to meet Ethiopia's growing demand for innovative and eco-friendly commercial transport.",
        details: ["Electric vehicles", "Heavy-duty trucks", "Eco-friendly transport", "Commercial fleet solutions"],
        gradient: "from-[#4065a9] to-[#d4af37]",
    },
    {
        id: "parts",
        icon: Settings,
        title: "Spare Parts Distribution",
        subtitle: "RÖLTEK TRADING PLC",
        description: "Through our sister company, RÖLTEK TRADING PLC, we ensure operational continuity. We are a leading wholesale distributor of both branded and own-brand commercial heavy vehicle spare parts, minimizing downtime across sectors.",
        details: ["RÖLTEK branded parts", "Own-brand products", "Commercial vehicle parts", "Wholesale distribution"],
        gradient: "from-[#d4af37] via-[#b8962f] to-[#4065a9]",
    },
];

export function PortfolioSection() {
    return (
        <section className="section-spacing bg-gradient-to-b from-background via-graphite to-charcoal relative overflow-hidden">
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
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <div className="inline-flex items-center gap-2 mb-4 text-[#4065a9] font-medium">
                            <div className="w-12 h-px bg-[#4065a9]" />
                            <span className="uppercase tracking-widest text-sm">Our Portfolio</span>
                            <div className="w-12 h-px bg-[#4065a9]" />
                        </div>
                        <h1 className="mb-6">Products & Services</h1>
                        <p className="text-lg text-steel-light">
                            DAN GTS is your single-source solution across key sectors. Capability clarity,
                            not marketing noise—delivering excellence across a diversified portfolio built
                            on integrity, ethical practice, and unwavering commitment.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <ScrollReveal key={index} delay={index * 0.1}>
                                <motion.div
                                    id={service.id}
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="group relative h-full scroll-mt-24"
                                >
                                    {/* Glow Effect */}
                                    <div className={`absolute -inset-1 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`} />

                                    {/* Card */}
                                    <div className="relative h-full p-8 bg-graphite border border-asphalt rounded-2xl hover:border-[#4065a9]/50 transition-all duration-300 overflow-hidden flex flex-col">
                                        {/* Background Pattern */}
                                        <div className="absolute top-0 right-0 w-40 h-40 opacity-5">
                                            <Icon className="w-full h-full" />
                                        </div>

                                        {/* Header */}
                                        <div className="flex items-start gap-5 mb-6">
                                            {/* Icon */}
                                            <div className={`inline-flex w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} items-center justify-center flex-shrink-0`}>
                                                <Icon className="w-8 h-8 text-foreground" />
                                            </div>

                                            <div>
                                                {/* Subtitle */}
                                                <div className="text-sm text-[#4065a9] font-medium uppercase tracking-wider mb-1">
                                                    {service.subtitle}
                                                </div>
                                                {/* Title */}
                                                <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-steel-light leading-relaxed mb-6 flex-grow">
                                            {service.description}
                                        </p>

                                        {/* Details */}
                                        <div className="grid grid-cols-2 gap-3 mb-6">
                                            {service.details.map((detail, idx) => (
                                                <div key={idx} className="flex items-center gap-2 text-sm text-steel">
                                                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                                                    <span>{detail}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Learn More Link */}
                                        <Link
                                            href="/contact"
                                            className="inline-flex items-center gap-2 text-[#4065a9] font-medium hover:text-[#d4af37] transition-colors group/link"
                                        >
                                            <span>Inquire Now</span>
                                            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                                        </Link>

                                        {/* Hover Accent Line */}
                                        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                    </div>
                                </motion.div>
                            </ScrollReveal>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <ScrollReveal delay={0.6}>
                    <div className="mt-20 text-center">
                        <div className="relative inline-block">
                            <div className="absolute -inset-4 bg-gradient-to-r from-[#4065a9] to-[#d4af37] rounded-3xl opacity-20 blur-xl" />
                            <div className="relative inline-flex flex-col md:flex-row items-center gap-6 p-8 bg-gradient-to-r from-graphite to-charcoal border border-asphalt rounded-2xl">
                                <div className="flex-1 text-left">
                                    <h3 className="text-2xl mb-2">Choose DAN GTS for Quality, Reliability, and Progress</h3>
                                    <p className="text-steel-light">
                                        Our comprehensive portfolio delivers solutions that drive Ethiopia forward
                                    </p>
                                </div>
                                <Link href="/contact">
                                    <MagneticButton
                                        className="px-8 py-4 bg-gradient-to-r from-[#4065a9] to-[#2d4a7c] text-foreground rounded-full font-medium whitespace-nowrap hover:shadow-[0_0_30px_rgba(64,101,169,0.4)] transition-shadow duration-300"
                                    >
                                        Start a Partnership
                                    </MagneticButton>
                                </Link>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
