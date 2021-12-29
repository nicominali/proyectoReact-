import React, { useContext } from 'react'
import { BsFillBasket2Fill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import './cardWidget.css'


export const CardWidget = () => {
    const {totalCantidad} = useContext(CartContext)
    return (
        <div className="CardWidget">
            <Link to='/carrito'><BsFillBasket2Fill/></Link>
            <span>{totalCantidad()}</span>
        </div>
    )
}
