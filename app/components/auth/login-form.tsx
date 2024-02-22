



import {CardWrapper} from "@/app/components/auth/card-wrapper";


export const LoginForm = () => {
    return(
        <CardWrapper
        headerLabel="Welcom to VisionX"
        backButtonHref="/auth/register"
        backButtonLabel="Create an account"
        showSocial
        >
            Login form!
        </CardWrapper>
    )
}