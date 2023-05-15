import React, { useEffect, useState } from 'react'
import {TfiTrash} from "react-icons/tfi"
import {db} from "../firebase";

function SubscriptionList() {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    //Monitor changes.
    db.collection("subscriptions").onSnapshot((snapshot) => {
      //Convert Firestore documents to a list of JavaScript objects and pass them to setSubscriptions.
      setSubscriptions(
        //The snapshot object is an array that includes all the documents matching the query, 
        //with each document represented as a DocumentSnapshot object.
        //The map() method processes the received DocumentSnapshot object to create a new object.
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });
  }, []);

  const handleDeleteSubscription = (id) => {
    //Delete the document corresponding to the specified ID.
    db.collection("subscriptions").doc(id).delete()
      //Use the setSubscriptions() method to update the subscriptions state and remove the deleted document from the array.
      .then(() => {
        //Use the filter() method to keep only the documents whose IDs do not match the ID of the deleted document.
        setSubscriptions(subscriptions.filter((subscription) => subscription.id !== id));
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  return (
    <div className='my-20'>
      <h2 className='text-xl lg:text-2xl'>Subscriptions</h2>
      <ul className='max-w-[700px] mx-auto'>
        {subscriptions.map((subscription) => (
          <li 
            key={subscription.id} 
            data-id={subscription.id}
            className='flex justify-between items-center my-3 bg-gray-700 p-5 rounded-md'
          >
            <span className='text-xl font-semibold'>{subscription.data.name}</span>
            <div className='flex items-center gap-x-2'>
              <p className='text-xs sm:text-sm'><span className='font-semibold text-xl tsm:text-sm mr-1'>${subscription.data.cost}</span>/month</p>
              <TfiTrash className='text-2xl' onClick={() => handleDeleteSubscription(subscription.id)}/>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SubscriptionList
