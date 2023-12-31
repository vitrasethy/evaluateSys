"use client";
import Image from "next/image";
import * as React from "react";
import {useEffect, useState} from "react";

import {Button} from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {action, actionEdit} from "@/components/project/action";
import LoadingUI from "@/components/project/LoadingUI";
import actionDetail from "@/components/project/actionDetail";

export default function ProjectTable({data_data, isLoading}) {
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

  const isAdmin = data.is_admin;

  if (isLoading)
    return (
      <div className={"flex justify-center mt-20"}>
        <LoadingUI/>
      </div>
    );

  return (
    <div className="">
      <div className="flex justify-center ">
        <table
          className="hidden lg:block lg:pr-4 table-auto rounded-lg border-2 bg-white mt-10 border-gray-400 shadow-2xl mb-20">
          <thead className="">
          <tr>
            <th className="p-5 text-start">No</th>
            <th className="p-5 text-start" key="Id">
              ID
            </th>
            <th className="p-5 text-start">Project Name</th>
            <th className="p-5 text-start">Type</th>
            <th className="p-5 text-start">Leader</th>
            <th
              className="p-5 text-start cursor-pointer flex justify-center"
              key="score"
            >
              Score
              <Image src="/sort.svg" alt="sort" width={20} height={20}/>
            </th>
            <th className="p-5 text-start" key="action">
              Status
            </th>
          </tr>
          </thead>
          <tbody>
          {data_data.map((row, id) => (
            <tr key={row.no} className={`table-row rounded-xl`}>
              <td className="px-5 py-4  ">{id + 1}</td>
              <td className="px-5 py-4  ">{row.id}</td>
              <td className="px-5 py-4  ">{row.name}</td>
              <td className="px-5 py-4  ">{row.type}</td>
              <td className="px-5 py-4  ">{row.leader.name_latin}</td>
              <td className="px-5 py-4  ">{row.total_score}</td>
              <td className="px-5 py-4">
                <p
                  className={`p-1 border-2 rounded-lg w-fit ${
                    row.status === 1
                      ? "bg-green-200 border-2 border-green-600"
                      : ""
                  }
                    ${
                    row.status === 0
                      ? "bg-red-200 border-2 border-red-600"
                      : ""
                  }
                    ${
                    row.status === 2
                      ? "bg-yellow-200 border-2 border-yellow-600"
                      : ""
                  }`}
                >
                  {row.status === 1 ? "Completed" : ""}
                  {row.status === 0 ? "Not Yet Evaluate" : ""}
                  {row.status === 2 ? "Partially Evaluated" : ""}
                </p>
              </td>

              <td className="px-5 py-4  ">
                <form action={action}>
                  <input
                    type={"hidden"}
                    name={"projectId"}
                    value={row.project_id}
                  />
                  <Button variant="outline"
                          className={`text-amber-500 ${(row.status === 0 && row.is_committee) || (row.status === 2 && row.is_committee) ? "" : "hidden"}`}
                  >
                    Evaluate
                  </Button>
                  <Button variant="outline"
                          formAction={actionEdit}
                          className={`text-amber-500 ${(row.status === 1 && row.is_committee) || row.status === 3 ? "" : "hidden"}`}
                  >
                    Edit Evaluate
                  </Button>
                </form>
              </td>
              <td className={isAdmin ? "" : "hidden"}>
                <form action={actionDetail}>
                  <input
                    type={"hidden"}
                    name={"projectId"}
                    value={row.project_id}
                  />
                  <Button variant="outline" className="text-amber-500">
                    Detail
                  </Button>
                </form>
              </td>
              <td className={`px-5 py-4 ${isAdmin ? "hidden" : ""}`}>
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
              className="w-screen sm:w-[500px] mb-4 flex justify-center"
              key={data.id}
            >
              <div className="mt-4 rounded-lg border bg-card text-card-foreground shadow-sm w-full mx-5">
                <div className="flex flex-col space-y-1.5 p-6">
                  <h1 className="text-2xl font-semibold leading-none tracking-tight">
                    {data.name}
                  </h1>
                  <p className="text-sm text-muted-foreground">ID: {data.id}</p>
                  <p className="text-sm text-muted-foreground">
                    Leader: {data.leader.name_latin}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Point: {data.total_score}
                  </p>
                </div>
                <div className="items-center p-6 pt-0 flex justify-between">
                  <div>
                    <Button variant="outline"
                            className={`text-amber-500 ${(data.status === 0 && data.is_committee) || (data.status === 2 && data.is_committee) ? "" : "hidden"}`}
                    >
                      Evaluate
                    </Button>
                    <Button variant="outline"
                            formAction={actionEdit}
                            className={`text-amber-500 ${(data.status === 1 && data.is_committee) || data.status === 3 ? "" : "hidden"}`}
                    >
                      Edit Evaluate
                    </Button>
                  </div>
                  <div>
                    <div className={isAdmin ? "" : "hidden"}>
                      <form action={actionDetail}>
                        <input
                          type={"hidden"}
                          name={"projectId"}
                          value={data.project_id}
                        />
                        <Button variant="outline" className="text-amber-500">
                          Detail
                        </Button>
                      </form>
                    </div>
                    <div className={isAdmin ? "hidden" : ""}>
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
                              {data.name}
                            </DialogDescription>
                            <DialogDescription className="flex">
                              <p className=" w-1/2">Project Code</p>&nbsp;
                              {data.id}
                            </DialogDescription>
                            <DialogDescription className="flex">
                              <p className=" w-1/2">Leader</p>&nbsp;
                              {data.leader.name_latin}
                            </DialogDescription>
                            <DialogDescription className="flex">
                              <p className=" w-1/2">Type</p>&nbsp;
                              {data.type}
                            </DialogDescription>
                            <DialogDescription>
                              {data.committee.map((committee, index) => (
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
                              {data.member.map((members, index) => (
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
