"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Linkedin, Building2, CheckCircle2, AlertCircle } from "lucide-react";
import dynamic from "next/dynamic";
import { useState } from "react";

// Dynamically import the Interactive Map with SSR disabled
const InteractiveMap = dynamic(() => import("@/components/ui/interactive-map"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full bg-charcoal animate-pulse rounded-xl flex items-center justify-center">
            <MapPin className="w-8 h-8 text-[#4065a9] animate-bounce" />
        </div>
    )
});

const inquiryTypes = [
    { value: "", label: "Select inquiry type" },
    { value: "infrastructure", label: "Infrastructure Materials (Bitumen & Asphalt)" },
    { value: "steel", label: "Industrial Steel Supply" },
    { value: "logistics", label: "Logistics & Transport Services" },
    { value: "equipment", label: "Construction Equipment Rental" },
    { value: "mobility", label: "Sustainable Mobility (EVs & Trucks)" },
    { value: "parts", label: "Spare Parts Distribution (RÖLTEK)" },
    { value: "partnership", label: "Strategic Partnership Inquiry" },
    { value: "other", label: "Other / General Inquiry" },
];

export function ContactSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        inquiryType: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");
        setErrorMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to send message");
            }

            setSubmitStatus("success");
            setFormData({ name: "", company: "", email: "", phone: "", inquiryType: "", message: "" });
        } catch (error: any) {
            setSubmitStatus("error");
            setErrorMessage(error.message || "An unexpected error occurred");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="section-spacing bg-gradient-to-b from-background to-charcoal relative overflow-hidden" id="contact">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-40 bg-dot-pattern" />

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <div className="inline-flex items-center gap-2 mb-4 text-[#d4af37] font-medium">
                            <div className="w-12 h-px bg-[#d4af37]" />
                            <span className="uppercase tracking-widest text-sm">Contact Us</span>
                            <div className="w-12 h-px bg-[#d4af37]" />
                        </div>
                        <h1 className="mb-6">Start a Partnership</h1>
                        <p className="text-lg text-steel-light">
                            Ready to build Ethiopia&apos;s future together? Connect with us to explore
                            partnership opportunities and discover how we can support your objectives.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid lg:grid-cols-2 gap-12 mb-20">
                    {/* Contact Form */}
                    <ScrollReveal delay={0.2}>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-br from-[#4065a9] to-[#d4af37] rounded-3xl opacity-10 blur-2xl" />
                            <div className="relative p-8 bg-graphite border border-asphalt rounded-2xl">
                                <h3 className="text-2xl mb-6">Send Us a Message</h3>

                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-steel-light mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-charcoal border border-asphalt rounded-lg text-foreground placeholder-[#6b7280] focus:outline-none focus:border-[#4065a9] transition-colors duration-300"
                                                placeholder="Your full name"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="company" className="block text-sm font-medium text-steel-light mb-2">
                                                Company / Organization
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-charcoal border border-asphalt rounded-lg text-foreground placeholder-[#6b7280] focus:outline-none focus:border-[#4065a9] transition-colors duration-300"
                                                placeholder="Your organization"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-steel-light mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-charcoal border border-asphalt rounded-lg text-foreground placeholder-[#6b7280] focus:outline-none focus:border-[#4065a9] transition-colors duration-300"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-steel-light mb-2">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-charcoal border border-asphalt rounded-lg text-foreground placeholder-[#6b7280] focus:outline-none focus:border-[#4065a9] transition-colors duration-300"
                                                placeholder="+251 XXX XXX XXX"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="inquiryType" className="block text-sm font-medium text-steel-light mb-2">
                                            Inquiry Type *
                                        </label>
                                        <select
                                            id="inquiryType"
                                            value={formData.inquiryType}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-charcoal border border-asphalt rounded-lg text-foreground focus:outline-none focus:border-[#4065a9] transition-colors duration-300"
                                        >
                                            {inquiryTypes.map((type) => (
                                                <option key={type.value} value={type.value}>
                                                    {type.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-steel-light mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={5}
                                            required
                                            className="w-full px-4 py-3 bg-charcoal border border-asphalt rounded-lg text-foreground placeholder-[#6b7280] focus:outline-none focus:border-[#4065a9] transition-colors duration-300 resize-none"
                                            placeholder="Tell us about your project, requirements, or inquiry..."
                                        />
                                    </div>

                                    {submitStatus === "success" && (
                                        <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-start gap-3 text-green-600 dark:text-green-400">
                                            <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                            <div>
                                                <div className="font-medium">Message sent successfully!</div>
                                                <div className="text-sm opacity-90">Thank you for reaching out. Our team will get back to you shortly.</div>
                                            </div>
                                        </div>
                                    )}

                                    {submitStatus === "error" && (
                                        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-start gap-3 text-red-600 dark:text-red-400">
                                            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                            <div>
                                                <div className="font-medium">Failed to send message</div>
                                                <div className="text-sm opacity-90">{errorMessage}</div>
                                            </div>
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full group relative px-8 py-4 bg-gradient-to-r from-[#4065a9] to-[#2d4a7c] text-white rounded-lg font-medium text-lg hover:shadow-[0_0_30px_rgba(64,101,169,0.4)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
                                    >
                                        <span className={`flex items-center justify-center gap-2 transition-opacity duration-300 ${isSubmitting ? 'opacity-0' : 'opacity-100'}`}>
                                            Start a Partnership
                                            <Send className="w-5 h-5 transition-transform group-hover:rotate-12" />
                                        </span>
                                        {isSubmitting && (
                                            <span className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                <span className="ml-2">Sending...</span>
                                            </span>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Contact Information */}
                    <ScrollReveal delay={0.3}>
                        <div className="space-y-8">
                            {/* Company Info */}
                            <div className="p-8 bg-graphite border border-asphalt rounded-2xl">
                                <h3 className="text-2xl mb-6">Company Information</h3>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#4065a9] to-[#2d4a7c] flex items-center justify-center flex-shrink-0">
                                            <Building2 className="w-6 h-6 text-foreground" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-foreground text-lg mb-1">Daniel Gebretatiyos Import & Export</div>
                                            <div className="text-steel-light text-sm">DAN GTS</div>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#4065a9] to-[#2d4a7c] flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-6 h-6 text-foreground" />
                                        </div>
                                        <div>
                                            <div className="font-medium text-foreground mb-1">Address</div>
                                            <div className="text-steel-light text-sm leading-relaxed">
                                                Gotera-Pepsi [Opposite]<br />
                                                Dejamach Beyene Merid Street<br />
                                                Addis Ababa – Ethiopia
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#d4af37] to-[#b8962f] flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-6 h-6 text-foreground" />
                                        </div>
                                        <div>
                                            <div className="font-medium text-foreground mb-1">Phone</div>
                                            <div className="text-steel-light">
                                                <a href="tel:+251911232257" className="hover:text-[#4065a9] transition-colors">+251 91 123 2257</a><br />
                                                <a href="tel:+251947471111" className="hover:text-[#4065a9] transition-colors">+251 94 747 1111</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#4065a9] to-[#d4af37] flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-6 h-6 text-foreground" />
                                        </div>
                                        <div>
                                            <div className="font-medium text-foreground mb-1">Email</div>
                                            <a href="mailto:DANIELTATIYOS@GMAIL.COM" className="text-steel-light hover:text-[#4065a9] transition-colors">
                                                DANIELTATIYOS@GMAIL.COM
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Interactive Map */}
                            <div className="p-6 bg-graphite border border-asphalt rounded-2xl">
                                <h3 className="text-xl mb-4">Location</h3>
                                <div className="aspect-video bg-charcoal rounded-xl relative">
                                    <InteractiveMap />
                                </div>
                            </div>

                            {/* Operating Hours */}
                            <div className="p-6 bg-graphite border border-asphalt rounded-2xl">
                                <h3 className="text-xl mb-4">Operating Hours</h3>
                                <div className="space-y-2 text-steel-light">
                                    <div className="flex justify-between">
                                        <span>Monday - Friday</span>
                                        <span className="text-foreground">8:00 AM - 5:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Saturday</span>
                                        <span className="text-foreground">9:00 AM - 1:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Sunday</span>
                                        <span className="text-foreground">Closed</span>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="p-6 bg-graphite border border-asphalt rounded-2xl">
                                <h3 className="text-xl mb-4">Follow Us</h3>
                                <div className="flex gap-4">
                                    {[Facebook, Twitter, Linkedin].map((Icon, index) => (
                                        <motion.a
                                            key={index}
                                            href="#"
                                            whileHover={{ y: -5, scale: 1.1 }}
                                            className="w-12 h-12 rounded-lg bg-charcoal border border-asphalt flex items-center justify-center hover:border-[#4065a9]/50 hover:bg-[#4065a9]/20 transition-all duration-300"
                                        >
                                            <Icon className="w-5 h-5 text-steel-light" />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Final CTA Banner */}
                <ScrollReveal delay={0.5}>
                    <div className="relative">
                        <div className="absolute -inset-2 bg-gradient-to-r from-[#4065a9] to-[#d4af37] rounded-3xl opacity-20 blur-2xl" />
                        <div className="relative text-center p-16 bg-gradient-to-br from-graphite to-charcoal border border-asphalt rounded-3xl overflow-hidden">
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4065a9] to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

                            <h2 className="text-4xl md:text-5xl mb-4">
                                <span className="bg-gradient-to-r from-white to-steel-light bg-clip-text text-transparent">
                                    Your Partner in
                                </span>
                                <br />
                                <span className="bg-gradient-to-r from-[#4065a9] to-[#d4af37] bg-clip-text text-transparent">
                                    Progress
                                </span>
                            </h2>

                            <p className="text-xl text-steel-light max-w-2xl mx-auto">
                                Together, we build the infrastructure of tomorrow.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            {/* Footer */}

        </section>
    );
}
