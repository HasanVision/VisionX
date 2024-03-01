"use client"

import { logout } from "@/actions/logout";

import { UseCurrentUser } from "@/hooks/use-current-user"
import Button from "@/app/components/Button/button";
const SettingsPage = () => {
    const user = UseCurrentUser();

    const onClick = () => {
        logout();
    }

    return (
        <div>
            {JSON.stringify(user)}
        </div>
    )
}

export default SettingsPage;