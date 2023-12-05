import React from "react";
import "./loading.css";

const LoadingPage = () => {
  return (
    <div className='absolute top-0 left-0 w-screen h-screen z-50 bg-gray-100 bg-opacity-70 flex justify-center items-center text-black'>
      <div className='flex lfex-col justify-center items-center lds-roller'>
        <p className='mb-5'>loading...</p>
        <div className='ml-[-10px]'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
