import Link from "next/link"
import AddTaskForm from "@/components/AddTaskForm";


const AddTask = () => {
    return (
        <section className="w-full h-full flex items-center justify-center">
            <div className="w-full md:w-8/12 gap-5 flex flex-col justify-center items-start m-auto  p-2 md:p-10">
                <div className=" text-white  underline mb-10">
                    <Link href={"/"}> {"<<"} Go To Home Page</Link>
                </div>
                <div className="w-full flex flex-col items-center gap-5 ">
                    <AddTaskForm />
                </div>
            </div>
        </section>
    )
}

export default AddTask