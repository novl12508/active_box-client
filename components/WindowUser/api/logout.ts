import { reqFetch } from "@/api/reqFetch";

export const logout = async () => {
  try {
    const res = await reqFetch({ url: "/api/auth/logout", method: "POST" });

    if (res.status !== 200) {
      throw new Error("Ошибка выхода");
    }

    const data = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};
