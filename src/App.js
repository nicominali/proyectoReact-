import './style.css';
import { Navegacion } from './componets/NavBar/Barra';
//import { BtnLogin } from './componets/Login/BtnLogin';
import { ItemListContainer } from './componets/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { ItemDetailContainer } from './componets/Secciones/ItemDetailContainer';
import { Vehiculos } from './componets/Secciones/Vehiculos/Vehiculos';
import { Departamentos } from './componets/Secciones/Departamentos/Departamentos';
import { Login } from './componets/Login/Login/Login'





function App() {
  const isAuthenticatde = true
  return (
   <div className='APP'>
    <BrowserRouter>
        
      <Navegacion />          

    <Routes>
    <Route path="/" element={<ItemListContainer/>}/>
    <Route path ="/Vehiculos/:catId" element={<Vehiculos/>}/> 
    <Route path ="/Departamentos" element={<Departamentos/>}/> 
    </Routes> 

    {
      isAuthenticatde ?
      <>
      <Routes>
        <Route path="Login" element={<Login/>} />
      </Routes>  
      </>
    : 
    <Login />
 
    }  
    </BrowserRouter> 

         </div>
      
  );
}

export default App;
