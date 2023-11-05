"use client";

import React, { FC, useEffect } from "react";
import Header from "@/components/Header/Header";
import Intro from "@/components/Intro/Intro";
import Features from "@/components/Features/Features";
import Works from "@/components/Works/Works";
import Teams from "@/components/Team/Teams";
import Reviews from "@/components/Reviews/Reviews";
import Download from "@/components/Download/Download";
import Footer from "@/components/Footer/Footer";
import Modal from "@/components/Modal/Modal";
import { useGlobalContext } from "@/context/store";
import { AllPosts } from "@/components/Posts/api/allPosts";

const Home: FC = () => {
  const { setPosts, setUser } = useGlobalContext();

  const postsFetch = async () => {
    const posts = await AllPosts();
    setPosts(posts);
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
    <>
      <Header />
      <main>
        <Intro />
        <Features />
        <Works />
        <Teams />
        <Reviews />
        <Download />
        <Modal />
      </main>
      <Footer />
    </>
  );
};

export default Home;
