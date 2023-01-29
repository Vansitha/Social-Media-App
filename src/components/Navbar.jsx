import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

export default function Navbar() {
  const [user] = useAuthState(auth);

  async function signUserOut() {
    await signOut(auth);
  }

  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/login'>Login</Link>

      <div>
        {user && (
          <>
            <p>{user?.displayName || ""}</p>
            <img
              alt='user profile img'
              src={user?.photoURL || ""}
              width='100'
              height='100'
            />
            <div>
              <button onClick={signUserOut}>Logout</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
