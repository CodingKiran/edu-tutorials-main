/* eslint-disable @typescript-eslint/no-explicit-any */

import GoogleProvider from "next-auth/providers/google";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/userModel";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async signIn({ user, account }: { user: any; account: any }) {
      if (account.provider === "google") {
        try {
          const { name, email } = user;
          await connectDB();

          const ifUserExists = await User.findOne({ email });

          if (ifUserExists) {
            return true;
          }
          const newUser = new User({
            name: name,
            email: email,
          });

          const res = await newUser.save();
          if (res.status === 200 || res.status === 201) {
            console.log(res);
            return user;
          }
        } catch (error) {
          console.log(error);
        }
        return user;
      }
    },
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },

    async session({ session, token }: { session: any; token: any }) {
      if (session.user) {
        session.user.email = token.email;
        session.user.name = token.name;
      }
      console.log(session);
      return session;
    },

    // async redirect({ baseUrl }) {
    //   return baseUrl + "/";
    // },
  },
  secret: process.env.AUTH_SECRET!,
};
