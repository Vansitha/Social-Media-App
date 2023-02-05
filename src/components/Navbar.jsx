import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import BasicMenu from "./Menu";
import { Button, Grid, Stack } from "@mui/joy";
import ModeToggler from "./ModeToggler";
import HomeIcon from "@mui/icons-material/Home";

export default function Navbar() {
  const [user] = useAuthState(auth);

  async function signUserOut() {
    await signOut(auth);
  }

  return (
    <Grid
      container
      director='row'
      justifyContent='space-between'
      alignItems='flex-end'
      my={3}
      maxWidth={1280}
      mx='auto'
    >
      <Stack direction='row' spacing={2} mt={1}>
        <ModeToggler />
        <Link to='/'>
          <Button color='neutral' size='md' variant='soft'>
            <HomeIcon />
          </Button>
        </Link>
      </Stack>
      <Stack direction='row' spacing={2} sx={{ alignItems: "end" }}>
        {!user ? (
          <Link to='/login'>
            <Button variant='solid'>Login</Button>
          </Link>
        ) : (
          <Link to='/createpost'>
            <Button variant='solid' color='danger' size='md'>
              Create
            </Button>
          </Link>
        )}
        {user && <BasicMenu user={user} logout={signUserOut} />}
      </Stack>
    </Grid>
  );
}
