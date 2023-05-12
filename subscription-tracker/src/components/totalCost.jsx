import React from 'react'

function TotalCost() {
  return (
    <div className='mb-20'>
      <h2 className='text-xl lg:text-2xl'>Welcome Back <span className='bg-cyan-500 px-3 py-1 rounded'>"NAME"</span></h2>
      <div className='mx-auto text-center min-h-[200px] bg-gray-200 rounded-xl mt-8 text-zinc-800 p-8 justify-center items-center'>
        <p className='text-xl mb-6 font-semibold'>Spent for this month</p>
        <p className='text-5xl'>$300</p>
      </div>
    </div>
  )
}

export default TotalCost
