// src/components/Home/index.js
import React from 'react'
import ProductList from '../ProductList' // If products are listed on the home page

function Home() {
  return (
    <div className="p-3">
      <h1>Welcome to Chaperone</h1>
      <ProductList />
    </div>
  )
}

export default Home
