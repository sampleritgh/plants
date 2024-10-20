// CartModal/index.js
import React from 'react'
import {useNavigate} from 'react-router-dom'
import './index.css' // Optional: Styling for the modal

function CartModal({product, show, onClose}) {
  const navigate = useNavigate()

  if (!show) return null // If modal is not open, return null.

  const handleConfirm = () => {
    onClose() // Close the modal before navigating.
    navigate('/thank-you') // Redirect to Thank You page.
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Product Details</h2>
        <img src={product.image} alt={product.name} />
        <p>
          <strong>{product.name}</strong>
        </p>
        <p>Price: ₹{product.price}</p>

        <div className="modal-buttons">
          <button className="btn btn-success" onClick={handleConfirm}>
            Confirm Add to Cart
          </button>
          <button className="btn btn-danger" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartModal
