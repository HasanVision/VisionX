"use client"


import { User } from "@prisma/client";

import { BiUserCircle } from "react-icons/bi";

import Image from "next/image";

import styles from "./avatar.module.css";

import { UseCurrentUser } from "@/hooks/use-current-user";

interface AvatarProps {
    user?: User;
}

const Avatar: React.FC<AvatarProps> = ({ user }) => {



    return (
        <div className={styles.avatarMain}>
            <div className={styles.avatarSec}>
                {user?.image ? (
                    <Image
                        src={user.image}
                        alt="Avatar"
                        width={40}
                        height={40}
                    />
                ) : (
                    <BiUserCircle size={50} />
                )}
            </div>
            <span
                className={styles.avatarSpan}
            />
        </div>
    );
}

export default Avatar;