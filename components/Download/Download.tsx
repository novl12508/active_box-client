import Button from "@/UI/Button/Button";
import Container from "@/UI/Container/Container";
import React, { FC } from "react";
import {} from "next/font/google";

const Download: FC = () => {
  return (
    <section className='flex my-24 text-center'>
      <Container>
        <h3 className='text-2xl text-[#2d3033] font-light mb-1'>
          Are You Ready to Start? Download Now For Free!
        </h3>
        <div className='text-xs text-[#2d3033] font-bold uppercase mb-7'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Distinctio, perspiciatis.
          </p>
        </div>
        <Button text='Download Here' class='px-20 py-3' />
      </Container>
    </section>
  );
};

export default Download;
