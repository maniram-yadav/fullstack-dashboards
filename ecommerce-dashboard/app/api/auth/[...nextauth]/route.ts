import NextAuth from "next-auth";
import Credentials from 'next-auth/providers/credentials';
import {PrismaClient  } from "@prisma/client";
import { compare } from "bcryptjs";

const prisma = new PrismaClient();
export const auth = () => { return ""}

// export const {handlers,auth,signIn,signOut} =  NextAuth({
//     providers:[
//         Credentials({
//             credentials:{
//                 email:{},
//                 password:{}
//             },
            
//                 authorize: async (credentials:{email:any,password:any}) => {
//                 const user = await prisma.user.findUnique({
//                     where: { email: credentials.email as string },
//                   });
//                   if (!user) return null;

//                   const isValid = await compare(
//                     credentials.password as string,
//                     user.password
//                   );
//                   return {
//                     id: user.id,
//                     email: user.email,
//                     name: user.name,
//                   };
               
//             }
//         })
//     ],

// })


