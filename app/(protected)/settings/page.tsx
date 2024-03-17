"use client"



import * as z from "zod";

import { useForm } from "react-hook-form";
import { Switch } from "../../components/switch/switch"

import { zodResolver } from "@hookform/resolvers/zod";
import { SettingsSchema } from "@/schemas";

import {
    Form,
    FormControl,
    FormItem,
    FormField,
    FormLabel,
    FormMessage,
    FormDescription
} from "../../components/form/form"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/select/select"

import { Input } from "@/app/components/input/input";

import { useCurrentUser } from "@/hooks/use-current-user"
import Button from "@/app/components/Button/button";
import { Card, CardContent, CardHeader } from "@/app/components/card/card";
import { settings } from "@/actions/settings";
import { useTransition, useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { FormError } from "@/app/components/formError/form-error";
import { FormSuccess } from "@/app/components/formError/formSuccess";
import { UserRole } from "@prisma/client";

const SettingsPage = () => {

    // const options = [
    //     { value: UserRole.ADMIN, label: "Admin" },
    //     { value: UserRole.USER, label: "User" }
    // ];


    // const [checked, setChecked] = useState(false);

    // const handleChange = (checked: boolean) => {
    //     setChecked(checked);
    // }


    const user = useCurrentUser();
    const [error, setError] = useState<string | undefined>();
    const [success, setSuccess] = useState<string | undefined>();

    const { update } = useSession();

    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof SettingsSchema>>({
        resolver: zodResolver(SettingsSchema),
        defaultValues: {
            name: user?.name || undefined,
            email: user?.email || undefined,
            password: undefined,
            newPassword: undefined,
            role: user?.role || undefined,
            isTwoFactorEnabled: user?.isTwoFactorEnabled || undefined,
        },
        shouldUnregister: false, // This prevents unregistered fields from being reset
        shouldFocusError: false, // This prevents focus from moving to the first error field on re-render
    });

    // Initialize form values from local storage
    useEffect(() => {
        const storedValues = localStorage.getItem("formValues");
        if (storedValues) {
            form.reset(JSON.parse(storedValues));
        }
    }, [form, form.reset]);

    // Store form values in local storage whenever they change
    useEffect(() => {
        localStorage.setItem("formValues", JSON.stringify(form.getValues()));
    }, [form]);

    useEffect(() => {
        return () => {
            localStorage.removeItem("formValues");
        };
    }, []);






    const onSubmit = (values: z.infer<typeof SettingsSchema>) => {
        startTransition(() => {
            settings(values)
                .then((data) => {
                    if (data?.error) {
                        setError(data.error)
                    }
                    else if (data?.success) {
                        update();
                        setSuccess(data.success)
                    }
                })
                .catch(() => setError("Something went wrong!")
                )
        })

    }

    return (
        <Card style={{ width: "600px" }}>
            <CardHeader>
                Settings 🚦
            </CardHeader>
            <CardContent>
                <Form {...form} >
                    <form style={{ marginTop: "1.5rem" }} onSubmit={form.handleSubmit(onSubmit)}>
                        <div style={{ marginTop: "1.5rem" }} >


                            <FormField control={form.control} name="name" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}

                                            disabled={isPending}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                            <FormField control={form.control} name="email" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="email"
                                            {...field}
                                            // placeholder="jondo@example.com"
                                            disabled={isPending}

                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                            <FormField control={form.control} name="password" render={({ field }) => (
                                <FormItem>
                                    <FormLabel> Current Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="password"
                                            {...field}
                                            placeholder="******"
                                            disabled={isPending}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                            <FormField control={form.control} name="newPassword" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>New Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="password"
                                            {...field}
                                            placeholder="******"
                                            disabled={isPending}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                            <FormField control={form.control} name="role" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Role</FormLabel>
                                    <Select
                                        disabled={isPending}
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select your role" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value={UserRole.ADMIN}>Admin</SelectItem>
                                            <SelectItem value={UserRole.USER}>User</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )} />

                            <FormField
                                control={form.control}
                                name="isTwoFactorEnabled"
                                render={({ field }) => (
                                    <FormItem style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderRadius: "5px" }}>
                                        <div style={{ marginTop: "0.125rem" }}>
                                            <FormLabel>
                                                Two Factor Authentication
                                            </FormLabel>
                                            <FormDescription>
                                                Enable two factor Authentication for your account
                                            </FormDescription>
                                        </div>
                                        <FormControl>
                                            <Switch
                                                disabled={isPending}
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )} />
                        </div>
                        <FormError message={error} />
                        <FormSuccess message={success} />
                        <Button type="submit" disabled={isPending}>
                            Save
                        </Button>
                    </form>

                </Form>
            </CardContent>
        </Card>
    );
};


export default SettingsPage;