import React from 'react'
import {TfiTrash} from "react-icons/tfi"

function SubscriptionItem() {

  return (
    <div>
      <li className='flex justify-between items-center my-3 bg-gray-700 p-5 rounded-md'>
        <span className='text-xl font-semibold'>Netflix</span>
        <div className='flex items-center gap-x-2'>
          <p className='text-xs sm:text-sm'><span className='font-semibold text-xl tsm:text-sm mr-1'>$10</span>/month</p>
          <TfiTrash className='text-2xl' />
        </div>
      </li>
    </div>
  )
}

export default SubscriptionItem
