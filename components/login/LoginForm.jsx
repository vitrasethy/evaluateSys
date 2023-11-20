"use client";

import { useFormState } from "react-dom";
import { action } from "./action";
import SubmitButton from "@/components/login/SubmitButton";

const initialState = {
  message: null,
};

export default function LoginForm() {
  const [state, formAction] = useFormState(action, initialState);

  return (
    <div>
      <form action={formAction}>
        <div className="sm:mt-4">
          <label
            htmlFor="username"
            className="block sm:text-lg min-[300px]:text-base font-medium text-slate-700"
          >
            Username
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="username"
              id="username"
              className="text-sm px-3 py-2 sm:py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-600 focus:ring-sky-600 block w-full rounded-sm sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="mt-4 sm:mt-6">
          <label
            htmlFor="password"
            className="block sm:text-lg text-base font-medium text-slate-700"
          >
            Password
          </label>
          <div className="mt-1">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="text-sm px-3 py-2 sm:py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-600 focus:ring-sky-600 block w-full rounded-sm sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
            />
          </div>
        </div>

        <SubmitButton />

      </form>
      <div>
        <p className="mt-1 sm:mt-2 text-sm sm:text-base text-red-500">
          {state?.message}
        </p>
      </div>
    </div>
  );
}
