import React from "react";
import Image from "next/image";
import pic from "@/images/p1.jpeg";
import Link from "next/link";
import styles from "./card.module.css";

const Card = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <Image src={pic} alt='pic' fill className={styles.img} />
          <div className={styles.info}>
            <h1 className={styles.title}> This the post's title</h1>
            <p className={styles.desc}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
           <div className="flex flex-row justify-between items-end">
           <Link className={styles.btn} href=''>
              Read more
            </Link>
            <div className="flex gap-2 font-bold">
              <span>11.02.2023</span>
              <span>Culture</span>
            </div>
           </div>
          </div>
        </div>
        </div>
    </>
  );
};

export default Card;
