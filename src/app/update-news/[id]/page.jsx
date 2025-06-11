
import React from 'react'
import EditForm from '../../../components/EditForm';
import { collection, doc, getDoc, getDocs } from '@firebase/firestore';
import { db } from '../../../utils/firebaseFirestore';


export async function generateStaticParams() {
  const news = await getDocs(collection(db, 'news'));
  const ids = news.docs.map((doc) => ({
    id: doc.id,
  }));
  return ids;
};

export default async function Page({ params }) {
  const { id } = await params;

  const data = (await getDoc(doc(db, 'news', id))).data();

  // const some = useSearchParams();

  // console.log(some.get('name'));



  return (
    <div>

      <EditForm news={data} id={id} />

    </div>
  )
}
