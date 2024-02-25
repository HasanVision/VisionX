

"use client"

import styles from "./auth.module.css"
import {Header} from "@/app/components/auth/header";
import {Social} from "@/app/components/auth/social";
import React from "react";
import {BackButton} from "@/app/components/auth/back-button";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader
} from "../card/card"
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
        <div className={styles.authCard}>


        <Card className={styles.CardWrapper}>
            <CardHeader>
                <Header label={headerLabel}/>
            </CardHeader>

            <CardContent>
                {children}
            </CardContent>
            {showSocial && (
                <CardFooter>
                    < Social/>
                </CardFooter>

            )}
            <CardFooter>
                <BackButton label={backButtonLabel} href={backButtonHref}/>
            </CardFooter>

        </Card>
        </div>
    )
}