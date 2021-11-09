import { NavBar } from './componets/NavBar/NavBar'
import { MedPage } from './componets/MedPage/MedPage'
import { TituloPage } from './componets/TituloPage/TituloPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

function App() {
  return (
    
    <div className="App">
        <div className="header">
         
        <NavBar />
        <TituloPage />
        <MedPage />
        </div>
    </div>
  );
}

export default App;
