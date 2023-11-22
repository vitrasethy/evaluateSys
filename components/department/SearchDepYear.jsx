import { redirect } from "next/navigation";
import getDepart from "@/components/department/getDepart";
import SelectPC from "@/components/department/SelectPC";
import { cookies } from "next/headers";
import SelectMobile from "@/components/department/SelectMobile";

export default async function SearchDepYear({ eventId }) {
  const departments = await getDepart();

  async function action(formData) {
    "use server";

    const departmentId = formData.get("department")?.toString();
    const yearId = formData.get("year")?.toString();

    cookies().set("event_id", eventId);
    cookies().set("dept_id", departmentId);
    cookies().set("year_id", yearId);

    redirect("/events/dept-year/projects");
  }

  return (
    <div>
      {/* Mobile View */}
      <div className={"lg:hidden"}>
        <form action={action} className={"mb-10"}>
          <SelectMobile departments={departments} />
        </form>
      </div>
      {/* Computer View */}
      <div className={"hidden lg:block"}>
        <form action={action} className={"mb-10"}>
          <SelectPC departments={departments} />
        </form>
      </div>
    </div>
  );
}
