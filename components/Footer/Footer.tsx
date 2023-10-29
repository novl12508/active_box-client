import Container from "@/UI/Container/Container";
import Links from "@/UI/Links/Links";
import React from "react";

const Footer = () => {
  return (
    <footer className='bg-[#3a3e64]'>
      <Container>
        <div className='flex sm:flex-row flex-col justify-center items-center flex-wrap text-center py-20'>
          {/*  */}
          <div className='flex-shrink flex-grow basis-1/3 sm:mb-0 mb-10'>
            <h4 className='uppercase font-bold text-sm text-white mb-2'>
              Location
            </h4>
            <address className='text-opacity-50 not-italic'>
              <p>Lorem ipsum</p>
              <p>dolor sit.</p>
            </address>
          </div>
          {/*  */}

          <div className='flex flex-col items-center flex-shrink flex-grow basis-1/3 text-center sm:mb-0 mb-10'>
            <h4 className='text-white text-sm uppercase font-bold mb-2'>
              Share With Love
            </h4>
            <Links />
          </div>

          {/*  */}
          <div className='flex-shrink flex-grow basis-1/3 text-center sm:mb-0 mb-10'>
            <h4 className=' text-white text-sm uppercase font-bold mb-2'>
              about activebox
            </h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
              maiores tempore quo repudiandae amet illum molestias! Nisi quia,
              consectetur quasi nostrum beatae et illo minima?
            </p>
          </div>
        </div>
      </Container>
      <div className='bg-[#313454] py-5'>
        <div className='text-[#808080] text-sm text-center'>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          </div>
          <div>
            commodi ipsa error,{" "}
            <span className='text-white'>fuga facere officiis.</span>{" "}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
