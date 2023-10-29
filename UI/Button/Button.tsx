import React, { FC } from "react";
import { IBtn } from "./button.interface";

const Button: FC<IBtn> = (props) => {
  return (
    <button
      className={`${props.class} bg-[#e84545] rounded hover:bg-[#af2323] transition-colors duration-100 ease-linear align-top text-xs font-semibold text-white uppercase`}
    >
      {props.text}
    </button>
  );
};

export default Button;
