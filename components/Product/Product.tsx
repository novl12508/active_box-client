"use client";

import Image from "next/image";
import React, { FC } from "react";
import { IProductProps } from "./interfaces/products.interface";
import Link from "next/link";

const Product: FC<IProductProps> = ({ text, title, link, img }) => {
  console.log(img);
  return (
    <div className='product flex bg-white rounded-xl px-5 py-5 mb-5'>
      <div>
        <Image src={`/works/${img}`} width={258} height={318} alt='product' />
      </div>
      <div className='flex flex-col ml-10 w-full justify-center items-end'>
        <div className='flex flex-col items-end'>
          <h1 className='uppercase mb-5'>{title}</h1>
          <p>{text}</p>
        </div>
        <Link href={link}>
          <button className='mt-3 border p-2 rounded-lg uppercase hover:bg-gray-200'>
            перейти
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
