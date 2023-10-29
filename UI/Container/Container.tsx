import { IPropsRootLayout } from "@/app/layout.interface";
import React, { FC } from "react";

const Container: FC<IPropsRootLayout> = ({ children, classCom }) => {
  return (
    <div className={`max-w-[1170px] w-full ${classCom}  my-0 mx-auto`}>
      {children}
    </div>
  );
};

export default Container;
