"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import pic from "../../../images/p1.jpeg";
import styles from "./login.module.css";
import google from "../../../images/google.png";
import facebook from "../../../images/facebook.png";
import github from "../../../images/github.png";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const {data,status} = useSession();
  const ref = useRef();
  const router = useRouter();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  if(status==="loading"){
    return <div className={styles.Loading}>Loading...</div>
  }
  if(status==="authenticated"){
    router.push("/");
  }
  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(userInfo);
    if (!userInfo.email || !userInfo.password) {
      setError("Must provide all the Credentials!");
    }
    try {
      setPending(true);

      const res = await signIn("credentials", {
        email: userInfo.email,
        password: userInfo.password,
        redirect: false,
        callbackUrl: process.env.NEXTAUTH_URL,
      });

      if (!res.ok) {
        setError("Problem signing in!");
      }

      if (res.error) {
        setError("Invalid credentials");
        setPending(false);
        return;
      }

      setPending(false);

      router.replace("/");
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
              SIGN <span className={styles.blueText}>IN</span>
            </h2>
            <form ref={ref} onSubmit={handleSubmit} className={styles.form}>
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
                <label className={styles.label}>Email</label>
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
                  placeholder='Enter your password'
                />
                <label className={styles.label}>Password</label>
              </div>
              <div className={styles.btn}>
              {error && <span className="text-red-600 mx-2 px-2">{error}</span>}
                <button type='submit'>{pending ? 'SIGNING in...' : 'SIGN IN'}</button>
              </div>
            </form>
            <div className={styles.lower}>
              <h2 className={styles.text}>OR Sign in with</h2>
              <div className={styles.socialIcons}>
                <div onClick={() => signIn("google")} className={styles.icons}>
                  <Image src={google} alt='google' />
                </div>
                <div className={styles.icons}>
                  <Image src={facebook} alt='fb' />
                </div>
                <div onClick={() => signIn("github")} className={styles.icons}>
                  <Image src={github} alt='gh' />
                </div>
              </div>
              <p className={styles.text2}>
                Don't have an account ?
                <Link href='/register' className={styles.register}>
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
