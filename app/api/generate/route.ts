import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log(body);
  const random = Math.random() * 100;
  return NextResponse.json({ message: "Data received", random });
}
