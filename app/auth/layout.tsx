import { Footer } from "../(landing)/_components/footer/footer";
import { Header } from "../(landing)/_components/header/header";
import styles from "./auth.module.css"
import React from "react";


const AuthLayout = ({
    children
}: { children: React.ReactNode }) => {
    return (
        <div className={styles.AuthLayout}>

            <Header />
            <main className={styles.Content}>
                {children}
            </main>
            <Footer />






        </div>
    )

}

export default AuthLayout;

// FIXME: children going behind the header