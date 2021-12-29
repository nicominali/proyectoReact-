import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Item } from '../Item/Item'

export const ItemList = ({items}) => {
    return (
        <div>
            <Container className='my-5'>  
            <Row>
             {items.map((prod) =><Item key={prod.id} {...prod}/> )}
            </Row>
            </Container>
        </div>
    )
}
