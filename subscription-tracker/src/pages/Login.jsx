import React from "react";
import firebase from "firebase/compat/app";
import { auth } from "../firebase.js";
import Button from "@mui/material/Button";
import Img from "../assets/login.jpg"


function Login() {
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <div className="max-w-[900px] mx-auto px-8 py-20 h-screen">
      <p className="text-3xl" >Wellcome to our</p>
      <span className="text-5xl text-cyan-500 font-bold ">Subscription Tracker</span>
      <img 
        src={Img}
        alt="" 
        className="w-full h-[300px] object-cover mt-20 rounded mb-20"
      />
      <div>
        <Button 
          onClick={signInWithGoogle}
          variant="outlined"
          color="info"
          sx={{ width: 250, padding: 1.5}}
        >
            Login
        </Button>
      </div>
    </div>
  )
}
export default Login