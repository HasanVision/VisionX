
"use client"

import { LogoutButton } from "./logout-button";

import { RxExit } from "react-icons/rx";

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuItem,
    DropdownMenuContent
} from "../dropdown/dropdown"


import Avatar from "../avatar/avatar";
import Button from "../Button/button";

export const UserButton = () => {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar />
            </DropdownMenuTrigger>
            <DropdownMenuContent style={{ "width": '15rem' }}>
                <DropdownMenuItem>
                    <Button fullWidth={true} variant={"outline"}>
                        <RxExit style={{ "height": '20px', "marginRight": '10px', "color": 'red' }} />
                        <LogoutButton>
                            Logout
                        </LogoutButton>
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
};


