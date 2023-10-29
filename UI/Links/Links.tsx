import Link from "next/link";
import Image from "next/image";
import React from "react";

const Links = () => {
  return (
    <div className='flex gap-1 mt-5'>
      <Link
        href={"#"}
        className='border p-2 opacity-50 hover:opacity-100 transition-opacity duration-200 cursor-pointer'
      >
        <Image
          src='/team/facebook.png'
          alt='facebook'
          width={512}
          height={512}
          className='w-5'
        />
      </Link>
      <Link
        href={"#"}
        className='border p-2 opacity-50 hover:opacity-100 transition-opacity duration-200 cursor-pointer'
      >
        <Image
          src='/team/instagram.png'
          alt='instagram'
          width={512}
          height={512}
          className='w-5'
        />
      </Link>
      <Link
        href={"#"}
        className='border p-2 opacity-50 hover:opacity-100 transition-opacity duration-200 cursor-pointer'
      >
        <Image
          src='/team/twitter.png'
          alt='twitter'
          width={512}
          height={512}
          className='w-5'
        />
      </Link>
    </div>
  );
};

export default Links;
