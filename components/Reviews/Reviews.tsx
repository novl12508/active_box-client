"use client";

import React, { FC, useState } from "react";
import Review from "./Review";
import Slider from "./Slider";

const Reviews: FC = () => {
  const [slider, setSlider] = useState(0);

  const reviews = [
    { review: <Review />, slider: <Slider /> },
    { review: <Review />, slider: <Slider /> },
    { review: <Review />, slider: <Slider /> },
    { review: <Review />, slider: <Slider /> },
  ];

  return (
    <section className='flex bg-[#53354a] xl:h-[500px] overflow-hidden'>
      <div className='flex reviews translate-x-0 transition-transform duration-200'>
        {reviews.map((review, i) => {
          return (
            <Review
              key={i}
              reviews={reviews}
              setSlider={setSlider}
              slider={slider}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Reviews;
