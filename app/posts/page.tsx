import Header from "@/components/Header/Header";
import Posts from "@/components/Posts/Posts";
import React from "react";

const PostsPage = () => {
  return (
    <>
      <Header />
      <main className='posts text-white pt-28'>
        <Posts />
      </main>
    </>
  );
};

export default PostsPage;
