import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { connectToDatabase, isDatabaseConfigured } from "@/lib/db";
import { ProjectModel } from "@/models/Project";
import { projectSchema } from "@/lib/validators";

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await getAdminSession())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!isDatabaseConfigured()) return NextResponse.json({ error: "Connect MongoDB first." }, { status: 503 });
  const parsed = projectSchema.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ error: "Please check the project fields." }, { status: 400 });
  const { id } = await params;
  await connectToDatabase();
  const project = (await ProjectModel.findByIdAndUpdate(id, parsed.data, { new: true })) as unknown as ({ _id: { toString(): string } } & Record<string, unknown>) | null;
  if (!project) return NextResponse.json({ error: "Project not found." }, { status: 404 });
  return NextResponse.json({ item: { ...project, _id: project._id.toString() } });
}

export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await getAdminSession())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!isDatabaseConfigured()) return NextResponse.json({ error: "Connect MongoDB first." }, { status: 503 });
  const { id } = await params;
  await connectToDatabase();
  await ProjectModel.findByIdAndDelete(id);
  return NextResponse.json({ ok: true });
}
