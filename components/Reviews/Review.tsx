import Image from "next/image";
import React, { FC } from "react";
import { Cardo } from "next/font/google";
import Slider from "./Slider";

const cardo = Cardo({ subsets: ["latin"], style: "italic", weight: "400" });

interface IReview {
  reviews?: { review: React.JSX.Element; slider: React.JSX.Element }[];
  slider?: number;
  setSlider?: React.Dispatch<React.SetStateAction<number>>;
}

const Review: FC<IReview> = ({ reviews, setSlider, slider }) => {
  return (
    <div className='review flex w-screen xl:flex-row flex-col'>
      <div className='xl:w-1/2 w-full'>
        <Image
          className='w-full h-full object-cover'
          src='/reviews/reviews.png'
          alt='reviews'
          width={950}
          height={500}
        />
      </div>
      <div className='flex flex-col justify-center xl:w-1/2 w-full pl-20 py-5'>
        <div className={`text-4xl text-white ${cardo.className}`}>
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Consequuntur ea inventore hic repellat veniam in facere quisquam
          error? Esse fugit corporis dolorem illum quasi maiores?"
        </div>
        <div className='text-xs mt-5 text-white'>
          Lorem ipsum dolor sit amet.
        </div>
        <div className='flex gap-3 justify-center mt-10'>
          {reviews?.map((item, i) => (
            <Slider
              key={i}
              i={i}
              setSlider={(slider) => setSlider!(slider)}
              slider={slider}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
