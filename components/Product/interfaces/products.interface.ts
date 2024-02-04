export type TypeProduct = {
  product: {
    id: number;
    title: string;
    text: string;
    link: string;
  };
  img: string;
};

export interface IProductProps {
  title: string;
  text: string;
  link: string;
  img: string;
}
