import './NavBar.css'
import {Navbar, Nav, Container,Button, Offcanvas, NavDropdown, Form, FormControl} from 'react-bootstrap';
import NavBar from 'react-bootstrap/Navbar';
import { SectionNavBar } from './SeccionesNavBar/SectionNavBar';
import  LogoDeLaPagina  from './LogoPagina/FotoPagina.png'


export const Navegacion = () =>{

    return (
      <div className="BarraNav">
       <img
        alt="Logo"
        src={LogoDeLaPagina}
        className="logo"/>
       <Form className="d-flex"> 
        <FormControl
        type="Buscar"
        placeholder="Encuentre su producto y mas..."
        className="BarraBuscar"
        aria-label="search"
        />
        <Button variant="outline-success" className="btn-buscador">Buscar</Button>
      </Form>
      <SectionNavBar/>

      </div>
    )
  }

 