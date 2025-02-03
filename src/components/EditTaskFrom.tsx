"use client"
import { updateTask } from "@/utils/actions";
import { editTaskSchema } from "@/utils/addTaskSchema";
import { UpdateTaskDto } from "@/utils/dtos";
import { Status, Task } from "@prisma/client";
import { toast } from "react-toastify";

interface EditTaskFormProps {
    task: Task;
}

const EditTaskFrom = ({ task }: EditTaskFormProps) => {

    const clientAction = async (formData: FormData) => {
        const id = formData.get("id")?.toString();
        const title = formData.get("title")?.toString();
        const description = formData.get("description")?.toString();
        const status = formData.get("status") as Status;
        const validation = editTaskSchema.safeParse({ title, description });
        if (!validation.success) {
            toast.warning(validation.error.errors[0].message);
            return;
        }

        await updateTask({ id, title, description, status } as UpdateTaskDto);
    }
    return (
        <form action={clientAction} className="flex flex-col gap-6">
            <input type="hidden" value={task.id} name="id" />
            <input
                type="text"
                placeholder="Task Title"
                name="title"
                className="p-2 text-xl rounded-md text-gray-950"
                defaultValue={task.title}
            />
            <select
                name="status"
                defaultValue={task.status}
                className="p-2 text-xl rounded-md text-gray-950"
            >
                <option value="TODO">TODO</option>
                <option value="IN_PROGRESS">IN_PROGRESS</option>
                <option value="COMPLETED">COMPLETED</option>
            </select>
            <textarea
                name="description"
                rows={5}
                placeholder="Task Description"
                defaultValue={task.description}
                className="p-2 text-xl rounded-md text-gray-950 resize-none"
            ></textarea>
            <button
                type="submit"
                className="bg-cyan-300 hover:bg-cyan-400 text-black font-semibold text-xl rounded-md p-3 transition-colors"
            >
                Edit Task
            </button>
        </form>
    )
}

export default EditTaskFrom