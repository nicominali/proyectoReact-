import './style.css';
import { TituloPage } from './componets/TituloPage/TituloPage'
import { Navegacion } from './componets/NavBar/Barra';
import { Carrusel } from './componets/Carrusel/Carrusel';
import { Productos } from './componets/Producto/Productos';
import { Container ,  } from 'react-bootstrap';
import { TituloProductos } from './componets/Producto/TituloProductos';






function App() {
  return (
    
    <div className="App">
        <div className="header">

        <Navegacion></Navegacion>
        <Carrusel/>
        <TituloPage />

        <TituloProductos TituloProductos="Ofertas" icon="https://fondosmil.com/fondo/17538.jpg"/>
         <Productos name="camioneta" imagen="https://http2.mlstatic.com/D_Q_NP_901572-MLA32415118122_102019-AB.webp" />
         <Productos name="camioneta roja" imagen="https://http2.mlstatic.com/D_Q_NP_707293-MLA32770834819_112019-AB.webp"/>
         <Productos name="camioneta" imagen="https://http2.mlstatic.com/D_Q_NP_901572-MLA32415118122_102019-AB.webp" />
         <Productos name="camioneta" imagen="https://http2.mlstatic.com/D_Q_NP_901572-MLA32415118122_102019-AB.webp" />
        
         <TituloProductos TituloProductos="Ofertas Navideñas" icon="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/10097408-0e70-4953-b37c-0ca7e5d9d634/d5mgz35-f26c90e2-fb83-4005-9583-237f5ad05073.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzEwMDk3NDA4LTBlNzAtNDk1My1iMzdjLTBjYTdlNWQ5ZDYzNFwvZDVtZ3ozNS1mMjZjOTBlMi1mYjgzLTQwMDUtOTU4My0yMzdmNWFkMDUwNzMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ki7PAX34D_dCYS4HK91aNsduscDsEJPhDiPEawT40K4"/>

         <Productos name="camioneta" imagen="https://http2.mlstatic.com/D_Q_NP_901572-MLA32415118122_102019-AB.webp" />
         <Productos  name="camioneta" imagen="https://http2.mlstatic.com/D_Q_NP_901572-MLA32415118122_102019-AB.webp" />
         <Productos  name="camioneta" imagen="https://http2.mlstatic.com/D_Q_NP_901572-MLA32415118122_102019-AB.webp" />
         <Productos  name="camioneta" imagen="https://http2.mlstatic.com/D_Q_NP_901572-MLA32415118122_102019-AB.webp" />
        
        <TituloProductos TituloProductos="Belleza" icon="https://fondosmil.com/fondo/17538.jpg"/>
         <Productos name="camioneta" imagen="https://http2.mlstatic.com/D_Q_NP_901572-MLA32415118122_102019-AB.webp" />



        </div>
    </div>
  );
}

export default App;
