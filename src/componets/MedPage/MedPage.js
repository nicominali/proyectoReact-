import './MedPage.css'
import { Container } from 'react-bootstrap'

export const MedPage = ( {greeting} ) =>{

    return(
        <Container>
            <h3>{greeting}</h3>
        </Container>
    )
}