import { reqFetch } from "@/api/reqFetch";

export const logout = async () => {
  try {
    const res = await reqFetch({ url: "api/auth/logout", method: "POST" });

    if (res.status !== 200) {
      throw new Error("Ошибка выхода");
    }

    return;
  } catch (err) {
    throw err;
  }
};
