'use client';


import { Formik } from 'formik';
import React from 'react'

import { useRouter } from 'next/navigation';
import { doc, updateDoc } from '@firebase/firestore';
import { db } from '../utils/firebaseFirestore';
import axios from 'axios';
export default function EditForm({ news, id }) {



  const router = useRouter();
  return (
    <div >
      <h1 className='text-2xl font-bold mb-6'>Edit  News</h1>

      <Formik
        initialValues={{
          title: news.title,
          description: news.description,
          image: null,
          imageReview: news.image
        }}
        onSubmit={async (val) => {
          try {

            console.log(val.imageReview);
            if (val.image) {
              const formData = new FormData();
              formData.append('image', val.image);
              formData.append('id', news.imageId);
              const response = await axios.patch('http://localhost:3000/api/file-upload', formData);
              await updateDoc(doc(db, 'news', id), {
                title: val.title,
                description: val.description,
                image: response.data.image,
                imageId: response.data.id
              });

            } else {
              await updateDoc(doc(db, 'news', id), {
                title: val.title,
                description: val.description
              });
            }

            router.back();
          } catch (err) {
            console.log(err);

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

              {values.image === null ? (<img src={`https://coffee-absolute-kite-69.mypinata.cloud/ipfs/${values.imageReview}`} className='h-[200px] ' alt="" />) : (<img src={values.imageReview} className='h-[200px] ' alt="" />)}
              <input
                onChange={(e) => {
                  const file = e.target.files[0];
                  setFieldValue('image', file);
                  setFieldValue('imageReview', URL.createObjectURL(file));
                }}
                className='border border-black px-2 py-1' type="file" name='image' placeholder='Image' />
            </div>



            <button type='submit'>Submit</button>
          </form>
        )}
      </Formik>
    </div>
  )
}