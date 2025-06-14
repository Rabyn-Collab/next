'use client';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import React from 'react';

export default function Pagination({ totalPages }) {


  const currentPath = usePathname();
  const params = useSearchParams();
  const page = Number(params.get("page")) || 1;

  return (
    <div className="mt-4 flex justify-center">

      {page > 1 ? (
        <Link className="mr-2 text-blue-500" href={`${currentPath}?page=${page - 1}`}>
          Prev
        </Link>
      ) : (
        <span className="mr-2 text-gray-400 cursor-not-allowed">Prev</span>
      )}


      <span className="text-gray-700">Page {page}</span>

      {page < totalPages ? (
        <Link className="text-blue-500" href={`${currentPath}?page=${page + 1}`}>
          Next
        </Link>
      ) : (
        <span className="text-gray-400 cursor-not-allowed">Next</span>
      )}

    </div >
  );
}
