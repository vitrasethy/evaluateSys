import {NextResponse} from "next/server";
import {cookies} from "next/headers";

export function middleware(request) {
    const cookiesList = cookies();
    const hasCookie = cookiesList.has("access_token");

    if (request.nextUrl.pathname.startsWith("/logout") && !hasCookie) {
        return NextResponse.rewrite(new URL("/", request.url));
    } else if (request.nextUrl.pathname.startsWith("/logout")) {
        request.cookies.clear();
        const response = NextResponse.rewrite(new URL("/", request.url));
        response.cookies.delete("access_token");
        return response;
    }

    // if (request.nextUrl.pathname.startsWith("/login") && hasCookie) {
    //     return NextResponse.rewrite(new URL("/events", request.url));
    // }

    if ((request.nextUrl.pathname.startsWith("/events") || request.nextUrl.pathname.startsWith("/award")) && !hasCookie) {
        return NextResponse.rewrite(new URL("/", request.url));
    }

    // if (request.nextUrl.pathname === "/" && !hasCookie) {
    //     return NextResponse.rewrite(new URL("/events", request.url));
    // }

    if (request.nextUrl.pathname === "/" && hasCookie) {
        return NextResponse.rewrite(new URL("/events", request.url));
    }
}
