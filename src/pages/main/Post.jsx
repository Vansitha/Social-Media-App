import React, { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db, auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export function Post(props) {
  const { post } = props;
  const [user] = useAuthState(auth);
  const [likes, setLikes] = useState(null);

  const likesRef = collection(db, "likes");
  const likesDoc = query(likesRef, where("postId", "==", post.id));

  async function getLikes() {
    const data = await getDocs(likesDoc);
    setLikes(
      data.docs.map((doc) => ({ userId: doc.data().userId, likeId: doc.id }))
    );
  }

  async function addLike() {
    try {
      const newDoc = await addDoc(likesRef, {
        userId: user?.uid,
        postId: post?.id,
      });
      if (user) {
        setLikes((prev) =>
          prev
            ? [...prev, { userId: user.uid, likeId: newDoc.id }]
            : [{ userId: user.uid, likeId: newDoc.id }]
        );
      }
    } catch (err) {
      console.error(err);
    }
  }

  async function removeLike() {
    try {
      const likeToDeleteQuery = query(
        likesRef,
        where("postId", "==", post.id),
        where("userId", "==", user?.uid)
      );

      const likeToDeleteData = await getDocs(likeToDeleteQuery);
      const likeId = likeToDeleteData.docs[0].id;
      const likeToDelete = doc(db, "likes", likeToDeleteData.docs[0].id);
      await deleteDoc(likeToDelete);

      if (user) {
        setLikes((prev) =>
          setLikes(
            (prev) => prev && prev.filer((like) => like.likeId !== likeId)
          )
        );
      }
    } catch (err) {
      console.error(err);
    }
  }

  const hasUserLiked = likes?.find((like) => like.userId === user?.uid);

  useEffect(() => {
    getLikes();
  }, []);

  return (
    <div>
      <div className='title'>{post.title}</div>
      <div className='body'>
        <p>{post.description}</p>
      </div>
      <div className='footer'>
        <p>@{post.username}</p>
      </div>
      <button onClick={hasUserLiked ? removeLike : addLike}>
        {" "}
        {hasUserLiked ? <>&#128078;</> : <>&#128077; </>}{" "}
      </button>
      {likes && <p>Likes: {likes?.length}</p>}
    </div>
  );
}
