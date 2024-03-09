"use client";
import Image from "next/image";
import styles from "./component.module.css";
import logo from "@/images/blog-logo.svg";
import * as Icons from "lucide-react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { AuthLinks } from "./AuthLinks";
import Tooltip from "@mui/material/Tooltip";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Search from "./Search";
import { useSession } from "next-auth/react";
const Sidebar = () => {
  const pathName = usePathname();
  const session = useSession()
  const userInfo = session?.data?.user;
  const [open, setOpen] = useState(true);
  const links = [
    {
      path: "/",
      title: "Home",
      icon: <Icons.Home />,
    },
    {
      path: "/contact",
      title: "Contact",
      icon: <Icons.Phone />,
    },
    {
      path: "/about",
      title: "About",
      icon: <Icons.BadgeInfo />,
    },
    {
      path: "/admin",
      title: "Dashboard",
      icon: <Icons.LayoutDashboard />,
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
        <ul className=' flex-1 px-3 max-sm:p-[6px]'>
          {links.map((link) => (
            <Tooltip
              title={link.title}
              key={link.path}
              disableHoverListener={!open}
              placement='right'
            >
              <Link
                href={link.path}
                className={`relative flex justify-center items-center py-4 mb-2 px-3 max-sm:pl-[10px] font-medium rounded-md cursor-pointer transition-colors hover:bg-accent text-white ${
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
          <AuthLinks open={open} />
        </ul>
        <div className=' border-t flex p-4'>
         { userInfo?.image &&( <Image
            src={userInfo?.image || 'https://ui-avatars.com/api/?background=0D8ABC&color=fff'} 
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
              {userInfo?.name &&(<h4 className='font-semibold text-white text-[1.15rem]'>{userInfo?.name || Username}</h4>)}
             {userInfo?.email &&( <span className='text-xs text-gray-400 '>{userInfo?.email || Useremail}</span>)}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
