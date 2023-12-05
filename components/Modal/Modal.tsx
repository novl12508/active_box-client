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
      } modal flex justify-center items-center top-0 left-0 bg-black bg-opacity-90 z-50 py-32 w-screen h-screen`}
    >
      <div className='flex flex-col w-full h-full justify-between items-center text-white text-center'>
        <div className='relative'>
          <div className='absolute top-[-20px] left-0 bg-white blur-[100px] w-full h-full'></div>
          <div className='w-full h-full relative z-50'>
            <p className='mt-5 text-3xl text-black'>
              Используя наше масло, ваши блюда преобретут насыщенный и яркий
              аромат (вкус)!
            </p>
            <p className='mt-52 text-3xl text-black'>
              Заказать наше масло перейдя ниже по ссылке:
            </p>
          </div>
        </div>
        <div className='flex gap-52'>
          <Link
            href={"/"}
            className='link_content  relative rounded-2xl transition-colors duration-200 uppercase '
            onClick={() => setShow(false)}
          >
            <Image
              src='/modal/Rectangle2.png'
              className='rounded-2xl'
              alt='ozon'
              width={350}
              height={200}
            />
            <div className='link_modal opacity-0 bg-blue-500 absolute top-0 left-0 w-full h-full bg-opacity-90 flex justify-center items-center rounded-2xl transition-opacity duration-100'>
              Перейти
            </div>
          </Link>

          <Link
            href={"/"}
            className='link_content relative rounded-2xl transition-colors duration-200 uppercase'
            onClick={() => setShow(false)}
          >
            <Image
              src='/modal/Rectangle1.png'
              className='rounded-2xl'
              alt='wildberries'
              width={350}
              height={200}
            />
            <div className='link_modal opacity-0 bg-fuchsia-500 absolute top-0 left-0 w-full h-full bg-opacity-90 flex justify-center items-center rounded-2xl transition-opacity duration-100'>
              Перейти
            </div>
          </Link>
        </div>
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
