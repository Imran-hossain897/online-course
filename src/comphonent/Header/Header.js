import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import './Header.css'
import logo from'./logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    return ( 
        <div>
            <Navbar bg="primary" expand="lg">
              
  <Navbar.Brand  className=' text-light' href="#home"><img className='img-hight' src={logo} alt=""/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link className=' text-light' href="#home">Home</Nav.Link>
      <Nav.Link className=' text-light' href="#categories">categories</Nav.Link>
      <Nav.Link className=' text-light' href="#course">course</Nav.Link>
     </Nav>
    <Form inline> <FontAwesomeIcon icon={faShoppingCart}/>
      <FormControl  type="text" placeholder="Search" className="mr-sm-2" />
      <Button  variant="dark">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
    );
};

export default Header;