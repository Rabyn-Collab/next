'use client';

import { Formik } from 'formik';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react'

export default function Sorting() {
  const currentPath = usePathname();
  const params = useSearchParams();
  const router = useRouter();
  return (
    <div>


      <Formik
        initialValues={{ sort: '' }}
        onSubmit={(values) => {
          router.push(`${currentPath}?order=${values.sort}`);
        }}

      >

        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <select
              className=' border-gray-300 rounded-md p-2 mr-2'
              name="sort"

              onChange={(e) => {
                console.log(e.target.value);
                router.push(`${currentPath}?order=${e.target.value}`);

              }}
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </form>
        )}

      </Formik>


    </div>
  )
}
