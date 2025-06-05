'use client';

import { SessionProvider } from "next-auth/react";




export default function AuthProvider(props) {
  return (
    <div>
      <SessionProvider>
        {props.children}
      </SessionProvider>
    </div>

  )
}