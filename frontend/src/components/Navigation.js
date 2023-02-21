import React from 'react'
import {Container, Nav, Navbar, Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {Link, useNavigate} from "react-router-dom"
import { logout } from '../redux/actions/userActions'


function Navigation() {
const dispatch=useDispatch()
const navigate=useNavigate()
  return (
    <div>
         <Navbar bg="light" variant="light">
        <Container>
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav className="me-auto">
           <Nav.Link as={Link} to="/Profile" href="#features">Profile</Nav.Link>
            <Nav.Link as={Link} to="/Register" href="#features">sign up</Nav.Link>
            <Nav.Link as={Link} to="/Login" href="#pricing">sign in</Nav.Link>
            <Nav.Link as={Link} to="/CV" href="#pricing">create CV</Nav.Link>
            <Nav.Link as={Link} to="/CVList" href="#pricing">CV</Nav.Link>
            <Button onClick={()=>dispatch(logout(),navigate('/'))} >Logout</Button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation