import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

export default function CreateForm() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const schema = yup.object().shape({
    title: yup.string().required("Title is required"),
    description: yup.string().required("Description is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const postsRef = collection(db, "posts");

  async function onCreatePost(data) {
    addDoc(postsRef, {
      /* You can also just do ...data here to include everything because its the same thing */
      title: data.title,
      description: data.description,
      username: user.displayName,
      userId: user?.uid,
    });

    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit(onCreatePost)}>
      <input placeholder='title' {...register("title")} />
      <p style={{ color: "red" }}>{errors.title?.message}</p>
      <textarea placeholder='description' {...register("description")} />
      <p style={{ color: "red" }}>{errors.description?.message}</p>
      <input type='submit' />
    </form>
  );
}
