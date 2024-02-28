
"use client"
import styles from "./protectedNavbar.module.css";

import {usePathname} from "next/navigation";
import Button from "../../components/Button/button"
import Link from "next/link"
import UserButton from "@/app/components/auth/user-button";
export const Navbar = () => {


    const pathname = usePathname();


    return (
        <nav className={styles.Navbar}>

            <div>
                <Button asChild={true} variant={pathname === "/settings" ? "primary" : "outline" }>
                    <Link href={"/setting"}>
                        Settings
                    </Link>
                </Button>
                <Button asChild={true} variant={pathname === "/server" ? "primary" : "outline" }>
                    <Link href={"/server"}>
                        Server
                    </Link>
                </Button>
                <Button asChild={true} variant={pathname === "/client" ? "primary" : "outline" }>
                    <Link href={"/client"}>
                        Client
                    </Link>
                </Button>
                <Button asChild={true} variant={pathname === "/Admin" ? "primary" : "outline" }>
                    <Link href={"/Admin"}>
                        Admin
                    </Link>
                </Button>
            </div>
            <UserButton/>
        </nav>
    )
}