import Button from "@/UI/Button/Button";
import Image from "next/image";
import React, { FC } from "react";

const Work: FC<{ src: string; text: string }> = ({ src, text }) => {
  return (
    <div className='works_item relative max-h-[318px] max-w-[258px] cursor-pointer rounded-lg'>
      <Image
        className='object-contain w-full h-full rounded-lg'
        src={`/works/${src}`}
        alt='work'
        width={258}
        height={318}
      />
      <div className='works_content opacity-0 flex flex-col justify-between items-center absolute top-0 left-0 bg-[#E09932] w-full h-full  overflow-hidden rounded-lg transition-opacity duration-100'></div>
      <Content text={text} />
    </div>
  );
};

const Content = ({ text }: { text: string }) => {
  return (
    <div className='content w-full h-full flex flex-col justify-between items-center absolute top-0 left-0 z-50 opacity-0 px-12 py-5 transition-opacity duration-100 text-center'>
      <div className='text-black text-xl font-normal'> {text}</div>
      <button className='px-8 py-3 rounded-2xl bg-[#ffaf36] hover:bg-orange-500 text-black transition-colors duration-100'>
        Заказать
      </button>
    </div>
  );
};

export default Work;
