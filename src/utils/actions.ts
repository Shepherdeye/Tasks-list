"use server"
import { CreateTaskDto, UpdateTaskDto } from './dtos';
import { revalidatePath } from "next/cache";
import prisma from "./db";
import { redirect } from "next/navigation";
import { Status } from '@prisma/client';

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

    revalidatePath("/");
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
        throw new Error("failed to delete task")
    }
    revalidatePath("/");
    redirect("/");
}

export async function updateTask({ id, title, description, status }: UpdateTaskDto) {

    if (!id) return;
    if (!title || typeof title !== "string" || title.length < 2) return;
    if (!description || typeof description !== "string" || description.length < 4) return;
    if (!status) return;

    try {
        await prisma.task.update({
            where: { id: parseInt(id) },
            data: {
                title,
                description,
                status
            }
        })
    } catch {
        throw new Error("failed to update task");
    }

    revalidatePath("/");
    revalidatePath(`/task/${id}`);
    redirect(`/task/${id}`);

}