import React from 'react'

const AddTaskForm = () => {


    return (
        <form action={CreateTask} className="w-full md:w-10/12 flex flex-col p-5 gap-4 border-2 border-white rounded-lg bg-slate-800">
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