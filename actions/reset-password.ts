"use server"

import {sendResetPasswordEmail} from "@/lib/mail";
import * as z from "zod"

import {generateResetPasswordToken} from "@/lib/tokens";

import {ResetPasswordSchema} from "@/schemas";
import {getUserByEmail} from "@/data/user";


export const resetPassword = async (values: z.infer<typeof ResetPasswordSchema>)=> {
    const validatedFields = ResetPasswordSchema.safeParse(values);

    if (!validatedFields.success) {
        return {error: "Invalid email!"}
    }

    const { email } = validatedFields.data;

    const existingUser = await getUserByEmail(email);

    if (!existingUser) {
        return { error: "Email not exist!"}
    }

    const resetPasswordToken = await generateResetPasswordToken(email);

    await sendResetPasswordEmail(
        resetPasswordToken.email,
        resetPasswordToken.token,
    );

    return {success: "Reset email sent!"}

}