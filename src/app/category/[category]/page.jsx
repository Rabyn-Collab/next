import axios from 'axios';
import React from 'react'

export default async function Page({ params }) {

  const { category } = await params;

  const response = await axios.get(`http://localhost:5000/api/products/category/${category}`);
  console.log(response.data);

  const products = response.data;

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>

          <h2>{product.title}</h2>
          <p>{product.description}</p>
        </div>
      ))}

    </div>
  )
}
