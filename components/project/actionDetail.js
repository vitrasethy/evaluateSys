"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function actionDetail(formData) {
    cookies().set("project_id", formData.get('projectId'));
    const eventId = cookies().get("event_id");

    redirect(`/events/${eventId}/projects/projectDetail`);
}
