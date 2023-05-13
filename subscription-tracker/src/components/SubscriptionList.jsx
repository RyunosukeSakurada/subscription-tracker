import React from 'react'
import SubscriptionItem from './SubscriptionItem';


function SubscriptionList() {

  return (
    <div className='my-20'>
      <h2 className='text-xl lg:text-2xl'>Subscriptions</h2>
      <ul className='max-w-[700px] mx-auto'>
        <SubscriptionItem />
      </ul>
    </div>
  )
}

export default SubscriptionList
