

import {Resend} from "resend";



const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (
    email: string,
    token: string,

)=> {
    const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Confirm your email",
        html: `<p>Click <a href="${confirmLink}"> here </a> to confirm your email!</p>`,
    })
}


export const sendResetPasswordEmail = async (
    email: string,
    token: string,

)=> {
    const resetPasswordLink = `http://localhost:3000/auth/new-password?token=${token}`;

    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Reset Password",
        html: `<p>Click <a href="${resetPasswordLink}"> here </a> to confirm and reset the password of your email!</p>`,
    })
}

export const sendTwoFactorEmail = async (
    email: string,
    token: string,

)=> {

    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Two factor confirmation",
        html: `<p>Your Two Factor Confirmaion code is : ${token}</p>`,
    })
}

