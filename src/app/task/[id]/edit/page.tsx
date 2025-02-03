import prisma from '@/utils/db';
import { notFound } from 'next/navigation';
import React from 'react'


interface EditTaskPageProps {
    params: Promise<{ id: string }>;
}



const EditTaskPage = async ({ params }: EditTaskPageProps) => {
    const taskId = (await params).id;
    const task = await prisma.task.findUnique({
        where: { id: parseInt(taskId) }
    })

    if (!task) notFound();


    return (
        <div>EditTaskPage :{taskId}</div>
    )
}

export default EditTaskPage