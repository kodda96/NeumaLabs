export const TEAM_MEMBERS = {
  TECH_GURU: {
    name: "Krishan Muthumala",
    title: "Tech Lead",
    description: "Builds the brains behind our AI. No glitches, just pure genius.",
    icon: "/team/muthumala.jpg"
  },
  FOUNDER: {
    name: "Denuwan Liyanage",
    title: "Tech Lead",
    description: "Turns ideas into AI-powered reality.",
    icon: "/team/denuwan.jpg"
  },
  CREATIVE_LEAD: {
    name: "Nipuna Sarathchandra",
    title: "Creative Director",
    description: "Makes sure our AI creations don't look like plastic dolls.",
    icon: "/team/nipuna.jpg"
  },
  CONSULTING_GENIUS: {
    name: "Binal Weerasena",
    title: "Strategy Lead",
    description: "The strategist who helps businesses actually use AI the right way.",
    icon: "/team/binal.jpg"
  }
} as const;

export const COMPANY = {
  name: "Neuma Labs",
  copyright: "© All Rights Reserved",
  socials: {
    facebook: "https://www.facebook.com/neumalabs",
    twitter: "https://twitter.com/neumalabs",
    linkedin: "https://www.linkedin.com/company/105904648/",
    tiktok: "https://www.tiktok.com/@neumalabs?_t=ZS-8uK5FTpW9be&_r=1",
    //discord: "https://discord.gg/neumalabs"
  }
} as const;

export const NAVIGATION = {
  company: {
    title: "Company",
    links: [
      { label: "Services", href: "#services-section" }
    ]
  },
  solutions: {
    title: "Solutions",
    links: [
      //{ label: "Model Training", href: "/solutions/model-training" },
      //{ label: "Creative AI Solutions", href: "/solutions/creative-ai" },
      //{ label: "AI Automation", href: "/solutions/automation" },
      //{ label: "Physical AI Systems", href: "/solutions/physical-ai" }
    ]
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Tutorials", href: "/tutorials" },
      { label: "Blog", href: "/blog" }
    ]
  },
  // support: {
  //   title: "Support",
  //   links: [
  //     { label: "Consulting Services", href: "/consulting" },
  //     { label: "Discord", href: COMPANY.socials.discord }
  //   ]
  // },
  legal: {
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms and Conditions", href: "/terms" },
      { label: "Refund Policy", href: "/refund" }
    ]
  }
} as const;

export const EMAIL_CONFIG = {
  SERVICE_ID: "service_xgh3wcq",
  TEMPLATE_ID: "template_3r14bzh",
  PUBLIC_KEY: "BVP_y57j-VgINoTOW",
  TO_EMAIL: "info@neumalabs.org"
} as const; 