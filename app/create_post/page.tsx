import Header from "@/components/Header/Header";
import CreatePost from "@/components/Posts/CreatePost";
import React from "react";

const CreatePostPage = () => {
  return (
    <>
      <Header />
      <section className='create_post text-white'>
        <CreatePost />
      </section>
    </>
  );
};

export default CreatePostPage;
