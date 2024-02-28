

import {SessionProvider} from "next-auth/react";
import {auth} from "@/auth";
import React from "react";


interface SettingsLayoutProps {
    children: React.ReactNode;
}

const SettingsLayout = async ({children}: SettingsLayoutProps) =>{

    const session = await auth();
    return (
        <SessionProvider >
            {children}
        </SessionProvider>
    )
}

export default SettingsLayout;

 // export default async function SettingsLayout  ({
 //     children,
 //                                          }: {
 //     children: React.ReactNode
 // }) {
 //     const session = await auth();
 //     return (
 //         <SessionProvider session={session}>
 //             {children}
 //         </SessionProvider>
 //
 //     )
 // }
