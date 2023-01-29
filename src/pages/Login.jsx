import React from "react";
import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  async function signInWithGoogle() {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate("/");
  }

  return (
    <div>
      <p>Sign-in with google to continue</p>
      <button onClick={signInWithGoogle}>Sign in with google</button>
    </div>
  );
}
