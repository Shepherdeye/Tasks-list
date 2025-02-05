import StatusBage from '@/components/StatusBage';
import prisma from '@/utils/db'
import Link from 'next/link'
import React from 'react'

// to make  this page dynamic
export const dynamic = "force-dynamic";


const HomePage = async () => {
  const tasks = await prisma.task.findMany();
  return (
    <div className='w-full flex flex-col justify-center items-center gap-7 py-10'>
      <div className='w-8/12 flex justify-between items-center' >
        <div className='text-3xl text-cyan-500 font-semibold'>
          <h3>Tasks List App</h3>
        </div>
        <div className='bg-green-500 hover:bg-green-600 p-2 text-white rounded font-semibold '>
          <Link href={"/task/add-task"}>
            Add Task
          </Link>
        </div>
      </div>
      <div className='container my-10'>
        <table className="table w-full text-left mt-5">
          <thead className="border-t-2 border-b-2 border-gray-300 text-xl">
            <tr>
              <th className="p-3">#</th>
              <th>Task Title</th>
              <th>Task Status</th>
              <th>Task Details</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={task.id} className="border-b border-gray-500">
                <td className="p-3">{index + 1}</td>
                <td>{task.title}</td>
                <td>
                  <StatusBage status={task.status} />
                </td>
                <td>
                  <Link
                    href={`/task/${task.id}`}
                    className="bg-blue-600 hover:bg-blue-800 transition-colors text-white rounded-md p-2"
                  >
                    Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default HomePage