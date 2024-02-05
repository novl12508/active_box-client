export type TypeProduct = {
  product: {
    id: number;
    title: string;
    text: string;
    link: string;
  };
  img: string;
  id: number;
};

export interface IProductProps {
  title: string;
  text: string;
  link: string;
  img: string;
  productId: number;
  setError: React.Dispatch<React.SetStateAction<string>>;
}
