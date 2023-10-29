import Image from "next/image";
import React, { FC } from "react";

interface IFeatures {
  src: string;
  w?: string;
  h?: string;
}

const FeaturesItem: FC<IFeatures> = ({ src, w = 60, h = 60 }) => {
  return (
    <section className='flex flex-col items-center justify-center text-center'>
      <Image
        src={`/features_img/features${src}.png`}
        alt='icon'
        width={+w}
        height={+h}
        loading='lazy'
      />
      <h4 className='mt-5 font-normal'>Easily Cusomised</h4>
      <p className='mt-4'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
        corporis pariatur vitae. Soluta, ipsa accusamus enim, nobis voluptate
        porro aspernatur eligendi neque nostrum ratione iusto.
      </p>
    </section>
  );
};

export default FeaturesItem;
