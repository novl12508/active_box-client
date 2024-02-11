import React, { FC, useEffect, useState } from "react";
import { IoExitOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { IWindowUser } from "./interface/IWindowUser";
import { logout } from "./api/logout";
import ErrorModal from "../Error/ErrorModal";
import { setTimeoutModalErrorAuth } from "@/helpers/timeout.auth";

const WindowUser: FC<IWindowUser> = ({ user, setUser, account }) => {
  const [error, setError] = useState("");
  const [disable, setDisable] = useState(false);

  const clickLogOut = async () => {
    try {
      setDisable(true);
      const data = await logout();

      localStorage.clear();
      setUser({ id: 0, email: "", name: "" });
      setDisable(false);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
      setDisable(false);
      console.error(err);
      setError(JSON.stringify(err));
      setTimeoutModalErrorAuth(setError, 2);
    }
  };

  return (
    <div
      className={`${
        account ? "flex opacity-1" : " flex opacity-0"
      } flex-col items-center justify-between w-52 h-[270px] absolute top-[100%] mt-2 right-0  bg-blue-500  rounded-xl transition-opacity duration-400`}
    >
      <div className='flex justify-center items-center  mt-2'>
        <div className='text-base'>
          <AiOutlineUser />
        </div>
        <h1 className='normal-case'> User</h1>
      </div>
      <div className='flex justify-center items-center px-3 py-2 border rounded-full bg-gray-700'>
        {user.name.at(0)}
      </div>
      <hr className='bg-gray-700 w-full h-[1px]' />
      <div className='flex flex-col px-9 mb-3'>
        <div className='flex flex-col text-center mb-7'>
          <h2 className='normal-case'>{user.name}</h2>
          <p className='normal-case'>{user.email}</p>
        </div>

        <div
          className={`${
            disable && "opacity-30"
          } flex justify-center items-center cursor-pointer mt-7  border border-white hover:bg-blue-700 rounded-xl px-2 py-1  transition-all duration-200 uppercase`}
        >
          <div className='mr-2 text-xl'>
            <IoExitOutline />
          </div>
          <button disabled={disable} onClick={clickLogOut}>
            Выйти
          </button>
        </div>
      </div>
      {error && <ErrorModal err={error} setError={setError} />}
    </div>
  );
};

export default WindowUser;
