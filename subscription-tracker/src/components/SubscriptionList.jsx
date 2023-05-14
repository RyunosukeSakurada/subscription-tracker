import React, { useEffect, useState } from 'react'
import {TfiTrash} from "react-icons/tfi"
import {db} from "../firebase";

function SubscriptionList() {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    db.collection("subscriptions").onSnapshot((snapshot) => {
      setSubscriptions(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });
  }, []);


  return (
    <div className='my-20'>
      <h2 className='text-xl lg:text-2xl'>Subscriptions</h2>
      <ul className='max-w-[700px] mx-auto'>
        {subscriptions.map((subscription) => (
          <li key={subscription.id} className='flex justify-between items-center my-3 bg-gray-700 p-5 rounded-md'>
            <span className='text-xl font-semibold'>{subscription.data.name}</span>
            <div className='flex items-center gap-x-2'>
              <p className='text-xs sm:text-sm'><span className='font-semibold text-xl tsm:text-sm mr-1'>${subscription.data.cost}</span>/month</p>
              <TfiTrash className='text-2xl' />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SubscriptionList
