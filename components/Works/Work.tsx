import Image from "next/image";
import React, { FC } from "react";

const Work: FC<{ src: string }> = ({ src }) => {
  return (
    <div className='works_item relative max-h-[350px] cursor-pointer'>
      <Image
        className='object-cover w-full h-full'
        src={`/works/${src}`}
        alt='work'
        width={480}
        height={350}
      />
      <div className='transition-opacity duration-200 works_content flex opacity-0 bg-[#e84545]  z-20 absolute top-0 left-0 w-full h-full text-white flex-col justify-center items-center'>
        <div className='uppercase font-bold'>Project Name</div>
        <div>User Interface Design</div>
      </div>
    </div>
  );
};

export default Work;
