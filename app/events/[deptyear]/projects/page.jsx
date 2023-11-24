import ProjectSelector from "@/components/project/ProjectSelector";
import { cookies } from "next/headers";

async function getData() {
  const cookieStore = cookies();
  const token = cookieStore.get("access_token");
  const eventId = cookies().get("event_id");
  const deptId = cookies().get("dept_id");
  const yearId = cookies().get("year_id");

  try {
    const res = await fetch(
      `https://admin.rupp.support/api/v1/events/${eventId.value}/departments/${deptId.value}/years/${yearId.value}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token?.value,
        },
      },
    );
    return res.json();
  } catch (e) {
    throw new Error(e);
  }
}

export default async function Page() {
  const data = await getData();

  return (
    <div>
      <p className=" text-center text-lg font-normal mt-5 text-gray-500 lg:text-xl dark:text-gray-400">
        Engineering Day
      </p>
      <h1 className="mt-5 mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        List of Projects
      </h1>
      <div className=" hidden lg:flex ">
        {/* <div className="pt-10 rounded-md text-sm translate-x-20 min-[1250px]:translate-x-[15vw] min-[1650px]:translate-x-[22vw] w-[30%]">
          <div className="flex items-center gap-2">
            <h1 className=" bg-green-400 w-3 h-3 text-green-400 border-2 border-black"></h1>
            <p>Complete</p>
          </div>
          <div className="flex items-center gap-2">
            <h1 className=" bg-yellow-400 w-3 h-3 text-yellow-400 border-2 border-black"></h1>
            <p>Partially Evaluated</p>
          </div>
          <div className="flex items-center gap-2">
            <h1 className=" bg-white w-3 h-3 text-white border-2 border-black"></h1>
            <p>Not yet Evaluate</p>
          </div>
        </div> */}
        <p className="mb-6 w-[100%] text-center text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          {data[0].eve_project_department} <br />
          {data[0].eve_project_generation} <br />
          {data[0].eve_project_year}
        </p>
      </div>
      <div>
        <ProjectSelector />
      </div>
    </div>
  );
}
