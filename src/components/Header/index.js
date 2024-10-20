// Header/index.js

import React from 'react'
import {Navbar, Nav, Form, FormControl, Container} from 'react-bootstrap'
import {FaUserCircle, FaShoppingCart} from 'react-icons/fa'
import {NavLink} from 'react-router-dom'
// Ensure the logo image is stored in /src/assets/
import './index.css'

function Header() {
  return (
    <Navbar
      bg="light"
      expand="lg"
      className="p-3"
      style={{flexDirection: 'column'}}
    >
      <Container className="d-flex justify-content-between align-items-center w-100">
        {/* Logo and Brand Name */}
        <div className="d-flex align-items-center">
          <img
            src="https://res.cloudinary.com/dy8shu8ss/image/upload/v1729347496/image_55_ptfh4t.png"
            alt="Logo"
            style={{height: '40px', marginRight: '10px'}}
          />
          <Navbar.Brand href="/">Chaperone</Navbar.Brand>
        </div>

        {/* Profile and Cart Icons */}
        <Nav>
          <Nav.Link href="/profile">
            <FaUserCircle size={24} className="me-3" />
            My Profile
          </Nav.Link>
          <Nav.Link href="/cart ">
            <FaShoppingCart size={24} />
            Cart
          </Nav.Link>
        </Nav>
      </Container>

      {/* Navbar Links Centered */}
      <Container>
        <Nav className="justify-content-center w-100">
          <NavLink to="/" className="nav-link" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/plants" className="nav-link" activeClassName="active">
            Plants & Pots
          </NavLink>

          <NavLink to="/tools" className="nav-link" activeClassName="active">
            Tools
          </NavLink>
          <NavLink to="/services" className="nav-link" activeClassName="active">
            Our Services
          </NavLink>
          <NavLink to="/blog" className="nav-link" activeClassName="active">
            Blog
          </NavLink>
          <NavLink to="/story" className="nav-link" activeClassName="active">
            Our Story
          </NavLink>
          <NavLink to="/faqs" className="nav-link" activeClassName="active">
            FAQs
          </NavLink>
        </Nav>
      </Container>

      {/* Search Bar on Second Line */}
      <Container className="mt-2">
        <Form className="d-flex justify-content-center w-100">
          <FormControl
            type="search"
            placeholder="Search Plants"
            className="w-50"
            aria-label="Search"
          />
          <img
            src="https://res.cloudinary.com/dy8shu8ss/image/upload/v1729348619/image_91_1_bpkemf.png"
            alt="Search Icon"
            style={{
              position: 'absolute',
              right: '30%',
              top: '80%',
              transform: 'translateY(-50%)',
              height: '24px',
            }}
          />
        </Form>
      </Container>
    </Navbar>
  )
}

export default Header
