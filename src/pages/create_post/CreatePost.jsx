import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Button, Container, Input, Textarea, Typography } from "@mui/joy";

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
    <Container maxWidth='md' sx={{ mt: 5 }}>
      <form onSubmit={handleSubmit(onCreatePost)}>
        <Input
          sx={{ mb: 1 }}
          size='lg'
          placeholder='Post Title'
          color='neutral'
          variant='soft'
          {...register("title")}
        />
        <Typography>{errors.title?.message}</Typography>
        <Textarea
          sx={{ mt: 3, mb: 1 }}
          placeholder='Post content...'
          minRows={10}
          size='lg'
          color='neutral'
          variant='soft'
          {...register("description")}
        />
        <Typography>{errors.description?.message}</Typography>
        <Button
          color='danger'
          size='lg'
          type='submit'
          style={{
            margin: "2rem 0",
            minWidth: "150px",
          }}
        >
          Post
        </Button>
      </form>
    </Container>
  );
}
