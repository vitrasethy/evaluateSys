import { cookies } from "next/headers";

export default async function getEvents() {
  const cookieStore = cookies();
  const token = cookieStore.get("access_token");

  const res = await fetch("https://admin.rupp.support/api/v1/events", {
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
