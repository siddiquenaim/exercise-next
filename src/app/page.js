import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";

export default function Home() {
  return (
    <div>
      <div className={styles.texts}>
        <h1>Better Design For Your Digital Product</h1>
        <p>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
      </div>
      <div className={styles.imgContainer}>
        <Image src={Hero} alt="Hero Image" className={styles.img} />
      </div>
    </div>
  );
}
