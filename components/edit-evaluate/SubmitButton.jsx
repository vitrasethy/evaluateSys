"use client";

import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";
import React from "react";

export function Submit() {
  return (
    <button
      className="bg-[#024164] hover:bg-[#03679d] px-4 py-4 text-sm md:text-lg leading-5 rounded-md font-semibold text-white"
      type="submit"
    >
      Submit Form
    </button>
  );
}

export function Loading() {
  return (
    <button
      className="bg-[#024164] hover:bg-[#03679d] px-4 py-4 text-sm md:text-lg leading-5 rounded-md font-semibold text-white"
      disabled
    >
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </button>
  );
}

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <div className="mt-6 text-center">
      {pending ? <Loading /> : <Submit />}
    </div>
  );
}
