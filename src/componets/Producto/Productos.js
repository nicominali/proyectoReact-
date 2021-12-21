import React, { useEffect , useState } from 'react'
import { Card , Button, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { pedirDatos } from '../helpers/pedirDatos';
import { Producto } from './producto';
import './Productos.css';

export const Productos = () => {
  
  
   const [loading, setLoading] = useState(false)
   const [productosVehiculos, setProductos] = useState([])
   
   const { catId } = useParams()
   
   useEffect(()=>{

      setLoading(true)
       pedirDatos()
           .then( (resp) => {
               if (!catId){
                   setProductos(resp)
               } else{
                   setProductos( resp.filter( prod =>prod.category === catId))
               }    
               
           })
           .catch ( (error) =>{
               console.log(error)
           })
           .finally(()=>{
               setLoading(false)
           })
   }, [catId])
   
   return (
        

        <div>
            <h3 className="tituloVehiculos">Vehiculos</h3>
            <h4 className='tituloFiltros'></h4>
            {
                loading ? <h3>cargando...</h3> :
                <>
                <Producto/>
                </>
            }
            
        </div>

    )
}
