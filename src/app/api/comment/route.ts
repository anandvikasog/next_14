import { NextRequest } from "next/server";
import { data } from "./data";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const comment = searchParams.get("comment");

  const result = comment
    ? data.filter((elem) => elem.comment.includes(comment))
    : data;
  return Response.json(result);
}
export async function POST(request: Request) {
  const incomingData = await request.json();

  const newComment = {
    comment: incomingData.comment,
    id: data.length + 1,
  };
  data.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
