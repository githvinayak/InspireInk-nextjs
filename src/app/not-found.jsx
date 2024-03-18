import React from "react";
import styles from "./notFound.module.css"

const NotFound = () => {
  return (
    <>
     <div className={styles.wrapper}>
      <div className={styles.top}>
        <h1 className={styles.h1}>404</h1>
        <h3 className={styles.h3}>page not found</h3>
      </div>
      <div className={styles.container}>
        <div className={styles.ghostCopy}>
          <div className={styles.one}></div>
          <div className={styles.two}></div>
          <div className={styles.three}></div>
          <div className={styles.four}></div>
        </div>
        <div className={styles.ghost}>
          <div className={styles.face}>
            <div className={styles.eye}></div>
            <div className={styles.eyeRight}></div>
            <div className={styles.mouth}></div>
          </div>
        </div>
        <div className={styles.shadow}></div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.buttons}>
            <button className={styles.btn}>Back</button>
            <button className={styles.btn}>Home</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
