
"use client"
import {login} from "@/actions/login"
import styles from "./auth.module.css"

import {CardWrapper} from "@/app/components/auth/card-wrapper";
import {useForm } from "react-hook-form";
import  { zodResolver} from "@hookform/resolvers/zod";

import {Input} from "../input/input"
import Button from "../Button/button"

import * as z from "zod";
import {LoginSchema} from "@/schemas";

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


export const LoginForm = () => {

    const searchParams = useSearchParams();
    const urlError = searchParams.get("error") === "OAuthAccountNotLinked"
    ? "Email already in use with different provider!"
        : "";

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");

    const [isPending, startTransition] = useTransition();
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    });

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        setError("");
        setSuccess("");


        startTransition(()=>{
            login(values)
                .then ((data) => {
                    setError(data?.error);
                     setSuccess(data?.success);
                })
        });

    }
    return(
        <CardWrapper
        headerLabel="Welcom to VisionX"
        backButtonHref="/auth/register"
        backButtonLabel="Create an account"
        showSocial
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
                       <FormField
                           control={form.control}
                           name="password"
                           render={({field})=>(
                               <FormItem>
                                   <FormLabel>Password</FormLabel>
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
                   <FormError message={error || urlError}/>
                   <FormSuccess message={success}/>
<Button type={"submit"} fullWidth={true}
disabled={isPending}
>
   Login
</Button>
               </form>
           </Form>
        </CardWrapper>
    )
}