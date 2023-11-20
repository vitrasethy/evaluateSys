import { cookies } from "next/headers";

export default async function getDepart() {
  const cookieStore = cookies();
  const token = cookieStore.get("access_token");

  const res = await fetch("https://admin.rupp.support/api/v1/departments", {
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
