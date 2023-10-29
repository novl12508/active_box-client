"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import { postCreatePost } from "./api/allPosts";
import Link from "next/link";

const SubmitHandler = (e: FormEvent) => {
  e.preventDefault();
};

const CreatePost = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [post, setPost] = useState({});

  const nameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const descriptionHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const submitClick = async () => {
    try {
      const result = await postCreatePost({ name, description });
      setPost(result);
      console.log(result);
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
            value={name}
            onChange={nameHandler}
            placeholder='Название поста'
            type='text'
            name='name'
            className='bg-transparent border border-blue-700 rounded-md w-full h-full px-4 py-2'
          />
        </label>
        <label>
          <textarea
            value={description}
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
