import './NavBar.css'
import {Navbar, Nav, Container,Button, Offcanvas, NavDropdown, Form, FormControl} from 'react-bootstrap';
import NavBar from 'react-bootstrap/Navbar';
export const Navegacion = () =>{

    return (
     <div className="BarraNav">
       <Form className="d-flex"> 
        <FormControl
        type="Buscar"
        placeholder="Encuentre su producto y mas..."
        className="BarraBuscar"
        aria-label="search"
        />
        <Button variant="outline-success" className="btn-buscador">Buscar</Button>
      </Form>
      </div>
    )
  }

 