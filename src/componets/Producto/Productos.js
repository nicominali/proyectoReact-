import React from 'react'
import { Card , Button, Container } from 'react-bootstrap';
import './Productos.css';

export const Productos = (props) => {
   const { titulo , name , imagen} = props
    return (
        <div className="containerOfertas">
        
            <h3 className="tituloOfertas">{titulo}</h3>
        
        <Card className="Card-product">
            <Card.Img variant="top" src= { imagen } />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
              <Button variant="primary">Go somewhere</Button>
             </Card.Body>
         </Card>
        </div>
    )
}
