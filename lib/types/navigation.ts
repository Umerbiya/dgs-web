import { LucideIcon } from 'lucide-react';

/**
 * Base navigation item interface
 */
export interface NavigationItem {
    id: string;
    label: string;
    href: string;
    icon?: LucideIcon;
    description?: string;
    badge?: string;
    children?: NavigationItem[];
    megaMenu?: MegaMenuContent;
    roles?: string[]; // For role-based visibility
    external?: boolean;
}

/**
 * Mega menu content structure
 */
export interface MegaMenuContent {
    sections: MegaMenuSection[];
    featured?: FeaturedItem;
}

/**
 * Individual section within a mega menu
 */
export interface MegaMenuSection {
    title: string;
    items: NavigationItem[];
}

/**
 * Featured item in mega menu
 */
export interface FeaturedItem {
    title: string;
    description: string;
    image?: string;
    href: string;
    cta: string;
}

/**
 * Navigation state interface
 */
export interface NavigationState {
    isMobileMenuOpen: boolean;
    activeSection: string | null;
    isScrolled: boolean;
}

/**
 * Breadcrumb item interface
 */
export interface BreadcrumbItem {
    label: string;
    href: string;
    current?: boolean;
}
