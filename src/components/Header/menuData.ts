interface MenuLink {
    label: string;
    href: string;
}

interface MenuCategory {
    heading: string;
    links: MenuLink[];
}

interface MenuItem {
    title: string;
    categories: MenuCategory[];
}

export const menuData: MenuItem[] = [
    {
        title: "Products",
        categories: [
            {
                heading: "UI Components",
                links: [
                    { label: "Buttons", href: "/products/ui/buttons" },
                    { label: "Forms", href: "/products/ui/forms" },
                    { label: "Cards", href: "/products/ui/cards" },
                    { label: "Modals", href: "/products/ui/modals" },
                ],
            },
            {
                heading: "Integrations",
                links: [
                    { label: "Stripe", href: "/products/integrations/stripe" },
                    { label: "Firebase", href: "/products/integrations/firebase" },
                    { label: "Twilio", href: "/products/integrations/twilio" },
                ],
            },
            {
                heading: "Tools",
                links: [
                    { label: "Theme Builder", href: "/products/tools/theme" },
                    { label: "CLI", href: "/products/tools/cli" },
                ],
            },
        ],
    },
    {
        title: "Solutions",
        categories: [
            {
                heading: "Industries",
                links: [
                    { label: "Healthcare", href: "/solutions/healthcare" },
                    { label: "Finance", href: "/solutions/finance" },
                    { label: "Retail", href: "/solutions/retail" },
                    { label: "Education", href: "/solutions/education" },
                    { label: "Gaming", href: "/solutions/gaming" },
                ],
            },
            {
                heading: "Use Cases",
                links: [
                    { label: "Analytics", href: "/solutions/analytics" },
                    { label: "Automation", href: "/solutions/automation" },
                ],
            },
            {
                heading: "AI Integrations",
                links: [
                    { label: "Chatbots", href: "/solutions/ai/chatbots" },
                    { label: "Vision", href: "/solutions/ai/vision" },
                    { label: "Recommendation", href: "/solutions/ai/recommendation" },
                ],
            },
            {
                heading: "Security",
                links: [
                    { label: "Authentication", href: "/solutions/security/auth" },
                    { label: "Permissions", href: "/solutions/security/permissions" },
                ],
            },
            {
                heading: "Performance",
                links: [
                    { label: "CDN", href: "/solutions/performance/cdn" },
                    { label: "Caching", href: "/solutions/performance/cache" },
                ],
            },
        ],
    },
    {
        title: "Services",
        categories: [
            {
                heading: "Consulting",
                links: [
                    { label: "Strategy", href: "/services/consulting/strategy" },
                    { label: "Implementation", href: "/services/consulting/implementation" },
                    { label: "Training", href: "/services/consulting/training" },
                    { label: "Support", href: "/services/consulting/support" },
                ],
            },
            {
                heading: "Development",
                links: [
                    { label: "Custom Apps", href: "/services/development/custom-apps" },
                    { label: "API Integration", href: "/services/development/api" },
                    { label: "Migration", href: "/services/development/migration" },
                ],
            },
            {
                heading: "Maintenance",
                links: [
                    { label: "Updates", href: "/services/maintenance/updates" },
                    { label: "Monitoring", href: "/services/maintenance/monitoring" },
                    { label: "Security Audits", href: "/services/maintenance/security" },
                ],
            },
        ],
    },
    {
        title: "Resources",
        categories: [
            {
                heading: "Documentation",
                links: [
                    { label: "Getting Started", href: "/resources/docs/getting-started" },
                    { label: "API Reference", href: "/resources/docs/api" },
                    { label: "Tutorials", href: "/resources/docs/tutorials" },
                    { label: "Examples", href: "/resources/docs/examples" },
                ],
            },
            {
                heading: "Learn",
                links: [
                    { label: "Webinars", href: "/resources/learn/webinars" },
                    { label: "Courses", href: "/resources/learn/courses" },
                    { label: "Blog", href: "/resources/learn/blog" },
                ],
            },
            {
                heading: "Community",
                links: [
                    { label: "Forum", href: "/resources/community/forum" },
                    { label: "Discord", href: "/resources/community/discord" },
                    { label: "GitHub", href: "/resources/community/github" },
                ],
            },
        ],
    },
    {
        title: "About",
        categories: [
            {
                heading: "Company",
                links: [
                    { label: "Our Story", href: "/about/company/story" },
                    { label: "Team", href: "/about/company/team" },
                    { label: "Careers", href: "/about/company/careers" },
                    { label: "Press", href: "/about/company/press" },
                ],
            },
            {
                heading: "Contact",
                links: [
                    { label: "Support", href: "/about/contact/support" },
                    { label: "Sales", href: "/about/contact/sales" },
                    { label: "Offices", href: "/about/contact/offices" },
                ],
            },
        ],
    },
];