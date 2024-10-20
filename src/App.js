// App.js
// App.js
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import ProductList from './components/ProductList'
import ThankYou from './components/ThankYou'
import PlantsAndPlots from './components/PlantsAndPlots'
import Home from './components/Home'
import ThankYouInterest from './components/ThankYouInterest'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/plants" element={<PlantsAndPlots />} />
        <Route path="/thank-you-interest" element={<ThankYouInterest />} />
      </Routes>
    </Router>
  )
}

export default App
