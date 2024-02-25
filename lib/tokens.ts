import * as crypto from "crypto";
import {getVerificationTokenByEmail} from "@/data/verification-token";

import {db} from "@/lib/db"
import {getResetPasswordTokenByEmail} from "@/data/reset-password-token";
import {getTwoFactorTokenByEmail} from "@/data/two-factor-token"

export const generateTwoFactorToken = async (email: string) => {
  const token = crypto.randomInt(100_000, 1000_000).toString();
  const expires = new Date(new Date().getTime() + 3600 * 1000)

  //Todo: change to 15 min.

  const existingToken = await getTwoFactorTokenByEmail(email);

  if (existingToken) {
    await db.twoFactorToken.delete({
      where:{id: existingToken.id}
    })
  }
  return db.twoFactorToken.create({
    data: {
      email,
      expires,
      token
    }

  });



}


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


export const generateResetPasswordToken = async (email: string) => {
  const token = crypto.randomUUID();
  const expires = new Date(new Date().getTime() + 3600 * 1000);
  const existingToken = await getResetPasswordTokenByEmail(email);


  if (existingToken) {
    await db.resetPasswordToken.delete({
      where: {
        id: existingToken.id,
      },
    })
  }
  return db.resetPasswordToken.create({
    data: {
      email,
      token,
      expires
    }
  });
}