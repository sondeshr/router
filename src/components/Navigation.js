import React from 'react';
import {Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';

function Navigation({setText, setRating}) {
  return (
    <div>
        <Navbar bg="dark" expand="lg" variant="dark">
  <Container fluid>
    <Navbar.Brand href="#">Movie App</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll>
        <Nav.Link> <Link to="/" style={{textDecoration:"none", color:"white"}}>Movies</Link></Nav.Link>

        <Nav.Link> <Link to="/contact" style={{textDecoration:"none", color:"white"}}>Contact</Link></Nav.Link>

        <Nav.Link> <Link to="/about" style={{textDecoration:"none", color:"white"}}>About</Link></Nav.Link>

      </Nav>
      <ReactStars count={5} size={24} activeColor="#ffd700"   onChange={(newRating) => setRating(newRating)} />
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e) => setText(e.target.value)}
        />
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>

  )
}

export default Navigation;