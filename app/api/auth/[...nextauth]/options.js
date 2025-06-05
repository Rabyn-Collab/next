import CredentialsProvider from "next-auth/providers/credentials"
import { User } from "../../../_models/User";
import connectToDB from "../../../_lib/db";
import bcrypt from "bcrypt";


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
        console.log(isExist);
        if (!isExist) {
          return null;
        }
        // const pass = bcrypt.compareSync(credentials.password, isExist.password);
        // if (!pass) {
        //   return null;
        // }
        return {
          id: isExist._id,
          name: isExist.username,
          email: isExist.email,
          role: isExist.role
        };
      }


    })

  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/auth/login',
  }

}