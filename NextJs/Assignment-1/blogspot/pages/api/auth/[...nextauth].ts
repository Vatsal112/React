import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

const AUTH_RESTPOINT = process.env.NEXT_PUBLIC_AUTH_RESTPOINT;

export default NextAuth({
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        Email: { label: 'Email', type: 'text', placeholder: 'enter your email' },
        Password: { label: 'Password', type: 'password', placeholder: 'enter your password' }
      },
      async authorize(cred, req) {

        let res = await fetch(`${AUTH_RESTPOINT}/users/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            login: cred?.Email,
            password: cred?.Password,
            // expiresInMins: 60, // optional
          })
        })

        const user = await res.json();
        if (!user || user.message)
          return null;

        return user;
      }
    }),
    // GithubProvider({
    //     clientId: process.env.GITHUB_ID || '',
    //     clientSecret: process.env.GITHUB_SECRET || '',
    // }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }: any) {
      if (user?.ownerId) {
        token.id = user.ownerId
      }
      if (user?.name) {
        token.username = user.name;
      }
      return token
    },
    async session({ session, token }: any) {
      session.user.id = token.id;
      session.user.name = token.username;
      return session;
    }
  },
  pages: {
    signIn: "/signin",
  }

});