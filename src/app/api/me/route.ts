import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/util/authOptions";
import { getUserByUsername } from "@/app/service/user";

export async function GET() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return new Response("Authentication Error", { status: 401 });
  }

  return getUserByUsername(user.username).then((data) =>
    NextResponse.json(data)
  );
}
