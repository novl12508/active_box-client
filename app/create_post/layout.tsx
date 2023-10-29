import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import React, { FC } from "react";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ActiveBox",
  description: "My site",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='ru'>
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  );
};

export default Layout;
