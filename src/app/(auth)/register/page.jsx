import React from "react";
import Image from "next/image";
import Link from "next/link";
import pic from "@/images/p1.jpeg";
import styles from "../login/login.module.css";

const RegisterPage = () => {
  return (
    <>
      <div className={` py-10 ${styles.container}`}>
        <div className={styles.left}>
          <Image src={pic} alt='Profile Picture' className={styles.banner} />
        </div>
        <div className={styles.right}>
          <div className={styles.wrapper}>
            <h2 className={styles.title}>
              SIGN <span className={styles.blueText}>UP</span>
            </h2>
              <form className={styles.form}>
              <div className={styles.inputContainer}>
                <input
                  className={styles.input}
                  type='text'
                  id='website-input'
                  placeholder='Enter your username'
                />
                <label className={styles.label} for='website-input'>
                  Username
                </label>
              </div>
              <div className={styles.inputContainer}>
                <input
                  className={styles.input}
                  type='text'
                  id='website-input'
                  placeholder='Enter your email'
                />
                <label className={styles.label} for='website-input'>
                  Email
                </label>
              </div>
              <div className={styles.inputContainer}>
                <input
                 className={styles.input}
                  type='text'
                  id='website-input'
                  placeholder='Enter your password'
                />
                <label className={styles.label} for='website-input'>
                  Password
                </label>
              </div>
              <div className={styles.inputContainer}>
                <input
                 className={styles.input}
                  type='text'
                  id='website-input'
                  placeholder='Re-enter your password'
                />
                <label className={styles.label} for='website-input'>
                  Confirm Password
                </label>
              </div>
              <div className={styles.btn}>
                <button type='submit'>SIGN IN</button>
              </div>
              </form>
              <div className={styles.lower}>
                <p className={styles.text2}>Already have an account ?<Link href="/login" className={styles.register}>Sign In</Link></p>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default RegisterPage;