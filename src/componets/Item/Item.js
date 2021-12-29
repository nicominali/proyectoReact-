import React from 'react'
import { Button, Card, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './item.css'

export const Item = ({id,price,name,img}) => {
    return (
       
            <Row className=' my-3'  style={{width: "25rem"}} key={id}>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img className='img' variant="top" src={img} alt={name} />
                        <Card.Body>
                        <Card.Title className='productName'>{name}</Card.Title>
                        <Card.Text className='price'>${price}</Card.Text>
                        <Link to={`/detail/${id}`} className='btn btn-primary'>Ver mas</Link>
                        </Card.Body>
                        </Card>
            </Row>
                
            
        
    )
}
