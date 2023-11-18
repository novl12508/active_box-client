import React from "react";
import Container from "@/UI/Container/Container";
import Button from "@/UI/Button/Button";

const Intro = () => {
  return (
    <section className='intro h-screen'>
      <div className='flex justify-center items-center h-full backdrop-blur-md'>
        <div className='flex flex-col items-center max-w-4xl my-0 mx-auto'>
          <h1 className='md:text-7xl text-5xl text-white text-center uppercase select-none font-normal'>
            Новохоперский завод растительных масел
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Intro;
