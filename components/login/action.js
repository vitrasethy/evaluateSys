"use server";

import {cookies} from "next/headers";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

export async function action(prevState, formData) {
    const data = {
        username: formData.get("username"),
        password: formData.get("password"),
    };
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
        return {message: 'Incorrect Username or Password. Please try again.'}
    }

    const resJson = await res.json();

    revalidatePath("/");

    // try {
    //     let response = NextResponse.next()
    //     response.cookies.set('access_token', resJson['access_token'])
    // }catch (e) {
    //     throw new Error(e);
    // }

    cookies().set("access_token", resJson['access_token'], {
        httpOnly: true,
    });

    redirect("/events");
}