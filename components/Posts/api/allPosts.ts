import { IPost } from "@/context/store";

interface IPostCreatePost {
  title: string;
  body: string;
}

export const postCreatePost = async ({ title, body }: IPostCreatePost) => {
  try {
    const bodyData = JSON.stringify({ title, body });

    console.log(bodyData);
    const res = await fetch("http://localhost:5000/api/posts/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      credentials: "include",
      body: bodyData,
    });

    if (!res.ok) {
      throw "Not OK";
    }

    const result = (await res.json()) as IPost;
    return result;
  } catch (e) {
    throw e;
  }
};

export const AllPosts = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/posts", {
      method: "GET",
    });
    if (!res.ok) {
      throw "Not OK";
    }

    const result = (await res.json()) as IPost[];
    return result;
  } catch (e) {
    throw e;
  }
};
