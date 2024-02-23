

"use client"

import styles from "./auth.module.css"
import {Header} from "@/app/components/auth/header";
import {Social} from "@/app/components/auth/social";
import React from "react";
import {BackButton} from "@/app/components/auth/back-button";
interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
}
export const CardWrapper= ({
    children,
    headerLabel,
    backButtonHref,
    backButtonLabel,
    showSocial
                           }: CardWrapperProps) =>{
    return (
        <div className={styles.CardWrapper}>
            <Header label={headerLabel}/>
            <div>
                {children}
            </div>
            {showSocial && (
               < Social/>
            )}
            <div>
                <BackButton label={backButtonLabel} href={backButtonHref}/>
            </div>

        </div>
    )
}