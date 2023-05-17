import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import * as jwt from 'jsonwebtoken';

import apolloClient from '@/graphql/client';
import { SIGNUP_OAUTH_MUTATION } from '@/graphql/mutations/auth';
import { LOGIN_QUERY } from '@/graphql/queries/auth';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'john@example.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          const { data } = await apolloClient.query({
            query: LOGIN_QUERY,
            variables: {
              email: credentials.email,
              password: credentials.password,
            },
          });

          const { name, email, token } = data.loginUser;

          return { name, email, token };
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    }),
  ],
  session: {
    maxAge: 7 * 24 * 60 * 60, // 7 days
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        if (account.provider === 'credentials') {
          user.accessToken = user.token;
        }
        if (account.provider === 'google') {
          const { data } = await apolloClient.mutate({
            mutation: SIGNUP_OAUTH_MUTATION,
            variables: {
              createUserWithOAuthInput: {
                name: user.name,
                email: user.email,
                image: user.image,
                provider: account.provider,
                providerAccountId: account.providerAccountId,
                accessToken: account.access_token,
                refreshToken: account.id_token,
              },
            },
          });
        }
      } catch (error) {
        console.log(error);
      }

      return true;
    },
    async jwt({ token, account, user }) {
      if (user) {
        token.accessToken = user.accessToken;
      }
      return token;
    },
    async session({ session, token, user }) {
      session.accessToken = token.accessToken;
      session.user = {
        name: token.name,
        email: token.email,
      };
      return session;
    },
  },
});
