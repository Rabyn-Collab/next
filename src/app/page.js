import React from 'react'
import Pagination from '../components/Pagination';
import axios from 'axios';
import Search from '../components/Search';
import Sorting from '../components/Sorting';

export default async function Page({ searchParams }) {
  const { page = 1, sort = '' } = await searchParams;
  const currentPage = Number(page);
  const skip = (currentPage - 1) * 10;
  const limit = 10;

  const response = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}&sortBy=title&order=${sort}`);
  const products = response.data.products;
  const pages = Math.ceil(response.data.total / limit);

  return (
    <div>
      <Search />
      <Sorting />

      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
        </div>
      ))}


      <Pagination totalPages={pages} />

    </div>
  )
}
