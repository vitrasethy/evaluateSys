"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const SHEET_SIDES = ["right"];

export default function Hamburger({ isAdmin }) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button className={"bg-white hover:bg-white -mr-5"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </SheetTrigger>
          <SheetContent side={side} className="bg-[#014164]">
            <p className="text-white text-2xl font-semibold mb-6">Menu</p>
            <hr />
            <a
              href="/award"
              className={`${
                isAdmin ? "" : "hidden"
              } block text-center bg-[#014164] border-white border-2 hover:bg-[#014190] text-white focus:ring-blue-300 font-medium text-sm py-2.5 mr-2 mt-8 mb-2 focus:outline-none`}
            >
              Result
            </a>
            <a
              href="/logout"
              className="block text-center bg-[#014164] border-white border-2 hover:bg-[#014190] text-white focus:ring-blue-300 font-medium text-sm py-2.5 mr-2 mt-8 mb-2 focus:outline-none"
            >
              Log Out
            </a>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
