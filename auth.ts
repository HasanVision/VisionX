
import {PrismaAdapter} from "@auth/prisma-adapter";
import {db} from "@/lib/db"
import NextAuth from "next-auth"
import {getUserById} from "@/data/user";

import authConfig from "@/auth.config";

import {UserRole} from "@prisma/client"



export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    pages: {
        signIn: "/auth/login",
        error: "/auth/error",
    },
    // events: {
    //     async linkAccount({ user }) {
    //         await db.user.update({
    //             where: { id: user.id },
    //             data: { emailVerified: new Date() }
    //         })
    //     }
    // },
    callbacks:{
        async signIn({user, account}): Promise<boolean> {
            if (account?.provider !== "credentials") return true;

            const existingUser = await getUserById(user.id?? ''); // ToDo: check if this is valid argument!

            return !!existingUser && !!existingUser.emailVerified;


        },
        async session({token,session }){

            if (token.sub && session.user) {
                session.user.id = token.sub;
            }
            if (token.role && session.user) {
                session.user.role=token.role as UserRole; // Not very clean solution

            }
            return session;
        },
        async jwt({token }) {
            if (!token.sub) return token;

            const existingUser = await getUserById(token.sub);

            if (!existingUser) return token;

            token.role = existingUser.role;



            return token;
        }
    },
    adapter: PrismaAdapter(db),
    session: {strategy: "jwt"},
...authConfig
})