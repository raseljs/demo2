import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { createAdminToken, adminCookie } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    const adminEmail = process.env.ADMIN_EMAIL?.toLowerCase();
    const passwordHash = process.env.ADMIN_PASSWORD_HASH;
    if (!adminEmail || !passwordHash || !process.env.AUTH_SECRET) return NextResponse.json({ error: "Admin credentials are not configured. Check .env.local." }, { status: 503 });
    if (typeof email !== "string" || typeof password !== "string" || email.toLowerCase() !== adminEmail) return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
    const valid = await bcrypt.compare(password, passwordHash);
    if (!valid) return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
    const token = await createAdminToken(adminEmail);
    const response = NextResponse.json({ ok: true });
    response.cookies.set(adminCookie.name, token, adminCookie.options);
    return response;
  } catch (error) {
    console.error("Admin login error", error);
    return NextResponse.json({ error: "Unable to sign in." }, { status: 500 });
  }
}
