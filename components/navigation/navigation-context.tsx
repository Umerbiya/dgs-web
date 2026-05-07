'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { NavigationState } from '@/lib/types/navigation';

interface NavigationContextType extends NavigationState {
    setMobileMenuOpen: (open: boolean) => void;
    setActiveSection: (section: string | null) => void;
    toggleMobileMenu: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: React.ReactNode }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll detection for header background
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    // Detect active section based on scroll position
    useEffect(() => {
        const sections = document.querySelectorAll('section[id], div[id]');

        const handleScrollSpy = () => {
            const scrollPosition = window.scrollY + 100;

            sections.forEach((section) => {
                const sectionTop = (section as HTMLElement).offsetTop;
                const sectionHeight = (section as HTMLElement).offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveSection(sectionId);
                }
            });
        };

        window.addEventListener('scroll', handleScrollSpy, { passive: true });
        handleScrollSpy(); // Initial call

        return () => window.removeEventListener('scroll', handleScrollSpy);
    }, []);

    const setMobileMenuOpen = useCallback((open: boolean) => {
        setIsMobileMenuOpen(open);
    }, []);

    const toggleMobileMenu = useCallback(() => {
        setIsMobileMenuOpen(prev => !prev);
    }, []);

    const value: NavigationContextType = {
        isMobileMenuOpen,
        activeSection,
        isScrolled,
        setMobileMenuOpen,
        setActiveSection,
        toggleMobileMenu,
    };

    return (
        <NavigationContext.Provider value={value}>
            {children}
        </NavigationContext.Provider>
    );
}

export function useNavigation() {
    const context = useContext(NavigationContext);
    if (context === undefined) {
        throw new Error('useNavigation must be used within a NavigationProvider');
    }
    return context;
}
