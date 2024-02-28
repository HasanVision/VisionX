
"use client"
import {newPassword} from "@/actions/new-password"
import styles from "./auth.module.css"

import {CardWrapper} from "@/app/components/auth/card-wrapper";
import {useForm } from "react-hook-form";
import  { zodResolver} from "@hookform/resolvers/zod";

import {Input} from "../input/input"
import Button from "../Button/button"

import * as z from "zod";
import {NewPasswordSchema} from "@/schemas";

import {useState, useTransition} from "react";

import {useSearchParams} from "next/navigation";


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

export const NewPasswordForm = () => {

    const searchParams= useSearchParams();
    const token = searchParams.get("token")


    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");

    const [isPending, startTransition] = useTransition();
    const form = useForm<z.infer<typeof NewPasswordSchema>>({
        resolver: zodResolver(NewPasswordSchema),
        defaultValues: {
            password: "",
        }
    });

    const onSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
        setError("");
        setSuccess("");


        startTransition(()=>{
            newPassword(values, token)
                .then ((data) => {
                    setError(data?.error);
                     setSuccess(data?.success);
                })
        });

    }
    return(
        <CardWrapper
        headerLabel="Enter a new Password"
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
                       name="password"
                       render={({field})=>(
                           <FormItem>
                               <FormLabel>New password</FormLabel>
                               <FormControl>
                                   <Input
                                       disabled={isPending}
                                     placeholder="******"
                                       {...field}
                                       type="password"
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
   Update password
</Button>
               </form>
           </Form>
        </CardWrapper>
    )
}