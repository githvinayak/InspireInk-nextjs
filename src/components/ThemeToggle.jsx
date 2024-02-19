"use client";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import * as Icons from "lucide-react";
import Sun from "@/images/sun.png";
import Moon from "@/images/moon.png";

const ThemeToggle = ({open}) => {
  const { toggle, theme } = useContext(ThemeContext);
  return (
    <>
      <div className= {`relative flex items-center py-4 px-3 my-2 font-medium rounded-md cursor-pointer transition-colors hover:bg-indigo-50 text-gray-600 `}>
     <div className="flex">{theme ==="light" ? <Icons.Sun /> : <Icons.Moon />} <span className={` overflow-hidden transition-all ${open ? "w-0" : "w-52 text-[1.1rem] ml-3"} `}> {theme ==="light" ? "Light Mode":"Dark Mode"}</span> </div>
      <div
        style={
          theme === "dark"
            ? { backgroundColor: "white" }
            : { backgroundColor: "#0f172a" }
        }
        onClick={toggle}
        className={`w-[41px] h-[20px] flex rounded-[50px] p-[1px] items-center justify-between cursor-pointer relative bg-[#ebebeb] ${open ? "hidden" : "w-52 text-[1.1rem] ml-3"}`}
      >
        <Image src={Moon} alt='pic' width={14} height={14} />
        <div className='h-[15px] w-[15px] rounded-[50%] bg-white absolute left-[1px]'></div>
        <Image src={Sun} alt='pic' width={14} height={14} />
      </div>
      </div>
    </>
  );
};

export default ThemeToggle;
