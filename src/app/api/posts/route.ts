import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { connectToDatabase, isDatabaseConfigured } from "@/lib/db";
import { getPosts } from "@/lib/data";
import { PostModel } from "@/models/Post";
import { postSchema } from "@/lib/validators";

export async function GET() { return NextResponse.json({ items: await getPosts() }); }

export async function POST(request: Request) {
  if (!(await getAdminSession())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!isDatabaseConfigured()) return NextResponse.json({ error: "Connect MongoDB first." }, { status: 503 });
  const parsed = postSchema.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ error: "Please check the post fields.", details: parsed.error.flatten() }, { status: 400 });
  try {
    await connectToDatabase();
    const data = { ...parsed.data, publishedAt: parsed.data.publishedAt ? new Date(parsed.data.publishedAt) : new Date() };
    const post = await PostModel.create(data);
    return NextResponse.json({ item: { ...post.toObject(), _id: post._id.toString() } }, { status: 201 });
  } catch (error) {
    const message = error instanceof Error && error.message.includes("duplicate") ? "This slug is already in use." : "Could not save post.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
