"use client"

import React from "react";
import { useRouter } from "next/navigation";
import {logout} from "@/actions/logout";


interface LogoutButtonProps {
    children?: React.ReactNode;
    mode?: "modal" | "redirect",
    asChild?: boolean,
}

export const LogoutButton = ({
    children,
    mode = "redirect",
    asChild
}: LogoutButtonProps) => {
    const onClick = () => {
        logout()
    }

    const router = useRouter();

    if (mode == "modal") {
        return (
            <span>
                ToDo: implement model!
            </span>
        )
    }

    return (
        <span onClick={onClick}>
            {children}
        </span>
    )
}

