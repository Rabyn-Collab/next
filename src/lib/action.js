'use server';

import { addDoc, collection } from "@firebase/firestore";
import axios from "axios";
import { db } from "../utils/firebaseFirestore";



export async function addNews(formData) {
  try {
    const response = await axios.post('http://localhost:3000/api/file-upload', formData.get('image'));
    await addDoc(collection(db, 'news'), {
      title: formData.get('title'),
      image: response.data.url,
      description: formData.get('description'),
    });
  } catch (err) {
    console.log(err);
  }
}