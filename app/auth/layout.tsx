import styles from "./auth.module.css"
import React from "react";


const AuthLayout = ({
    children
                    }: {children: React.ReactNode}) =>{
    return (
        <div className={styles.AuthLayout}>
            {children}
        </div>
    )

}

export default AuthLayout;