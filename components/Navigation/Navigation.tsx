"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC, useEffect, useState } from "react";
import { routes } from "@/consts/navigation";
import useGlobalContext from "@/context/store";
import { AllPosts } from "../Posts/api/allPosts";

const Navigation: FC<{
  classCom?: string;
}> = ({ classCom }) => {
  const pathname = usePathname();
  const { user: userContext, posts, setPosts, setUser } = useGlobalContext();

  useEffect(() => {
    const postsFetch = async () => {
      try {
        const posts = await AllPosts();
        setPosts(posts);
      } catch (err) {
        console.log(err);
      }
    };

    const userLocal = localStorage.getItem("user");

    if (!userLocal) {
      return;
    }

    const user = JSON.parse(localStorage.getItem("user") || "") as {
      data: { id: number; email: string; name: string };
    };

    setUser(user.data);

    postsFetch();
  }, []);

  return (
    <nav
      className={`${classCom} flex justify-center items-center gap-12 text-[#fff] text-base font-normal  md:gap-7`}
    >
      <div className='flex flex-col '>
        {routes.map((link, i) => {
          return (
            <Link
              href={link.href}
              className={`${
                link.href === pathname
                  ? "opacity-100 bg-[#535353] navigation_link_shadow"
                  : "navigation_link  opacity-50 cursor-pointer transition-all duration-100 hover:opacity-100 "
              } flex justify-start items-center px-5 py-3 mb-5 rounded-2xl`}
              key={i + link.link}
            >
              <div className='text-2xl mr-5'>{link.img}</div>
              <p className=''>{link.link}</p>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
