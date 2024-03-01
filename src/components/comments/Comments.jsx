"use client";

import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";
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

const Comments = ({ postSlug }) => {
  const { status } = useSession();

  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/feedbacks?postSlug=${postSlug}`,
    fetcher
  );
  const [desc, setDesc] = useState("");
  const handleEvent = (e) => {
    setDesc(e.target.value);
  };
  const handleClick = () => {
    setDesc("");
  };
  const handleSubmit = async () => {
    await fetch("/api/feedbacks", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });
    setDesc("");
    mutate();
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
            <input
              placeholder='write a comment...'
              className={styles.input}
              onChange={handleEvent}
              value={desc}
            />
          <div className={styles.btns}>
            <button onClick={handleClick} className={styles.btn1}>
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className={`${desc === "" ? styles.btn2 : styles.blue}`}
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
          : data?.map((item) => (
              <div className={styles.comment} key={item.name}>
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
                    <p className={styles.desc}>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;
