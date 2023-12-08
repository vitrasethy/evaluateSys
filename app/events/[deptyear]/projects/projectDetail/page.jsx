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
  function renderMember(index) {
    if (index === 0) {
      return "hidden";
    }
    return "";
  }
  console.log(data);

  return (
    <div className=" flex flex-col justify-center items-center">
      <h1 className="text-center font-extrabold text-4xl md:text-5xl px-5 my-10">
        Projects Detail
      </h1>
      {data?.map((data) => (
        <p key={data.no} className="md:px-10 px-2 py-2 md:py-10 text-lg border-2 w-[90%] sm:w-[70%] md:w-[60%] duration-500">
          <div className="bg-gray-200 p-2 rounded-md">
            <p className="text-sm text-gray-500 uppercase">Project Name</p>
            <p>{data.eve_project_topic}</p>
          </div>
          <div className="bg-gray-200 p-2 rounded-md mt-2">
            <p className="text-sm text-gray-500 uppercase">Project ID</p>
            <p>{data.eve_project_code}</p>
          </div>
          <div className="bg-gray-200 p-2 rounded-md mt-2">
            <p className="text-sm text-gray-500 uppercase">Project Supervisor</p>
            <p>{data.eve_project_supervisor_name}</p>
          </div>
          <div className="bg-gray-200 p-2 rounded-md mt-2">
            <p className="text-sm text-gray-500 uppercase">Project Leader</p>
            <p>{data.eve_project_members[0].name_latin}</p>
          </div>
          <div className="bg-gray-200 p-2 rounded-md mt-2">
            {data.eve_project_members.map((members, index) => (
              <p key={members.id} className={renderMember(index)}>
                <p className="text-sm text-gray-500 uppercase">
                  {index === 1 ? "Project Member" : ""}
                </p>
                <li className="ml-5">{members.name_latin}</li>
              </p>
            ))}
          </div>
          <div className="bg-gray-200 p-2 rounded-md mt-2">
            <p className="text-sm text-gray-500 uppercase">Total Score</p>
            <p>{10}</p>
          </div>
          

          <div className="bg-gray-200 p-2 rounded-md mt-2">
            {data.eve_project_committee.map((committee, index) => (
              <p key={committee.id} onClick={() => handleClick(committee.id)}>
                <p className="text-sm text-gray-500 uppercase">
                  {index === 0 ? "Judge" : ""}
                </p>

                <p>
                  <p className="border flex justify-between px-5 bg-gray-100 border-gray-300 w-auto my-1 rounded-md p-2 cursor-pointer hover:bg-gray-300 duration-300">
                    <p>{committee.name}</p>
                    <p className="flex">
                      <p className="sm:mx-3">{"Point : "}{committee.project_score}</p>
                      <Image
                        className={`${
                          openDropdowns.includes(committee.id)
                            ? "rotate-180"
                            : ""
                        } duration-300 mx-3`}
                        src={arrow}
                        alt="arrow"
                        width={15}
                        height={20}
                      />
                    </p>
                  </p>
                  <div>
                    {openDropdowns.includes(committee.id) && (
                      <div className="border border-gray-300 rounded-md px-3 md:px-10 md:py-5 bg-white">
                        <div>
                          <h1>
                            {committee.categories.map((categories) => (
                              <p key={categories.id}>
                                {categories.criterias.map((criterias) => (
                                  <p
                                    key={criterias.id}
                                    className="my-5 border-2 border-gray-300 flex justify-between py-1 px-5 rounded-lg bg-gray-200 items-center"
                                  >
                                    <p>{criterias.name}</p>
                                    <p className={`ml-5 border border-black rounded-full bg-[#014194] text-white ${criterias.score < 10 ? 'px-3 py-1':'px-2 py-1'}`}>
                                      {criterias.score}
                                    </p>
                                  </p>
                                ))}
                              </p>
                            ))}
                          </h1>
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
