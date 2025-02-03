import EditTaskFrom from '@/components/EditTaskFrom';
import { updateTask } from '@/utils/actions';
import prisma from '@/utils/db';
import Link from 'next/link';
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
        <section className='p-8' >
            <Link className="underline block mb-10 mt-10" href={`/task/${task.id}`}>
                {"<< "} Back to task details
            </Link>
            <div className="w-2/3 mx-auto rounded-md p-5 bg-slate-800 border-2 border-gray-300">
                <h1 className="mb-7 font-bold text-3xl">Edit Task</h1>
                <EditTaskFrom task={task} />
            </div>
        </section>
    )
}

export default EditTaskPage