'use client';

import React from 'react';
import Link from 'next/link';
import { navigationConfig } from '@/lib/navigation-config';
import { MegaMenu } from './mega-menu';
import { useNavigation } from './navigation-context';
import { cn } from '@/lib/utils';

export function DesktopNav() {
    const { activeSection } = useNavigation();

    return (
        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary navigation">
            {navigationConfig.map((item) => {
                const isActive = activeSection === item.id || item.href.includes(`#${activeSection}`);

                if (item.megaMenu) {
                    return (
                        <MegaMenu
                            key={item.id}
                            label={item.label}
                            content={item.megaMenu}
                            isActive={isActive}
                        />
                    );
                }

                return (
                    <Link
                        key={item.id}
                        href={item.href}
                        className={cn(
                            'px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg',
                            'hover:text-accent hover:bg-foreground/5',
                            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                            isActive ? 'text-accent bg-foreground/5' : 'text-foreground/80'
                        )}
                    >
                        {item.label}
                    </Link>
                );
            })}
        </nav>
    );
}
