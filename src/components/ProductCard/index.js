// ProductCard.js
import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

function ProductCard({product, openModal}) {
  const navigate = useNavigate()

  const handleViewProduct = () => {
    navigate('/thank-you', {state: {productName: product.name}})
  }

  return (
    <Card className="m-2" style={{width: '18rem'}}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>₹{product.price}</Card.Text>
        <Button variant="primary" onClick={handleViewProduct}>
          View Product
        </Button>
        <Button
          variant="success"
          onClick={() => openModal(product)}
          className="ms-2"
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard
