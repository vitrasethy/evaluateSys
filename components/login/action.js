"use server";

// import {cookies} from "next/headers";
import {redirect} from "next/navigation";

export async function action(prevState, formData) {
    const data = {
        username: formData.get("username"),
        password: formData.get("password"),
    };
    const res = await fetch("/api/login", {
        method: "POST",
        // cache: 'no-store',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        return {message: 'Incorrect Username or Password. Please try again.'}
    }
    //
    // const resJson = await res.json();
    //
    // cookies().set("isLogin", "true", {
    //     secure: process.env.NODE_ENV === 'production',
    //     httpOnly: true
    // })
    // cookies().set("access_token", resJson.access_token, {
    //     secure: process.env.NODE_ENV === 'production',
    //     httpOnly: true
    // });

    redirect("/events");
}
