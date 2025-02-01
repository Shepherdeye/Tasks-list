"use client"
import { createTask } from '@/utils/actions';
import { createTaskSchema } from '@/utils/addTaskSchema';
import { CreateTaskDto } from '@/utils/dtos';
import React from 'react'
import { toast } from 'react-toastify';

const AddTaskForm = () => {

    const clientAction = async (formData: FormData) => {
        const title = formData.get("title")?.toString();
        const description = formData.get("description")?.toString();
        const validation = createTaskSchema.safeParse({ title, description });
        if (!validation.success) {
            toast.error(validation.error.errors[0].message);
            return;
        }
        await createTask({ title, description } as CreateTaskDto);
        toast.success("New Task Added");

    }


    return (
        <form action={clientAction} className="w-full md:w-10/12 flex flex-col p-5 gap-4 border-2 border-white rounded-lg bg-slate-800">
            <h3 className="font-bold text-2xl">Add Your Task</h3>
            <input
                className="rounded p-2 text-black "
                type="text"
                name="title"
                placeholder="type title" />
            <textarea
                className="rounded p-2 text-black"
                name="description"
                rows={5}
                placeholder="type the description"></textarea>
            <button
                className=" bg-cyan-300 hover:bg-cyan-400 text-black font-semibold text-xl rounded-md p-3 transition-colors "
                type="submit">
                Add Task
            </button>
        </form>
    )
}

export default AddTaskForm