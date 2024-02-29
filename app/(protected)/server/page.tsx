
import { currentUser } from "@/lib/user-session";


const ServerPage = async () => {

    const user = await currentUser();
    return (
        <div>
            {JSON.stringify(user)}
        </div>
    )
}


export default ServerPage;