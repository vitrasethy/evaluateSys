import ProjectSelector from "@/components/project/ProjectSelector";

export default function Page() {
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
          Information of Technology <br />
          Generation 8 <br />
          Year 3
        </p>
      </div>
      <div>
        <ProjectSelector/>
      </div>
    </div>
  );
}
