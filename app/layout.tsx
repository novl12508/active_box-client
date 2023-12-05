import "./styles/globals.css";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import React, { FC, useEffect } from "react";
import { IPropsRootLayout } from "./layout.interface";
import { GlobalContextProvidder } from "@/context/store";
import Header from "@/components/Header/Header";
import Modal from "@/components/Modal/Modal";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ActiveBox",
  description: "My site",
};

const RootLayout: FC<IPropsRootLayout> = ({ children }) => {
  return (
    <html lang='ru'>
      <body
        className={`${roboto.className} antialiased pl-[300px] max-w-[1920px] max-h-screen bg-gray-50`}
      >
        <GlobalContextProvidder>
          <Header />
          <Modal />
          <main>{children}</main>
        </GlobalContextProvidder>
      </body>
    </html>
  );
};

export default RootLayout;
