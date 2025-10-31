// keystatic.config.ts
import React from "react";
import { config, fields, collection } from "@keystatic/core";
import { authors } from "./src/lib/author";

export default config({
  storage:
    process.env.NODE_ENV === "production"
      ? {
          kind: "github" as const,
          repo: "elviswangari/socialfunnel",
        }
      : {
          kind: "local" as const,
        },
  ui: {
    brand: {
      name: "SocialFunnel",
      mark: ({ colorScheme }) => {
        const logoPath = "/favicon.png";
        return React.createElement("img", {
          src: logoPath,
          alt: "SocialFunnel Logo",
          height: 24,
          style: {
            height: "24px",
            width: "auto",
            // filter: colorScheme === "light" ? "brightness(0) invert(1)" : "none",
          },
        });
      },
    },
    navigation: {
      Writing: ["posts", "authors"],
    },
  },
  collections: {
    authors: collection({
      label: "Authors",
      slugField: "name",
      path: "src/content/authors/*",
      format: { data: "json" },
      previewUrl: `/preview/start?branch={branch}&to=/about`,
      schema: {
        name: fields.slug({ name: { label: "Full Name" } }),
        role: fields.text({
          label: "Role/Position",
          description: "e.g., 'Co-Founder & CEO'",
        }),
        bio: fields.text({
          label: "Bio",
          description: "Brief description about the team member",
          multiline: true,
        }),
        avatar: fields.image({
          label: "Profile Photo",
          directory: "public/assets/images/Team",
          publicPath: "/assets/images/Team/",
        }),
        email: fields.text({
          label: "Email Address",
          validation: { isRequired: false },
        }),
        linkedin: fields.text({
          label: "LinkedIn URL",
          validation: { isRequired: false },
        }),
        twitter: fields.text({
          label: "Twitter/X Handle",
          validation: { isRequired: false },
        }),
      },
    }),
    posts: collection({
      label: "Blog Posts",
      slugField: "title",
      path: "src/content/posts/*",
      format: { contentField: "content" },
      previewUrl: `/preview/start?branch={branch}&to=/blog/{slug}`,
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        excerpt: fields.text({
          label: "Excerpt",
          description: "A brief summary of the blog post",
          multiline: true,
        }),
        content: fields.markdoc({ label: "Content" }),
        featured: fields.checkbox({
          label: "Featured Post",
          description: "Mark this post as featured to display it prominently",
        }),
        category: fields.select({
          label: "Category",
          options: [
            { label: "Lead Generation", value: "Lead Generation" },
            { label: "Marketing Automation", value: "Marketing Automation" },
            { label: "Business Growth", value: "Business Growth" },
            { label: "Digital Strategy", value: "Digital Strategy" },
            { label: "Case Studies", value: "Case Studies" },
          ],
          defaultValue: "Lead Generation",
        }),
        author: fields.select({
          label: "Author",
          options: Object.entries(authors).map(([key, author]) => ({
            label: author.name,
            value: key,
          })),
          defaultValue: "lewis",
        }),
        publishedAt: fields.date({ label: "Published Date" }),
        readTime: fields.text({
          label: "Read Time",
          description: 'e.g., "8 min read"',
        }),
        image: fields.image({
          label: "Featured Image",
          directory: "public/assets/images/blog",
          publicPath: "/assets/images/blog/",
        }),
        seo: fields.object({
          title: fields.text({
            label: "SEO Title",
            description:
              "Title for search engines (leave empty to use post title)",
          }),
          description: fields.text({
            label: "SEO Description",
            description:
              "Description for search engines (leave empty to use excerpt)",
            multiline: true,
          }),
        }),
      },
    }),
  },
});
