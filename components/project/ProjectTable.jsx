"use client";
import Image from "next/image";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import action from "@/components/project/action";
import {useEffect, useState} from "react";



export default function ProjectTable({ data_data }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulate data fetching
    const fetchData = async () => {
      try {
        const response = await fetch("/api/admin");
        const result = await response.json();
        setData(result);
      } catch (error) {
        throw new Error(error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []);

  const isAdmin = data.is_admin

  return (
    <div className="">
      <div className="flex justify-center ">
        <table className="hidden lg:block table-auto rounded-lg border-2 bg-white mt-10 border-gray-400 shadow-2xl mb-20">
          <thead className="">
            <tr>
              <th className="p-5 text-start">No</th>
              <th className="p-5 text-start" key="Id">
                ID
              </th>
              <th className="p-5 text-start">Project Name</th>
              <th className="p-5 text-start">Leader</th>
              <th
                className="p-5 text-start cursor-pointer flex justify-center"
                key="score"
              >
                Score
                <Image src="/sort.svg" alt="sort" width={20} height={20} />
              </th>
              <th className="p-5 text-start" key="action">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {data_data.map((row, id) => (
              <tr key={row.no} className={`table-row rounded-xl`}>
                <td className="px-5 py-4  ">{id+1}</td>
                <td className="px-5 py-4  ">{row.id}</td>
                <td className="px-5 py-4  ">{row.name}</td>
                <td className="px-5 py-4  ">
                  {row.leader.name_latin}
                </td>
                <td className="px-5 py-4  ">{row.total_score}</td>
                <td className="px-5 py-4">
                  <p
                    className={`p-1 border-2 rounded-lg w-fit ${
                      (row.status) === 1 ? 'bg-green-200 border-2 border-green-600':''
                    }
                    ${
                      (row.status) === 0 ? 'bg-red-200 border-2 border-red-600':''
                    }
                    ${
                      (row.status) === 2 ? 'bg-yellow-200 border-2 border-yellow-600':''
                    }`}
                  >
                    {row.status === 1 ? "Completed" : ""}
                    {row.status === 0 ? "Not Yet Evaluate" : ""}
                    {row.status === 2 ? "Partially Evaluated" : ""}
                  </p>
                </td>

                <td className="px-5 py-4  ">
                  <form action={action}>
                    <input type={"hidden"} name={"projectId"} value={row.project_id}/>
                    <button className={(row.status === 1 || isAdmin) ? "hidden" : ""}>Evaluate</button>
                    <button formAction={action} className={(row.status === 0 || isAdmin) ? "hidden" : ""}>Edit Evaluate</button>
                  </form>
                </td>
                <td className="px-5 py-4  ">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="text-amber-500">
                        Detail
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[625px] columns-2">
                      <DialogHeader>
                        <DialogTitle className="text-center mb-5 font-extrabold ">
                          Project Details
                        </DialogTitle>
                        <DialogDescription className="flex ">
                          <p className=" w-1/2"> Name</p>&nbsp;
                          {row.name}
                        </DialogDescription>
                        <DialogDescription className="flex">
                          <p className=" w-1/2">Project Code</p>&nbsp;
                          {row.id}
                        </DialogDescription>
                        <DialogDescription className="flex">
                          <p className=" w-1/2">Leader</p>&nbsp;
                          {row.leader.name_latin}
                        </DialogDescription>
                        <DialogDescription className="flex">
                          <p className=" w-1/2">Type</p>&nbsp;
                          {row.type}
                        </DialogDescription>
                        <DialogDescription>
                        {row.committee.map((committee, index) => (
                            <p key={committee.id} className="flex">
                              <p className="my-[3px] w-1/2">
                                {index === 0 ? "Judge" : ""}
                              </p>
                              &nbsp;
                              <p className=" my-[3px]">{committee.name}</p>
                            </p>
                          ))}
                        </DialogDescription>
                        
                        <DialogDescription>
                          {row.member.map((members, index) => (
                            <p key={members.id} className="flex">
                              <p className="my-[3px] w-1/2">
                                {index === 0 ? "Member" : ""}
                              </p>
                              &nbsp;
                              <p className=" my-[3px]">{members.name}</p>
                            </p>
                          ))}
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="lg:hidden">
          {data_data.map((data) => (
            <div
              className="w-screen sm:w-[500px] flex justify-center"
              key={data.id}
            >
              <div className="mt-8 rounded-lg border bg-card text-card-foreground shadow-sm w-full mx-5">
                <div className="flex flex-col space-y-1.5 p-6">
                  <h1 className="text-2xl font-semibold leading-none tracking-tight">
                    {data.name}
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    ID: {data.id}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Leader: {data.leader.name_latin}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Point: {data.total_score}
                  </p>
                </div>
                <div className="items-center p-6 pt-0 flex justify-between">
                  <button className="px-4 py-2 text-center bg-[#014164] hover:bg-[#014190] text-white font-medium rounded-md text-sm">
                    Evaluate
                  </button>
                  <button className="px-4 py-2 text-center bg-[#014164] hover:bg-[#014190] text-white font-medium rounded-md text-sm">
                    Edit Evaluation
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
