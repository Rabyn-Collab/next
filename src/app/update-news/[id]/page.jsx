
import React from 'react'
import EditForm from '../../../components/EditForm';
import { doc, getDoc } from '@firebase/firestore';
import { db } from '../../../utils/firebaseFirestore';

export default async function Page({ params }) {
  const { id } = await params;

  const data = (await getDoc(doc(db, 'news', id))).data();


  // const some = useSearchParams();

  // console.log(some.get('name'));



  return (
    <div>

      <EditForm news={data} />

    </div>
  )
}
