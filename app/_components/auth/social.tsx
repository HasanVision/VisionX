"use client"
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import Button from "@/app/_components/Button/button"

import styles from "./auth.module.css"
export const Social = () => {
    return (

        <div className={styles.Social}>
            <Button fullWidth={true} variant={"outline"}>
                <FcGoogle />
            </Button>
            <Button fullWidth={true} variant={"outline"}>
                <FaGithub />
            </Button>
        </div>
    )
}