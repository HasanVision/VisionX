"use client"
import styles from "./auth.module.css"

import { BeatLoader } from "react-spinners";
import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { newVerification } from "@/actions/new-verification";

import { FormError } from "@/app/_components/formError/form-error";
import { FormSuccess } from "@/app/_components/formError/formSuccess";
import { CardWrapper } from "@/app/_components/auth/card-wrapper";

export const NewVerificationForm = () => {

    const [error, setError] = useState<string | undefined>()
    const [success, setSuccess] = useState<string | undefined>()


    const searchParams = useSearchParams();
    const token = searchParams.get("token");

    const onSubmit = useCallback(() => {

        if (success || error) return;

        if (!token) {
            setError("Missing token!");
            return;
        }

        newVerification(token)
            .then((data) => {
                setSuccess(data.error);
                setSuccess(data.success);
            })
            .catch(() => {
                setError("Something went wrong!")
            })
    }, [token, error, success]);

    useEffect(() => {
        onSubmit();
    }, [onSubmit]);



    return (
        <CardWrapper headerLabel={"Confirming you verification"} backButtonLabel={"back to login"} backButtonHref={"/auth/login"}>
            <div className={styles.NewVerification}>
                {!success && !error && (
                    <BeatLoader />
                )}
                {!success && (
                    <FormError message={error} />
                )}
                <FormSuccess message={success} />
            </div>
        </CardWrapper>

    )
}


// Todo: should check the styling