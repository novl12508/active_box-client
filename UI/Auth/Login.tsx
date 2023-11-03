import React, { FC } from "react";
import { IAuth } from "./auth.interface";

const Login: FC<IAuth> = ({ isAuthClick }) => {
  return (
    <p className='flex gap-1'>
      Account.
      <span
        className='underline hover:text-blue-500 hover:no-underline cursor-pointer'
        onClick={isAuthClick}
      >
        Log In
      </span>
    </p>
  );
};

export default Login;
