import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { ItemCount } from '../ItemCount/ItemCount'


export const ItemDetail = ({id,price,name,img, stock }) => {

   const {agregarAlCarrito, isInCart} = useContext(CartContext)
   
   
    const navigate = useNavigate()
    const [cantidad, setCantidad] = useState(0)
    

    const handleVolver = () =>{
        navigate(-1)
    }

    const handleOnAdd = () =>{
        if (cantidad > 0) {
         agregarAlCarrito({
             id,
             name,
             price,
             cantidad
         })   
         }}

    return (
        <div className=' container my-5'>
            <h2>{name}</h2>
            <img src={img} alt={name}/>
            <p>precio:${price}</p>
            <button className='btn btn-primary' onClick={handleVolver}>Seguir comprando</button>
            {
                !isInCart(id) ?
                <ItemCount max={stock} cantidad={cantidad} setCantidad={setCantidad} onAdd={handleOnAdd}/>
                : <Link to='/carrito' className='btn btn-success'>Terminar la compra</Link>

            }
        </div>
    )
}
