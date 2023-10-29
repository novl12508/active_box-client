"use client";

import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { reqLogin } from "./api/reqLogin";
import { reqRegister } from "./api/reqRegistr";
import { useRouter } from "next/navigation";
import ErrorModal from "../Error/ErrorModal";

const Auth = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const userNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };
  const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const isAuthClick = () => {
    setIsAuth((state) => !state);
  };

  useEffect(() => {
    const sleep = setTimeout(() => {
      setError("");
      clearTimeout(sleep);
    }, 5000);
  }, [error]);

  const reqLoginClick = async () => {
    try {
      const result = await reqLogin(email, password);

      const data = JSON.stringify(result);
      localStorage.setItem("user", data);

      console.log(result, "login");
      router.push("/");
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }

      console.error(e, "Error ReqFetch");
    }
  };
  const reqRegistrClick = async () => {
    try {
      const result = await reqRegister(email, username, password);
      console.log(email, username, password);

      const data = JSON.stringify(result);
      localStorage.setItem("user", data);

      console.log(result, "register");
      router.push("/");
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
      console.error(e, "Error ReqFetch");
    }
  };

  const formSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={formSubmit}
      className='flex flex-col w-1/4 justify-center items-center gap-5 '
    >
      <h2 className='uppercase text-2xl'>Auth</h2>
      <input
        type='email'
        name='email'
        value={email}
        onChange={emailHandler}
        className='rounded-md px-5 py-2 w-full bg-blue-950'
        placeholder='email'
      />
      {isAuth && (
        <input
          type='text'
          name='name'
          value={username}
          onChange={userNameHandler}
          className='rounded-md px-5 py-2 w-full bg-blue-950'
          placeholder='name'
        />
      )}
      <input
        type='password'
        name='password'
        value={password}
        onChange={passwordHandler}
        className='rounded-md px-5 py-2 w-full bg-blue-950'
        placeholder='password'
      />
      <div>
        {isAuth ? (
          <p className='flex gap-1'>
            Account.
            <span
              className='underline hover:text-blue-500 hover:no-underline cursor-pointer'
              onClick={isAuthClick}
            >
              Log In
            </span>
          </p>
        ) : (
          <p className='flex gap-1'>
            No account.
            <span
              className='underline hover:text-blue-500 hover:no-underline cursor-pointer'
              onClick={isAuthClick}
            >
              Registration
            </span>
          </p>
        )}
      </div>
      {isAuth ? (
        <button
          className=' px-12 py-2 rounded-md border border-blue-700 hover:text-black hover:bg-blue-700 transition-colors duration-200 uppercase'
          onClick={reqRegistrClick}
        >
          Registration
        </button>
      ) : (
        <button
          className=' px-12 py-2 rounded-md border border-blue-700 hover:text-black hover:bg-blue-700 transition-colors duration-200 uppercase'
          onClick={reqLoginClick}
        >
          Log In
        </button>
      )}
      {error && <ErrorModal err={error} />}
    </form>
  );
};

export default Auth;
