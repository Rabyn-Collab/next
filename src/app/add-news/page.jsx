'use client';

import { addDoc, collection } from '@firebase/firestore';
import { Formik } from 'formik';
import React from 'react'
import { db } from '../../utils/firebaseFirestore';
import { useRouter } from 'next/navigation';
export default function Page() {
  const router = useRouter();
  return (
    <div >
      <h1 className='text-2xl font-bold mb-6'>Add News</h1>

      <Formik
        initialValues={{
          title: '',
          description: ''
        }}
        onSubmit={async (val) => {
          try {
            await addDoc(collection(db, 'news'), val);
            router.back();
          } catch (err) {
            console.log(err);

          }
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit} className='space-y-5'>
            <div>
              <input
                className='border border-black px-2 py-1'
                type="text"
                placeholder='Title'
                value={values.title}
                onChange={handleChange}
                name='title' />
            </div>
            <div>
              <textarea
                className='border border-black px-2 py-1'
                type="text"
                placeholder='Description'
                value={values.description}
                onChange={handleChange}
                name='description' />
            </div>

            <button type='submit'>Submit</button>
          </form>
        )}
      </Formik>
    </div>
  )
}