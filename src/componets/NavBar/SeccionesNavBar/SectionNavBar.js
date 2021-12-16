import React , { useState } from 'react'
import './SectionNavBar.css'
import { NavDropdown , Nav , Navbar , Button , Form , FormControl , Container, Dropdown} from 'react-bootstrap'
import { SubSeccionesNavBar } from './SubSeccionesNavBar/SubSeccionesNavBar'




export const SectionNavBar = () => {
    
    
    return (
        <div>
        <Navbar  expand="lg">
  <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
        
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <SubSeccionesNavBar/>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          
        </NavDropdown>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>

        </Nav>
    </Navbar.Collapse>
  </Container>
    </Navbar>
     
        </div>
    )
}
/* margin: -44px -42px 52px -42px; */
    /* background-color: transparent !important;*/