"use client";

import Image from "next/image";
import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useGlobalContext from "@/context/store";
import { IoLogInOutline, IoLogOutOutline } from "react-icons/io5";
import ErrorModal from "../Error/ErrorModal";
import { reqFetch } from "@/api/reqFetch";

const Header = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const pathname = usePathname();
  const { user, setUser } = useGlobalContext();

  const logOut = async () => {
    try {
      const result = await reqFetch({ url: "api/auth/logout", method: "POST" });

      if (result.status !== 200) {
        throw "Ошибка выхода";
      }

      localStorage.clear();
      setUser({ id: 0, email: "", name: "" });
    } catch (err) {
      if (typeof err === "string") {
        return setError(err);
      }
      console.error(err);
    }
  };

  return (
    <>
      <div className='shadow md:block hidden fixed top-0 left-0 z-50 h-screen w-[300px] pt-2 bg-[#363430]'>
        <div className='flex flex-col w-full h-full'>
          <div className='mb-20'>
            <Image
              priority
              src='/header/header.png'
              className='w-[300px] h-[64px]'
              alt='logo'
              width={300}
              height={64}
            />
          </div>

          <div className='flex flex-col justify-between h-full px-7'>
            <Navigation />

            <div
              className={`${
                pathname === "/auth"
                  ? "opacity-100 navigation_link_shadow bg-[#535353]"
                  : "hover:opacity-100 opacity-50"
              } rounded-2xl navigation_link flex cursor-pointer justify-start items-center transition-all duration-100 mb-5`}
            >
              <Link
                className='flex py-3 px-5 text-base font-normal text-white'
                href='/auth'
              >
                {user.email === "" ? (
                  <div className='flex justify-start items-center'>
                    <div className='text-2xl mr-5'>
                      <IoLogInOutline />
                    </div>
                    <p>Авторизация</p>
                  </div>
                ) : (
                  <div
                    className='flex justify-start items-center'
                    onClick={logOut}
                  >
                    <div className='text-2xl mr-5'>
                      <IoLogOutOutline />
                    </div>
                    <p>Выйти</p>
                  </div>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='md:hidden flex justify-center items-center fixed z-50 top-0 left-0 text-white w-full h-14 bg-blue-900'>
        <button
          className='uppercase '
          onClick={() => setShow((state) => !state)}
        >
          menu
        </button>
        {show && (
          <Navigation classCom='flex-col absolute top-14 items-center w-full bg-blue-900 opacity-90 py-7' />
        )}
      </div>
      {error && ErrorModal({ err: error, setError })}
    </>
  );
};
export default Header;
