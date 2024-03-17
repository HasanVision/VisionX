"use client"



import { UserInfo } from "@/app/components/user-info/user-info";
import { UseCurrentUser } from "@/hooks/use-current-user";


const ClientPage = () => {

    const user = UseCurrentUser();
    return (
        <UserInfo label=" 📱 Client component" user={user} />
    )
}


export default ClientPage; 