import axios from 'axios';
import React from 'react'

export default async function Page({ searchParams }) {
  const { q } = await searchParams;
  const response = await axios.get(`https://dummyjson.com/products/search?q=${q}`);

  const products = response.data.products;


  return (
    <div>
      {products.length === 0 && <p>No products found</p>}
      {products.map((product) => (
        <div key={product.id}>
          <img className='h-[100px]' src={product.thumbnail} alt="" />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
        </div>
      ))}

    </div>
  )
}
