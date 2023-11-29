import {cookies} from "next/headers";

export async function POST(request) {
  const resFront = await request.json()
  const data = {
    username: resFront.username,
    password: resFront.password
  }
  const res = await fetch("https://admin.rupp.support/api/v1/auth/login", {
    method: "POST",
    cache: 'no-store',
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    return Response.json({
      message: 'Incorrect Username or Password. Please try again.',
      status: 404
    })
  }

  const resJson = await res.json();

  // const response = new NextResponse();

  // response.cookies.set('access_token', resJson.access_token, {
  //   secure: process.env.NODE_ENV === 'production',
  //   httpOnly: true,
  // })

  await cookies().set('access_token', resJson.access_token, {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,

  })

  return Response.json({
    message: '',
    status: 200
  })
}