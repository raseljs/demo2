import { NextResponse } from "next/server";
import { connectToDatabase, isDatabaseConfigured } from "@/lib/db";
import { InquiryModel } from "@/models/Inquiry";
import { inquirySchema } from "@/lib/validators";

export async function POST(request: Request) {
  try {
    const parsed = inquirySchema.safeParse(await request.json());
    if (!parsed.success) return NextResponse.json({ error: "Please complete the required fields correctly." }, { status: 400 });
    if (!isDatabaseConfigured()) return NextResponse.json({ error: "Contact form is not connected yet. Add MONGODB_URI in .env.local to activate inquiries." }, { status: 503 });
    await connectToDatabase();
    const inquiry = await InquiryModel.create(parsed.data);
    return NextResponse.json({ ok: true, id: inquiry._id.toString() }, { status: 201 });
  } catch (error) {
    console.error("Contact form error", error);
    return NextResponse.json({ error: "We could not send your message right now. Please try WhatsApp instead." }, { status: 500 });
  }
}
