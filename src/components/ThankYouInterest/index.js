import React from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import './index.css' // Custom CSS for styling

function ThankYouInterest() {
  const navigate = useNavigate()
  const location = useLocation()

  // Retrieve product name passed via route state
  const {productName} = location.state || {productName: 'this product'}

  return (
    <div className="thank-you-interest-container">
      <div className="thank-you-interest-card">
        <h1>Thank You!</h1>
        <p>
          Thank you for your interest in <strong>{productName}</strong>!
        </p>
        <button className="btn btn-primary" onClick={() => navigate('/')}>
          Continue Shopping
        </button>
      </div>
    </div>
  )
}

export default ThankYouInterest
