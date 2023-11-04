"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC, useEffect, useState } from "react";
import WindowUser from "../WindowUser/WindowUser";
import { routes } from "@/consts/navigation";

const initialUser = { id: 0, email: "", name: "" };

const Navigation: FC<{
  classCom?: string;
}> = ({ classCom }) => {
  const pathname = usePathname();
  const [user, setUser] = useState<{ id: number; email: string; name: string }>(
    initialUser
  );
  const [account, setAccount] = useState(false);

  useEffect(() => {
    const userLocal = localStorage.getItem("user");
    if (!userLocal) {
      return;
    }
    const user = JSON.parse(localStorage.getItem("user") || "") as {
      data: { id: number; email: string; name: string };
    };
    console.log(user.data);
    setUser(user.data);
  }, []);

  return (
    <nav
      className={`${classCom} flex justify-center items-center gap-12 text-[#fff] text-sm font-medium uppercase md:gap-7`}
    >
      {routes
        .filter((link) => {
          if (!user.email) {
            return true;
          } else {
            return link.link !== "auth";
          }
        })
        .map((link, i) => {
          return (
            <Link
              href={link.href}
              className={`nav_link ${
                pathname === link.href && "text-blue-500"
              }`}
              key={i + link.link}
            >
              {link.link}
            </Link>
          );
        })}

      {/* modal user */}
      {user.email && (
        <div className='relative'>
          <div
            className='flex justify-center border px-3 py-2 rounded-full bg-blue-500 hover:bg-blue-700 cursor-pointer transition-colors duration-100 select-none'
            onClick={() => setAccount((state) => !state)}
          >
            {user.name && <p className='w-full h-full'>{user.name.at(0)}</p>}
          </div>

          <WindowUser account={account} user={user} setUser={setUser} />
        </div>
      )}
    </nav>
  );
};

export default Navigation;
