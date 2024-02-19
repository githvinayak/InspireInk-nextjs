"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import pic from "@/images/p1.jpeg";
import styles from "./login.module.css";
import google from "@/images/google.png";
import facebook from "@/images/facebook.png";
import github from "@/images/github.png";
import {signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


const LoginPage = () => {
  const {data,status} = useSession();
  const router = useRouter();
  if(status==="loading"){
    return <div className={styles.Loading}>Loading...</div>
  }
  if(status==="authenticated"){
    router.push("/");
  }
  return (
    <>
      <div className={` py-10 ${styles.container}`}>
        <div className={styles.left}>
          <Image src={pic} alt='Profile Picture' className={styles.banner} />
        </div>
        <div className={styles.right}>
          <div className={styles.wrapper}>
            <h2 className={styles.title}>
              SIGN <span className={styles.blueText}>IN</span>
            </h2>
              <form className={styles.form}>
              <div className={styles.inputContainer}>
                <input
                  className={styles.input}
                  type='text'
                  id='website-input'
                  placeholder='Enter your username'
                />
                <label className={styles.label} >
                  Username
                </label>
              </div>
              <div className={styles.inputContainer}>
                <input
                 className={styles.input}
                  type='text'
                  id='website-input'
                  placeholder='Enter your password'
                />
                <label className={styles.label} >
                  Password
                </label>
              </div>
              <div className={styles.btn}>
                <button type='submit'>SIGN IN</button>
              </div>
              </form>
              <div className={styles.lower}>
                <h2 className={styles.text}>OR Sign in with</h2>
                <div className={styles.socialIcons}>
                  <div onClick={()=>signIn("google")} className={styles.icons}><Image src={google} alt="google" /></div>
                  <div className={styles.icons}><Image src={facebook} alt="fb" /></div>
                  <div onClick={()=>signIn("github")} className={styles.icons}><Image src={github} alt="gh" /></div>
                </div>
                <p className={styles.text2}>Don't have an account ?<Link href="/register" className={styles.register}>Sign Up</Link></p>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default LoginPage;
