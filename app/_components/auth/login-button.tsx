"use client"

import React from "react";
import { useRouter } from "next/navigation";

import { Dialog, DialogContent, DialogTrigger } from "../dialog/dialog"
import { LoginForm } from "./login-form";


interface LoginButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect",
    asChild?: boolean,
}

export const LoginButton = ({
    children,
    mode = "redirect",
    asChild
}: LoginButtonProps) => {

    const router = useRouter();

    const onClick = () => {
        router.push("/auth/login");
    }

    if (mode == "modal") {
        return (
            <Dialog>
                <DialogTrigger asChild={asChild}>
                    {children}
                </DialogTrigger>
                <DialogContent style={{ padding: "0", width: "auto", backgroundColor: "transparent" }}>
                    <LoginForm />
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <span onClick={onClick}>
            {children}
        </span>
    )
}

