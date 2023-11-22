"use client";
import React, { useEffect, useState } from "react";

export default function ProjectTable({ }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [type, setType] = useState("Presentation");

  const [show, setShow] = useState(false);

  const handleClose = (id) => setShow(!show);
  const [shownCommitteeMember, setShownCommitteeMember] = useState(null);
  const handleClick = (id) => {
    if (shownCommitteeMember === id) {
      setShownCommitteeMember(null);
    } else {
      setShownCommitteeMember(id);
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
        <p key={data.no} className="px-10 py-5 text-lg border-2 w-[70%] ">
          <div className="bg-gray-200 p-2 rounded-md mt-2">
            <p className="text-sm text-gray-500">Project Name</p>
            <p>{data.name}</p>
          </div>
          <div className="bg-gray-200 p-2 rounded-md mt-2">
            <p className="text-sm text-gray-500">Project ID</p>
            <p>{data.id}</p>
          </div>
          <div className="bg-gray-200 p-2 rounded-md mt-2">
            <p className="text-sm text-gray-500">Project Leader</p>
            <p>{data.leader.name_latin}</p>
          </div>
          <div className="bg-gray-200 p-2 rounded-md mt-2">
          {data.member.map((members, index) => (
                            <p key={members.id}>
                              <p className="text-sm text-gray-500">
                                {index === 0 ? "Member" : ""}
                              </p>
                             
                              <li>{members.name}</li>
                            </p>
                          ))}
          </div>
         
          <div className="bg-gray-200 p-2 rounded-md mt-2">
          {data.committee.map((committee, index) => (
            <p
              key={committee.id}
              onClick={() => handleClick(committee.id)}
            >
              <p className="text-sm text-gray-500">
                {index === 0 ? "Judge" : ""}
              </p>
            
              <p>
                <p className="border-2 border-gray-300 w-auto bg-gray-300 my-1 rounded-md p-2">
                {committee.name}
                </p>
                <div>
                  {shownCommitteeMember === committee.id && (
                    <div className="border border-gray-300 rounded-md px-10 py-5">
                      <div className="my-5 border-2 border-gray-300 flex justify-between py-1 px-5 rounded-lg bg-gray-200 items-center">
                        <h1>Introduction / Background / literature (clear)</h1>
                        <p className="border border-black rounded-full px-2 ml-5 py-[3px]">10</p>
                      </div>
                      <div className="my-5 border-2 border-gray-300 flex justify-between py-1 px-5 rounded-lg bg-gray-200 items-center">
                        <h1>Objective clearly stated & concise</h1>
                        <p className="border border-black rounded-full px-2 ml-5 py-[3px]">10</p>
                      </div>
                      <div className="my-5 border-2 border-gray-300 flex justify-between py-1 px-5 rounded-lg bg-gray-200 items-center">
                        <h1>Approach / methodd / study design / Materials (new, clear & concise)</h1>
                        <p className="border border-black rounded-full px-2 ml-5 py-[3px]">10</p>
                      </div>
                      <div className="my-5 border-2 border-gray-300 flex justify-between py-1 px-5 rounded-lg bg-gray-200 items-center">
                        <h1>Novel approach / method / study design / Materials</h1>
                        <p className="border border-black rounded-full px-2 ml-5 py-[3px]">10</p>
                      </div>
                      <div className="my-5 border-2 border-gray-300 flex justify-between py-1 px-5 rounded-lg bg-gray-200 items-center">
                        <h1>Analysis and Interpretation</h1>
                        <p className="border border-black rounded-full px-2 ml-5 py-[3px]">10</p>
                      </div>
                      <div className="my-5 border-2 border-gray-300 flex justify-between py-1 px-5 rounded-lg bg-gray-200 items-center">
                        <h1>Demonstrate signi</h1>
                        <p className="border border-black rounded-full px-2 ml-5 py-[3px]">10</p>
                      </div>
                      <div className="my-5 border-2 border-gray-300 flex justify-between py-1 px-5 rounded-lg bg-gray-200 items-center">
                        <h1>Introduction / Background / literature (clear)</h1>
                        <p className="border border-black rounded-full px-2 ml-5 py-[3px]">10</p>
                      </div>

                    </div>
                  )}
                </div>
              </p>
            </p>
          ))}
          </div>
          









          {/* <div className="flex">
            <p className="w-1/2 font-medium">Name</p> &nbsp;{" "}
            <p className="text-start">{data.name}</p>
          </div>
          <div className="flex">
            <p className="w-1/2 font-medium">ID</p> &nbsp;{" "}
            <p className="text-start">{data.id}</p>
          </div>
          <div className="flex">
            <p className="w-1/2 font-medium">Leader</p> &nbsp;{" "}
            <p className="text-start">{data.leader.name_latin}</p>
          </div>

          {data.committee.map((committee, index) => (
            <p
              key={committee.id}
              className="flex"
              onClick={() => handleClick(committee.id)}
            >
              <p className="my-[3px] w-1/2 font-medium">
                {index === 0 ? "Judge" : ""}
              </p>
              &nbsp;
              <p className=" my-[3px] w-1/2">
                {committee.name}
                <div>
                  {shownCommitteeMember === committee.id && (
                    <div className="border border-gray-300 rounded-md px-10 py-5">
                      <div className="my-5 border-2 border-gray-300 flex justify-between py-1 px-5 rounded-lg bg-gray-200 items-center">
                        <h1>Introduction / Background / literature (clear)</h1>
                        <p className="border border-black rounded-full px-2 ml-5 py-[3px]">10</p>
                      </div>
                      <div className="my-5 border-2 border-gray-300 flex justify-between py-1 px-5 rounded-lg bg-gray-200 items-center">
                        <h1>Objective clearly stated & concise</h1>
                        <p className="border border-black rounded-full px-2 ml-5 py-[3px]">10</p>
                      </div>
                      <div className="my-5 border-2 border-gray-300 flex justify-between py-1 px-5 rounded-lg bg-gray-200 items-center">
                        <h1>Approach / methodd / study design / Materials (new, clear & concise)</h1>
                        <p className="border border-black rounded-full px-2 ml-5 py-[3px]">10</p>
                      </div>
                      <div className="my-5 border-2 border-gray-300 flex justify-between py-1 px-5 rounded-lg bg-gray-200 items-center">
                        <h1>Novel approach / method / study design / Materials</h1>
                        <p className="border border-black rounded-full px-2 ml-5 py-[3px]">10</p>
                      </div>
                      <div className="my-5 border-2 border-gray-300 flex justify-between py-1 px-5 rounded-lg bg-gray-200 items-center">
                        <h1>Analysis and Interpretation</h1>
                        <p className="border border-black rounded-full px-2 ml-5 py-[3px]">10</p>
                      </div>
                      <div className="my-5 border-2 border-gray-300 flex justify-between py-1 px-5 rounded-lg bg-gray-200 items-center">
                        <h1>Demonstrate signi</h1>
                        <p className="border border-black rounded-full px-2 ml-5 py-[3px]">10</p>
                      </div>
                      <div className="my-5 border-2 border-gray-300 flex justify-between py-1 px-5 rounded-lg bg-gray-200 items-center">
                        <h1>Introduction / Background / literature (clear)</h1>
                        <p className="border border-black rounded-full px-2 ml-5 py-[3px]">10</p>
                      </div>

                    </div>
                  )}
                </div>
              </p>
            </p>
          ))}
          {data.member.map((member, index) => (
            <p key={member.id} className="flex">
              <p className="my-[3px] w-1/2 font-medium">
                {index === 0 ? "Member" : ""}
              </p>
              &nbsp;
              <p className=" my-[3px]">{member.name}</p>
            </p>
          ))} */}

        </p>
      ))}
    </div>
  );
}
