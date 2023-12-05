"use client";

import Image from "next/image";
import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { IProductProps } from "./interfaces/products.interface";

const Product: FC<IProductProps> = ({ text, title, value, setValue }) => {
  return (
    <div className='product flex bg-white rounded-xl px-5 py-5'>
      <div>
        <Image
          src={"/works/Rectangle1.png"}
          width={258}
          height={318}
          alt='product'
        />
      </div>
      <div className='flex flex-col ml-10'>
        <div>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
        <div className='px-1 py-2'>
          <span
            className='bg-gray-100 mr-2 cursor-pointer px-2 py-2'
            onClick={() => setValue((state) => --state)}
          >
            &lt;
          </span>
          <input
            type='text'
            value={value}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setValue(+e.target.value);
            }}
            className='bg-gray-100 w-[30px] text-center px-2 py-2'
            disabled
          />
          <span
            className='bg-gray-100 ml-2 cursor-pointer px-2 py-2'
            onClick={() => setValue((state) => ++state)}
          >
            &gt;
          </span>
        </div>
        <button>button</button>
      </div>
    </div>
  );
};

export default Product;
