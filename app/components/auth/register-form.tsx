
"use client"
import {register} from "@/actions/register"
import styles from "./auth.module.css"

import {CardWrapper} from "@/app/components/auth/card-wrapper";
import {useForm } from "react-hook-form";
import  { zodResolver} from "@hookform/resolvers/zod";

import {Input} from "../input/input"
import Button from "../Button/button"

import * as z from "zod";
import {RegisterSchema} from "@/schemas";

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


export const RegisterForm = () => {

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");

    const [isPending, startTransition] = useTransition();
    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        }
    });

    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        setError("");
        setSuccess("");


        startTransition(()=>{
            register(values)
                .then ((data) => {
                    setError(data.error);
                    setSuccess(data.success);
                })
        });

    }
    return(
        <CardWrapper
        headerLabel="Create an account"
        backButtonHref="/auth/login"
        backButtonLabel="Already have an account? login"
        showSocial
        >
           <Form {...form} >
               <form className={styles.Form}
                   onSubmit={form.handleSubmit(onSubmit)}
               >
                   <div className={styles.formInput}>
                       <FormField
                           control={form.control}
                           name="name"
                           render={({field})=>(
                               <FormItem>
                                   <FormLabel>Name</FormLabel>
                                   <FormControl>
                                       <Input
                                           disabled={isPending}
                                           placeholder="John Doe"
                                           {...field}
                                           // type="name"
                                       />
                                   </FormControl>
                                   <FormMessage/>
                               </FormItem>
                           )}
                       />
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
                   <FormError message={error}/>
                   <FormSuccess message={success}/>
<Button type={"submit"} fullWidth={true}
disabled={isPending}
>
   Register
</Button>
               </form>
           </Form>
        </CardWrapper>
    )
}