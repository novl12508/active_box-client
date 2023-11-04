import React, { FC } from "react";
import { IButton } from "./button.interface";

const Button: FC<IButton> = ({ disable, reqAuthClick, value }) => {
  return (
    <button
      className={`${
        disable && "opacity-40"
      } px-12 py-2 rounded-md border border-blue-700 ${
        !disable && "hover:text-black hover:bg-blue-700"
      } transition-colors duration-200 uppercase`}
      onClick={reqAuthClick}
      disabled={disable}
    >
      {value}
    </button>
  );
};

export default Button;
