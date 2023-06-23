import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function NavBar({ toggleButton, setToggle }){
    return(
        <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand><Link to="/" style={{textDecoration:"none", color:"inherit"}}>FORM</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link to="/home" style={{textDecoration:"none",color:"inherit"}}>Home</Link></Nav.Link>
            <Nav.Link><Link to="/registration" style={{textDecoration:"none",color:"inherit"}}>Registration</Link></Nav.Link>
            <Nav.Link><Link to="/user" style={{textDecoration:"none",color:"inherit"}}>Data</Link></Nav.Link>
            <Nav.Link><Link to="/profile" style={{textDecoration:"none",color:"inherit"}}>Profile</Link></Nav.Link>
            {
              toggleButton ?
                <Nav.Link onClick={() => {
                  setToggle(false)
                  localStorage.removeItem('token')
                }}>
                  <Link to='/login' style={{ textDecoration: 'none', color: 'inherit' }}>Logout</Link></Nav.Link>
                :
                <Nav.Link><Link to='/login' style={{ textDecoration: 'none', color: 'inherit' }}>Login</Link></Nav.Link>
            }
          </Nav>
        </Container>
      </Navbar>
    </>
    );
};

export default NavBar;