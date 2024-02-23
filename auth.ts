
import {PrismaAdapter} from "@auth/prisma-adapter";
import {db} from "@/lib/db"
import NextAuth from "next-auth"

import authConfig from "@/auth.config";
export const {
    handlers: { GET, POST },
    auth,
} = NextAuth({
    adapter: PrismaAdapter(db),
    session: {strategy: "jwt"},
...authConfig
})