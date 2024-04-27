export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Velo's petti kade",
	description: "Market the shit here",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Get Started",
      href: "/get-started",
    },
    // {
    //   label: "Pricing",
    //   href: "/pricing",
    // },
    // {
    //   label: "Blog",
    //   href: "/blog",
    // },
    // {
    //   label: "About",
    //   href: "/about",
    // }
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/EmithD",
		twitter: "https://twitter.com/VeloxalYT",
		docs: "https://nextui.org",
		discord: "https://discord.com/",
    	join: "/join-us"
	},
};
