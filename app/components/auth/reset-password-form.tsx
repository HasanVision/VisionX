
"use client"
import {resetPassword} from "@/actions/reset-password"
import styles from "./auth.module.css"

import {CardWrapper} from "@/app/components/auth/card-wrapper";
import {useForm } from "react-hook-form";
import  { zodResolver} from "@hookform/resolvers/zod";

import {Input} from "../input/input"
import Button from "../Button/button"

import * as z from "zod";
import {ResetPasswordSchema} from "@/schemas";

import {useState, useTransition} from "react";


import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
    FormLabel
} from "../form/form"
import {FormError} from "@/app/components/formError/form-error";
import {FormSuccess} from "@/app/components/formError/formSuccess";

export const ResetPasswordForm = () => {



    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");

    const [isPending, startTransition] = useTransition();
    const form = useForm<z.infer<typeof ResetPasswordSchema>>({
        resolver: zodResolver(ResetPasswordSchema),
        defaultValues: {
            email: "",
        }
    });

    const onSubmit = (values: z.infer<typeof ResetPasswordSchema>) => {
        setError("");
        setSuccess("");


        startTransition(()=>{
            resetPassword(values)
                .then ((data) => {
                    setError(data?.error);
                     setSuccess(data?.success);
                })
        });

    }
    return(
        <CardWrapper
        headerLabel="Reset your password"
        backButtonHref="/auth/login"
        backButtonLabel="Back to login"
        >
           <Form {...form} >
               <form className={styles.Form}
                   onSubmit={form.handleSubmit(onSubmit)}
               >
                   <div className={styles.formInput}>
                       <FormField
                       control={form.control}
                       name="email"
                       render={({field})=>(
                           <FormItem>
                               <FormLabel>Email</FormLabel>
                               <FormControl>
                                   <Input
                                       disabled={isPending}
                                     placeholder="John.doe@example.com"
                                       {...field}
                                       type="email"
                                   />
                               </FormControl>
                               <FormMessage/>
                           </FormItem>
                       )}
                       />
                   </div>
                   <FormError message={error}/>
                   <FormSuccess message={success}/>
<Button type={"submit"} fullWidth={true}
disabled={isPending}
>
   Send reset email
</Button>
               </form>
           </Form>
        </CardWrapper>
    )
}