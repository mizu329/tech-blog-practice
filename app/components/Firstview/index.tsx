"use client";

import Lottie from "lottie-react";
import shapes from "@/public/animations/shapes.json";
import styles from "./Firstview.module.css";
import { use } from "react";

export function Firstview() {
  const name = "Design Code";

  return (
    <>
      <section className={`${styles.fv} ${styles.inner}`}>
        <h1 className={styles.title}>{name}</h1>
        <Lottie
          className={styles.fvAnimation}
          animationData={shapes}
          loop={true}
        />
      </section>
    </>
  );
}
