import Link from "next/link";
import React from "react";

const Posts = () => {
  return (
    <div>
      <Link
        href='/create_post'
        className='cursor-pointer border border-blue-700 rounded-md px-7 py-2 hover:bg-blue-700 hover:text-black transition-colors duration-200'
      >
        Create Post
      </Link>
    </div>
  );
};

export default Posts;
