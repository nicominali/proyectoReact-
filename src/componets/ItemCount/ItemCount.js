import React, { useState } from 'react'

export const ItemCount = ({max, cantidad , setCantidad, onAdd}) => {
    

    const handleSubtract = () => {
        cantidad > 0 && setCantidad(cantidad -1)
    }
    const handleAdd = () =>{
       cantidad < max && setCantidad(cantidad +1)
    }

    return (
        <div>
            <button className='btn btn-outline-primary' onClick={handleSubtract}>-</button>
            <span>{cantidad}</span>
            <button className='btn btn-primary' onClick={handleAdd}>+</button>
            <button className='btn btn-success' onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}
