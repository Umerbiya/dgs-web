"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeProviderProps {
    children: React.ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
    enableSystem?: boolean;
}

interface ThemeProviderState {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    resolvedTheme: "light" | "dark";
}

const initialState: ThemeProviderState = {
    theme: "system",
    setTheme: () => null,
    resolvedTheme: "light",
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
    children,
    defaultTheme = "system",
    storageKey = "dangts-theme",
    enableSystem = true,
}: ThemeProviderProps) {
    const [theme, setThemeState] = useState<Theme>(defaultTheme);
    const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem(storageKey) as Theme;
        if (savedTheme) {
            setThemeState(savedTheme);
        }
    }, [storageKey]);

    useEffect(() => {
        if (!mounted) return;

        const root = window.document.documentElement;
        root.classList.remove("light", "dark");

        let currentTheme: "light" | "dark";

        if (theme === "system" && enableSystem) {
            currentTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light";
        } else {
            currentTheme = theme as "light" | "dark";
        }

        root.classList.add(currentTheme);
        root.style.colorScheme = currentTheme;
        setResolvedTheme(currentTheme);
    }, [theme, mounted, enableSystem]);

    // Listen for system preference changes
    useEffect(() => {
        if (!mounted || !enableSystem || theme !== "system") return;

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = (e: MediaQueryListEvent) => {
            const root = window.document.documentElement;
            root.classList.remove("light", "dark");
            const newTheme = e.matches ? "dark" : "light";
            root.classList.add(newTheme);
            root.style.colorScheme = newTheme;
            setResolvedTheme(newTheme);
        };

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, [theme, enableSystem, mounted]);

    const setTheme = (newTheme: Theme) => {
        localStorage.setItem(storageKey, newTheme);
        setThemeState(newTheme);
    };

    const value = {
        theme,
        setTheme,
        resolvedTheme,
    };

    // Return plain children before mount to match SSR HTML exactly
    if (!mounted) {
        return <>{children}</>;
    }

    return (
        <ThemeProviderContext.Provider value={value}>
            {children}
        </ThemeProviderContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext);
    if (context === undefined)
        throw new Error("useTheme must be used within a ThemeProvider");
    return context;
};

// Inline script to prevent FOUC (Flash of Unstyled Content) before React hydrates
export const ThemeScript = ({ storageKey = "dangts-theme", defaultTheme = "system" }) => {
    return (
        <script
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
                __html: `
          (function() {
            try {
              var localTheme = window.localStorage.getItem('${storageKey}');
              var theme = localTheme || '${defaultTheme}';
              var isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
              var root = document.documentElement;
              if (isDark) {
                root.classList.add('dark');
                root.style.colorScheme = 'dark';
              } else {
                root.classList.add('light');
                root.style.colorScheme = 'light';
              }
            } catch (e) {}
          })();
        `,
            }}
        />
    );
};
