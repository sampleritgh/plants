import React, {useState, useRef} from 'react'
import {useNavigate} from 'react-router-dom'

import ProductCard from '../ProductCard'
import CartModal from '../CartModal'
import './index.css' // Import your CSS file

const mockProducts = {
  plant: [
    {
      id: 1,
      name: 'Aloe Vera',
      price: 299,
      image:
        'https://res.cloudinary.com/dy8shu8ss/image/upload/v1729436656/7973d62829a030074ad8b6ad34_yqboax.png',
    },
    {
      id: 2,
      name: 'Tulsi',
      price: 199,
      image:
        'https://res.cloudinary.com/dy8shu8ss/image/upload/v1729436669/daa994fdb511faa82ea79a5ef58fbb1a_smlgsh.png',
    },
    {
      id: 3,
      name: 'Cactus',
      price: 149,
      image:
        'https://res.cloudinary.com/dy8shu8ss/image/upload/v1729436656/7973d62829a030074ad8b6ad34_yqboax.png',
    },
    {
      id: 4,
      name: 'Aloe Vera',
      price: 299,
      image:
        'https://res.cloudinary.com/dy8shu8ss/image/upload/v1729436656/7973d62829a030074ad8b6ad34_yqboax.png',
    },
    {
      id: 5,
      name: 'Tulsi',
      price: 199,
      image:
        'https://res.cloudinary.com/dy8shu8ss/image/upload/v1729436669/daa994fdb511faa82ea79a5ef58fbb1a_smlgsh.png',
    },
    {
      id: 6,
      name: 'Cactus',
      price: 149,
      image:
        'https://res.cloudinary.com/dy8shu8ss/image/upload/v1729436656/7973d62829a030074ad8b6ad34_yqboax.png',
    },
    {
      id: 7,
      name: 'Aloe Vera',
      price: 299,
      image:
        'https://res.cloudinary.com/dy8shu8ss/image/upload/v1729436656/7973d62829a030074ad8b6ad34_yqboax.png',
    },
    {
      id: 8,
      name: 'Tulsi',
      price: 199,
      image:
        'https://res.cloudinary.com/dy8shu8ss/image/upload/v1729436669/daa994fdb511faa82ea79a5ef58fbb1a_smlgsh.png',
    },
    {
      id: 9,
      name: 'Cactus',
      price: 149,
      image:
        'https://res.cloudinary.com/dy8shu8ss/image/upload/v1729436656/7973d62829a030074ad8b6ad34_yqboax.png',
    },
    {
      id: 10,
      name: 'Aloe Vera',
      price: 299,
      image:
        'https://res.cloudinary.com/dy8shu8ss/image/upload/v1729436656/7973d62829a030074ad8b6ad34_yqboax.png',
    },
    {
      id: 11,
      name: 'Tulsi',
      price: 199,
      image:
        'https://res.cloudinary.com/dy8shu8ss/image/upload/v1729436669/daa994fdb511faa82ea79a5ef58fbb1a_smlgsh.png',
    },
    {
      id: 12,
      name: 'Cactus',
      price: 149,
      image:
        'https://res.cloudinary.com/dy8shu8ss/image/upload/v1729436656/7973d62829a030074ad8b6ad34_yqboax.png',
    },
  ],

  plot: [
    {
      id: 13,
      name: 'Large Plot',
      price: 2500,
      image:
        'https://res.cloudinary.com/dy8shu8ss/image/upload/v1729436422/Group_95_y6cbcu.png',
    },
    {
      id: 14,
      name: 'Small Plot',
      price: 800,
      image:
        'https://res.cloudinary.com/dy8shu8ss/image/upload/v1729436422/Group_95_y6cbcu.png',
    },
  ],
}

const images = [
  {
    url:
      'https://res.cloudinary.com/dy8shu8ss/image/upload/v1729365426/Ellipse_62_nzbsjg.png',
    description: 'AloeVera',
  },
  {
    url:
      'https://res.cloudinary.com/dy8shu8ss/image/upload/v1729365439/Ellipse_68_syjzec.png',
    description: 'Blue Flower',
  },
  {
    url:
      'https://res.cloudinary.com/dy8shu8ss/image/upload/v1729365454/Ellipse_69_dkfxjq.png',
    description: 'Green Plant',
  },
  {
    url:
      'https://res.cloudinary.com/dy8shu8ss/image/upload/v1729365472/Ellipse_70_yuximy.png',
    description: 'Yellow Flower',
  },
  {
    url:
      'https://res.cloudinary.com/dy8shu8ss/image/upload/v1729365426/Ellipse_62_nzbsjg.png',
    description: 'AloeVera',
  },
  {
    url:
      'https://res.cloudinary.com/dy8shu8ss/image/upload/v1729365439/Ellipse_68_syjzec.png',
    description: 'Blue Flower',
  },
  {
    url:
      'https://res.cloudinary.com/dy8shu8ss/image/upload/v1729365454/Ellipse_69_dkfxjq.png',
    description: 'Green Plant',
  },
  {
    url:
      'https://res.cloudinary.com/dy8shu8ss/image/upload/v1729365472/Ellipse_70_yuximy.png',
    description: 'Yellow Flower',
  },
  {
    url:
      'https://res.cloudinary.com/dy8shu8ss/image/upload/v1729365426/Ellipse_62_nzbsjg.png',
    description: 'AloeVera',
  },
  {
    url:
      'https://res.cloudinary.com/dy8shu8ss/image/upload/v1729365439/Ellipse_68_syjzec.png',
    description: 'Blue Flower',
  },
  {
    url:
      'https://res.cloudinary.com/dy8shu8ss/image/upload/v1729365454/Ellipse_69_dkfxjq.png',
    description: 'Green Plant',
  },
  {
    url:
      'https://res.cloudinary.com/dy8shu8ss/image/upload/v1729365472/Ellipse_70_yuximy.png',
    description: 'Yellow Flower',
  },
]

function ProductList() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [category, setCategory] = useState('plant') // Default to 'plant'
  const [visibleProducts, setVisibleProducts] = useState(6) // Pagination state
  const [currentIndex, setCurrentIndex] = useState(0) // Carousel index
  const navigate = useNavigate()

  const products = mockProducts[category]

  const handleViewProduct = product => {
    navigate('/thank-you', {state: {productName: product.name}}) // Redirect to Thank You page
    navigate('/thank-you-interest', {state: {productName: product.name}})
  }

  const handleAddToCart = product => {
    setSelectedProduct(product)
    setShowModal(true)
  }

  const scrollImages = direction => {
    setCurrentIndex(prev =>
      direction === 'left'
        ? Math.max(prev - 1, 0)
        : Math.min(prev + 1, images.length - 1),
    )
  }

  const handleViewMore = () => {
    setVisibleProducts(prev => prev + 6) // Load 6 more products
  }

  const allProductsDisplayed = visibleProducts >= products.length // Disable button if all products are shown

  return (
    <div className="product-page-container">
      {/* Filter Section */}
      {/* Product Listing Section */}
      <div className="product-list products-section">
        {/* Category Selection */}
        <div className="category-buttons mb-4">
          <button
            onClick={() => setCategory('plant')}
            className={`btn ${
              category === 'plant' ? 'btn-warning' : 'btn-outline-warning'
            } me-2`}
          >
            Plant
          </button>
          <button
            onClick={() => setCategory('plot')}
            className={`btn ${
              category === 'plot' ? 'btn-warning' : 'btn-outline-warning'
            }`}
          >
            Plot
          </button>
        </div>
        <p>
          Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
          necessitatibus enim ut internos accusantium a numquam autem ab rerum
          omnis. Non molestiae ratione et laborum doloribus aut molestiae
          voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae
          est voluptatem eius. Et architecto nihil id labore omnis hic iste
          deleniti et porro aspernatur.
        </p>

        <h3 className="nursery-heading">Nursery</h3>

        {/* Image Carousel */}
        <div className="carousel-container">
          <button
            onClick={() => scrollImages('left')}
            disabled={currentIndex === 0}
          >
            &lt; {/* Left Arrow */}
          </button>
          <div className="carousel">
            <div
              className="carousel-images"
              style={{transform: `translateX(-${currentIndex * 100}%)`}}
            >
              {images.map((image, index) => (
                <div key={index} style={{textAlign: 'center', width: '100%'}}>
                  <img src={image.url} alt={`Slide ${index + 1}`} />
                  <p>{image.description}</p>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={() => scrollImages('right')}
            disabled={currentIndex >= images.length - 1}
          >
            &gt; {/* Right Arrow */}
          </button>
        </div>

        <p>
          300 Products
          <span>
            <button className="btn btn-primary">Sort by</button>
          </span>
        </p>

        {/* Product Cards with Pagination */}
        <div>
          <div className="filter-section">
            <div className="product-cards">
              {products.slice(0, visibleProducts).map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onViewProduct={handleViewProduct}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </div>
        </div>

        {/* View More Button */}
        <div
          className="view-more-container"
          style={{textAlign: 'center', marginTop: '20px'}}
        >
          <button
            className={`btn ${
              allProductsDisplayed ? 'btn-secondary' : 'btn-primary'
            }`}
            onClick={handleViewMore}
            disabled={allProductsDisplayed}
          >
            {allProductsDisplayed ? 'No More Products' : 'View More'}
          </button>
          <img
            src="https://res.cloudinary.com/dy8shu8ss/image/upload/v1729431285/Group_225_2x_jyt7fr.png"
            className="product-detail-image"
          />
        </div>

        {/* Cart Modal */}
        {selectedProduct && (
          <CartModal
            product={selectedProduct}
            show={showModal}
            onClose={() => setShowModal(false)}
          />
        )}
      </div>
      hjk
    </div>
  )
}

export default ProductList
