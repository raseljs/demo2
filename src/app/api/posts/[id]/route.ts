import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { connectToDatabase, isDatabaseConfigured } from "@/lib/db";
import { PostModel } from "@/models/Post";
import { postSchema } from "@/lib/validators";

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await getAdminSession())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!isDatabaseConfigured()) return NextResponse.json({ error: "Connect MongoDB first." }, { status: 503 });
  const parsed = postSchema.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ error: "Please check the post fields." }, { status: 400 });
  const { id } = await params;
  await connectToDatabase();
  const data = { ...parsed.data, publishedAt: parsed.data.publishedAt ? new Date(parsed.data.publishedAt) : new Date() };
  const post = (await PostModel.findByIdAndUpdate(id, data, { new: true })) as unknown as ({ _id: { toString(): string } } & Record<string, unknown>) | null;
  if (!post) return NextResponse.json({ error: "Post not found." }, { status: 404 });
  return NextResponse.json({ item: { ...post, _id: post._id.toString() } });
}

export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await getAdminSession())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!isDatabaseConfigured()) return NextResponse.json({ error: "Connect MongoDB first." }, { status: 503 });
  const { id } = await params;
  await connectToDatabase();
  await PostModel.findByIdAndDelete(id);
  return NextResponse.json({ ok: true });
}
