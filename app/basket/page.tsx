"use client";

import React, { useEffect, useState } from "react";
import Product from "@/components/Product/Product";

const arr = {
  product: [
    {
      Product: {
        id: 2,
        title: "product1",
        text: "product2",
        quantity: 1,
      },
    },
    {
      Product: {
        id: 2,
        title: "product1",
        text: "product2",
        quantity: 1,
      },
    },
    {
      Product: {
        id: 2,
        title: "product1",
        text: "product2",
        quantity: 1,
      },
    },
  ],
};

const BasketPage = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [value, setValue] = useState(0);

  return (
    <div className='p-20'>
      {arr.product.map((item, i) => {
        return (
          <Product
            text={item.Product.text}
            value={item.Product.quantity}
            title={item.Product.title}
            setValue={setValue}
          />
        );
      })}
    </div>
  );
};

export default BasketPage;
