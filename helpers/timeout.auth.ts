import { Dispatch, SetStateAction } from "react";

export const setTimeoutModalErrorAuth = (
  setError: Dispatch<SetStateAction<string>>,
  timeout: number
) => {
  const sleep = setTimeout(() => {
    setError("");
    clearTimeout(sleep);
  }, timeout * 1000);
};
