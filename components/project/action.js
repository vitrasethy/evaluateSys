"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function action(formData) {
  cookies().set("project_id", formData.get('projectId'));
  const eventId = cookies().get("event_id");

  redirect(`/events/${eventId.value}/projects/evaluate`);
}

export async function actionEdit(formData) {
  cookies().set("project_id", formData.get('projectId'));
  const eventId = cookies().get("event_id");

  redirect(`/events/${eventId.value}/projects/edit-evaluate`);
}
