import "./styles/globals.css";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import React, { FC, useEffect } from "react";
import { IPropsRootLayout } from "./layout.interface";
import { GlobalContextProvidder } from "@/context/store";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ActiveBox",
  description: "My site",
};

const RootLayout: FC<IPropsRootLayout> = ({ children }) => {
  return (
    <html lang='ru'>
      <body className={`${roboto.className} antialiased overflow-x-hidden`}>
        <GlobalContextProvidder>{children}</GlobalContextProvidder>
      </body>
    </html>
  );
};

export default RootLayout;
