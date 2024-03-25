"use client"

import Button from "../../../_components/Button/button"
import { LoginButton } from "../../../_components/auth/login-button"
import { cn } from "@/lib/utils"

import styles from "./header.module.css"

import { useScrollTop } from "@/hooks/use-scroll-top"
import { Logo } from "../logo/logo"

export const Header = () => {

    const scrolled = useScrollTop();
    // console.log(scrolled)

    return (
        <div className={cn(styles.header, { [styles.headerScrolled]: scrolled })}>
            <div className={styles.headerElements}>
                <div>
                    <Logo />
                </div>
                <div className={styles.headerButtons}>


                    <LoginButton>
                        <Button variant="secondary">
                            Log in
                        </Button>
                    </LoginButton>

                    <a href="/register">
                        <Button variant="primary">
                            Join the community
                        </Button>
                    </a>

                </div>
            </div>
        </div>
    )
}

// TODO: Edit Logo