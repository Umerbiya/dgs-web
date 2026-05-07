"use client";

import { useNetwork } from "@/hooks/use-network";
import { motion, AnimatePresence } from "framer-motion";
import { WifiOff } from "lucide-react";
import { useEffect, useState } from "react";

export function OfflineBanner() {
    const { isOnline } = useNetwork();
    const [mounted, setMounted] = useState(false);

    // Avoid hydration mismatch by waiting for mount
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <AnimatePresence>
            {!isOnline && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999]"
                >
                    <div className="bg-charcoal/90 backdrop-blur-md border border-asphalt px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 text-foreground">
                        <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                            <WifiOff className="w-5 h-5 text-red-500" />
                        </div>
                        <div>
                            <p className="font-bold text-sm">You are offline</p>
                            <p className="text-xs text-steel-light">Please check your internet connection.</p>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
