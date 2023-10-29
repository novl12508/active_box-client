import React, { FC } from "react";

interface ISlider {
  i?: number;
  slider?: number;
  setSlider?: React.Dispatch<React.SetStateAction<number>>;
}

const Slider: FC<ISlider> = ({ i = 0, setSlider, slider }) => {
  return (
    <div
      className={`${
        i === slider ? "bg-[#9b5385]" : "bg-white"
      } w-3 h-3 rounded-full cursor-pointer hover:bg-[#9b5385]`}
      onClick={() => {
        const reviews = document.querySelector(".reviews") as HTMLElement;
        const review = document.querySelector(".review") as HTMLElement;
        const width = review?.clientWidth;

        reviews.style.transform = `translateX(-${width * i}px)`;
        setSlider!(i);
      }}
    ></div>
  );
};

export default Slider;
