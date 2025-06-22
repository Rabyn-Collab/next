'use client';
import { Formik } from 'formik';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'

export default function Sorting() {
  const currentPath = usePathname();
  const router = useRouter();

  return (
    <div>
      <Formik
        initialValues={{
          sort: 'asc',
        }}
        onSubmit={(values) => {
          router.push(`${currentPath}?sort=${values.sort}`);
        }}

      >
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <select
              className="border-2 border-gray-300 rounded-md p-2 mr-2"
              name="sort"
              value={values.sort}
              onChange={(e) => {
                handleChange(e);
                router.push(`${currentPath}?sort=${e.target.value}`);
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
