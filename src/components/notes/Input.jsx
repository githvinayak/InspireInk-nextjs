
import useSWR from "swr";
import { IoIosSend } from "react-icons/io";
import { useState } from "react";
import Link from "next/link";


const fetcher = async (url) => {
    const res = await fetch(url);
  
    const data = await res.json();
  
    if (!res.ok) {
      const error = new Error(data.message);
      throw error;
    }
    return data;
  };

const Input = () => {

    const { data, mutate } = useSWR(
        `http://localhost:3000/api/notes`,
        fetcher
      );

    const [content, setContent] = useState("");
    const handleEvent = (e) => {
      setContent(e.target.value);
    };

    const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, ""); 

    const handleSubmit = async () => {
      await fetch("/api/notes", {
        method: "POST",
        body: JSON.stringify({ content,path:slugify(content) }),
      });
      setContent("");
      mutate();
    };
  return (
    <>
       <div className='bg-primary flex justify-between items-center rounded-lg py-2 px-2'>
        <input
          placeholder='write your post title here'
          onChange={handleEvent}
          value={content}
          className="bg-primary px-2 caret-accent text-white outline-none"
        />
        <Link href="#" onClick={handleSubmit} className=' bg-accent p-1 rounded-full'>
        <IoIosSend className="text-white w-6 h-6"/>
        </Link>
      </div>
    </>
  )
}

export default Input