"use server"
import { revalidatePath } from "next/cache";
import prisma from "./db";
import { redirect } from "next/navigation";

async function CreateTask(formData: FormData) {
    const title = formData.get("title")?.toString();
    const description = formData.get("description")?.toString();
    if (!title || !description) {
        return console.log("required")
    }

    await prisma.task.create({
        data: {
            title,
            description
        }
    })
    revalidatePath("/");
    redirect("/");
}
