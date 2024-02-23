"use client"
import {FcGoogle} from "react-icons/fc"
import {FaGithub} from "react-icons/fa"
import Button from "../Buttun/button"

import styles from "./auth.module.css"
export const Social = () => {
    return(

            <div className={styles.Social}>
                <Button size={"medium"} fullWidth={true} variant={"outline"}>
                    <FcGoogle/>
                </Button>
                <Button size={"medium"} fullWidth={true} variant={"outline"}>
                    <FaGithub/>
                </Button>
            </div>
    )
}