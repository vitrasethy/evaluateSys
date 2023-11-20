import Link from "next/link";
import getEvents from "@/components/event/getEvents";
import { cookies } from "next/headers";

export default async function Page() {
  const data = await getEvents();

  return (
    <main>
      <section className="h-[20vh] flex justify-center items-center mt-10 mb-10">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
            List of all the events <br /> and their details
          </h1>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center ">
        {data.map((data) => (
          <div
            className="text-white w-11/12 sm:bg-[url('/bgcol.png')] bg-[url('/home.png')] bg-no-repeat bg-cover shadow-xl lg:w-2/5 border-px border-slate-50 bg-gray-100  rounded-2xl  mx-6 mb-6 hover:duration-300 hover:scale-105 hover:shadow-md hover:shadow-sky-700"
            key={data.id}
          >
            <Link href={`/events/${data.id}`}>
              <div className="bg-sky-950/90 backdrop-brightness-75 rounded-2xl px-4 py-6">
                <div className="mb-4">
                  <div className="flex justify-between items-center max-sm:hidden">
                    <div className="border-[1px] w-fit px-4 py-0.5 rounded-2xl border-gray-300">
                      2023
                    </div>
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                        />
                      </svg>
                      <p className="font-medium">
                        Start date:{" "}
                        <span className="font-normal text-md">
                          {data["start_date"]}{" "}
                        </span>
                      </p>
                    </div>
                  </div>
                  <p className="text-2xl lg:text-4xl font-semibold text-white sm:mt-3">
                    {data["name_latin"]}
                  </p>
                  <p className="mt-3 text-gray-400 sm:mt-3">
                    {data.description}
                  </p>
                  <div className="flex mt-8 sm:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                      />
                    </svg>
                    <p className="font-medium">
                      Start date:{" "}
                      <span className="font-normal text-md">
                        {data["start_date"]}{" "}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
}
