"use client"

import Button from "../../../_components/Button/button"
import { cn } from "@/lib/utils"

import styles from "./footer.module.css"

import { useScrollTop } from "@/hooks/use-scroll-top"
import { Logo } from "../logo/logo"

export const Footer = () => {

    const scrolled = useScrollTop();

    return (
        <div className={cn(styles.footer, { [styles.footerScrolled]: scrolled })}>

            <div className={styles.footerElements}>
                <Logo />
                <div className={styles.footerButtons}>
                    <a href="/">
                        <Button variant="ghost">
                            Privacy Policy
                        </Button>
                    </a>
                    <a href="/">
                        <Button variant="ghost">
                            Terms & Conditions
                        </Button>
                    </a>
                    <a href="/register">
                        <Button variant="ghost">
                            Join the community
                        </Button>
                    </a>
                </div>
            </div>


        </div>
    )
}

// TODO: Add Logo
// TODO: Create privacy policy
// TODO: Terms & Conditions