import React, { useEffect, useState } from 'react'
import { db,auth } from "../firebase";

function TotalCost() {
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    //Access the "subscriptions" collection in Firestore
    const subscriptionRef = db.collection("subscriptions");
    //Monitor real-time changes to data within the "subscriptions" collection. 
    //This code will be called every time Firestore is updated.
    const unsubscribe = subscriptionRef.onSnapshot((querySnapshot) => {
      let total = 0;
      //Retrieve the value of the "cost" property for each subscription, and store the sum of those values in "total".
      querySnapshot.forEach((doc) => {
        //Return an object representing the data of a document retrieved from Firestore.
        const subscription = doc.data();
        //parseFloat: Function to convert a string to a floating point number (decimal number).
        total += parseFloat(subscription.cost);
      });
      //Use setTotalCost() to set the value of "total" to the totalCost state.
      setTotalCost(total);
    });
  
    //Return the unsubscribe() function to stop monitoring with onSnapshot().
    return () => unsubscribe();
  }, []);
  

  return (
    <div className='mb-20'>
      <h2 className='text-xl lg:text-2xl'>Welcome Back <span className='bg-cyan-500 px-3 py-1 rounded'>{auth.currentUser.displayName}</span></h2>
      <div className='mx-auto text-center min-h-[200px] bg-gray-200 rounded-xl mt-8 text-zinc-800 p-8 justify-center items-center'>
        <p className='text-xl mb-6 font-semibold'>Spent for this month</p>
        <p className='text-5xl'>${totalCost}</p>
      </div>
    </div>
  )
}

export default TotalCost
