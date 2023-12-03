import { dislikePost, likePost } from "@/app/service/posts";
import { authOptions } from "@/util/authOptions";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return new Response("Authentication Error", { status: 401 });
  }

  const { id, like } = await req.json();

  if (!id || like === undefined) {
    return new Response("Bad Reuest", { status: 400 });
  }

  // 이제 새니티에 요청할 수 있다!
  const request = like ? likePost : dislikePost;

  return request(id, user.id)
    .then((res) => NextResponse.json(res))
    .catch((error) => new Response(JSON.stringify(error), { status: 500 }));
}
