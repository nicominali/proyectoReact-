import './style.css';
import { ItemListContainer } from './componets/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Login } from './componets/Login/Login/Login'
import { NavBar } from './componets/NavBar/NavBar';
import { ItemDetailContainer } from './componets/ItemDetailContainer/ItemDetailContainer';
import { AppRouter } from './router/AppRouter';
import {  CartProvider } from './context/CartContext';







function App() {
  
  return (
   <div className='APP'>
    <CartProvider>

    <BrowserRouter>
        
      <NavBar/>    
      <AppRouter/>
    
    </BrowserRouter> 
    </CartProvider>

         </div>
      
  );
}

export default App;

    