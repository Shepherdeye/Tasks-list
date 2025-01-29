import prisma from "@/utils/db";
import { redirect } from "next/navigation";
import Link from "next/link"

async function CreateTask(formData: FormData) {
    "use server"
    const title = formData.get("title")?.toString();
    const description = formData.get("description")?.toString();
    if (!title || !description) {
        return console.log("required")
    }

    await prisma.task.create({
        data: {
            title,
            description
        }
    })
    redirect("/")
}


const AddTask = () => {
    return (
        <section className="w-full h-full flex items-center justify-center">
            <div className="w-full md:w-8/12 gap-5 flex flex-col justify-center items-start m-auto  p-2 md:p-10">
                <div className=" text-white  underline mb-10">
                    <Link href={"/"}> {"<<"} Go To Home Page</Link>
                </div>
                <div className="w-full flex flex-col items-center gap-5 ">
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
                </div>
            </div>
        </section>
    )
}

export default AddTask