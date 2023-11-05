"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

// const postsAPI = [
//   {
//     title: "title1",
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas earum eum nesciunt saepe aperiam harum nisi nobis non sequi reiciendis",
//     name: "name1",
//   },
//   {
//     title: "title2",
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas earum eum nesciunt saepe aperiam harum nisi nobis non sequi reiciendis",
//     name: "name2",
//   },
//   {
//     title: "title3",
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas earum eum nesciunt saepe aperiam harum nisi nobis non sequi reiciendis",
//     name: "name3",
//   },
//   {
//     title: "title3",
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas earum eum nesciunt saepe aperiam harum nisi nobis non sequi reiciendis",
//     name: "name3",
//   },
//   {
//     title: "title3",
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas earum eum nesciunt saepe aperiam harum nisi nobis non sequi reiciendis",
//     name: "name3",
//   },
//   {
//     title: "title3",
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas earum eum nesciunt saepe aperiam harum nisi nobis non sequi reiciendis",
//     name: "name3",
//   },
//   {
//     title: "title3",
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas earum eum nesciunt saepe aperiam harum nisi nobis non sequi reiciendis",
//     name: "name3",
//   },
//   {
//     title: "title3",
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas earum eum nesciunt saepe aperiam harum nisi nobis non sequi reiciendis",
//     name: "name3",
//   },
// ];

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
