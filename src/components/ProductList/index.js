// ProductList.js
import React, {useState} from 'react'
import {Row, Col, Pagination} from 'react-bootstrap'
import ProductCard from './ProductCard'
import CartModal from './CartModal'

// Mock Product Data
const products = Array(12).fill({
  name: 'Monstera',
  price: 299,
  image: 'https://via.placeholder.com/150',
})

function ProductList() {
  const [showModal, setShowModal] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  const openModal = product => {
    setSelectedProduct(product)
    setShowModal(true)
  }

  const closeModal = () => setShowModal(false)

  return (
    <>
      <Row>
        {products.map((product, index) => (
          <Col key={index}>
            <ProductCard product={product} openModal={openModal} />
          </Col>
        ))}
      </Row>
      <Pagination className="justify-content-center mt-3">
        <Pagination.Prev />
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Next />
      </Pagination>
      <CartModal
        show={showModal}
        product={selectedProduct}
        onHide={closeModal}
      />
    </>
  )
}

export default ProductList
