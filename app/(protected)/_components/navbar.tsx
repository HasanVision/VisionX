
"use client"
import styles from "./protectedNavbar.module.css";

import { usePathname } from "next/navigation";
import Button from "../../_components/Button/button"
import Link from "next/link"
import { UserButton } from "@/app/_components/auth/user-button";
export const Navbar = () => {


    const pathname = usePathname();


    return (
        <nav className={styles.Navbar}>

            <div>
                <Button asChild={true} variant={pathname === "/settings" ? "primary" : "secondary"}>
                    <Link href={"/settings"}>
                        Settings
                    </Link>
                </Button>
                <Button asChild={true} variant={pathname === "/server" ? "primary" : "secondary"}>
                    <Link href={"/server"}>
                        Server
                    </Link>
                </Button>
                <Button asChild={true} variant={pathname === "/client" ? "primary" : "secondary"}>
                    <Link href={"/client"}>
                        Client
                    </Link>
                </Button>
                <Button asChild={true} variant={pathname === "/Admin" ? "primary" : "secondary"}>
                    <Link href={"/admin"}>
                        Admin
                    </Link>
                </Button>

            </div>
            <UserButton />
        </nav>
    )
}