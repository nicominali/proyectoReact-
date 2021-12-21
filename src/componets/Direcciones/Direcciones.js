import { Vehiculos } from '../Secciones/Vehiculos'

function Direcciones() {
    return(
        <Router>
            <Navegation>

                <Router path="../Secciones/Vehiculos" component={Vehiculos} />
            
            </Navegation>
        </Router>
    )
    
}