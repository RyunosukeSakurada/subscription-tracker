import React, { useEffect, useState } from 'react'
import { db } from "../firebase";

function TotalCost() {
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const subscriptionRef = db.collection("subscriptions");
    const unsubscribe = subscriptionRef.onSnapshot((querySnapshot) => {
      let total = 0;
      querySnapshot.forEach((doc) => {
        const subscription = doc.data();
        total += subscription.cost;
      });
      setTotalCost(total);
    });
  
    return () => unsubscribe();
  }, []);
  

  return (
    <div className='mb-20'>
      <h2 className='text-xl lg:text-2xl'>Welcome Back <span className='bg-cyan-500 px-3 py-1 rounded'>"NAME"</span></h2>
      <div className='mx-auto text-center min-h-[200px] bg-gray-200 rounded-xl mt-8 text-zinc-800 p-8 justify-center items-center'>
        <p className='text-xl mb-6 font-semibold'>Spent for this month</p>
        <p className='text-5xl'>${totalCost}</p>
      </div>
    </div>
  )
}

export default TotalCost
