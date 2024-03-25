"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import pic from "../../../images/p1.jpeg";
import styles from "../login/login.module.css";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

const RegisterPage = () => {
  const ref = useRef();

  const router = useRouter();

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userInfo.name || !userInfo.email || !userInfo.password) {
      setError("Must provide all the Credentials!");
    }

    try {
      setPending(true);

      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });

      if (res.ok) {
        setPending(false);
        ref?.current?.reset();
        router.push("/login");
        console.log("User registration done");
      } else {
        const errorData = await res.json();
        setError(errorData.message);
        console.log("Something went wrong in else block");
        setPending(false);
      }
    } catch (error) {
      setPending(false);
      setError("Something went wrong");
    }
  };

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
            <form ref={ref} onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputContainer}>
                <input
                  className={styles.input}
                  id='name'
                  type='text'
                  name='name'
                  value={userInfo.name}
                  onChange={handleChange}
                  required
                  placeholder='Enter your name'
                />
                <label className={styles.label} >
                  Username
                </label>
              </div>
              <div className={styles.inputContainer}>
                <input
                  className={styles.input}
                  id='email'
                  type='email'
                  name='email'
                  value={userInfo.email}
                  onChange={handleChange}
                  required
                  placeholder='Enter your email'
                />
                <label className={styles.label} >
                  Email
                </label>
              </div>
              <div className={styles.inputContainer}>
                <input
                  className={styles.input}
                  id='password'
                  type='password'
                  name='password'
                  value={userInfo.password}
                  required
                  onChange={handleChange}
                  placeholder='enter your password'
                />
                <label className={styles.label} >
                  Password
                </label>
              </div>
              {error && <span className="text-red-600">{error}</span>}
              <div className={styles.btn}>
                <button type='submit'>{pending ? 'Registering' : 'SIGN UP'}</button>
              </div>
            </form>
            <div className={styles.lower}>
              <p className={styles.text2}>
                Already have an account ?
                <Link href='/login' className={styles.register}>
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
