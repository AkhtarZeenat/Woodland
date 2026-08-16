import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let body: {
    name?: string;
    contact?: string;
    interest?: string;
    message?: string;
  };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }

  const name = (body.name || "").trim();
  const contact = (body.contact || "").trim();
  const interest = (body.interest || "").trim();
  const message = (body.message || "").trim();

  if (!name || !contact) {
    return NextResponse.json(
      { error: "Name and email/phone are required." },
      { status: 400 }
    );
  }

  try {
    await sql`
      INSERT INTO contact_submissions (name, contact, interest, message)
      VALUES (${name}, ${contact}, ${interest}, ${message})
    `;
    return NextResponse.json({ ok: true });
  } catch (err) {
    // Common cause during setup: the contact_submissions table hasn't been
    // created yet (see scripts/schema.sql) or POSTGRES_URL isn't configured
    // in this environment. Log the real error server-side for debugging,
    // but keep the message to the browser generic.
    console.error("contact form submission failed:", err);
    return NextResponse.json(
      {
        error:
          "Something went wrong saving your message. Please try again, or email sales@woodland.pk directly.",
      },
      { status: 500 }
    );
  }
}
