"use client"

import React from "react";
import {deleteCookie} from "cookies-next";
import {useRouter} from "next/navigation";

export default function CookieClient() {
  const router = useRouter()

  const handleClick = () => {
    deleteCookie('login')


    router.push('/')
  }


  return (
    <button
      onClick={() => handleClick()}
      className=" hover:bg-white hover:text-black px-5 py-6 transition ease-in-out delay-50 focus:outline-none focus:ring"
    >
      LOGOUT
    </button>
  )
}