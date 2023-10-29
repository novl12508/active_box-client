interface IReq {
  url: string;
  method: string;
  body?: {
    email: string;
    name?: string;
    password: string;
  } | null;
}

export const reqFetch = ({ url, method, body = null }: IReq) => {
  const host = "http://localhost:5000";
  return fetch(`${host}/${url}`, {
    method,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    credentials: "include",
    body: JSON.stringify(body),
  });
};
