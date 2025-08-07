import { checkRateLimit } from "@vercel/firewall";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { rateLimited } = await checkRateLimit("asdf1234", { request });

  console.log(rateLimited);

  const secretHeader = request.headers.get("x-api-secret");

  console.log(secretHeader);

  if (secretHeader !== process.env.SECRET_KEY) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  const random = Math.random() * 100;
  return NextResponse.json({ message: "Data received", random });
}
