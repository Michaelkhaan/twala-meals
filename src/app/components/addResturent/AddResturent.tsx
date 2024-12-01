import React from "react";
import styles from "./addResturent.module.scss";
import Image from "next/image";

function AddResturent() {
  return (
    <div className={styles?.delivery}>
      <div className={styles?.rightside}>
        <h1 className={styles?.heading}>
          Become a Delivery Partner with TwalaMeals
        </h1>
        <p className={styles?.paragraph}>
          arn on your schedule! Join our delivery team, work flexible hours, and
          help bring meals to your community while enjoying competitive pay.
        </p>
        <button className={styles?.button}>Sign Up to Deliver</button>
      </div>
      <Image
        src="/Rectangle 206.png"
        alt=""
        width={0}
        height={0}
        className={styles?.image}
        unoptimized
      />
    </div>
  );
}

export default AddResturent;
