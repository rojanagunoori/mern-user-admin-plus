import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./headers.css"



const Headers = () => {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark" className="my-navbar">
        <Container>
          <Navbar.Brand href="/"  className="animate-charcter">UserAdmin Plus</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className='nav-link' href="/">Home</Nav.Link>
          {/*  <Nav.Link className='nav-link' href="/register">Register</Nav.Link>*/}
           
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Headers