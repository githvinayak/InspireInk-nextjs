import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.css";

const Card = ({key,item}) => {
  return (
    <>
      <div className={styles.wrapper} key={key}>
        <div className={styles.card}>
          { item.img && (<Image src={item.img} alt='pic' fill className={styles.img} />)}
          <div className={styles.info}>
            <Link className={styles.title} href={`/posts/${item.slug}`}>
            <h1 className={styles.title}> {item.title}</h1>
            </Link>
            <div className={styles.desc} dangerouslySetInnerHTML={{ __html: item?.desc.substring(0,60) }}/>
           <div className={styles.bottom}>
           <Link className={styles.btn} href={`/posts/${item.slug}`}>
              Read more
            </Link>
            <div className="flex gap-2 font-bold">
              <span className=" max-xl:text-[12px] max-lg:text-[14px] max-md:text-[16px] max-xs:text-[14px] max-xsmall:text-[12px] max-2xsmall:text-[11px]">  {item.createdAt.substring(0, 10)} -</span>
              <span className=" max-xl:text-[12px] max-lg:text-[14px] max-md:text-[16px] max-xs:text-[14px] max-xsmall:text-[12px] max-2xsmall:text-[11px]">{item.catSlug}</span>
            </div>
           </div>
          </div>
        </div>
        </div>
    </>
  );
};

export default Card;
