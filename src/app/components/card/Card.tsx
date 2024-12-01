import React from "react";
import styles from "./card.module.scss";
import Image from "next/image";

interface Props {
  src: string;
  heading: string;
  para: string;
  button: string;
}

function Card({ src, heading, para, button }: Props) {
  return (
    <div className={styles?.card}>
      <Image
        src={src}
        alt=""
        width={0}
        height={0}
        className={styles?.image}
        unoptimized
      />
      <h1 className={styles?.heading}>{heading}</h1>
      <p className={styles?.paragraph}>{para}</p>
      <button className={styles?.button}>{button}</button>
    </div>
  );
}

export default Card;
