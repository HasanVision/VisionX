import Button from "./components/Button/button";
import styles from "./page.module.css";

import { LoginButton } from "@/app/components/auth/loging-button";

export default function Home() {

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>
          🔐Vision X why git not working
        </h1>
      </div>
      {/* <div className={styles.center}>

      </div> */}


      <LoginButton asChild>
        <Button>
          Sign in here
        </Button>

      </LoginButton>


    </main>
  );
}
