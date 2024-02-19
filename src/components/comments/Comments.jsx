"use client"
import Link from "next/link";
import styles from "./comments.module.css"
import pic from "@/images/p1.jpeg";
import React, { useState } from "react";
import Image from "next/image";

const Comments = () => {
  const [isInputValue,setInputValue] = useState("");
  const handleEvent = (e)=>{
    console.log(e.target.value);
    setInputValue(e.target.value)
  }
  const handleClick = ()=>{
    setInputValue("")
  }
  const status = "authenticated";

  return (
    <>
    <div className={styles.container}>
    <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div  className={styles.write}>
          <input name='' id='' value={isInputValue} onChange={handleEvent}  placeholder="add a comment" className={styles.input} />
          <div className={styles.btns}>
          <button  onClick={handleClick} className={styles.btn1}>Cancel</button>
          <button  onClick={handleClick} className= {`${isInputValue === "" ? styles.btn2 : styles.blue}`}>Comment</button>
          </div>
        </div>
      ) : (
        <Link href='/login'>Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
          <Image src={pic} width={50} height={50} alt="" className={styles.image}/>
           <div className={ styles.userComment}>
           <div className={styles.userInfo}>
            <span className={styles.userName}>John Doe</span>
            <span className={styles.date}>01.01.24</span>
            </div>
          <p className={styles.desc}>this is a comment</p>
           </div>
          </div>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
          <Image src={pic} width={50} height={50} alt="" className={styles.image}/>
           <div className={ styles.userComment}>
           <div className={styles.userInfo}>
            <span className={styles.userName}>John Doe</span>
            <span className={styles.date}>01.01.24</span>
            </div>
          <p className={styles.desc}>this is a comment</p>
           </div>
          </div>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
          <Image src={pic} width={50} height={50} alt="" className={styles.image}/>
           <div className={ styles.userComment}>
           <div className={styles.userInfo}>
            <span className={styles.userName}>John Doe</span>
            <span className={styles.date}>01.01.24</span>
            </div>
          <p className={styles.desc}>this is a comment</p>
           </div>
          </div>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
          <Image src={pic} width={50} height={50} alt="" className={styles.image}/>
           <div className={ styles.userComment}>
           <div className={styles.userInfo}>
            <span className={styles.userName}>John Doe</span>
            <span className={styles.date}>01.01.24</span>
            </div>
          <p className={styles.desc}>this is a comment</p>
           </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Comments;
