"use client"

import { admin } from "@/actions/admin";
import Button from "@/app/_components/Button/button";
import { RoleGate } from "@/app/_components/auth/role-gate";
import { Card, CardContent, CardHeader } from "@/app/_components/card/card";
import { FormSuccess } from "@/app/_components/formError/formSuccess";

import { UserRole } from "@prisma/client";
import { toast } from "sonner";



const AdminPage = () => {

    const onServerActionClick = () => {
        admin()
            .then((data) => {
                if (data.error) {
                    toast.error(data.error)
                }
                if (data.success) {
                    toast.success(data.success)
                }
            })
    }

    const onApiRouteClick = () => {
        fetch("/api/admin")
            .then((response) => {
                if (response.ok) {
                    toast.success("Allowed API route!")
                }
                else {
                    toast.error("Forbidden API route!")
                }
            })
    }


    return (
        <Card >
            <CardHeader>
                Admin 👩‍💼
            </CardHeader>
            <CardContent>
                <RoleGate allowedRole={UserRole.ADMIN}>
                    <FormSuccess message="this is Admin content" />
                </RoleGate>
                <div>
                    <p>
                        Admin-only API route
                    </p>
                    <Button onClick={onApiRouteClick}>
                        click to test
                    </Button>
                </div>
                <div>
                    <p>
                        Admin-only server action
                    </p>
                    <Button onClick={onServerActionClick}>
                        click to test
                    </Button>
                </div>

            </CardContent>


        </Card>
    )
}


export default AdminPage; 