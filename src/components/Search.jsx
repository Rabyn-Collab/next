'use client';
import { Formik } from 'formik';
import { useRouter } from 'next/navigation';

import React from 'react'

export default function Search() {
  const router = useRouter();
  return (
    <div>
      <Formik
        initialValues={{
          searchTerm: '',
        }}
        onSubmit={(values) => {
          router.push(`/search?q=${values.searchTerm}`);
        }}
      >
        {({ values, handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit} className='flex gap-5'>
            <input
              onChange={handleChange}
              className='border border-gray-400 p-2 rounded-md'
              type="text"
              name="searchTerm"
              placeholder="Search"
              value={values.searchTerm}
            />
            <button className='bg-blue-500 py-1 px-4 text-white rounded-md' type="submit">Search</button>
          </form>
        )}
      </Formik>

    </div>
  )
}
