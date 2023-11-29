"use client";

import React, {useEffect, useState} from "react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select";
import ProjectTable from "@/components/project/ProjectTable";

export default function ProjectSelector() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [type, setType] = useState("All");
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api");
        const result = await response.json();
        setData(result);
        setLoading(false)
      } catch (error) {
        throw new Error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Filter the data whenever 'type' changes
    if (type !== "All")
      setFilteredData(data.filter((item) => item.type === type));
    else setFilteredData(data)
  }, [type, data]); // Include 'data' in the dependency array

  return (
    <div>
      <div className="">
        {/* my evaluate */}
        {/*<div className="sm:mx-10">*/}
        {/*  <label className="text-gray-500 p-1 text-lg">Project Filter :</label>*/}
        {/*  <Select>*/}
        {/*    <SelectTrigger className="w-[140px] lg:w-[200px] h-14 bg-[#014164] mt-2 hover:bg-[#014190] text-white">*/}
        {/*      <SelectValue placeholder="My Evaluation" />*/}
        {/*    </SelectTrigger>*/}
        {/*    <SelectContent>*/}
        {/*      <SelectItem value="my evaluate">My Evaluate</SelectItem>*/}
        {/*      <SelectItem value="all evaluate">All Evaluate</SelectItem>*/}
        {/*    </SelectContent>*/}
        {/*  </Select>*/}
        {/*</div>*/}
        {/* presentation */}
        <div className="flex justify-center items-center gap-x-1">
          <label className="text-gray-500 font-normal text-lg">
            Project Type :
          </label>
          <Select onValueChange={(e) => setType(e)}>
            <SelectTrigger
              value={type}
              className="w-[140px] lg:w-[200px] h-14 bg-[#014164] hover:bg-[#014190] mt-1 text-white"
            >
              <SelectValue placeholder="All"/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="Presentation">Presentation</SelectItem>
              <SelectItem value="Poster">Poster</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="">
        <ProjectTable
          data_data={filteredData}
          projectType={type}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
