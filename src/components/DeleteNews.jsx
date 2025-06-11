import { deleteDoc, doc } from '@firebase/firestore';
import React from 'react'
import { db } from '../utils/firebaseFirestore';

export default function DeleteNews({ id }) {

  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, 'news', id));
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <button onClick={handleDelete} className='bg-red-400 px-2 py-1'>Delete News</button>
    </div>
  )
}
