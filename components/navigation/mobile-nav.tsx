'use client';

import React from 'react';
import Link from 'next/link';
import * as Dialog from '@radix-ui/react-dialog';
import * as Accordion from '@radix-ui/react-accordion';
import { mobileNavigationConfig } from '@/lib/navigation-config';
import { useNavigation } from './navigation-context';
import { X, ChevronDown, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

export function MobileNav() {
    const { isMobileMenuOpen, setMobileMenuOpen, activeSection } = useNavigation();

    const handleLinkClick = () => {
        setMobileMenuOpen(false);
    };

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-lg text-foreground hover:bg-foreground/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                aria-label="Open navigation menu"
            >
                <Menu className="h-6 w-6" />
            </button>

            {/* Mobile Menu Dialog */}
            <Dialog.Root open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <Dialog.Portal>
                    <Dialog.Overlay
                        className={cn(
                            'fixed inset-0 z-50 bg-background/80 backdrop-blur-sm',
                            'data-[state=open]:animate-in data-[state=closed]:animate-out',
                            'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'
                        )}
                    />
                    <Dialog.Content
                        className={cn(
                            'fixed right-0 top-0 z-50 h-full w-full max-w-sm',
                            'bg-charcoal border-l border-foreground/10 shadow-2xl',
                            'data-[state=open]:animate-in data-[state=closed]:animate-out',
                            'data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right',
                            'data-[state=closed]:duration-300 data-[state=open]:duration-300'
                        )}
                        aria-label="Mobile navigation menu"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-foreground/10 px-6 py-4">
                            <Dialog.Title className="text-lg font-semibold text-foreground">
                                Navigation
                            </Dialog.Title>
                            <Dialog.Close
                                className="p-2 rounded-lg text-foreground/80 hover:bg-foreground/5 hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                                aria-label="Close navigation menu"
                            >
                                <X className="h-5 w-5" />
                            </Dialog.Close>
                        </div>

                        {/* Navigation Items */}
                        <nav className="flex-1 overflow-y-auto px-4 py-6" aria-label="Mobile navigation">
                            <Accordion.Root type="multiple" className="space-y-2">
                                {mobileNavigationConfig.map((item) => {
                                    const isActive =
                                        activeSection === item.id || item.href.includes(`#${activeSection}`);

                                    // Items with children (accordion)
                                    if (item.children && item.children.length > 0) {
                                        return (
                                            <Accordion.Item
                                                key={item.id}
                                                value={item.id}
                                                className="rounded-lg border border-foreground/10 overflow-hidden"
                                            >
                                                <Accordion.Header>
                                                    <Accordion.Trigger
                                                        className={cn(
                                                            'group flex w-full items-center justify-between px-4 py-3 text-left transition-colors',
                                                            'hover:bg-foreground/5',
                                                            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent/50',
                                                            isActive && 'bg-foreground/5'
                                                        )}
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            {item.icon && (
                                                                <item.icon className={cn(
                                                                    'h-5 w-5 transition-colors',
                                                                    isActive ? 'text-accent' : 'text-foreground/60'
                                                                )} />
                                                            )}
                                                            <span
                                                                className={cn(
                                                                    'text-sm font-medium transition-colors',
                                                                    isActive ? 'text-accent' : 'text-foreground'
                                                                )}
                                                            >
                                                                {item.label}
                                                            </span>
                                                        </div>
                                                        <ChevronDown
                                                            className="h-4 w-4 text-foreground/60 transition-transform duration-200 group-data-[state=open]:rotate-180"
                                                            aria-hidden="true"
                                                        />
                                                    </Accordion.Trigger>
                                                </Accordion.Header>
                                                <Accordion.Content
                                                    className={cn(
                                                        'overflow-hidden bg-foreground/[0.02]',
                                                        'data-[state=open]:animate-accordion-down',
                                                        'data-[state=closed]:animate-accordion-up'
                                                    )}
                                                >
                                                    <ul className="space-y-1 px-4 py-3">
                                                        {item.children.map((child) => {
                                                            const isChildActive =
                                                                activeSection === child.id ||
                                                                child.href.includes(`#${activeSection}`);

                                                            return (
                                                                <li key={child.id}>
                                                                    <Link
                                                                        href={child.href}
                                                                        onClick={handleLinkClick}
                                                                        className={cn(
                                                                            'flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm transition-colors',
                                                                            'hover:bg-foreground/5',
                                                                            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent/50',
                                                                            isChildActive
                                                                                ? 'bg-primary/10 text-accent font-medium'
                                                                                : 'text-foreground/80'
                                                                        )}
                                                                    >
                                                                        {child.icon && (
                                                                            <child.icon
                                                                                className={cn(
                                                                                    'h-4 w-4',
                                                                                    isChildActive ? 'text-accent' : 'text-foreground/60'
                                                                                )}
                                                                            />
                                                                        )}
                                                                        {child.label}
                                                                    </Link>
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                                </Accordion.Content>
                                            </Accordion.Item>
                                        );
                                    }

                                    // Items without children (simple links)
                                    return (
                                        <Link
                                            key={item.id}
                                            href={item.href}
                                            onClick={handleLinkClick}
                                            className={cn(
                                                'flex items-center gap-3 rounded-lg border border-foreground/10 px-4 py-3 transition-colors',
                                                'hover:bg-foreground/5',
                                                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50',
                                                isActive ? 'bg-primary/10 text-accent border-accent/20' : 'text-foreground'
                                            )}
                                        >
                                            {item.icon && (
                                                <item.icon
                                                    className={cn(
                                                        'h-5 w-5',
                                                        isActive ? 'text-accent' : 'text-foreground/60'
                                                    )}
                                                />
                                            )}
                                            <span className="text-sm font-medium">{item.label}</span>
                                        </Link>
                                    );
                                })}
                            </Accordion.Root>
                        </nav>

                        {/* Footer */}
                        <div className="border-t border-foreground/10 px-6 py-4">
                            <p className="text-xs text-foreground/60 text-center">
                                DAN GTS Import & Export
                            </p>
                        </div>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </>
    );
}
