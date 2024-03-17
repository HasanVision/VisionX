"use client"


import * as z from "zod";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { SettingsSchema } from "@/schemas";

import {
    Form,
    FormControl,
    FormItem,
    FormField,
    FormLabel,
    FormMessage
} from "../../components/form/form"

import { Input } from "@/app/components/input/input";

import { useCurrentUser } from "@/hooks/use-current-user"
import Button from "@/app/components/Button/button";
import { Card, CardContent, CardHeader } from "@/app/components/card/card";
import { settings } from "@/actions/settings";
import { useTransition, useState } from "react";
import { useSession } from "next-auth/react";
import { FormError } from "@/app/components/formError/form-error";
import { FormSuccess } from "@/app/components/formError/formSuccess";

const SettingsPage = () => {
    const user = useCurrentUser();
    const [error, setError] = useState<string | undefined>();
    const [success, setSuccess] = useState<string | undefined>();

    const { update } = useSession();

    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof SettingsSchema>>({
        resolver: zodResolver(SettingsSchema),
        defaultValues: {
            name: user?.name || undefined,
        }
    })


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
        <Card>
            <CardHeader>
                Settings 🚦
            </CardHeader>
            <CardContent>
                <Form {...form} >
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div>


                            <FormField control={form.control} name="name" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}

                                            disabled={isPending}
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
    )
}

export default SettingsPage;