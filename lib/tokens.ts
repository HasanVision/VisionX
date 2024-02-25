import * as crypto from "crypto";
import {getVerificationTokenByEmail} from "@/data/verification-token";

import {db} from "@/lib/db"

export const generateVerificationToken = async (email: string) => {
  const token = crypto.randomUUID();
  const expires = new Date(new Date().getTime() + 3600 * 1000);
  const existingToken = await getVerificationTokenByEmail(email);


  if (existingToken) {
    await db.verificationToken.delete({
      where: {
        id: existingToken.id,
      },
    })
  }
  return db.verificationToken.create({
    data: {
      email,
      token,
      expires
    }
  });
}