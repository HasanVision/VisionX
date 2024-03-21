

"use client"

import Button from "@/app/_components/Button/button"
import Link from "next/link";

interface BackButtonProps {
    label: string;
    href: string;
}
export const BackButton = ({
    href,
    label,
}: BackButtonProps) => {
    return (

        <Button variant="link" fullWidth={true}>


            <Link href={href}  >

                {label}
            </Link>
        </Button>


    )
}