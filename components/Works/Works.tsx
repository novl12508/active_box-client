import React from "react";
import Work from "./Work";

const imgs = [
  "work1.png",
  "work2.png",
  "work2.png",
  "work4.png",
  "work5.png",
  "work6.png",
  "work7.png",
  "work8.png",
];

const Works = () => {
  return (
    <div className='grid  sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-[1px]'>
      {imgs.map((img) => (
        <Work src={img} />
      ))}
    </div>
  );
};

export default Works;
