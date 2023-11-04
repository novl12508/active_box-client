import React from "react";
import "./loading.css";

const LoadingPage = () => {
  return (
    <div className='absolute top-0 left-0 w-screen h-screen z-50 bg-black bg-opacity-70 flex justify-center items-center text-white'>
      <div className='lds-roller'>
        <p className='mb-5'>loading...</p>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingPage;
