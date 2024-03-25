import Image from "next/image"
import styles from "./logo.module.css"
import Link from "next/link"


export const Logo = () => {
    return (
        <Link href="/">

            <div className={styles.logo} >
                <Image
                    width="40"
                    height="40"
                    src={"/images/SVG/logo.svg"}
                    alt={"logo"} />

                <p>
                    Oxygen
                </p>


            </div>
        </Link>


    )
}