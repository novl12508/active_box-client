interface IPostCreatePost {
  name: string;
  description: string;
}

export const postCreatePost = async ({
  name,
  description,
}: IPostCreatePost) => {
  try {
    const body = JSON.stringify({ name, description });

    const res = await fetch("http://localhost:5000/api/posts/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body,
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
