import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const secretHeader = request.headers.get("api-secret");

  console.log(secretHeader);
  if (secretHeader !== process.env.API_SECRET) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  const random = Math.random() * 100;
  return NextResponse.json({ message: "Data received", random });
}
