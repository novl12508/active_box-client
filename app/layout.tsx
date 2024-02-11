import "./styles/globals.css";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import React, { FC } from "react";
import { IPropsRootLayout } from "./layout.interface";
import { GlobalContextProvidder } from "@/context/store";
import Header from "@/components/Header/Header";
import Modal from "@/components/Modal/Modal";

export const metadata: Metadata = {
  title: "Новохопёрский завод растительных масел",
  description: "activebox",
};

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

const RootLayout: FC<IPropsRootLayout> = ({ children }) => {
  return (
    <html lang='ru'>
      <body
        className={`${roboto.className} antialiased pl-[300px] max-w-[1920px] h-full bg-gray-50`}
      >
        <GlobalContextProvidder>
          <Header />
          <Modal />
          <main className='w-full h-full'>{children}</main>
        </GlobalContextProvidder>
      </body>
    </html>
  );
};

export default RootLayout;
