// App.js
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import ProductList from './components/ProductList'
import ThankYou from './components/ThankYou'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  )
}

export default App
