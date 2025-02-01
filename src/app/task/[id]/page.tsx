import prisma from '@/utils/db';
import { notFound } from 'next/navigation';
import React from 'react'

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
        <div>
            <h1>{task.title}</h1>
            <small>{new Date(task.updatedAt).toDateString()}</small>
            <p>{task.description}</p>

        </div>
    )
}

export default TaskDetailsPage