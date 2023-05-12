import React from "react";
import { Button } from "@mui/material"
import { auth } from "../firebase.js";

function Header (){
  return (
    <header className="p-10 flex justify-between items-center">
      <h1 className="text-2xl text-cyan-500">Subscription Tracker</h1>
      <Button onClick={() => auth.signOut()}>Logout</Button>
    </header>
  )
}
export default Header