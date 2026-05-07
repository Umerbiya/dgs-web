"use client";

import { motion } from "framer-motion";
import { AlertCircle, ArrowLeft, RefreshCcw, HeadphonesIcon } from "lucide-react";
import Link from "next/link";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { ThemeToggle } from "@/components/theme-toggle"; // Assuming this exists

interface ErrorPageProps {
    statusCode: number;
    title: string;
    description: string;
    referenceId?: string;
    onRetry?: () => void;
    showHomeButton?: boolean;
}

export function ErrorPage({
    statusCode,
    title,
    description,
    referenceId,
    onRetry,
    showHomeButton = true,
}: ErrorPageProps) {
    return (
        <div className="min-h-screen bg-background flex flex-col relative overflow-hidden text-foreground">
            {/* Dynamic Theme Header */}
            <header className="absolute top-0 w-full p-6 flex justify-between items-center z-50">
                <Link href="/" className="text-2xl font-bold font-serif text-[#4065a9]">
                    DAN<span className="text-[#d4af37]"> GTS</span>
                </Link>
                <ThemeToggle />
            </header>

            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 opacity-10 dark:opacity-20 bg-dot-pattern pointer-events-none" />

            {/* Main Content Centered */}
            <main className="flex-1 flex items-center justify-center p-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-2xl w-full"
                >
                    <div className="bg-charcoal/50 backdrop-blur-xl border border-asphalt rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">

                        {/* Top Accent Line */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4065a9] via-[#d4af37] to-[#4065a9]" />

                        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">

                            {/* Giant Status Code Visual */}
                            <div className="flex-shrink-0">
                                <div className="relative">
                                    <h1 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-foreground to-steel/20 select-none">
                                        {statusCode}
                                    </h1>
                                </div>
                            </div>

                            {/* Explanatory Content */}
                            <div className="space-y-6 flex-1">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold mb-3">{title}</h2>
                                    <p className="text-steel-light text-lg leading-relaxed">{description}</p>
                                </div>

                                {/* Secure Reference ID for 500s */}
                                {referenceId && (
                                    <div className="bg-background/80 border border-asphalt rounded-xl p-4 flex items-start gap-3">
                                        <AlertCircle className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-sm font-medium">Support Reference ID</p>
                                            <p className="text-xs text-steel mt-1 font-mono break-all">{referenceId}</p>
                                        </div>
                                    </div>
                                )}

                                {/* Action Buttons */}
                                <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
                                    {onRetry && (
                                        <MagneticButton
                                            onClick={onRetry}
                                            className="px-6 py-3 bg-gradient-to-r from-[#4065a9] to-[#2d4a7c] text-white rounded-lg font-medium flex items-center gap-2 hover:shadow-lg transition-all"
                                        >
                                            <RefreshCcw className="w-4 h-4" />
                                            Try Again
                                        </MagneticButton>
                                    )}

                                    {showHomeButton && (
                                        <Link href="/">
                                            <MagneticButton className="px-6 py-3 bg-graphite border border-asphalt text-foreground rounded-lg font-medium flex items-center gap-2 hover:bg-asphalt/20 transition-all">
                                                <ArrowLeft className="w-4 h-4" />
                                                Return Home
                                            </MagneticButton>
                                        </Link>
                                    )}

                                    <Link href="/contact" className="px-6 py-3 text-steel hover:text-[#4065a9] font-medium flex items-center gap-2 transition-colors">
                                        <HeadphonesIcon className="w-4 h-4" />
                                        Contact Support
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </motion.div>
            </main>
        </div>
    );
}
