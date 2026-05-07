'use client';

import React from 'react';
import Link from 'next/link';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { MegaMenuContent } from '@/lib/types/navigation';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MegaMenuProps {
    label: string;
    content: MegaMenuContent;
    isActive?: boolean;
}

export function MegaMenu({ label, content, isActive }: MegaMenuProps) {
    const [open, setOpen] = React.useState(false);

    return (
        <DropdownMenu.Root open={open} onOpenChange={setOpen}>
            <DropdownMenu.Trigger
                className={cn(
                    'group inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-all duration-300',
                    'hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                    isActive ? 'text-accent' : 'text-foreground/80'
                )}
                aria-label={`Open ${label} menu`}
            >
                {label}
                <ChevronDown
                    className={cn(
                        'h-4 w-4 transition-transform duration-300',
                        open && 'rotate-180'
                    )}
                    aria-hidden="true"
                />
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content
                    className={cn(
                        'mega-menu-content z-50 mt-2 overflow-hidden rounded-xl border border-foreground/10',
                        'bg-charcoal/95 backdrop-blur-xl shadow-2xl',
                        'animate-in fade-in-0 zoom-in-95 slide-in-from-top-2',
                        'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95'
                    )}
                    align="start"
                    sideOffset={8}
                >
                    <div className={cn(
                        "p-6",
                        content.sections.length >= 3 ? "w-[900px]" : "w-[640px]",
                        "max-w-[calc(100vw-2rem)]"
                    )}>
                        <div className={cn(
                            "grid gap-6",
                            content.sections.length >= 3 ? "grid-cols-3" : "grid-cols-2"
                        )}>
                            {content.sections.map((section, idx) => (
                                <div key={idx} className="space-y-3">
                                    <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground/60">
                                        {section.title}
                                    </h3>
                                    <ul className="space-y-1.5">
                                        {section.items.map((item) => (
                                            <li key={item.id}>
                                                <DropdownMenu.Item asChild>
                                                    <Link
                                                        href={item.href}
                                                        onClick={() => setOpen(false)}
                                                        className={cn(
                                                            'group flex items-start gap-3 rounded-lg p-3 transition-all duration-200',
                                                            'hover:bg-foreground/5 focus-visible:bg-foreground/5',
                                                            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50'
                                                        )}
                                                    >
                                                        {item.icon && (
                                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                                                                <item.icon className="h-5 w-5" />
                                                            </div>
                                                        )}
                                                        <div className="flex-1 space-y-1">
                                                            <div className="text-sm font-medium text-foreground transition-colors group-hover:text-accent">
                                                                {item.label}
                                                            </div>
                                                            {item.description && (
                                                                <p className="text-xs text-foreground/60 leading-relaxed">
                                                                    {item.description}
                                                                </p>
                                                            )}
                                                        </div>
                                                    </Link>
                                                </DropdownMenu.Item>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {content.featured && (
                            <>
                                <div className="my-6 border-t border-foreground/10" />
                                <Link
                                    href={content.featured.href}
                                    onClick={() => setOpen(false)}
                                    className={cn(
                                        'group flex items-center gap-4 rounded-lg p-4 transition-all duration-200',
                                        'bg-primary/5 hover:bg-primary/10',
                                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50'
                                    )}
                                >
                                    <div className="flex-1">
                                        <div className="mb-1 text-sm font-semibold text-foreground">
                                            {content.featured.title}
                                        </div>
                                        <p className="text-xs text-foreground/60">
                                            {content.featured.description}
                                        </p>
                                    </div>
                                    <div className="text-xs font-medium text-primary group-hover:text-accent transition-colors">
                                        {content.featured.cta} →
                                    </div>
                                </Link>
                            </>
                        )}
                    </div>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
}
