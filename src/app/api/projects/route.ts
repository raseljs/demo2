import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { connectToDatabase, isDatabaseConfigured } from "@/lib/db";
import { getProjects } from "@/lib/data";
import { ProjectModel } from "@/models/Project";
import { projectSchema } from "@/lib/validators";

export async function GET() { return NextResponse.json({ items: await getProjects() }); }

export async function POST(request: Request) {
  if (!(await getAdminSession())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!isDatabaseConfigured()) return NextResponse.json({ error: "Connect MongoDB first." }, { status: 503 });
  const parsed = projectSchema.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ error: "Please check the project fields.", details: parsed.error.flatten() }, { status: 400 });
  try {
    await connectToDatabase();
    const project = await ProjectModel.create(parsed.data);
    return NextResponse.json({ item: { ...project.toObject(), _id: project._id.toString() } }, { status: 201 });
  } catch (error) {
    const message = error instanceof Error && error.message.includes("duplicate") ? "This slug is already in use." : "Could not save project.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
