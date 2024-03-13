import Link from "next/link";
import styles from "./component.module.css";
import { usePathname } from "next/navigation";
import * as Icons from "lucide-react";
import Tooltip from "@mui/material/Tooltip";
import { signOut, useSession } from "next-auth/react";
import { IoMdLogOut } from "react-icons/io";
import { useState } from "react";
import Image from "next/image";
import CreateStoryComponent from "./stories/CreateStoryComponent";
import StoriesComponent from "./stories/StoriesComponent";

export const AuthLinks = ({ open }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  const { status, data } = useSession();
  //console.log(data);
  const handleClick = () => {
    console.log("clicked");
    setIsOpen(!isOpen);
  };
  //console.log(data);
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
          <Link
            href='/write'
            className={`relative bg-primary flex items-center py-4 px-3 my-2 font-medium rounded-md cursor-pointer transition-all hover:opacity-[.9] text-white ${
              pathName === "write" && styles.active
            }`}
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
                    open ? "ml-0 w-7 h-7" : " w-11 ml-6 h-11"
                  } h-11 rounded-full`}
                  alt='pic'
                />
                <span className='absolute top-0 bg-secondary rounded-md left-0 px-[0.3rem] py-[0.1rem] text-[12px]'>
                  New!
                </span>
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
          { isOpen && (<div className="absolute top-0 z-[999] right-0 h-screen w-[400px] bg-secondary flex flex-col justify-center items-center">
          <StoriesComponent userEmail={data?.user?.email}/>
          <CreateStoryComponent userEmail={data?.user?.email}/>
          </div>)
          }   
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
