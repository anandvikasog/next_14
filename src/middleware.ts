import { NextRequest, NextResponse } from "next/server";

// $$$$$(((redirecing means url of the search bar will be changed and redirected to a different url)))

// REDIRECTING USING MATCHER ---------------------
// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/login", request.url));
// }
// export const config = {
//   matcher: "/profile",
// };

// REDIRECTING USING CONDITIONS ---------------------
// export function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname === "/profile") {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }
// }

// $$$$$(((rewriting url means url in searbar will be same but content will be renderd of the different url)))

// REWRITING USING MATCHER ---------------------
// export function middleware(request: NextRequest) {
//   return NextResponse.rewrite(new URL("/login", request.url));
// }
// export const config = {
//   matcher: "/profile",
// };

// REWRITING USING CONDITIONS ---------------------
// export function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname === "/profile") {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }
// }

// $$$$$(((reading and altering request and response cookies and headers)))
export function middleware(request: NextRequest) {
  // reading weather theme cookie present at client or not and if not setting dark theme cookie

  const response = NextResponse.next();

  // cookie --
  const theme = request.cookies.get("theme");
  if (!theme) {
    response.cookies.set("theme", "dark");
  }

  // other header
  response.headers.set("custom-header", "custom-value");

  return response;
}
