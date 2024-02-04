"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import { postCreatePost } from "./api/allPosts";
import { useRouter } from "next/navigation";
import useGlobalContext from "@/context/store";

const SubmitHandler = (e: FormEvent) => {
  e.preventDefault();
};

const CreatePost = () => {
  const [title, setName] = useState("");
  const [body, setDescription] = useState("");
  const router = useRouter();
  const { setPosts } = useGlobalContext();

  const nameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const descriptionHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const submitClick = async () => {
    try {
      const result = await postCreatePost({ title, body });
      console.log(result);
      setPosts((state) => [...state, result]);
      console.log(result, "POSTS");
      router.push("/posts");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form
      onSubmit={SubmitHandler}
      className='flex flex-col h-full justify-center items-center gap-10'
    >
      <h1 className='uppercase text-3xl'>Создание поста</h1>
      <div className='flex flex-col w-1/3 gap-2'>
        <label>
          <input
            value={title}
            onChange={nameHandler}
            placeholder='Название поста'
            type='text'
            name='name'
            className='bg-transparent border border-blue-700 rounded-md w-full h-full px-4 py-2'
          />
        </label>
        <label>
          <textarea
            value={body}
            onChange={descriptionHandler}
            placeholder='Текст поста'
            name='description'
            className='bg-transparent border border-blue-700 rounded-md w-full h-80 px-4 py-2 resize-none'
          />
        </label>
      </div>
      <input
        type='submit'
        value='Опубликовать пост'
        className='cursor-pointer border border-blue-700 rounded-md px-7 py-2 hover:bg-blue-700 hover:text-black transition-colors duration-200'
        onClick={submitClick}
      />
    </form>
  );
};

export default CreatePost;
