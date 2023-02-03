import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { Post } from "./Post";

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
    <div>
      {postsList?.map((post) => {
        return <Post post={post} />;
      })}
    </div>
  );
}
