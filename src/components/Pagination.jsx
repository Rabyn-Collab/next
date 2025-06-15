'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';

export default function Pagination({ totalPages }) {
  const params = useSearchParams();
  const currentPage = Number(params.get('page')) || 1;

  const pagesPerSet = 10;
  const currentSet = Math.floor((currentPage - 1) / pagesPerSet);
  const startPage = currentSet * pagesPerSet + 1;
  const endPage = Math.min(startPage + pagesPerSet - 1, totalPages);

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="flex gap-2 justify-center items-center mt-4">

      {/* Prev button */}
      {currentPage > 1 ? (
        <Link href={`/?page=${currentPage - 1}`} className="text-blue-500">
          Prev
        </Link>
      ) : (
        <span className="text-gray-500">Prev</span>
      )}

      {/* Page buttons */}
      {pages.map((page) => (
        <Link
          key={page}
          href={`/?page=${page}`}
          className={`px-3 py-2 border rounded ${page === currentPage
            ? 'bg-green-600 text-white'
            : ' border-gray-500 hover:bg-gray-700'
            }`}
        >
          {page}
        </Link>
      ))}

      {/* Ellipsis if more pages exist */}
      {endPage < totalPages && <span className="text-gray-400">...</span>}

      {/* Next button */}
      {currentPage < totalPages ? (
        <Link href={`/?page=${currentPage + 1}`} className="text-blue-500">
          Next »
        </Link>
      ) : (
        <span className="text-gray-500">Next »</span>
      )}
    </div>
  );
}
