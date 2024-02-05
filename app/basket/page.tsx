"use client";

import React, { useEffect, useState } from "react";
import { reqFetchGet } from "@/api/reqFetch";
import { TypeProduct } from "@/components/Product/interfaces/products.interface";
import ErrorModal from "@/components/Error/ErrorModal";
import Product from "@/components/Product/Product";
import LoadingPage from "@/components/Loading/LoadingPage";
import useGlobalContext from "@/context/store";
import Link from "next/link";

const BasketPage = () => {
  const { products, setProducts } = useGlobalContext();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAllProducts() {
      try {
        const res = await reqFetchGet({ url: "api/basket", method: "GET" });

        if (res.status !== 200) {
          throw await res.json();
        }

        const result = (await res.json()) as TypeProduct[];
        console.log(result);
        setProducts(result);
        setLoading(false);
      } catch (error) {
        if (typeof error === "string") {
          setError(error);
        }
        console.log(error);
        setLoading(false);
      }
    }

    getAllProducts();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <div className='flex flex-col justify-center p-20'>
        {products.length !== 0 ? (
          products.map((item, i) => {
            return (
              <Product
                title={item.product.title}
                text={item.product.text}
                link={item.product.link}
                img={item.img}
                productId={item.id}
                setError={setError}
                key={i}
              />
            );
          })
        ) : (
          <div className='flex w-full justify-center text-xl text-black'>
            Товаров нет.
            <Link
              href='/products'
              className='text-blue-500 hover:underline ml-3'
            >
              Хотите добавить товары
            </Link>
          </div>
        )}
      </div>
      {error && ErrorModal({ err: error, setError })}
    </>
  );
};

export default BasketPage;
