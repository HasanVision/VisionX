import styles from "./page.module.css";

import { LoginButton } from "@/app/components/auth/loging-button";

export default function Home() {

  return (
    <main className={styles.main}>
        <h1>
            🔐Vision X
        </h1>
        <LoginButton>

           Sign in

        </LoginButton>
    </main>
  );
}
