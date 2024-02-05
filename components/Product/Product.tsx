"use client";

import Image from "next/image";
import React, { FC, useState } from "react";
import { IProductProps } from "./interfaces/products.interface";
import Link from "next/link";
import { reqFetch } from "@/api/reqFetch";
import useGlobalContext from "@/context/store";

const Product: FC<IProductProps> = ({
  text,
  title,
  link,
  img,
  productId,
  setError,
}) => {
  const { products, setProducts } = useGlobalContext();

  const onClickFetch = async (productId: number) => {
    try {
      const res = await reqFetch({
        url: "api/basket/delete",
        method: "DELETE",
        body: { productId },
      });

      if (res.status !== 200) {
        const error = await res.json();
        if (typeof error === "string") {
          return setError(await res.json());
        }
        return console.error(error);
      }

      const { message } = (await res.json()) as { message: string };
      setError(message);
    } catch (error) {
      if (typeof error === "string") {
        return setError(error);
      }
      console.error(error);
    }
  };

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
        <button
          className='mt-3 border p-2 rounded-lg uppercase hover:bg-red-500 hover:text-white'
          onClick={() => {
            onClickFetch(productId);

            console.log(products);
            console.log(productId);

            if (products.length !== 0) {
              const newProducts = products.filter(
                (item) => item.id !== productId
              );
              setProducts(newProducts);
            }
          }}
        >
          Удалить
        </button>
      </div>
    </div>
  );
};

export default Product;
