"use client";

import {Button} from "@/components/ui/button";
import {Loader2} from "lucide-react";

export function Submit({handleSubmit}) {
  return (
    <Button
      onClick={handleSubmit}
      className="bg-[#024164] hover:bg-[#03679d] w-full py-6 text-sm md:text-lg leading-5 rounded-md font-semibold text-white"
      type="submit"
    >
      Sign in
    </Button>
  );
}

export function Loading() {
  return (
    <Button
      className="bg-[#024164] hover:bg-[#03679d] w-full py-6 text-sm md:text-lg leading-5 rounded-md font-semibold text-white"
      disabled
    >
      <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
      Please wait
    </Button>
  );
}
