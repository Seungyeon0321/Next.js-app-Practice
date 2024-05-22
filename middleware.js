import { NextResponse } from "next/server";

export function middleware(request) {
  //forward its next destination
  return NextResponse.next();
}

export const config = {
  //middleware가 동작하는 router에만 적용
  matcher: "/news",
};
