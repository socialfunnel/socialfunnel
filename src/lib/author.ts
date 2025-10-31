export const authors = {
  lewis: {
    name: "Lewis Ngunyi",
    role: "Founder & Lead Consultant",
    avatar: "/assets/images/authors/lewis.jpg",
    bio: "Visionary leader driving Social Funnel's mission to transform service businesses through strategic automation.",
    social: {
      linkedin: "https://linkedin.com/in/lewisngunyi",
    },
  },
  mumbi: {
    name: "Mumbi Maina",
    role: "Project Manager",
    avatar: "/assets/images/authors/mumbi.jpg",
    bio: "Ensures seamless project execution and exceptional client experience across all Social Funnel services.",
  },
  layken: {
    name: "Layken Wamuyu",
    role: "Production Coordinator",
    avatar: "/assets/images/authors/layken.jpg",
    bio: "Oversees production workflows and ensures timely delivery of all marketing materials and campaign assets.",
  },
  monica: {
    name: "Monica Mugo",
    role: "Social Media Manager",
    avatar: "/assets/images/authors/monica.jpg",
    bio: "Develops creative social media campaigns and manages online communities to enhance brand engagement.",
  },
  beryl: {
    name: "Beryl Mase",
    role: "Project Assistant",
    avatar: "/assets/images/authors/beryl.jpg",
    bio: "Provides essential support to project management and ensures smooth coordination across all client deliverables.",
  },
} as const;

export type AuthorId = keyof typeof authors;
