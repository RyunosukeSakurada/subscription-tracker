import React from 'react'
import { Button } from '@mui/material'

function AddSubscription() {

  return (
    <div>
      <p className='text-2xl mb-5'>Add Subscription</p>
      <form className='max-w-[700px] mx-auto'>
        <div className='mb-3 bg-gray-700 p-5 rounded-md'>
          <label htmlFor="name" className='text-xl font-semibold'>Name</label>
          <input
            required='required'
            type='text'
            id='name'
            placeholder='Netflix'
            className='block py-2 px-3 rounded w-full text-zinc-950'
          />
        </div>
        <div className='mb-3 bg-gray-700 p-5 rounded-md'>
          <label htmlFor="cost" className='text-xl font-semibold'>Cost</label>
          <input
            required='required'
            type='number'
            id='cost'
            placeholder='10'
            className='block py-2 px-3 rounded w-full text-zinc-950'
          />
        </div>
        <Button
          type='submit' 
          variant="outlined"
        color="info"
        >Add</Button>
      </form>
    </div>
  )
}

export default AddSubscription
