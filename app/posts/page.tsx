import Header from "@/components/Header/Header";
import Posts from "@/components/Posts/Posts";
import React from "react";

const PostsPage = () => {
  return (
    <>
      <Header />
      <main className='posts text-white overflow-hidden'>
        <Posts />
      </main>
    </>
  );
};

export default PostsPage;
