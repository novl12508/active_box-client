"use client";

import { TypeProduct } from "@/components/Product/interfaces/products.interface";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

const userAPI = { id: 0, email: "", name: "" };

export interface IPost {
  id: number;
  title: string;
  body: string;
  user: { name: string };
}

export interface IUser {
  id: number;
  email: string;
  name: string;
}

interface IGlobalContext {
  user: IUser;
  posts: IPost[];
  products: TypeProduct[];
  setUser: Dispatch<SetStateAction<IUser>>;
  setPosts: Dispatch<SetStateAction<IPost[]>>;
  setProducts: Dispatch<SetStateAction<TypeProduct[]>>;
}

export const ContextApp = createContext<IGlobalContext>({
  user: userAPI,
  posts: [],
  setUser: () => {},
  setPosts: (): IPost[] => [],
  products: [],
  setProducts: () => {},
});

export const GlobalContextProvidder = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [user, setUser] = useState<IUser>(userAPI);
  const [posts, setPosts] = useState<[] | IPost[]>([]);
  const [products, setProducts] = useState<[] | TypeProduct[]>([]);

  return (
    <ContextApp.Provider
      value={{ user, setUser, posts, setPosts, products, setProducts }}
    >
      {children}
    </ContextApp.Provider>
  );
};

export default () => useContext(ContextApp);
