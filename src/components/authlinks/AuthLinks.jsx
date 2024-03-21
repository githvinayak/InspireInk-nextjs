import Link from "next/link";
import css from "./auth.module.css"
import * as Icons from "lucide-react";
import Tooltip from "@mui/material/Tooltip";
import { signOut } from "next-auth/react";
import { IoMdLogOut } from "react-icons/io";
import { useState } from "react";
import Image from "next/image";
import { RxCross1 } from "react-icons/rx";
import Notes from "../notes/Notes";
import Input from "../notes/Input";


export const AuthLinks =({ open ,status,data}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {status === "unauthenticated" ? (
        <Tooltip title='Login' disableHoverListener={!open} placement='right'>
          <Link
            href='/login'
            className={`relative bg-primary flex my-2 items-center py-4 px-3 max-sm:pl-[10px] font-medium rounded-md cursor-pointer transition-colors  text-white `}
          >
            <Icons.UserRound className='text-accent w-7 h-7' />{" "}
            <span
              className={` overflow-hidden transition-all ${
                open ? "w-0" : "w-52 text-[1.1rem] ml-3"
              }`}
            >
              Login
            </span>
          </Link>
        </Tooltip>
      ) : (
        <div className='flex flex-col'>
         { data?.user?.role === "ADMIN" &&  (<Link
            href='/write'
            className="relative bg-primary flex items-center py-4 px-3 my-2 font-medium rounded-md cursor-pointer transition-all hover:opacity-[.9] text-white"
          >
          <Icons.LayoutDashboard className='text-accent' />
            <span
              className={` overflow-hidden transition-all ${
                open ? "w-0" : "w-52 text-[1.1rem] ml-3"
              }`}
            >
              Dashboard
            </span>
          </Link>)}
          <Link
            href='/write'
            className={`relative bg-primary flex items-center py-4 px-3 my-2 font-medium rounded-md cursor-pointer transition-all hover:opacity-[.9] text-white`}
          >
            <Icons.PencilLine className='text-accent' />{" "}
            <span
              className={` overflow-hidden transition-all ${
                open ? "w-0" : "w-52 text-[1.1rem] ml-3"
              }`}
            >
              Create
            </span>
          </Link>
          {data?.user?.image && (
            <div
              onClick={handleClick}
              className={`relative bg-primary flex items-center py-2 px-3 my-2 font-medium rounded-md cursor-pointer transition-all hover:opacity-[.9] text-white`}
            >
              <div className='relative'>
                <Image
                  src={data?.user?.image}
                  width={200}
                  height={200}
                  className={` ${
                    open ? "ml-0 w-7 h-7" : " w-11 h-11"
                  } h-11 rounded-full`}
                  alt='pic'
                />
                <div className='absolute top-0  right-0'>
                  <span className={`relative flex ${open ? "h-3 w-3" : "h-4 w-4"}`}>
                    <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75'></span>
                    <span
                      className={`relative inline-flex rounded-full ${
                        open ? "h-3 w-3" : "h-4 w-4"
                      } bg-accent`}
                    ></span>
                  </span>
                </div>
              </div>
              <span
                className={` overflow-hidden transition-all ${
                  open ? "w-0" : "w-52 text-[1.1rem] ml-3"
                }`}
              >
                Post Updates
              </span>
            </div>
          )}
          {isOpen && (
            <div className='absolute top-0 z-[999] py-2 px-6 right-0 h-screen w-[350px] bg-secondary gap-8 flex flex-col justify-between '>
              <div className="flex justify-between bg-primary px-2 h-[50px] rounded-md font-bold text-white overflow-hidden items-center w-full">
              <div className={css.container}>
                <h1 id={css.h1}>New Updates</h1>
                <h1>New Updates</h1>
              </div>
              <div onClick={(prev)=>setIsOpen(!prev)} className="p-2 bg-secondary rounded-full">
                <RxCross1 className="w-4 h-4"/>
              </div>
              </div>
              <div className="flex overflow-hidden flex-[5] flex-col">
                <Notes/>
              </div>
              <div className="">
                <Input/>
              </div>
            </div>
          )}
          <span
            className={`relative bg-primary flex items-center py-4 px-3 my-2 font-medium rounded-md cursor-pointer transition-all hover:opacity-[.9] text-white`}
            onClick={() => signOut()}
          >
            <IoMdLogOut className='w-7 h-7 text-accent' />
            <span
              className={` overflow-hidden transition-all ${
                open ? "w-0" : "w-52 text-[1.1rem] ml-3"
              }`}
            >
              Logout
            </span>
          </span>
        </div>
      )}
    </>
  );
};
