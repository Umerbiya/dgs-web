'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { DesktopNav } from './desktop-nav';
import { MobileNav } from './mobile-nav';
import { useNavigation } from './navigation-context';
import { cn } from '@/lib/utils';

import { ThemeToggle } from '@/components/theme-toggle';

export function Header() {
    const { isScrolled } = useNavigation();

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-40 transition-all duration-500',
                isScrolled
                    ? 'bg-charcoal/95 backdrop-blur-xl border-b border-foreground/10 shadow-lg'
                    : 'bg-transparent'
            )}
        >
            <div className="container-custom">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="#hero"
                        className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 rounded-lg"
                    >
                        <div className="relative h-12 w-[180px]">
                            <Image
                                src="/images/logo.png"
                                alt="DAN GTS"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Navigation Container */}
                    <nav className="flex items-center gap-4" aria-label="Primary navigation">
                        {/* Desktop Navigation */}
                        <DesktopNav />

                        {/* Theme Toggle */}
                        <div className="flex items-center">
                            <ThemeToggle />
                        </div>

                        {/* Mobile Navigation */}
                        <MobileNav />
                    </nav>
                </div>
            </div>
        </header>
    );
}
