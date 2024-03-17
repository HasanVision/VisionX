import { ExtendedUser } from "@/next-auth";
import { Card, CardContent, CardHeader } from "../card/card";

import styles from "./userInfor.module.css"

import { Badge } from "../badge/badge";

import Button from "../Button/button"

interface userInfoProps {
    user?: ExtendedUser;
    label: string;

}

export const UserInfo = ({ user, label }: userInfoProps) => {
    return (
        <Card >
            <CardHeader className={styles.userInfoCardHeader} >
                <p>
                    {label}
                </p>
            </CardHeader>
            <CardContent className={styles.userInfoContent}>
                <div >
                    <p >
                        ID
                    </p>
                    <p>
                        {user?.id}
                    </p>
                </div>
                <div >
                    <p >
                        Name
                    </p>
                    <p>
                        {user?.name}
                    </p>
                </div>
                <div >
                    <p >
                        Email
                    </p>
                    <p>
                        {user?.email}
                    </p>
                </div>
                <div >
                    <p >
                        User role
                    </p>
                    <p>
                        {user?.role}
                    </p>
                </div>
                <div >
                    <p >
                        Two factor authentication
                    </p>
                    <Button size="large">
                        <Badge variant={user?.isTwoFactorEnabled ? "success" : "destructive"}>
                            {user?.isTwoFactorEnabled ? "ON" : "OFF"}
                        </Badge>
                    </Button>

                </div>

            </CardContent>
        </Card>
    )
}