import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const message = searchParams.get("message");

  const res = {
    hello: "World!",
    message: message,
  };

  return NextResponse.json(res);
}
