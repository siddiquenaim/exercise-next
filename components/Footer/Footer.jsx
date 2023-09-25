import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>All Right Reserved by Naim Siddique.</div>
      <div className={styles.social}>
        <Image
          src="/1.png"
          width={20}
          height={20}
          className={styles.icon}
          alt="Naim Facebook"
        />
        <Image
          src="/2.png"
          width={20}
          height={20}
          className={styles.icon}
          alt="Naim Instagram"
        />
        <Image
          src="/3.png"
          width={20}
          height={20}
          className={styles.icon}
          alt="Naim Twitter"
        />
        <Image
          src="/4.png"
          width={20}
          height={20}
          className={styles.icon}
          alt="Naim Youtube"
        />
      </div>
    </div>
  );
};

export default Footer;
