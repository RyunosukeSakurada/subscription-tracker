import React from "react";
import { Button } from "@mui/material"
import { auth } from "../firebase";

function Header (){
  return (
    <header className="px-8 py-6 flex justify-between items-center border-solid border-gray-700 border-b-2">
      <h1 className="text-2xl text-cyan-500">Subscription Tracker</h1>
      <Button 
        onClick={() => auth.signOut()}
        variant="outlined"
        color="info"
      >
        Logout
      </Button>
    </header>
  )
}
export default Header