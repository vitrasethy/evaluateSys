"use client";

import { CardContent } from "@/components/ui/card";
import { useState } from "react";

export default function SelectMobile({ departments }) {
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");

  const isAllSelected = () => {
    return department !== "" && year !== "";
  };

  return (
    <>
      <CardContent>
        <label
          htmlFor="department"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Select a department
        </label>
        <select
          id="department"
          required
          onChange={(e) => setDepartment(e.target.value)}
          name={"department"}
          className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option value={""} defaultValue={""}>
            Choose a department
          </option>
          {departments.map((department) => (
            <option key={department.id} value={department.id}>
              {department.name_latin}
            </option>
          ))}
        </select>
        <label
          htmlFor="year"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Select an education year
        </label>
        <select
          id="year"
          required
          onChange={(e) => setYear(e.target.value)}
          name={"year"}
          className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option value={""} defaultValue={""}>
            Choose a department
          </option>
          <option value={"Year1"}>Year 1</option>
          <option value={"Year2"}>Year 2</option>
          <option value={"Year3"}>Year 3</option>
          <option value={"Year4"}>Year 4</option>
        </select>
        <div className={"flex justify-center"}>
          <button
            disabled={!isAllSelected()}
            className="disabled:cursor-not-allowed disabled:bg-gray-500 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
          >
            Search
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </CardContent>
    </>
  );
}
