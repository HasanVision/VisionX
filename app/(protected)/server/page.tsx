
import { UserInfo } from "@/app/components/user-info/user-info";
import { currentUser } from "@/lib/user-session";


const ServerPage = async () => {

    const user = await currentUser();
    return (
        <UserInfo label=" 🖥️ Server component" user={user} />
    )
}


export default ServerPage;