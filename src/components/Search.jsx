'use client';

import { Formik } from 'formik';
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Search() {
  const router = useRouter();
  return (
    <div>

      <Formik
        initialValues={{ search: '' }}
        onSubmit={(values) => {
          router.push(`/search?q=${values.search}`);
        }}
      >
        {({ values, handleChange }) => (
          <form onSubmit={() => router.push(`/search?q=${values.search}`)}>
            <input
              className='border border-gray-300 rounded-md p-2 mr-2'
              type="text"
              name="search"
              placeholder="Search"
              value={values.search}
              onChange={handleChange}
            />
            <button type="submit">Search</button>
          </form>
        )
        }
      </Formik>

    </div>
  )
}
