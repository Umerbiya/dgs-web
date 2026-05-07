'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { BreadcrumbItem } from '@/lib/types/navigation';
import { cn } from '@/lib/utils';

interface BreadcrumbProps {
    items: BreadcrumbItem[];
    className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
    if (!items || items.length === 0) return null;

    return (
        <nav
            aria-label="Breadcrumb"
            className={cn('flex items-center gap-2 text-sm', className)}
        >
            <ol
                className="flex flex-wrap items-center gap-2"
                itemScope
                itemType="https://schema.org/BreadcrumbList"
            >
                <li
                    itemProp="itemListElement"
                    itemScope
                    itemType="https://schema.org/ListItem"
                    className="flex items-center gap-2"
                >
                    <Link
                        href="/"
                        itemProp="item"
                        className={cn(
                            'flex items-center gap-1.5 rounded-lg px-2 py-1 transition-colors',
                            'hover:bg-foreground/5 hover:text-accent',
                            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50',
                            'text-foreground/60'
                        )}
                    >
                        <Home className="h-4 w-4" aria-hidden="true" />
                        <span itemProp="name" className="sr-only sm:not-sr-only">
                            Home
                        </span>
                    </Link>
                    <meta itemProp="position" content="1" />
                    <ChevronRight className="h-4 w-4 text-foreground/40" aria-hidden="true" />
                </li>

                {items.map((item, index) => (
                    <li
                        key={item.href}
                        itemProp="itemListElement"
                        itemScope
                        itemType="https://schema.org/ListItem"
                        className="flex items-center gap-2"
                    >
                        {item.current ? (
                            <span
                                itemProp="name"
                                className="rounded-lg px-2 py-1 text-foreground font-medium"
                                aria-current="page"
                            >
                                {item.label}
                            </span>
                        ) : (
                            <Link
                                href={item.href}
                                itemProp="item"
                                className={cn(
                                    'rounded-lg px-2 py-1 transition-colors',
                                    'hover:bg-foreground/5 hover:text-accent',
                                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50',
                                    'text-foreground/60'
                                )}
                            >
                                <span itemProp="name">{item.label}</span>
                            </Link>
                        )}
                        <meta itemProp="position" content={String(index + 2)} />
                        {!item.current && index < items.length - 1 && (
                            <ChevronRight className="h-4 w-4 text-foreground/40" aria-hidden="true" />
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
