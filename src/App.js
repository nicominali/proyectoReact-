import './style.css';
import { TituloPage } from './componets/TituloPage/TituloPage'
import { Navegacion } from './componets/NavBar/Barra';
import { Carrusel } from './componets/Carrusel/Carrusel';



function App() {
  return (
    
    <div className="App">
        <div className="header">
         
        <Navegacion></Navegacion>
        <Carrusel tituloCarruselUno="Novedades Navideñas" tituloCarruselDos="Descuentos del 25%" tituloCarruselTres="Lo nuevo de esta semana"/>
        <TituloPage />
        </div>
    </div>
  );
}

export default App;
