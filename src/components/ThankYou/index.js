// ThankYou.js
import React from 'react'
import {useLocation} from 'react-router-dom'

function ThankYou() {
  const location = useLocation()
  const productName = location.state?.productName || 'the product'

  return (
    <div className="text-center mt-5">
      <h1>Thank You!</h1>
      <p>Thank you for your interest in {productName}!</p>
    </div>
  )
}

export default ThankYou
