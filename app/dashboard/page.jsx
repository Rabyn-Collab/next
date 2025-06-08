'use client';
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/dist/server/api-utils';
import React from 'react'

export default function Page() {
  const { data, status } = useSession({
    // onUnauthenticated() {
    //   redirect('/dashboard')
    // }
  });
  console.log(status);
  return (
    <div>
      <h1>THis is a Dashboard page</h1>
      {/* <button onClick={() => signOut({
        callbackUrl: "http://localhost:3000"
      })} >Logout</button>

      {status === "authenticated" && <h1>hello {data.user.name}</h1>} */}

    </div>
  )
}
