import Image from "next/image";
import styles from "./landing.module.css";


export default function Home() {

  return (
    <div className={styles.landingPage} >

      <div className={styles.landingPage}>
        <div className={styles.landingPageIntroduction}>
          Welcome to Oxygen plateform where ideas are shared!
        </div>
        <Image
          src="/images/office-photoshop.png" alt={""} width="500" height="350" />
      </div>
    </div>
  );
}
