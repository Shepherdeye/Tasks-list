import React from 'react'


interface EditTaskPageProps {
    params: Promise<{ id: string }>;
}



const EditTaskPage = async ({ params }: EditTaskPageProps) => {
    const taskId = (await params).id;

    return (
        <div>EditTaskPage</div>
    )
}

export default EditTaskPage