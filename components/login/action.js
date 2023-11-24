"use server";

import {cookies} from "next/headers";
import {redirect} from "next/navigation";

export function action(prevState, formData) {
    const data = {
        username: formData.get("username"),
        password: formData.get("password"),
    };
    const res = fetch("https://admin.rupp.support/api/v1/auth/login", {
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

    const resJson =  res.json();

    cookies().set("access_token", resJson['access_token']);
    cookies().set("isLogin", "true")

    redirect("/events");
}
