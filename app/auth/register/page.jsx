'use client';
import { Formik } from 'formik';
import { useRouter } from 'next/navigation';


import React, { useTransition } from 'react'
import { registerUser } from '../../_lib/action';
import toast from 'react-hot-toast';

export default function Page() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  return (
    <div className='p-5'>

      <h1 className='text-2xl mb-5'>Register Form </h1>

      <Formik
        initialValues={{
          email: '',
          password: '',
          username: ''
        }}

        onSubmit={(val) => {

          startTransition(async () => {
            const { error, message } = await registerUser(val);
            if (!error) {
              router.back();
            }
            toast.error(message);
          })


        }}

      >
        {({ handleChange, handleSubmit, values }) => (
          <form onSubmit={handleSubmit} className='space-y-4'>

            <div>
              <input
                className='border border-black'
                value={values.username}
                name='username'
                onChange={handleChange}
                type="text" placeholder='Username' />
            </div>

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

            {isPending && <p>Loading...</p>}
            <button type='submit'>Register</button>

          </form>
        )}
      </Formik>

      <h1>Already have an account?</h1>
      <button onClick={() => router.back()}>Login</button>



    </div>
  )
}
