"use client";

import React, { useEffect, useState } from "react";
import { reqFetchGet } from "@/api/reqFetch";
import { TypeProduct } from "@/components/Product/interfaces/products.interface";
import ErrorModal from "@/components/Error/ErrorModal";
import Product from "@/components/Product/Product";

const BasketPage = () => {
  const [products, setProducts] = useState<[] | TypeProduct[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getAllProducts() {
      try {
        setLoading(true);
        const res = await reqFetchGet({ url: "api/basket", method: "GET" });

        if (res.status !== 200) {
          throw await res.json();
        }

        const products = (await res.json()) as TypeProduct[];
        setProducts(products);
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

  if (!!error) {
    return ErrorModal({ err: error });
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='p-20'>
      {products.length !== 0 ? (
        products.map((item, i) => {
          console.log(products);
          return (
            <Product
              title={item.product.title}
              text={item.product.text}
              link={item.product.link}
              img={item.img}
            />
          );
        })
      ) : (
        <div>Пусто</div>
      )}
    </div>
  );
};

export default BasketPage;
