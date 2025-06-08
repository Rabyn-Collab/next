'use client';

import { collection, onSnapshot } from '@firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../utils/firebaseFirestore';

export default function NewsList() {

  const [news, setNews] = useState([]);

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
    <div>

      {news.map((newsItem) => (
        <div key={newsItem.id}>
          <h2>{newsItem.title}</h2>
          <p>{newsItem.description}</p>
        </div>
      ))}



    </div>
  )
}
