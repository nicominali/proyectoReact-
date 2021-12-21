import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ProductosVehiculos } from './ProductosVehiculos'




export const Vehiculos = () => {
    
    const [loading, setLoading] = useState(false)
    const [productosVehiculos, setProductosVehiculos] = useState([])
    const { catId } = useParams()
    
    useEffect(()=>{

       setLoading(true)
        pedirDatos()
            .then( (resp) => {
                if (!catId){
                    setProductosVehiculos(resp)
                } else{
                    setProductosVehiculos( resp.filter( prod =>prod.category === catId))
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
                <ProductosVehiculos/>
                </>
            }
            
        </div>
    )
}
