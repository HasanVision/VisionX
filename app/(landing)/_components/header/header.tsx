"use client"

import Button from "../../../_components/Button/button"
import { LoginButton } from "../../../_components/auth/loging-button"
import { cn } from "@/lib/utils"

import styles from "./header.module.css"

import { useScrollTop } from "@/hooks/use-scroll-top"

export const Header = () => {

    const scrolled = useScrollTop();

    return (
        <div className={cn(styles.header, { [styles.headerScrolled]: scrolled })}>
            <div>
                Logo
            </div>
            <div>
                <LoginButton>
                    <Button>
                        Log in
                    </Button>
                </LoginButton>
            </div>
        </div>
    )
}