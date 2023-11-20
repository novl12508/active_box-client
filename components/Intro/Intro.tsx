"use client";

import React, { useEffect, useState } from "react";

const Intro = () => {
  useEffect(() => {
    setSide(false);
  }, []);
  const [side, setSide] = useState(true);
  return (
    <section className='intro h-screen overflow-hidden'>
      <div
        className={`${
          side && "translate-y-52 opacity-0"
        } flex justify-center items-center h-full backdrop-blur-md transition-all duration-100`}
      >
        <div className='flex flex-col items-center max-w-4xl my-0 mx-auto'>
          <h1 className='md:text-7xl text-5xl text-white  text-center uppercase select-none font-normal'>
            Новохоперский завод растительных масел
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Intro;
