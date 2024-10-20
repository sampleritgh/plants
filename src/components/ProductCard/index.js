// ProductCard.js
// ProductCard/index.js
import React, {useState} from 'react'
import {Button, Card} from 'react-bootstrap'
import {IoIosHeartEmpty} from 'react-icons/io'
import './index.css'

function ProductCard({product, onViewProduct, onAddToCart}) {
  const [liked, setLiked] = useState(false) // State to manage like

  const toggleLike = () => {
    setLiked(prev => !prev)
  }

  return (
    <Card style={{width: '18rem'}}>
      <Card.Img variant="top" src={product.image} />
      <span
        className={`wishlist-icon ${liked ? 'liked' : ''}`}
        onClick={toggleLike}
      >
        <IoIosHeartEmpty />
      </span>

      <Button variant="primary" onClick={() => onViewProduct(product)}>
        View Product
      </Button>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <img src="https://res.cloudinary.com/dy8shu8ss/image/upload/v1729414541/Indoor_Plant_Low_maintenance_ietooh.png" />
        <span>
          <img src="https://res.cloudinary.com/dy8shu8ss/image/upload/v1729414310/image_10_mhfikt.png" />
        </span>
        <Card.Text>
          {' '}
          <img src="https://res.cloudinary.com/dy8shu8ss/image/upload/v1729414678/359_mopb5e.png" />{' '}
          ₹{product.price}
        </Card.Text>
        <Button
          variant="secondary"
          onClick={() => onAddToCart(product)}
          className="ms-2"
        >
          Add to Cart
        </Button>
        <Button
          variant="secondary"
          onClick={() => onAddToCart(product)}
          className="ms-2"
        >
          Buy on Rent
        </Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard
