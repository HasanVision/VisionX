

import {SessionProvider} from "next-auth/react";
import {auth} from "@/auth";
import React from "react";
import styles from "./protected.module.css"
import {Navbar} from "@/app/(protected)/_components/navbar";


interface SettingsLayoutProps {
    children: React.ReactNode;
}

const SettingsLayout = async ({children}: SettingsLayoutProps) =>{

    const session = await auth();
    return (

        <SessionProvider >
            <div className={styles.SettingsLayout} >
                    <Navbar/>
                    {children}


            </div>
        </SessionProvider>
    )
}

export default SettingsLayout;

