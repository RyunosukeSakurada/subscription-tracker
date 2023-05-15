import React, { useState } from 'react'
import { Button } from '@mui/material'
import {db} from "../firebase";


function AddSubscription() {

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const handleAddSubscription = (e) => {
    e.preventDefault();
    //Reference the "subscriptions" collection in Firestore.
    db.collection("subscriptions")
      //Add a new document with two fields, "name" and "cost"
      .add({
        name,
        cost,
      })
      //If writing to Firestore is successful, call setName("") and setCost("") to clear the form fields.
      .then(() => {
        setName("");
        setCost("");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  return (
    <div>
      <p className='text-2xl mb-5'>Add Subscription</p>
      <form className='max-w-[700px] mx-auto' onSubmit={handleAddSubscription}>
        <div className='mb-3 bg-gray-700 p-5 rounded-md'>
          <label htmlFor="name" className='text-xl font-semibold'>Name</label>
          <input
            required='required'
            type='text'
            id='name'
            placeholder='Netflix'
            className='block py-2 px-3 rounded w-full text-zinc-950' 
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={cost}
            onChange={(e) => setCost(e.target.value)}
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
