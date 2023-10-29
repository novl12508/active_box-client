import React, { FC } from "react";

const ErrorModal: FC<{ err: string }> = ({ err }) => {
  return (
    <div className='fixed top-20 left-1/2 -translate-x-1/2 bg-white text-black w-1/2 px-10 py-3 rounded-md text-center z-50'>
      {err}
    </div>
  );
};

export default ErrorModal;
