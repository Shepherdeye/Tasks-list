import StatusBage from '@/components/StatusBage';
import prisma from '@/utils/db';
import { notFound } from 'next/navigation';
import React from 'react'
import Link from 'next/link';
import { deleteTask } from '@/utils/actions';

interface TaskDetailsPageProps {

    params: Promise<{ id: string }>;
}




const TaskDetailsPage = async ({ params }: TaskDetailsPageProps) => {
    const taskId = (await params).id;
    const task = await prisma.task.findUnique({
        where: { id: parseInt(taskId) }
    });

    if (!task) {
        return notFound();
    }


    return (
        <section>
            <div className="flex items-center justify-between p-10">
                <Link href="/" className="underline">
                    {"<< "} Back to tasks table
                </Link>
                <div className="flex items-center">
                    <Link
                        href={`/task/${task.id}/edit`}
                        className="bg-green-700 hover:bg-green-600 transition-colors rounded-lg py-1 px-2 me-3 text-xl"
                    >
                        Edit
                    </Link>
                    <form action={deleteTask}>
                        <input type="hidden" name="id" value={task.id} />
                        <button type="submit" className="bg-red-700 hover:bg-red-600 transition-colors rounded-lg py-1 px-2 text-xl">
                            Delete
                        </button>
                    </form>
                </div>
            </div>
            <div className="mt-16 p-5 rounded-lg bg-gray-600 m-10">
                <div className="flex items-center justify-between">
                    <h2 className="font-bold text-3xl">{task.title}</h2>
                    <StatusBage status={task.status} />
                </div>
                <small className="text-yellow-400">
                    {new Date(task.createdAt).toDateString()}
                </small>
                <p className="mt-5 text-xl">{task.description}</p>
            </div>
        </section>
    )
}

export default TaskDetailsPage