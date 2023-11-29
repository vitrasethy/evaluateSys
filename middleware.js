import {NextResponse} from "next/server";
import {cookies} from "next/headers";

export async function middleware(request) {
    const cookiesList = cookies();
    const hasCookie = cookiesList.has("login");

    // if (request.nextUrl.pathname.startsWith("/logout") && !hasCookie) {
    //     return NextResponse.rewrite(new URL("/", request.url));
    // } else if (request.nextUrl.pathname.startsWith("/logout")) {
    //     request.cookies.clear();
    //     const response = NextResponse.rewrite(new URL("/", request.url));
    //     response.cookies.delete("access_token");
    //     return response;
    // }

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
        // const token = cookies().get("access_token");
        // const res = await fetch("https://admin.rupp.support/api/v1/auth/protected", {
        //     method: "GET",
        //     headers: {
        //         "Content-Type": "application/json",
        //         Accept: "application/json",
        //         Authorization: "Bearer " + token?.value,
        //     },
        // });
        //
        // if (!res.ok) {
        //     const response = NextResponse.rewrite(new URL("/", request.url));
        //     response.cookies.delete("access_token");
        //     return NextResponse.rewrite(new URL("/", request.url));
        // }

        return NextResponse.rewrite(new URL("/events", request.url));
    }
}
