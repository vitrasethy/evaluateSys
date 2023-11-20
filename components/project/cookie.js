"use server"

import {cookies} from "next/headers";

export default async function cookie({projectId}){
    cookies().set('project_id', projectId)
}