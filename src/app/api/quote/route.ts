import { NextResponse } from "next/server";
import { quoteSchema } from "@/lib/schema";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = quoteSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        error: "Please fix the highlighted fields.",
        issues: parsed.error.issues.map((issue) => ({
          path: issue.path.join("."),
          message: issue.message,
        })),
      },
      { status: 400 }
    );
  }

  const { name, email, phone, service, message } = parsed.data;
  return NextResponse.json({
    success: true,
    message: `Thanks, ${name.split(" ")[0]}! Your request for ${service} has been received — we will be in touch within one business day.`,
    data: {
      name,
      email,
      phone: phone || null,
      service,
      message,
      receivedAt: new Date().toISOString(),
    },
  });
}
