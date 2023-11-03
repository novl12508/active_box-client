"use client";

import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { reqLogin } from "./api/reqLogin";
import { reqRegister } from "./api/reqRegistr";
import { useRouter } from "next/navigation";
import ErrorModal from "../Error/ErrorModal";
import Login from "@/UI/Auth/Login";
import Registration from "@/UI/Auth/Registration";

const Auth = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [disable, setDisable] = useState(false);
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

  // Login
  const reqLoginClick = async () => {
    try {
      setDisable(true);
      const result = await reqLogin(email, password);

      const data = JSON.stringify(result);
      localStorage.setItem("user", data);

      console.log(result, "login");
      setDisable(false);
      router.push("/");
    } catch (e) {
      setDisable(false);
      if (e instanceof Error) {
        setError(e.message);
      }
      console.error(e, "Error ReqFetch");
      const sleep = setTimeout(() => {
        setError("");
        clearTimeout(sleep);
      }, 2000);
    }
  };

  //Registration
  const reqRegistrClick = async () => {
    try {
      setDisable(true);
      const result = await reqRegister(email, username, password);
      console.log(email, username, password);

      const data = JSON.stringify(result);
      localStorage.setItem("user", data);

      console.log(result, "register");
      setDisable(false);
      router.push("/");
    } catch (e) {
      setDisable(false);
      if (e instanceof Error) {
        setError(e.message);
      }
      console.error(e, "Error ReqFetch");
      const sleep = setTimeout(() => {
        setError("");
        clearTimeout(sleep);
      }, 2000);
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
          <Login isAuthClick={isAuthClick} />
        ) : (
          <Registration isAuthClick={isAuthClick} />
        )}
      </div>
      {isAuth ? (
        <button
          className={`${
            disable && "opacity-40"
          } px-12 py-2 rounded-md border border-blue-700 ${
            !disable && "hover:text-black hover:bg-blue-700"
          } transition-colors duration-200 uppercase`}
          onClick={reqRegistrClick}
          disabled={disable}
        >
          Registration
        </button>
      ) : (
        <button
          className={`${
            disable && "opacity-40"
          } px-12 py-2 rounded-md border border-blue-700 ${
            !disable && "hover:text-black hover:bg-blue-700"
          } transition-colors duration-200 uppercase`}
          onClick={reqLoginClick}
          disabled={disable}
        >
          Log In
        </button>
      )}
      {error && <ErrorModal err={error} />}
    </form>
  );
};
export default Auth;
