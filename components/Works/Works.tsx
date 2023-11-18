import React from "react";
import Work from "./Work";

const imgs = [
  {
    img: "Rectangle1.png",
    text: "Салатное Нерафинированное ароматное, высший сорт, 0,5л",
  },
  {
    img: "Rectangle2.png",
    text: "Для жарки Рафинированное дезодорированное, высший сорт, 0,5л",
  },
  { img: "Rectangle3.png", text: "Масло нерафинированное, высший сорт, 5л" },
  {
    img: "Rectangle4.png",
    text: "Масло растительное амарантовое, высший сорт, 0,5л",
  },
  { img: "Rectangle5.png", text: "Масло нерафинированное, высший сорт, 1л" },
  {
    img: "Rectangle6.png",
    text: "Масло рафинированное дезодорированное, высший сорт, 1л",
  },
  {
    img: "Rectangle7.png",
    text: "Масло рафинированное дезодорированное, высший сорт, 5л",
  },
  { img: "Rectangle8.png", text: "Масло нерафинированное, высший сорт, 5л" },
];

const Works = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-10'>
      <h1 className='text-4xl text-black font-bold'>НАШИ ПРОДУКТЫ</h1>
      <div className='grid sm:grid-cols-3 lg:grid-cols-4 grid-cols-1 items-center content-center gap-5 h-screen text-center'>
        {imgs.map((item, i) => (
          <Work src={item.img} text={item.text} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Works;
