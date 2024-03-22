"use client"
import Image from "next/image";
import styles from "./component.module.css";
import logo from "@/images/blog-logo.svg";
import * as Icons from "lucide-react";
import Link from "next/link";
import { AuthLinks } from "./authlinks/AuthLinks";
import Tooltip from "@mui/material/Tooltip";
import { usePathname } from "next/navigation";
import {  useState,useEffect } from "react";
import { useSession } from "next-auth/react";
import { singleUser } from "@/actions/actions";

const Sidebar = () => {
  const pathName = usePathname();
  const [open, setOpen] = useState(true);
  const {status,data} = useSession();
  const userInfo = data?.user;
  const email =userInfo?.email;
  const links = [
    {
      path: "/",
      title: "Home",
      icon: <Icons.Home className="h-6 w-6" />,
    },
    {
      path: "/contact",
      title: "Contact",
      icon: <Icons.Phone className="h-6 w-6"/>,
    },
    {
      path: "/about",
      title: "About",
      icon: <Icons.BadgeInfo className="h-6 w-6"/>,
    },
  ];
  return (
    <>
      <nav className=' h-screen flex flex-col bg-secondary  shadow-sm'>
        <div className=' p-4 pb-2 max-sm:p-2 flex justify-between items-center'>
          <Link href='/'>
            <Image
              src={logo}
              priority={true}
              className={` overflow-hidden transition-all ${
                open ? "w-0" : "w-32"
              }`}
              alt='pic'
            />
          </Link>
          <button
            onClick={() => setOpen((prev) => !prev)}
            className='p-1.5 rounded-lg text-white bg-accent hover:bg-accent'
          >
            {open ? <Icons.ChevronLast /> : <Icons.ChevronFirst />}
          </button>
        </div>
        <ul className=' flex-1 px-3 py-2 max-sm:p-[6px]'>
          {links.map((link,index) => (
            <Tooltip
              title={link.title}
              key={index}
              disableHoverListener={!open}
              placement='right'
            >
              <Link
                href={link.path}
                className={`relative flex justify-center items-center py-[.7rem] mb-2 px-[.4rem] max-sm:pl-[10px] font-medium rounded-md cursor-pointer transition-colors hover:bg-accent text-white ${
                  pathName === link.path && styles.active
                }`}
              >
                {link.icon}
                <span
                  className={` overflow-hidden transition-all ${
                    open ? "w-0" : "w-52 text-[1.1rem] ml-3"
                  }`}
                >
                  {link.title}
                </span>
              </Link>
            </Tooltip>
          ))}
          <hr />
          {/* <Search open={open}/> */}
          {/* <ThemeToggle open={open} /> */}
          <AuthLinks data={data} email={email} status={status} open={open} />
        </ul>
        <div className=' border-t flex p-3'>
         { userInfo?.image ? ( <Image
            src={userInfo?.image} 
            width={50}
            height={50}
            className='w-10 h-10 rounded-md'
            alt='pic'
          />) : ( <Image
            src='https://ui-avatars.com/api/?background=0D8ABC&color=fff'
            width={50}
            height={50}
            className='w-10 h-10 rounded-md'
            alt='pic'
          />)}
          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${
              open ? "w-0 " : "w-52 ml-3"
            }`}
          >
           <div className='leading-5'>
              {userInfo?.name ? (<h4 className='font-semibold text-white text-[1.15rem]'>{userInfo?.name}</h4>): (<h4 className='font-semibold text-white text-[1.15rem]'>Username</h4>)}
             {userInfo?.email ? ( <span className='text-xs text-gray-400 '>{userInfo?.email}</span>): ( <span className='text-xs text-gray-400 '>Useremail</span>)}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
