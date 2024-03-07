import styles from "./auth.module.css"
import React from "react";


const AuthLayout = ({
    children
}: { children: React.ReactNode }) => {
    return (
        <div className={styles.AuthLayout}>
            {/* <div className={styles.center} /> */}
            <div className={styles.position}>
                {children}
            </div>
        </div>
    )

}

export default AuthLayout;