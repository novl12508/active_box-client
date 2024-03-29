interface IReq {
  url: string;
  method: string;
  body?:
    | {
        email: string;
        name?: string;
        password: string;
      }
    | {
        id: string;
      }
    | {};
}

export const reqFetch = ({ url, method, body = {} }: IReq) => {
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

export const reqFetchGet = ({ url, method }: IReq) => {
  const host = "http://localhost:5000";
  return fetch(`${host}/${url}`, {
    method,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    credentials: "include",
  });
};
