
import {auth} from "@/auth"
const SettingsPage = async () =>{
    const session = await auth()
console.log(session);
    return(
        <div>
            {JSON.stringify(session)}
        </div>
    )
}

export default SettingsPage;