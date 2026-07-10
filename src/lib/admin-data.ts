import { connectToDatabase, isDatabaseConfigured } from "@/lib/db";
import { InquiryModel } from "@/models/Inquiry";
import { ProjectModel } from "@/models/Project";
import { PostModel } from "@/models/Post";
import type { Inquiry, Post, Project } from "@/types";

function plain(item: unknown) {
  const raw = item as Record<string, unknown> & { _id?: { toString(): string }; createdAt?: Date; publishedAt?: Date };
  return {
    ...raw,
    _id: raw._id?.toString() || "",
    createdAt: raw.createdAt instanceof Date ? raw.createdAt.toISOString() : undefined,
    publishedAt: raw.publishedAt instanceof Date ? raw.publishedAt.toISOString() : undefined
  };
}

export async function getAdminOverview() {
  if (!isDatabaseConfigured()) return { configured: false, projects: 0, posts: 0, inquiries: 0, latest: [] as Inquiry[] };
  await connectToDatabase();
  const [projects, posts, inquiries, latest] = await Promise.all([
    ProjectModel.countDocuments(),
    PostModel.countDocuments(),
    InquiryModel.countDocuments({ status: "new" }),
    InquiryModel.find().sort({ createdAt: -1 }).limit(5).lean()
  ]);
  return { configured: true, projects, posts, inquiries, latest: latest.map((item) => plain(item) as unknown as Inquiry) };
}

export async function getAdminProjects(): Promise<Project[]> {
  if (!isDatabaseConfigured()) return [];
  await connectToDatabase();
  const items = await ProjectModel.find().sort({ createdAt: -1 }).lean();
  return items.map((item) => plain(item) as unknown as Project);
}

export async function getAdminPosts(): Promise<Post[]> {
  if (!isDatabaseConfigured()) return [];
  await connectToDatabase();
  const items = await PostModel.find().sort({ createdAt: -1 }).lean();
  return items.map((item) => plain(item) as unknown as Post);
}

export async function getAdminInquiries(): Promise<Inquiry[]> {
  if (!isDatabaseConfigured()) return [];
  await connectToDatabase();
  const items = await InquiryModel.find().sort({ createdAt: -1 }).lean();
  return items.map((item) => plain(item) as unknown as Inquiry);
}
