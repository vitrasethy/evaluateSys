import { cookies } from "next/headers";
import getUserData from "@/components/auth/getUserData";

export default async function getScore() {
  const cookieStore = cookies();
  const token = cookieStore.get("access_token");
  const projectId = cookieStore.get("project_id");
  const userData = await getUserData()


  const res = await fetch(`https://admin.rupp.support/api/v1/events/eve-committees/${userData.eve_committee_id}/project-shortlists/${projectId.value}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + token?.value,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
