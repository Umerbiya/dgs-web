"use client";

import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
    const { theme, resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-10 h-10" />; // Empty placeholder to avoid layout shift
    }

    const toggleTheme = () => {
        setTheme(resolvedTheme === "light" ? "dark" : "light");
    };

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                "relative inline-flex h-10 w-10 items-center justify-center rounded-xl",
                "bg-charcoal/5 hover:bg-charcoal/10 dark:bg-charcoal/50 dark:hover:bg-charcoal/80",
                "border border-foreground/10 shadow-sm backdrop-blur-sm",
                "transition-all duration-300 ease-in-out",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                "group"
            )}
            aria-label="Toggle theme"
            title={`Switch to ${resolvedTheme === 'light' ? 'dark' : 'light'} mode`}
        >
            <div className="relative h-5 w-5 flex items-center justify-center">
                <Sun
                    className={cn(
                        "absolute h-5 w-5 text-amber-500 transition-all duration-500",
                        resolvedTheme === "light"
                            ? "rotate-0 scale-100 opacity-100"
                            : "-rotate-90 scale-50 opacity-0"
                    )}
                />
                <Moon
                    className={cn(
                        "absolute h-5 w-5 text-indigo-400 transition-all duration-500",
                        resolvedTheme === "dark"
                            ? "rotate-0 scale-100 opacity-100"
                            : "rotate-90 scale-50 opacity-0"
                    )}
                />
            </div>

            {theme === "system" && (
                <div className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-background border border-foreground/10">
                    <Monitor className="h-2.5 w-2.5 text-foreground/70" />
                </div>
            )}
        </button>
    );
}
