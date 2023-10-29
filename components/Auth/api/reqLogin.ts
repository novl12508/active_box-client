import { reqFetch } from "../../../api/reqFetch";

export const reqLogin = async (email: string, password: string) => {
  try {
    const initFetch = {
      url: "api/auth/login",
      method: "POST",
      body: {
        email,
        password,
      },
    };
    const res = await reqFetch(initFetch);

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message);
    }

    const data = await res.json();
    return data;
  } catch (e) {
    throw e;
  }
};
