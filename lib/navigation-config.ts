import {
    Building2,
    Package,
    Users,
    Target,
    Award,
    Network,
    Mail,
    Home,
    Truck,
    Settings,
    FileText,
    Eye,
    Shield,
    Handshake,
    type LucideIcon,
} from 'lucide-react';
import { NavigationItem } from './types/navigation';

/**
 * Main navigation structure for DAN GTS website
 * Enterprise-grade navigation with support for mega menus and role-based visibility
 */
export const navigationConfig: NavigationItem[] = [
    {
        id: 'home',
        label: 'Home',
        href: '/',
        icon: Home,
    },
    {
        id: 'company',
        label: 'Company',
        href: '/company',
        icon: Building2,
        megaMenu: {
            sections: [
                {
                    title: 'About Us',
                    items: [
                        {
                            id: 'about',
                            label: 'About DAN GTS',
                            href: '/company#about',
                            description: 'Our story since 2015',
                            icon: FileText,
                        },
                        {
                            id: 'leadership',
                            label: 'Leadership Team',
                            href: '/company#leadership',
                            description: 'Meet our experienced leaders',
                            icon: Users,
                        },
                        {
                            id: 'organization',
                            label: 'Organization',
                            href: '/company#organization',
                            description: 'Our organizational structure',
                            icon: Network,
                        },
                    ],
                },
                {
                    title: 'Our Values',
                    items: [
                        {
                            id: 'vision-mission',
                            label: 'Vision & Mission',
                            href: '/vision-mission',
                            description: 'Our guiding principles',
                            icon: Eye,
                        },
                        {
                            id: 'quality',
                            label: 'Quality & Standards',
                            href: '/quality',
                            description: 'Commitment to excellence',
                            icon: Award,
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'products',
        label: 'Products & Services',
        href: '/portfolio',
        icon: Package,
        megaMenu: {
            sections: [
                {
                    title: 'Infrastru cture',
                    items: [
                        {
                            id: 'asphalt',
                            label: 'Asphalt & Bitumen',
                            href: '/portfolio#infrastructure',
                            description: 'Premium road construction materials',
                            icon: Building2,
                        },
                        {
                            id: 'steel',
                            label: 'Steel Products',
                            href: '/portfolio#steel',
                            description: '3SP steel billets for industry',
                            icon: Settings,
                        },
                    ],
                },
                {
                    title: 'Logistics & Transport',
                    items: [
                        {
                            id: 'logistics',
                            label: 'Nationwide Logistics',
                            href: '/portfolio#logistics',
                            description: 'End-to-end logistics solutions',
                            icon: Truck,
                        },
                        {
                            id: 'equipment',
                            label: 'Equipment Rental',
                            href: '/portfolio#equipment',
                            description: 'Construction equipment & machinery',
                            icon: Settings,
                        },
                    ],
                },
                {
                    title: 'Mobility & Parts',
                    items: [
                        {
                            id: 'mobility',
                            label: 'Sustainable Mobility',
                            href: '/portfolio#mobility',
                            description: 'EVs and heavy-duty trucks',
                            icon: Truck,
                        },
                        {
                            id: 'parts',
                            label: 'RÖLTEK Parts',
                            href: '/portfolio#parts',
                            description: 'Spare parts distribution',
                            icon: Settings,
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'partners',
        label: 'Partners',
        href: '/partners',
        icon: Handshake,
    },
    {
        id: 'contact',
        label: 'Contact',
        href: '/contact',
        icon: Mail,
    },
];

/**
 * Mobile-optimized navigation (flattened structure)
 */
export const mobileNavigationConfig: NavigationItem[] = [
    {
        id: 'home',
        label: 'Home',
        href: '/',
        icon: Home,
    },
    {
        id: 'company',
        label: 'Company',
        href: '/company',
        icon: Building2,
        children: [
            {
                id: 'about',
                label: 'About DAN GTS',
                href: '/company#about',
                icon: FileText,
            },
            {
                id: 'leadership',
                label: 'Leadership Team',
                href: '/company#leadership',
                icon: Users,
            },
            {
                id: 'organization',
                label: 'Organization',
                href: '/company#organization',
                icon: Network,
            },
            {
                id: 'vision-mission',
                label: 'Vision & Mission',
                href: '/vision-mission',
                icon: Eye,
            },
            {
                id: 'quality',
                label: 'Quality & Standards',
                href: '/quality',
                icon: Shield,
            },
        ],
    },
    {
        id: 'products',
        label: 'Products & Services',
        href: '/portfolio',
        icon: Package,
        children: [
            {
                id: 'infrastructure',
                label: 'Infrastructure Materials',
                href: '/portfolio#infrastructure',
                icon: Building2,
            },
            {
                id: 'steel',
                label: 'Industrial Steel',
                href: '/portfolio#steel',
                icon: Settings,
            },
            {
                id: 'logistics',
                label: 'Nationwide Logistics',
                href: '/portfolio#logistics',
                icon: Truck,
            },
            {
                id: 'equipment',
                label: 'Equipment Rental',
                href: '/portfolio#equipment',
                icon: Settings,
            },
            {
                id: 'mobility',
                label: 'Sustainable Mobility',
                href: '/portfolio#mobility',
                icon: Truck,
            },
            {
                id: 'parts',
                label: 'RÖLTEK Parts',
                href: '/portfolio#parts',
                icon: Settings,
            },
        ],
    },
    {
        id: 'partners',
        label: 'Partners',
        href: '/partners',
        icon: Handshake,
    },
    {
        id: 'contact',
        label: 'Contact',
        href: '/contact',
        icon: Mail,
    },
];
