import './style.css';
import { Navegacion } from './componets/NavBar/Barra';
//import { BtnLogin } from './componets/Login/BtnLogin';
import { ItemListContainer } from './componets/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Login } from './componets/Login/Login/Login'
import { Productos } from './componets/Producto/Productos';





function App() {
  const isAuthenticatde = true
  return (
   <div className='APP'>
    <BrowserRouter>
        
      <Navegacion />          

    <Routes>
    <Route path="/" element={<ItemListContainer/>}/>
    <Route path ="/Vehiculos/:catId" element={<Productos/>}/> 
    <Route path ="/Departamentos/:catId" element={<Productos/>}/> 
    <Route path ="/Belleza/:catId" element={<Productos/>}/> 
    <Route path ="/Celulares/:catId" element={<Productos/>}/> 
    <Route path ="/Computadoras/:catId" element={<Productos/>}/> 
    <Route path ="/Tablets/:catId" element={<Productos/>}/> 
    <Route path ="/Moda/:catId" element={<Productos/>}/> 
    <Route path ="/ayuda/:catId" element={<Productos/>}/> 
  
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
