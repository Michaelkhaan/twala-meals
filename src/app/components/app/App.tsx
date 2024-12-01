import Image from "next/image";
import React from "react";
import styles from "./app.module.scss";

const App = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Get the TwalaMeals App!</h1>
      <p className={styles.description}>
        Enjoy exclusive deals, fast delivery, and many discounts at your
        fingertips. Download now to experience premium service with TwalaMeals!
      </p>
      <div className={styles.storeButtons}>
        <Image
          src="/appstore.png"
          alt="Download on the App Store"
          width={150}
          height={50}
          className={styles.storeButton}
        />
        <Image
          src="/playstore.png"
          alt="Get it on Google Play"
          width={150}
          height={50}
          className={styles.storeButton}
        />
      </div>
    </div>
  );
};

export default App;
