import React from 'react'
import NewsList from '../components/NewsList'
import Link from 'next/link'

export default function Page() {
  return (
    <div>
      <Link href={'/add-news'}>
        <div className='mb-5 flex justify-end'>
          <button className='bg-black text-white px-5 py-1 rounded'>Add News</button>
        </div>

      </Link>


      <NewsList />

    </div>
  )
}
