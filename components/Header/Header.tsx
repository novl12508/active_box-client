"use client";

import Image from "next/image";
import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";
import Container from "@/UI/Container/Container";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className='md:block hidden absolute top-0 left-0 z-50 w-full h-24'>
        <Container>
          <div className='flex justify-between items-center border-b-2 border-[#515369] p-9'>
            <div>
              <Image
                src='/header/header.png'
                alt='logo'
                width={189}
                height={24}
              />
            </div>
            <div>
              <Navigation />
            </div>
          </div>
        </Container>
      </div>
      <div className='md:hidden flex justify-center items-center fixed z-50 top-0 left-0 text-white w-full h-14 bg-blue-900'>
        <button
          className='uppercase '
          onClick={() => setShow((state) => !state)}
        >
          menu
        </button>
        {show && (
          <Navigation classCom='flex-col absolute top-14 items-center w-full bg-blue-900 opacity-90 py-7' />
        )}
      </div>
    </>
  );
};
export default Header;
