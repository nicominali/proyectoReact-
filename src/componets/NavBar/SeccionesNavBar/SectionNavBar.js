import React , { useState } from 'react'
import './SectionNavBar.css'
import { NavDropdown , Nav , Navbar , Button , Form , FormControl , Container, Dropdown} from 'react-bootstrap'
import { SubSeccionesNavBar } from './SubSeccionesNavBar/SubSeccionesNavBar'
import { Link } from 'react-router-dom'





export const SectionNavBar = () => {
    
    
    return (
        <div>
        <Navbar  expand="lg">
  <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
        
        <NavDropdown title="Categorias" id="basic-nav-dropdown">
            <Link to="/Vehiculos/vehiculo">Vehiculos<NavDropdown.Item ></NavDropdown.Item></Link>
            <Link to="/Departamentos">Departamentos<NavDropdown.Item ></NavDropdown.Item></Link>
            <SubSeccionesNavBar/>
            <Link to="/Belleza">Belleza e higiene<NavDropdown.Item ></NavDropdown.Item></Link>
          
        </NavDropdown>
        <Link to="/Moda">Moda<NavDropdown.Item ></NavDropdown.Item></Link>
        <Link to="/Ayuda">Ayuda<NavDropdown.Item ></NavDropdown.Item></Link>
        </Nav>
    </Navbar.Collapse>
  </Container>
    </Navbar>
     
        </div>
    )
}
/* margin: -44px -42px 52px -42px; */
    /* background-color: transparent !important;*/