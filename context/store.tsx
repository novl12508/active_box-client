"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const userAPI = { id: 0, email: "", name: "" };

export interface IPost {
  id: number;
  title: string;
  body: string;
  __user__: { name: string };
}

export interface IUser {
  id: number;
  email: string;
  name: string;
}

interface IGlobalContext {
  user: IUser;
  posts: IPost[];
  setUser: Dispatch<SetStateAction<IUser>>;
  setPosts: Dispatch<SetStateAction<IPost[]>>;
}

const ContextApp = createContext<IGlobalContext>({
  user: userAPI,
  posts: [],
  setUser: () => {},
  setPosts: (): IPost[] => [],
});

export const GlobalContextProvidder = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [user, setUser] = useState<IUser>(userAPI);
  const [posts, setPosts] = useState<[] | IPost[]>([]);

  return (
    <ContextApp.Provider value={{ user, setUser, posts, setPosts }}>
      {children}
    </ContextApp.Provider>
  );
};

export const useGlobalContext = () => useContext(ContextApp);
