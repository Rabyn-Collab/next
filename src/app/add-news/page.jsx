'use client';

import { addDoc, collection } from '@firebase/firestore';
import { Formik } from 'formik';
import React from 'react'
import { db } from '../../utils/firebaseFirestore';
import { useRouter } from 'next/navigation';
import axios from 'axios';
export default function Page() {
  const router = useRouter();
  return (
    <div >
      <h1 className='text-2xl font-bold mb-6'>Add News</h1>

      <Formik
        initialValues={{
          title: '',
          description: '',
          image: '',
        }}
        onSubmit={async (val) => {
          const formData = new FormData();
          formData.append('image', val.image);

          try {
            const response = await axios.post('http://localhost:3000/api/file-upload', formData);
            addDoc(collection(db, 'news'), {
              title: val.title,
              image: response.data.image,
              description: val.description
            });
            router.back();
          } catch (error) {
            console.log(error);
          }




        }}
      >
        {({ values, handleChange, handleSubmit, setFieldValue }) => (
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

            <div>
              <input
                onChange={(e) => {
                  const file = e.target.files[0];
                  setFieldValue('image', file);
                }}
                className='border border-black px-2 py-1' type="file" name='image' placeholder='Image' />
            </div>

            <button type='submit'>Submit</button>
          </form>
        )}
      </Formik>
    </div >
  )
}