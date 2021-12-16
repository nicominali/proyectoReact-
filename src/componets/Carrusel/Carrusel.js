import './carrusel.css'
import { Carousel } from 'react-bootstrap';
import FotoCarruselUno from '../FotosCarrusel/FotoCarruselUno/foto-carrusel-uno.jpg' 
import FotoCarruselDos from '../FotosCarrusel/FotoCarruselDos/foto-carrusel-dos.jpg'
import FotoCarruselTres from '../FotosCarrusel/FotoCarrueslTres/foto-carrusel-tres.jpg'


export const Carrusel = () =>{



    return(
        <div>
           <Carousel fade>
              <Carousel.Item>
                <img
                  className="d-block carruselFotos"
                  src= "https://http2.mlstatic.com/D_NQ_621985-MLA48465879036_122021-OO.webp"
                  alt="First slide"
                />
                <Carousel.Caption>
                   
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block carruselFotos"
                   src="https://http2.mlstatic.com/D_NQ_890668-MLA48451646193_122021-OO.webp"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block carruselFotos"
                  src= "https://http2.mlstatic.com/D_NQ_780305-MLA48418878878_122021-OO.webp"
                  alt="Third slide"
                />

                <Carousel.Caption>
               
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
        </div>
    )
}