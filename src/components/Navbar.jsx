import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { Button, Stack } from "@mui/material";
import styles from "./Navbar.module.css";
import BasicMenu from "./Menu";

export default function Navbar() {
  const [user] = useAuthState(auth);

  async function signUserOut() {
    await signOut(auth);
  }

  return (
    <Stack
      direction='row'
      spacing={5}
      justifyContent='space-between'
      alignItems='flex-start'
      my={5}
      className={styles.container}
    >
      <Stack direction='row' spacing={4} mt={1}>
        <Link to='/'>
          <Button variant='outlined' size='large'>
            Home
          </Button>
        </Link>
        {!user ? (
          <Link to='/login'>
            <Button variant='outlined' size='large'>
              Login
            </Button>
          </Link>
        ) : (
          <Link to='/createpost'>
            <Button variant='outlined' size='large'>
              Create Post
            </Button>
          </Link>
        )}
      </Stack>

      <Stack direction='row' spacing={5}>
        {user && <BasicMenu user={user} logout={signUserOut} />}
      </Stack>
    </Stack>
  );
}
