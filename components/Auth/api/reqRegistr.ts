import { reqFetch } from "../../../api/reqFetch";

export const reqRegister = async (
  email: string,
  name: string,
  password: string
) => {
  try {
    const initFetch = {
      url: "api/auth/register",
      method: "POST",
      body: {
        email,
        password,
        name,
      },
    };
    const res = await reqFetch(initFetch);

    if (!res.ok) {
      const err = await res.json();
      throw err;
    }

    const data = await res.json();
    return data;
  } catch (e) {
    throw e;
  }
};
