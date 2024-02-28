import {db} from "@/lib/db"


export const getResetPasswordTokenByToken = async (token:string) => {
    try {
        return await db.resetPasswordToken.findUnique({
            where: {token}
        });
    } catch {
        return null;
    }
}

export const getResetPasswordTokenByEmail = async (email:string) => {
    try {
        return await db.resetPasswordToken.findFirst({
            where: {email}
        });
    } catch {
        return null;
    }
}