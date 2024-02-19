import React from "react";
import styles from "./component.module.css";
import Link from "next/link";
import Image from "next/image";
import * as Icons from "lucide-react";
import heroImg from "@/images/p1.jpeg";

const Featured = () => {
  return (
    <>
      <div className='flex flex-col'>
        <div className='flex max-lg:flex-col gap-[10px] items-end max-lg:items-start'>
          <h1 className='text-[64px] flex-[6]  pt-6 text-justify leading-normal  max-xl:text-[55px] max-lg:text-[55px]  max-md:text-[50px]  max-sm:text-[42px] max-xsmall:text-[30px] '>
            <b>Insights Unleashed <br/> Exploring the World <br/> Through Words</b>
          </h1>
          <div className='flex flex-col flex-[2] px-6 items-center max-lg:flex-col  max-lg:items-start  max-md:flex-col '>
          <p className=' max-lg:w-[60%] text-justify p-5 max-xl:text-[14px] text-[16px] rounded-2xl border-l-[4px]  font-neu leading-5'>
          Discover enchanting narratives, diverse voices, and hidden gems in our vibrant community. Embark on your literary adventure!
          </p>
          <Link
            href='#'
            className='flex px-7 translate-y-[-0.4rem] translate-x-[-1rem] max-xl:px-24 py-[4px] max-xl:w-[20%] rounded-[34px] bg-black text-white justify-center items-center gap-2'
          >
            <span className=' text-lg max-xl:text-xs max-xl:pl-4 items-start font-neu tracking-[0.03em]  leading-6'>
              Explore Now
            </span>
            <span className=' translate-x-6 w-[40px] h-[35px]  max-xl:translate-x-0 rounded-[50%] max-lg:rouded bg-white text-black'>
              <Icons.MoveRight
                size={26}
                strokeWidth={1.8}
                className={` arrow ${styles.arrow} `}
              />
            </span>
          </Link>
        </div>
        </div>
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.image}>
              <Image
                className={styles.img}
                src={heroImg}
                alt='pic'
              />
              <h1 className={styles.overlayTitle}>
                This is Title 1
              </h1>
            </div>
            <div className={styles.description}>
              <h1 className={styles.title}> This is Title 1</h1>
              <p className={styles.desc}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <button className={styles.btn}>Read More</button>
            </div>
          </div>
          <div className={styles.right}>
          <div className={styles.description}>
              <h1 className={styles.title}> This is Title 2</h1>
              <p className={styles.desc}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <button className={styles.btn}>Read More</button>
            </div>
            <div className={styles.image}>
              <Image
                className={styles.img}
                src={heroImg}
                alt='pic'
              />
              <h1 className={styles.overlayTitle}>
                This is Title 2
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
