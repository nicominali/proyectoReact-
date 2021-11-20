import { CardWidget } from '../CardWidget/CardWidget'
import './NavBar.css'
//import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () =>{

    return (
        <div>       
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
      </div>
    )
}
      /*<nav>
          <ul>
              <li>home</li>
              <li>beats</li>
              <li>contacto</li>
          </ul>
      <CardWidget/>
      </nav>*/