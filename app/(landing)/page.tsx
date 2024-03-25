import Image from "next/image";
import styles from "./landing.module.css";


export default function Home() {

  return (
    <div className={styles.landingPage} >

      <div className={styles.landingPage}>
        <div className={styles.landingPageIntroduction}>
          <p>
            Welcome to Oxygen platform where ideas are shared!
          </p>

        </div>
        <div className={styles.slider}>
          <h1>
            Oxygen help medical professionals connect, share, and collaborate
          </h1>
        </div>

        <Image
          src="/images/2x/Asset.png" alt={""} width="500" height="350" priority />
      </div>
    </div>

  );
}
