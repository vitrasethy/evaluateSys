import { cookies } from "next/headers";
import getUserData from "@/components/auth/getUserData";

export async function GET() {
  const cookieStore = cookies();
  const token = cookieStore.get("access_token");
  const eventId = cookies().get('event_id')
  const deptId = cookies().get('dept_id')
  const yearId = cookies().get('year_id')

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

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const data = await res.json();
  const userData = await getUserData();

  let i = 1;
  let newData = [];
  data.forEach((e) => {
    const tempData = {
      no: i,
      id: e.eve_project_code,
      project_id: e.eve_shortlist_id,
      name: e.eve_project_topic,
      type: e.eve_project_type,
      supervisor: e.eve_project_supervisor_name,
      leader: e.eve_project_members[0],
      member: e.eve_project_members.slice(1).map((item) => ({
        name: item.name_latin,
        gender: item.sys_gender.name_latin,
      })),
    };

    let tempCommittee = {};
    let status = 0;

    if (userData.is_admin) {
      let temp = [];
      e.eve_project_committee.map((x) => {
        if (x.is_evaluated) temp.push(true);
        else temp.push(false);
      });

      if (temp.every((element) => element === true)) status = 1;
      else if (temp.every((element) => element === false)) status = 0;
      else status = 2;

      tempCommittee = {
        status: status,
        total_score: 98,
        committee: e.eve_project_committee,
      };
    } else {
      const userId = userData.eve_committee_id;
      eve_project_committee
        .filter((y) => y.id === userId)
        .map(
          (y) =>
            (tempCommittee = {
              status: y.is_evaluated,
              total_score: y.project_score,
              committee: null,
            }),
        );
    }
    const combinedData = {
      ...tempData,
      ...tempCommittee,
    };

    newData.push(combinedData)
    i++
  });


  return Response.json(newData);
}
