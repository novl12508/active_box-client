import React, { FC } from "react";
import { IPost } from "./post.interface";

const Post: FC<IPost> = ({ title, body, name }) => {
  return (
    <div className='flex flex-col basis-1/4  h-full border mb-4 rounded-lg p-3'>
      <div className='flex justify-start items-center mb-3'>
        <div className='border rounded-md p-1 bg-blue-500 text-white'>
          {name}
        </div>
      </div>
      <div className='flex flex-col justify-center items-center text-center'>
        <h3 className='uppercase mb-2'>{title}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default Post;
