import { MedPage } from './componets/MedPage/MedPage'
import { TituloPage } from './componets/TituloPage/TituloPage'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from 'react-bootstrap/Navbar';
//import { NavBar } from './componets/NavBar/NavBar'

function App() {
  return (
    
    <div className="App">
        <div className="header">
         
        <NavBar bg="dark" variant="dark"></NavBar>

        <TituloPage />
        <MedPage />
        </div>
    </div>
  );
}

export default App;
