import { checkBotId } from "botid/server";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// export const runtime = "edge";

export async function POST() {
  const botid = await checkBotId();
  console.log(botid);
  return NextResponse.json({ botid });
}
