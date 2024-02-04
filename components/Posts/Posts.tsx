"use client";

import Link from "next/link";
import React from "react";
import Post from "./Post";
import useGlobalContext from "@/context/store";

const Posts = () => {
  const { posts, user } = useGlobalContext();

  console.log(posts);

  return (
    <div className=''>
      <div className='flex justify-center items-center relative my-10'>
        {user.email !== "" ? (
          <Link
            href='/create_post'
            className='link_post flex justify-center items-center fixed bottom-0 right-0 bg-blue-500 text-4xl font-light p-7 text-center w-[28px] h-[28px] rounded-full mr-7 mb-4 transition-colors duration-200'
          >
            <p className='absolute font-normal justify-center items-center bottom-0 w-[100px]  text-base mb-[70px] bg-white text-black rounded-xl hidden'>
              Create post
            </p>
            <p className='mb-[7px]'>+</p>
          </Link>
        ) : (
          <>
            <p>Если хотите оставить комментарий</p>
            <Link href='/auth' className='ml-2 text-blue-500 hover:underline'>
              авторизуйтесь
            </Link>
            .
          </>
        )}
      </div>
      <div className='flex flex-wrap justify-center items-center mx-10 gap-5 w-full h-full'>
        {posts.length !== 0 &&
          posts.map((post, i) => {
            return (
              <Post
                title={post.title}
                body={post.body}
                name={post.user.name}
                key={i + post.title}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Posts;
