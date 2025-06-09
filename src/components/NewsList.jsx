'use client';

import { collection, onSnapshot } from '@firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../utils/firebaseFirestore';
import { useRouter } from 'next/navigation';


export default function NewsList() {

  const [news, setNews] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'news'), (snapshot) => {
      const newsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setNews(newsData);
    });

    return () => unsubscribe();

  }, []);


  return (
    <div className='grid grid-cols-3 gap-10'>

      {news.map((newsItem) => (
        <div key={newsItem.id} className='shadow p-5'>
          <h2>Title: {newsItem.title}</h2>
          <p>Detail: {newsItem.description}</p>

          <div className='flex gap-5 mt-3'>
            <button
              onClick={() => router.push(`/update-news/${newsItem.id}`)}
              // onClick={() => router.push(`/update-news/${newsItem.id}?title=${newsItem.title}&description=${newsItem.description}`)}
              className='bg-green-400 px-2 py-1'>Edit News</button>

            <button className='bg-red-400 px-2 py-1'>Delete News</button>
          </div>
        </div>
      ))}



    </div>
  )
}
