import React from "react";
import Image from "next/image";
import Link from "next/link";
import Hamburger from "./Hamburger";
import getUserData from "@/components/auth/getUserData";

export default async function Navbar() {
  const userData = await getUserData()
  const isAdmin = userData["is_admin"]

  return (
    <div className="sticky top-0 bg-[#014164] z-50">
      <div>
        <div className="Desktop text-white h-20 justify-between items-center hidden md:flex mx-5">
          <div>
            <Link href={"/events"}>
              <Image src="/logoFE.webp" alt="" width={50} height={50} />
            </Link>
          </div>
          <div className="flex justify-around w-2/2 focus:outline-none focus:ring uppercase">
            <Link
              className={`${
                isAdmin ? "" : "hidden"
              } hover:bg-white hover:text-black px-5 py-6 transition ease-in-out delay-50 focus:outline-none focus:ring`}
              href={""}
            >
              Result
            </Link>
            <Link
              className=" hover:bg-white hover:text-black px-5 py-6 transition ease-in-out delay-50 focus:outline-none focus:ring"
              href={"/logout"}
            >
              Logout
            </Link>
          </div>
        </div>
        <div className="Mobile text-white flex h-20 items-center ml-5 justify-between md:hidden transition duration-200 z-50">
          <Link href={"/events"}>
            <Image src="/logoFE.webp" alt="" width={50} height={50} />
          </Link>

          <Hamburger isAdmin={isAdmin} />
        </div>
      </div>
    </div>
  );
}
