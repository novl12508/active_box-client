import { Dispatch, SetStateAction } from "react";

export type TypeProduct = {
  product: {
    id: number;
    title: string;
    text: string;
    link: string;
  };
};

export interface IProductProps {
  title: string;
  text: string;
  link: string;
}
