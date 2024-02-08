import { NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {
  // READING HEADERS ##################################

  // METHOD 1 -----------------------------------------
  // const requestHeaders = new Headers(request.headers);
  // const auth = requestHeaders.get("Authorization");
  // const themeCookie = request.cookies.get("theme");

  // METHOD 2 -----------------------------------------
  const requestHeaders = headers();
  const auth = requestHeaders.get("Authorization");
  const themeCookie = cookies().get("theme");

  console.log("header data", {
    auth,
    themeCookie,
  });

  // SETTING HEADERS ##################################

  // SETTING COOKIE #1 --------------------------------
  // cookies().set("theme", "dark");

  return new Response("<h1>setting headers<h1/>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}
