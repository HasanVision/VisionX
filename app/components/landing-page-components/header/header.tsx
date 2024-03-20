"use client"

import Button from "../../Button/button"
import { LoginButton } from "../../auth/loging-button"

import styles from "./header.module.css"



export const Header = () => {
    return (
        <div className={styles.header}>

            <LoginButton>
                <Button>
                    Log in
                </Button>
            </LoginButton>
        </div>
    )
}