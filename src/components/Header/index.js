// Header.js
import React from 'react';
import { Navbar, Form, FormControl, Nav } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="light" expand="lg" className="px-3">
      <Navbar.Brand href="#">Chaperone</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Form className="mx-auto d-flex">
          <FormControl type="search" placeholder="Search Plants" aria-label="Search" />
        </Form>
        <Nav>
          <Nav.Link href="#">My Profile</Nav.Link>
          <Nav.Link href="#">Cart</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
