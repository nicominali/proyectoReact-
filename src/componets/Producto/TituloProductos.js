import React from 'react'
import './tituloProducto.css'

export const TituloProductos = (props) => {
   const {TituloProductos , icon} = props
    return (
        <div>
            <br/>
            <img
                className="img"
                src={icon}>
            </img>
            <br/>
            <h3>{TituloProductos}</h3>
        </div>
    )
}
