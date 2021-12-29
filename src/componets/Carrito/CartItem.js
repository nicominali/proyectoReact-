import React, { useContext } from 'react'
import { BsFillTrashFill } from "react-icons/bs";
import { CartContext } from '../../context/CartContext';


export const CartItem = ({name, price, id, cantidad}) => {
    const {removerDelCarrito} = useContext(CartContext)
    
    return (
        <div>
            <div>
                        <h4>{name}</h4>
                        <p>precio: ${price}</p>
                        <p>cantidad: {cantidad}</p>
                        <button className='btn btn-danger' onClick={() =>{removerDelCarrito(id)}}><BsFillTrashFill/></button>
                    </div>

             
            
        </div>
    )
}
