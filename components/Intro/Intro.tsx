import React from "react";
import Container from "@/UI/Container/Container";
import Button from "@/UI/Button/Button";

const Intro = () => {
  return (
    <section className='intro flex flex-col justify-center h-screen bg-gradient-to-r from-cyan-500 to-blue-500 pt-24 '>
      <Container>
        <div className='flex flex-col items-center max-w-4xl my-0 mx-auto'>
          <h1 className='md:text-7xl text-5xl text-white  font-bold text-center'>
            Your Favorite One Page Multi Purpose Template
          </h1>
          <h2 className='md:text-2xl text-xl text-white  text-center font-normal mt-7'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            iure libero sequi placeat hic eaque?
          </h2>
          <Button
            text='find out more'
            class=' px-10 py-3 mt-14 rounded hover:bg-[#af2323] transition-colors duration-100 ease-linear'
          />
        </div>
      </Container>
    </section>
  );
};

export default Intro;
