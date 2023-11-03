import React, { FC } from "react";
import { IAuth } from "./auth.interface";

const Registration: FC<IAuth> = ({ isAuthClick }) => {
  return (
    <p className='flex gap-1'>
      No account.
      <span
        className='underline hover:text-blue-500 hover:no-underline cursor-pointer'
        onClick={isAuthClick}
      >
        Registration
      </span>
    </p>
  );
};

export default Registration;
