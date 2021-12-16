import React , { useState } from 'react'
import './SectionNavBar.css'
import { NavDropdown , Nav , Navbar , Button , Form , FormControl , Container, Dropdown} from 'react-bootstrap'
import DropdownToggle from '@restart/ui/esm/DropdownToggle'
import DropdownMenu from '@restart/ui/esm/DropdownMenu'
import DropdownItem from '@restart/ui/esm/DropdownItem'




export const SectionNavBar = () => {
    
    
    return (
        <div>
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
     


    <NavDropdown title="hola" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        
        <NavDropdown title="hola" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        </NavDropdown>    

        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    </NavDropdown>



    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}
/* margin: -44px -42px 52px -42px; */
    /* background-color: transparent !important;*/
    <Navbar >
                 <Container>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll>
                                <NavDropdown title="Productos" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Divider />

                                    <NavDropdown title="Tecnologia" >
                                        <NavDropdown.Item className="tecnologia-menu" href="#action3">Tablets</NavDropdown.Item>
                                        <NavDropdown.Item className="tecnologia-menu" href="#action3">Celulares</NavDropdown.Item>
                                        <NavDropdown.Item className="tecnologia-menu" href="#action3">Consolas de videojuegos</NavDropdown.Item>
                                    </NavDropdown>
                                   
                                    <NavDropdown.Divider/>
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>

                           
                                <Nav.Link href="#action1">Ofertas</Nav.Link>
                                <Nav.Link href="#action2">Moda</Nav.Link>
                                <Nav.Link href="#action2">Ayuda</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>