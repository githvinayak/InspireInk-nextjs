"use client";
import styles from "./writePage.module.css";
import Image from "next/image";
import plus from "@/images/plus.png";
import image from "@/images/image.png";
import external from "@/images/external.png";
import video from "@/images/video.png";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const WritePage = () => {
  const {status} = useSession();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  if(status==="loading"){
    return <div className={styles.Loading}>Loading...</div>
  }
  if(status==="authenticated"){
    router.push("/");
  }
  return (
    <>
      <div className={styles.container}>
        <input type='text' placeholder='Title' className={styles.input} />
        <div className={styles.editor}>
          <button className={styles.button} onClick={() => setOpen(!open)}>
            <Image src={plus} alt='' width={16} height={16} />
          </button>
          {open && (
            <div className={styles.add}>
              <button className={styles.addButton}>
                <Image src={image} alt='' width={16} height={16} />
              </button>
              <button className={styles.addButton}>
                <Image src={external} alt='' width={16} height={16} />
              </button>
              <button className={styles.addButton}>
                <Image src={video} alt='' width={16} height={16} />
              </button>
            </div>
          )}
          <ReactQuill
            className={styles.textArea}
            theme='bubble'
            value={value}
            onChange={setValue}
            placeholder='Tell your story...'
          />
        </div>
        <button className={styles.publish}>Publish</button>
      </div>
    </>
  );
};

export default WritePage;
