import { NextRequest, NextResponse } from "next/server";
import { appointmentSchema } from "@/lib/validators";
import dayjs from "dayjs";
import { ZodError } from "zod";

// In-memory store for demo purposes
const appointments: Array<{ id: string } & ReturnType<typeof appointmentSchema.parse>> = [];

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const parsed = appointmentSchema.parse(json);

    // Basic time sanity check (future date)
    const dateTime = dayjs(`${parsed.date} ${parsed.time}`);
    if (!dateTime.isValid() || dateTime.isBefore(dayjs())) {
      return NextResponse.json({ error: "Please choose a future date/time" }, { status: 400 });
    }

    const id = `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;
    const record = { id, ...parsed };
    appointments.push(record);

    return NextResponse.json({ id }, { status: 201 });
  } catch (err: unknown) {
    if (err instanceof ZodError) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}

export async function GET() {
  // Return last 10 for debugging/demo
  return NextResponse.json({
    count: appointments.length,
    appointments: appointments.slice(-10),
  });
}