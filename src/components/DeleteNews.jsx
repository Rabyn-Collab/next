import { deleteDoc, doc } from '@firebase/firestore';
import React from 'react'
import { db } from '../utils/firebaseFirestore';
import axios from 'axios';

export default function DeleteNews({ id, imageId }) {

  const handleDelete = async () => {
    try {
      await axios.delete('http://localhost:3000/api/file-upload', {
        data: {
          id: imageId
        }
      });
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
