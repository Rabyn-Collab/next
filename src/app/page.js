import React from 'react'
import Pagination from '../components/Pagination';
import axios from 'axios';
import Search from '../components/Search';
import Sorting from '../components/Sorting';
import Link from 'next/link';

export default async function page({ searchParams }) {
  const { page = 1, sort = '' } = await searchParams;
  const currentPage = Number(page);
  const limit = 10;
  const skip = (currentPage - 1) * limit;

  const response = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}&sortBy=title&order=${sort}`);
  // const response = await axios.get(`https://mern-magn.onrender.com/api/products?page=${currentPage}`);
  const products = response.data.products;
  const totalPages = Math.ceil(response.data.total / limit);
  //console.log(products);
  return (
    <div>
      <Search />
      {/* <Sorting /> */}
      <Link href="/category/electronics"><button className='bg-blue-500 py-1 px-4 text-white rounded-md'>Electronics</button></Link>
      <Link href="/category/men's clothing"><button className='bg-blue-500 py-1 px-4 text-white rounded-md'>Mens</button></Link>
      {products.map((product) => (
        <div key={product.id}>
          <img className='h-[100px]' src={product.thumbnail} alt="" />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
        </div>
      ))}
      <Pagination totalPages={totalPages} />

    </div>
  )
}
