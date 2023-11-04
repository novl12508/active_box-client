"use client";

import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { reqLogin } from "./api/reqLogin";
import { reqRegister } from "./api/reqRegistr";
import { useRouter } from "next/navigation";
import ErrorModal from "../Error/ErrorModal";
import Login from "@/UI/Auth/Login";
import Registration from "@/UI/Auth/Registration";
import Button from "@/UI/ButtonAuth/Button";
import Input from "@/UI/Input/Input";
import { setTimeoutModalErrorAuth } from "@/helpers/timeout.auth";

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
      setTimeoutModalErrorAuth(setError, 2);
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
      setTimeoutModalErrorAuth(setError, 2);
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

      <Input
        value={email}
        name='email'
        type='email'
        placeholder='email'
        inputlHandler={emailHandler}
      />

      {isAuth && (
        <Input
          value={username}
          name='name'
          type='text'
          placeholder='name'
          inputlHandler={userNameHandler}
        />
      )}

      <Input
        value={password}
        name='password'
        type='password'
        placeholder='password'
        inputlHandler={passwordHandler}
      />

      <div>
        {isAuth ? (
          <Login isAuthClick={isAuthClick} />
        ) : (
          <Registration isAuthClick={isAuthClick} />
        )}
      </div>
      {isAuth ? (
        <Button
          disable={disable}
          reqAuthClick={reqRegistrClick}
          value='Registration'
        />
      ) : (
        <Button disable={disable} reqAuthClick={reqLoginClick} value='Log In' />
      )}
      {error && <ErrorModal err={error} />}
    </form>
  );
};
export default Auth;
