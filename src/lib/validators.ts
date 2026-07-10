import { z } from "zod";

export const inquirySchema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email().max(160),
  phone: z.string().max(40).optional().or(z.literal("")),
  service: z.string().max(100).optional().or(z.literal("")),
  message: z.string().min(12).max(3000)
});

export const projectSchema = z.object({
  title: z.string().min(2).max(120),
  slug: z.string().min(2).max(130).regex(/^[a-z0-9-]+$/),
  category: z.string().min(2).max(80),
  tags: z.array(z.string().min(1).max(30)).max(8).default([]),
  excerpt: z.string().min(8).max(500),
  year: z.string().max(10).optional().or(z.literal("")),
  imageUrl: z.string().url().optional().or(z.literal("")),
  liveUrl: z.string().url().optional().or(z.literal("")),
  featured: z.boolean().default(false),
  published: z.boolean().default(true)
});

export const postSchema = z.object({
  title: z.string().min(2).max(160),
  slug: z.string().min(2).max(160).regex(/^[a-z0-9-]+$/),
  excerpt: z.string().min(8).max(500),
  content: z.string().min(40).max(25000),
  category: z.string().min(2).max(80),
  readingTime: z.string().max(20).optional().or(z.literal("")),
  coverImage: z.string().url().optional().or(z.literal("")),
  published: z.boolean().default(true),
  publishedAt: z.string().optional().or(z.literal(""))
});
