"use server"
import { CreateTaskDto } from './dtos';
// import { revalidatePath } from "next/cache";
import prisma from "./db";
import { redirect } from "next/navigation";

export async function createTask({ title, description }: CreateTaskDto) {
    if (typeof title !== 'string' || title.length < 2) return;
    if (typeof description !== 'string' || description.length < 4) return;

    try {
        await prisma.task.create({
            data: { title, description }
        });
    } catch (error) {
        throw new Error("could not create the task, please try again");
    }

    //revalidatePath("/");
    redirect("/");
}


export async function deleteTask(formData: FormData) {
    const id = formData.get("id")?.toString();
    if (!id) return;
    try {
        await prisma.task.delete({
            where: { id: parseInt(id) }
        })
    } catch {
        return new Error("failed to delete task")
    }

}