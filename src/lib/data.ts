import { defaultPosts, defaultProjects } from "@/content/site";
import type { Locale } from "@/content/site";
import { connectToDatabase, isDatabaseConfigured } from "@/lib/db";
import { ProjectModel } from "@/models/Project";
import { PostModel } from "@/models/Post";
import type { Post, Project } from "@/types";

function normalize(item: unknown) {
  const raw = item as Record<string, unknown> & { _id?: { toString(): string }; createdAt?: Date; publishedAt?: Date };
  return {
    ...raw,
    _id: raw._id?.toString() || "",
    createdAt: raw.createdAt instanceof Date ? raw.createdAt.toISOString() : undefined,
    publishedAt: raw.publishedAt instanceof Date ? raw.publishedAt.toISOString() : undefined
  };
}

function getLocalizedDefaultPosts(locale: Locale): Post[] {
  return defaultPosts.map((item) => {
    const localized = item[locale];
    return {
      slug: item.slug,
      publishedAt: item.publishedAt,
      coverImage: "coverImage" in item ? item.coverImage : "",
      title: localized.title,
      excerpt: localized.excerpt,
      category: localized.category,
      readingTime: localized.readingTime,
      content: localized.content,
      published: true
    } as Post;
  });
}

export async function getProjects(limit?: number): Promise<Project[]> {
  if (!isDatabaseConfigured()) return defaultProjects.slice(0, limit || defaultProjects.length) as Project[];
  await connectToDatabase();
  const query = ProjectModel.find({ published: true }).sort({ featured: -1, createdAt: -1 });
  if (limit) query.limit(limit);
  const projects = await query.lean();
  return projects.map((project) => normalize(project)) as unknown as Project[];
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  if (!isDatabaseConfigured()) return (defaultProjects.find((item) => item.slug === slug) || null) as Project | null;
  await connectToDatabase();
  const project = await ProjectModel.findOne({ slug, published: true }).lean();
  return project ? (normalize(project) as unknown as Project) : null;
}

export async function getPosts(locale: Locale = "en", limit?: number): Promise<Post[]> {
  if (!isDatabaseConfigured()) return getLocalizedDefaultPosts(locale).slice(0, limit || defaultPosts.length);
  await connectToDatabase();
  const query = PostModel.find({ published: true }).sort({ publishedAt: -1, createdAt: -1 });
  if (limit) query.limit(limit);
  const posts = await query.lean();
  return posts.map((post) => normalize(post)) as unknown as Post[];
}

export async function getPostBySlug(slug: string, locale: Locale = "en"): Promise<Post | null> {
  if (!isDatabaseConfigured()) return getLocalizedDefaultPosts(locale).find((item) => item.slug === slug) || null;
  await connectToDatabase();
  const post = await PostModel.findOne({ slug, published: true }).lean();
  return post ? (normalize(post) as unknown as Post) : null;
}
