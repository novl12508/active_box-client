import { Dispatch, SetStateAction } from "react";

export type TypeProduct = {
  Product: {
    id: number;
    title: string;
    text: string;
    quantity: number;
  };
};

export interface IProducts {
  product: TypeProduct[];
}

export interface IProductProps {
  value: number;
  title: string;
  text: string;
  setValue: Dispatch<SetStateAction<number>>;
}
