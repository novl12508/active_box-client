"use client";

import Link from "next/link";
import React, { useContext } from "react";
import Post from "./Post";
import { useGlobalContext } from "@/context/store";
import { AllPosts } from "./api/allPosts";

const Posts = () => {
  const { posts, setPosts, setUser, user } = useGlobalContext();

  // useEffect(() => {
  //   const userLocal = localStorage.getItem("user");
  //   if (!userLocal) {
  //     return;
  //   }
  //   const user = JSON.parse(localStorage.getItem("user") || "") as {
  //     data: { id: number; email: string; name: string };
  //   };
  //   console.log(user.data);
  //   setUser(user.data);
  // }, []);

  return (
    <div className=''>
      <div className='flex justify-center items-center my-10'>
        {user.email ? (
          <Link
            href='/create_post'
            className='cursor-pointer border border-blue-700 rounded-md px-32 py-2 hover:bg-blue-700 hover:text-black transition-colors duration-200'
          >
            Create Post
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
        {posts.map((post, i) => {
          return (
            <Post
              title={post.title}
              body={post.body}
              name={post.__user__.name}
              key={i + post.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
