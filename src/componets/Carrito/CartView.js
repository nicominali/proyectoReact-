import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { CartItem } from './CartItem';

export const CartView = () => {
    const {carrito, vaciarCarrito} = useContext(CartContext)
    return (
        <div>
            {
                carrito.length > 0 
                ?<>
                {
                    carrito.map((prod) => <CartItem {...prod}/>)     
                }
                <div>
                    <button className='btn btn-danger' onClick={vaciarCarrito}>Vaciar carrito</button>
                </div>
                </>
                :<>
                    <h2>No hay productos en el carrito</h2>
                </>
            }

        </div>
    )
}
