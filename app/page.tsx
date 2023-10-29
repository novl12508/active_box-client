import React, { FC } from "react";
import Header from "@/components/Header/Header";
import Intro from "@/components/Intro/Intro";
import Features from "@/components/Features/Features";
import Works from "@/components/Works/Works";
import Teams from "@/components/Team/Teams";
import Reviews from "@/components/Reviews/Reviews";
import Download from "@/components/Download/Download";
import Footer from "@/components/Footer/Footer";

const Home: FC = () => {
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
      </main>
      <Footer />
    </>
  );
};

export default Home;
