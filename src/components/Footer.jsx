import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/images/blog-logo.svg";
import youtube from "@/images/youtube.png";
import facebook from "@/images/facebook.png";
import instagram from "@/images/instagram.png";

const Footer = () => {
  const socials = [
    {title:"Facebook"},
    {title:"Instagram"},
    {title:"Youtube"},
  ]
  const links = [
    {title:"Homepage"},
    {title:"Blog"},
    {title:"About"},
    {title:"Contact"}
  ]
  const tags = [
    {title:"Fashion"},
    {title:"Technology"},
    {title:"Coding"},
    {title:"Travel"}
  ]
  return (
    <>
      <div className="flex max-md:flex-col py-5 gap-[100px] max-md:gap-[40px] mt-14 justify-around">
        <div className=" flex-[1] flex gap-4 flex-col">
          <div className="flex gap-2">
            <Image src={logo} alt='logo' width={50} height={50} />
            <h2 className="text-[22px] max-md:text-[18px] text-white font-bold">InsightInk</h2>
          </div>
          <p className="text-[15px] font-medium text-justify text-gray-500 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <div className="flex gap-3">
           <Image src={facebook} alt="social" width={18} height={18} />
           <Image src={instagram} alt="social" width={18} height={18} />
           <Image src={youtube} alt="social" width={18} height={18} />
          </div>
        </div>
        <div className=" flex-[1]  flex-wrap gap-[50px] flex flex-row">
          <div className="flex flex-[1] gap-2 flex-col">
          <span className="text-[18px]  mb-4 max-md:text-[14px] text-white font-bold">Links</span>
          {
            links.map((link)=>(
              <Link href="#" key={link.title} className="hover:text-accent text-gray-600 font-medium" >{link.title}</Link>
            ))
          }
          </div>
          <div className="flex flex-[1] gap-2 flex-col">
          <span className="text-[18px]  mb-4 max-md:text-[15px] text-white font-bold">Tags</span>
          {
            tags.map((link)=>(
              <Link href="#" key={link.title} className="hover:text-accent text-gray-600 font-medium" >{link.title}</Link>
            ))
          }
          </div>
          <div className="flex flex-[1] gap-2 flex-col">
          <span className="text-[18px] mb-4 max-md:text-[15px] text-white  font-bold">Socials</span>
          {
            socials.map((link)=>(
              <Link href="#" key={link.title} className="hover:text-accent text-gray-600 font-medium " >{link.title}</Link>
            ))
          }</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
