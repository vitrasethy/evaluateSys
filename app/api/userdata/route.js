import {cookies} from "next/headers";

export async function GET() {
  const cookieStore = cookies();
  const token = cookieStore.get("access_token");

  const res = await fetch("https://admin.rupp.support/api/v1/auth/protected", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // Accept: "application/json",
      Authorization: "Bearer " + token?.value,
    },
  });

  if (!res.ok) {
    cookies().delete('access_token')
    return Response.json({res: null});
  }

  return Response.json(res);
}