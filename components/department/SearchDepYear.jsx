import { redirect } from "next/navigation";
import getDepart from "@/components/department/getDepart";
import SelectPC from "@/components/department/SelectPC";
import { cookies } from "next/headers";

export default async function SearchDepYear() {
  const departments = await getDepart();

  async function action(formData) {
    "use server";

    const departmentId = formData.get("department")?.toString();
    const yearId = formData.get("year")?.toString();

    cookies().set("dept_id", departmentId);
    cookies().set("year_id", yearId);

    redirect("/events/dept-year/projects");
  }

  return (
    <form action={action} className={"mb-10"}>
      {/* Mobile View */}
      <div className={"lg:hidden"}></div>
      {/* Computer View */}
      <div className={"hidden lg:block"}>
        <SelectPC departments={departments} />
      </div>
    </form>
  );
}
