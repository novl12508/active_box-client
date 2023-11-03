"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Modal = () => {
  const [show, setShow] = useState(false);

  // useEffect(() => {
  //   setInterval(() => {
  //     setShow(true);
  //   }, 30 * 1000);
  // }, []);
  return (
    <div
      className={`${
        show ? "fixed" : "hidden"
      } flex justify-center items-center top-0 left-0 bg-black bg-opacity-90 z-50 w-screen h-screen`}
    >
      <div className='flex flex-col text-white w-52 text-center'>
        <div>
          <Image
            src='/team/team1.png'
            alt='img'
            width={200}
            height={200}
            className='object-cover w-full h-full'
          />
        </div>
        <p className='mt-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          debitis officia dolores facilis quaerat nostrum minima modi iste
          ratione adipisci?
        </p>
        <Link
          href={"/"}
          className='px-2 py-1 border rounded-lg mt-5 hover:bg-blue-500 transition-colors duration-200 uppercase'
          onClick={() => setShow(false)}
        >
          home
        </Link>
        <div
          className='absolute top-0 right-0 mr-10 mt-2 text-5xl cursor-pointer'
          onClick={() => {
            setShow(false);
          }}
        >
          <AiOutlineClose />
        </div>
      </div>
    </div>
  );
};

export default Modal;
