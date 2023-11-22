"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import arrow from "../../../../../public/arrow.svg";

export default function ProjectTable({}) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [type, setType] = useState("Presentation");

  const [openDropdowns, setOpenDropdowns] = useState([]);

  // Modify the handleClick function
  const handleClick = (id) => {
    if (openDropdowns.includes(id)) {
      setOpenDropdowns(openDropdowns.filter((dropdownId) => dropdownId !== id));
    } else {
      setOpenDropdowns([...openDropdowns, id]);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/detail");
        const result = await response.json();
        setData(result);
      } catch (error) {
        throw new Error(error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const newFilteredData = data.filter((item) => item.type === type);
    setFilteredData(newFilteredData);
  }, [type, data]);

  console.log(data);
  return (
    <div className=" flex flex-col justify-center items-center">
      <h1 className="text-center font-extrabold text-5xl my-10">
        Projects Detail
      </h1>
      {data.map((data) => (
        <p key={data.no} className="px-10 py-5 text-lg border-2 w-[60%] ">
          <div className="bg-gray-200 p-2 rounded-md mt-2">
            <p className="text-sm text-gray-500 uppercase">Project Name</p>
            <p>{data.name}</p>
          </div>
          <div className="bg-gray-200 p-2 rounded-md mt-2">
            <p className="text-sm text-gray-500 uppercase">Project ID</p>
            <p>{data.id}</p>
          </div>
          <div className="bg-gray-200 p-2 rounded-md mt-2">
            <p className="text-sm text-gray-500 uppercase">Project Leader</p>
            <p>{data.leader.name_latin}</p>
          </div>
          <div className="bg-gray-200 p-2 rounded-md mt-2">
            {data.member.map((members, index) => (
              <p key={members.id}>
                <p className="text-sm text-gray-500 uppercase">
                  {index === 0 ? "Project Member" : ""}
                </p>

                <li>{members.name}</li>
              </p>
            ))}
          </div>

          <div className="bg-gray-200 p-2 rounded-md mt-2">
            {data.committee.map((committee, index) => (
              <p key={committee.id} onClick={() => handleClick(committee.id)}>
                <p className="text-sm text-gray-500 uppercase">
                  {index === 0 ? "Judge" : ""}
                </p>

                <p>
                  <p className="border flex justify-between px-10 bg-gray-100 border-gray-300 w-auto my-1 rounded-md p-2 cursor-pointer hover:bg-gray-300 duration-300">
                    <p>

                    {committee.name}
                    </p>
                    <p className="flex">
                      <p className="mx-10">

                    {committee.project_score}
                      </p>
                    <Image className="" src={arrow} alt="arrow" width={20} height={20} />
                    </p>
                  </p>
                  <div>
                  {openDropdowns.includes(committee.id) && (
                      <div className="border border-gray-300 rounded-md px-10 py-5 bg-white">
                        <div className="my-5 border-2 border-gray-300 flex justify-between py-1 px-5 rounded-lg bg-gray-200 items-center">
                          <h1>
                            Introduction / Background / literature (clear)
                          </h1>
                          <p className="text-red-500 px-2 ml-5 py-[3px]">
                            10 
                          </p>
                        </div>
                        <div className="my-5 border-2 border-gray-300 flex justify-between py-1 px-5 rounded-lg bg-gray-200 items-center">
                          <h1>Objective clearly stated & concise</h1>
                          <p className="text-red-500 px-2 ml-5 py-[3px]">
                            10 
                          </p>
                        </div>
                        <div className="my-5 border-2 border-gray-300 flex justify-between py-1 px-5 rounded-lg bg-gray-200 items-center">
                          <h1>
                            Approach / methodd / study design / Materials (new,
                            clear & concise)
                          </h1>
                          <p className="text-red-500 px-2 ml-5 py-[3px]">
                            10 
                          </p>
                        </div>
                        <div className="my-5 border-2 border-gray-300 flex justify-between py-1 px-5 rounded-lg bg-gray-200 items-center">
                          <h1>
                            Novel approach / method / study design / Materials
                          </h1>
                          <p className="text-red-500 px-2 ml-5 py-[3px]">
                            10 
                          </p>
                        </div>
                        <div className="my-5 border-2 border-gray-300 flex justify-between py-1 px-5 rounded-lg bg-gray-200 items-center">
                          <h1>Analysis and Interpretation</h1>
                          <p className="text-red-500 px-2 ml-5 py-[3px]">
                            10 
                          </p>
                        </div>
                        <div className="my-5 border-2 border-gray-300 flex justify-between py-1 px-5 rounded-lg bg-gray-200 items-center">
                          <h1>Demonstrate signi</h1>
                          <p className="text-red-500 px-2 ml-5 py-[3px]">
                            10 
                          </p>
                        </div>
                        <div className="my-5 border-2 border-gray-300 flex justify-between py-1 px-5 rounded-lg bg-gray-200 items-center">
                          <h1>
                            Introduction / Background / literature (clear)
                          </h1>
                          <p className="text-red-500 px-2 ml-5 py-[3px]">
                            10 
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </p>
              </p>
            ))}
          </div>


        </p>
      ))}
    </div>
  );
}
