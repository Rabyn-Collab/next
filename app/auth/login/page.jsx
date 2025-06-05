'use client';
import { Formik } from 'formik';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import React from 'react'

export default function Page() {
  return (
    <div className='p-5'>

      <h1 className='text-2xl mb-5'>Login Form </h1>

      <Formik
        initialValues={{
          email: '',
          password: '',
        }}

        onSubmit={async (val) => {
          await signIn('credentials', {
            email: val.email,
            password: val.password,
          })
        }}

      >
        {({ handleChange, handleSubmit, values }) => (
          <form onSubmit={handleSubmit} className='space-y-4'>

            <div>
              <input
                className='border border-black'
                value={values.email}
                name='email'
                onChange={handleChange}
                type="email" placeholder='Email' />
            </div>
            <div>
              <input
                className='border border-black'
                value={values.password}
                name='password'
                onChange={handleChange}
                type="text" placeholder='Password' />
            </div>

            <button type='submit'>Login</button>

          </form>
        )}
      </Formik>

      <h1>Don't have an account?</h1>
      <Link href={'/auth/register'}>Register</Link>



    </div >
  )
}
