import React from 'react'
import {Card , Button} from 'react-bootstrap'
import { stock } from '../data/stock'




export const Producto = () => {
    return (
        <div>
            
            {stock.map( (prod) =>(
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={prod.img} />
                <Card.Body>
                  <Card.Title>{prod.name}</Card.Title>
                  <Card.Text> precio: ${prod.price}</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            )) }
        </div>
    )
}
