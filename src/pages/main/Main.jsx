import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { Post } from "./Post";
import { Grid } from "@mui/joy";

export default function Main() {
  const [postsList, setPostsList] = useState(null);
  const postRef = collection(db, "posts");

  async function getPosts() {
    const data = await getDocs(postRef);
    setPostsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }

  useEffect(() => {
    getPosts();
  }, []);
  
  return (
    <Grid
      container
      gap={2}
      sx={{ justifyContent: "center", alignItems: "center" }}
      maxWidth={1280}
      mx='auto'
    >
      {postsList?.map((post, index) => {
        return <Post post={post} key={index} />;
      })}
    </Grid>
  );
}
