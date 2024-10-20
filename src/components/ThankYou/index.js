// ThankYou.js
import React from 'react'
import {useNavigate} from 'react-router-dom'
import './index.css' // Custom CSS for styling

function ThankYou() {
  const navigate = useNavigate()

  return (
    <div className="thank-you-container">
      <div className="thank-you-card">
        <h3>Your Cart</h3>
        <hr />
        <h1>Congratulations Order Placed!</h1>
        <img
          src="https://res.cloudinary.com/dy8shu8ss/image/upload/v1729429402/plant_1_rwhytb.png"
          alt="Success Icon"
          className="thank-you-icon"
        />

        <p>
          Thank You for choosing Chaperone services.We will soon get in touch
          with you!.
        </p>
        <button className="btn btn-primary" onClick={() => navigate('/')}>
          Continue Shopping
        </button>
      </div>
    </div>
  )
}

export default ThankYou
