"use client";

import React, { FC, useEffect, useState } from "react";
import Intro from "@/components/Intro/Intro";
import { useGlobalContext } from "@/context/store";
import { AllPosts } from "@/components/Posts/api/allPosts";

const Home: FC = () => {
  const { setPosts, setUser } = useGlobalContext();

  const postsFetch = async () => {
    try {
      const posts = await AllPosts();
      setPosts(posts);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const userLocal = localStorage.getItem("user");
    if (!userLocal) {
      return;
    }
    const user = JSON.parse(localStorage.getItem("user") || "") as {
      data: { id: number; email: string; name: string };
    };
    console.log(user.data);
    setUser(user.data);

    postsFetch();
  }, []);

  return (
    <section>
      <Intro />
    </section>
  );
};

export default Home;
