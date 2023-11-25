import {cookies} from "next/headers";

export async function POST(request) {
    const resFront = await request.json()
    const data = {
        username: resFront.username,
        password: resFront.password
    }
    const res = await fetch("https://admin.rupp.support/api/v1/auth/login", {
        method: "POST",
        cache: 'no-store',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(data),
    });
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    const resJson = await res.json();

    cookies().set('jwt', resJson.access_token)

    return Response.json({ message: "hehe" })
}