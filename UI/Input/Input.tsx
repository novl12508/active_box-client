import React, { FC } from "react";
import { IInput } from "./input.interface";

const Input: FC<IInput> = ({
  value,
  placeholder,
  type,
  name,
  inputlHandler,
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={inputlHandler}
      className='rounded-md px-5 py-2 w-full bg-blue-950'
      placeholder={placeholder}
    />
  );
};

export default Input;
