'use client';



import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react'

export default function Pagination({ totalPages }) {
  const params = useSearchParams();
  const page = Number(params.get('page')) || 1;
  const pagePerset = 10;
  const currenSet = Math.floor((page - 1) / pagePerset);
  const startPage = currenSet * pagePerset + 1;
  const endPage = Math.min(startPage + pagePerset - 1, totalPages);
  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className='flex  gap-5 justify-center'>

      {page > 1 ?

        <Link className='text-blue-500' href={`/?page=${page - 1}`}>Prev</Link> :
        <span className='text-gray-500'>Prev</span>
      }
      {/* <h1>{page}</h1> */}

      {pages.map((pag) => (
        <Link key={pag} className={page === pag ? 'text-blue-500' : 'text-gray-500'} href={`/?page=${pag}`}>{pag}</Link>
      ))}

      {endPage < totalPages ?
        <Link className='text-blue-500' href={`/?page=${page + 1}`}>Next</Link> :
        <span className='text-gray-500'>Next</span>
      }

      {/* {page < totalPages ?
        <Link className='text-blue-500' href={`/?page=${page + 1}`}>Next</Link> :
        <span className='text-gray-500'>Next</span>
      } */}

      {/* {page < totalPages ?
        <Link className='text-blue-500' href={`/?page=${page + 1}`}>Next</Link> :
        <span className='text-gray-500'>Next</span>
      } */}



    </div>
  )
}
