

"use client"

import Button from "../Buttun/button"
import Link from "next/link";

interface BackButtonProps {
    label: string;
    href: string;
}
export const BackButton = ({
    href,
    label,
                           } : BackButtonProps) => {
    return (

        <div>
            Or:
            <div/>
            <Link href={href}  >

                {label}
            </Link>
        </div>


    )
}