import type { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const options: NextAuthOptions = {
  callbacks: {
    jwt: async ({ token }) => {
      return token
    },
    session: async ({ session, token }) => {
      return {
        ...session,
        user: {
          ...token,
        },
      }
    },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET!,
  session: { strategy: "jwt" },
}
