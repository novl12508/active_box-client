interface IPostCreatePost {
  title: string;
  body: string;
}

export const postCreatePost = async ({ title, body }: IPostCreatePost) => {
  try {
    const bodyData = JSON.stringify({ title, body });

    const res = await fetch("http://localhost:5000/api/posts/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: bodyData,
    });

    if (!res.ok) {
      throw "Not OK";
    }

    const result = (await res.json()) as IPostCreatePost;
    return result;
  } catch (e) {
    throw e;
  }
};
