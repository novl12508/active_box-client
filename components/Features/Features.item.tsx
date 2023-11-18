import Image from "next/image";
import React, { FC } from "react";

interface IFeatures {
  src: string;
  w?: string;
  h?: string;
  text: string;
}

const FeaturesItem: FC<IFeatures> = ({ src, w = 60, h = 60, text }) => {
  return (
    <section className='flex flex-col items-center justify-center text-center'>
      <Image
        src={`/features_img/image ${src}.png`}
        alt='icon'
        width={+w}
        height={+h}
        loading='lazy'
      />
      <p className='mt-4'>{text}</p>
    </section>
  );
};

export default FeaturesItem;
