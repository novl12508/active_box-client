import Container from "@/UI/Container/Container";
import React from "react";
import FeaturesItem from "./Features.item";
import { featureItems } from "@/consts/features";

const Features = () => {
  return (
    <div className='flex flex-col h-screen overflow-hidden pt-5'>
      <div className='flex flex-col justify-center items-center mb-5'>
        <h1 className='text-4xl text-black font-bold mb-7'>
          ПРИОРИТЕТЫ НАШЕГО МАСЛА
        </h1>
        <p className='italic'>
          Наши главные приоритеты – 100% качество и экологичность!
        </p>
      </div>
      <Container>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center items-center gap-14'>
          {featureItems.map((item, i) => {
            return (
              <FeaturesItem
                src={`${i + 1}`}
                w={item.w}
                h={item.h}
                text={item.text}
                key={i}
              />
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Features;
