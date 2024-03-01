"use client";
import styles from "./writePage.module.css";
import Image from "next/image";

import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/lib/firebase";

const page = () => {
  const { status } = useSession();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");

  useEffect(() => {
    const storage = getStorage(app);
    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  if (status === "loading") {
    return <div className={styles.Loading}>Loading...</div>;
  }
  if (status === "unauthenticated") {
    router.push("/");
  }


  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug:slugify(title),
        catSlug:catSlug || "technology"
      }),
    });
    
    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
  }
    return (
      <>
        <div className={styles.container}>
          <input
            type='text'
            placeholder='Title'
            onChange={(e) => setTitle(e.target.value)}
            className={styles.input}
          />
      <select className={styles.select} onChange={(e) => setCatSlug(e.target.value)}>
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>
          <div className={styles.editor}>
            <button className={styles.button} onClick={() => setOpen(!open)}>
              <Image src={plus} alt='' width={16} height={16} />
            </button>
            {open && (
              <div className={styles.add}>
                <input
                  type='file'
                  id='image'
                  alt='file'
                  onChange={(e) => setFile(e.target.value)}
                  style={{ display: "none" }}
                />
                <button className={styles.addButton}>
                  <label htmlFor='image'>
                    <Image src={image} alt='' width={16} height={16} />
                  </label>
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
          <button onClick={handleSubmit} className={styles.publish}>
            Publish
          </button>
        </div>
      </>
    );
  };

export default page;
