"use client";

import Link from "next/link";
import styles from "../component.module.css";
import Image from "next/image";
import { useSession } from "next-auth/react";
import Like from "../Like"
import useSWR from "swr";
import { useState } from "react";

const fetcher = async (url) => {
    const res = await fetch(url);
  
    const data = await res.json();
  
    if (!res.ok) {
      const error = new Error(data.message);
      throw error;
    }
    return data;
  };

const Comments = () => {
  const { status } = useSession();

  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/notes`,
    fetcher
  );

  console.log(data);
 
  const [content, setContent] = useState("");
  const handleEvent = (e) => {
    setContent(e.target.value);
  };
  const handleClick = () => {
    setContent("");
  };
  const handleSubmit = async () => {
    await fetch("/api/notes", {
      method: "POST",
      body: JSON.stringify({ content }),
    });
    setContent("");
    mutate();
  };
  return (
    <div className={styles.container}>
      <div className="flex justify-between">
      <h1 className={styles.title}>What do you think ?</h1>
      </div>
      {status === "authenticated" ? (
        <div className={styles.write}>
            <input
              placeholder='write a comment...'
              className={styles.input}
              onChange={handleEvent}
              value={content}
            />
          <div className={styles.btns}>
            <button onClick={handleClick} className={styles.btn1}>
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className={`${content === "" ? styles.btn2 : styles.blue}`}
            >
              Comment
            </button>
          </div>
        </div>
      ) : (
        <Link href='/login'>Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        {isLoading
          ? "loading"
          : data?.map((item,idx) => (
              <div className={styles.comment} key={idx}>
                <div className={styles.user}>
                  {item?.user?.image && (
                    <Image
                      src={item?.user.image}
                      alt=''
                      width={50}
                      height={50}
                      className={styles.image}
                    />
                  )}
                  <div className={styles.userComment}>
                    <div className={styles.userInfo}>
                      <span className={styles.username}>{item.user.name}</span>
                      <span className={styles.date}>
                        {item.createdAt.toString().slice(0, 10)}
                      </span>
                    </div>
                    <p className={styles.desc}>{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;
