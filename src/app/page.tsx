import Link from 'next/link'
import React from 'react'

const HomePage = () => {

  return (
    <div className='w-full flex flex-col justify-center items-center gap-7 py-10'>
      <div className='w-8/12 flex justify-between items-center' >
        <div className='text-3xl text-cyan-500 font-semibold'>
          <h3>Home Page</h3>
        </div>
        <div className='bg-green-500 hover:bg-green-600 p-2 text-white rounded font-semibold'>
          <Link href={"/task/add-task"}>
            Add Task
          </Link>
        </div>
      </div>
      <div>
        this is for table
      </div>
    </div>
  )
}

export default HomePage