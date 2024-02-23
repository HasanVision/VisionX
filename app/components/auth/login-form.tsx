
"use client"

import styles from "./auth.module.css"

import {CardWrapper} from "@/app/components/auth/card-wrapper";
import {useForm } from "react-hook-form";
import  { zodResolver} from "@hookform/resolvers/zod";

import Input from "../input/input"

import * as z from "zod";
import {LoginSchema} from "@/schemas";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
    FormLabel
} from "../form/form"


export const LoginForm = () => {
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })
    return(
        <CardWrapper
        headerLabel="Welcom to VisionX"
        backButtonHref="/auth/register"
        backButtonLabel="Create an account"
        showSocial
        >
           <Form {...form} >
               <form className={styles.Form}
                   onSubmit={form.handleSubmit(() => {})}>
                   <div className={styles.formInput}>
                       <FormField
                       control={form.control}
                       name="email"
                       render={({field})=>(
                           <FormItem>
                               <FormLabel>Email</FormLabel>
                               <FormControl>
                                   <Input
                                       id="emailAddress"
                                       {...field}
                                       type="email"
                                   />


                               </FormControl>
                           </FormItem>
                       )}
                       />
                   </div>
               </form>

           </Form>
        </CardWrapper>
    )
}