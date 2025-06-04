import CredentialsProvider from "next-auth/providers/credentials"
import { User } from "../../../_models/User";
import bcrypt from 'bcrypt'
import connectToDB from "../../../_lib/db";



export const options = {

  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: "Email", type: "email", placeholder: "email"
        },
        password: { label: "Password", type: "password", placeholder: "password" }
      },
      async authorize(credentials) {
        await connectToDB();

        const isExist = await User.findOne({ email: credentials.email });
        if (!isExist) {
          return null;
        }
        const pass = await bcrypt.compare(credentials.password, isExist.password);
        if (!pass) {
          return null;
        }

        const user = {
          id: 1,
          name: "John Doe",
          email: 'rabyn@gmail.com',
          password: 'testing'
        };
        if (credentials.email === user.email && credentials.password === user.password) {
          return user;
        }
        return null;

      }

    })

  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/auth/login',
  }

}