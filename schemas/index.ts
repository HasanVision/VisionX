// to do the validation on the front-end and the back end




import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string()
})