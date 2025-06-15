'use client';



import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react'

export default function Pagination({ totalPages }) {
  const params = useSearchParams();
  const page = Number(params.get('page')) || 1;

  return (
    <div className='flex  gap-5 justify-center'>

      {page > 1 ?

        <Link className='text-blue-500' href={`/?page=${page - 1}`}>Prev</Link> :
        <span className='text-gray-500'>Prev</span>
      }
      <h1>{page}</h1>

      {page < totalPages ?
        <Link className='text-blue-500' href={`/?page=${page + 1}`}>Next</Link> :
        <span className='text-gray-500'>Next</span>
      }



    </div>
  )
}
