import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { connectToDatabase, isDatabaseConfigured } from "@/lib/db";
import { InquiryModel } from "@/models/Inquiry";

export async function GET() {
  if (!(await getAdminSession())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!isDatabaseConfigured()) return NextResponse.json({ items: [], setupRequired: true });
  await connectToDatabase();
  const items = await InquiryModel.find().sort({ createdAt: -1 }).lean();
  return NextResponse.json({ items: items.map((item) => ({ ...item, _id: (item._id as { toString(): string }).toString(), createdAt: item.createdAt?.toISOString() })) });
}
