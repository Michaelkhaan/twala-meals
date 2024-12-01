import Image from "next/image";
import React from "react";
import styles from "./navbar.module.scss"; // Ensure SCSS file is properly imported

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles?.logo}>
        <Image
          src="/Rectangle 208.png"
          alt="Logo"
          width={0}
          height={0}
          className={styles?.image}
          unoptimized
        />
        <Image
          src="/Rectangle 209.png"
          alt="Logo Text"
          width={0}
          height={0}
          className={styles?.text}
          unoptimized
        />
      </div>
      <div className={styles?.buttons}>
        <button className={styles?.login}>Login</button>
        <button className={styles?.getstarted}>Get Started</button>
      </div>
    </div>
  );
}

export default Navbar;
