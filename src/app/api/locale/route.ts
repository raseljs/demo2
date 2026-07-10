import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { locale } = await request.json();
    if (locale !== "bn" && locale !== "en") return NextResponse.json({ error: "Invalid locale" }, { status: 400 });
    const response = NextResponse.json({ locale });
    response.cookies.set("dreamspace_locale", locale, { httpOnly: false, sameSite: "lax", secure: process.env.NODE_ENV === "production", path: "/", maxAge: 60 * 60 * 24 * 365 });
    return response;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
