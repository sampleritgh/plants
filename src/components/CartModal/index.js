// CartModal.js
import React from 'react'
import {Modal, Button} from 'react-bootstrap'

function CartModal({show, product, onHide}) {
  if (!product) return null

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Price: ₹{product.price}</p>
        <p>Do you want to add this product to the cart?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={onHide}>
          Add to Cart
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CartModal
