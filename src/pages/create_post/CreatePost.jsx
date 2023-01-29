import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function CreateForm() {
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

  function onCreatePost(data) {
    console.log(data);
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
