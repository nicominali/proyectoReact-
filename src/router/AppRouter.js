import React from 'react'
import { useRoutes } from 'react-router-dom'
import { CartView } from '../componets/Carrito/CartView'
import { ItemDetailContainer } from '../componets/ItemDetailContainer/ItemDetailContainer'
import { ItemListContainer } from '../componets/ItemListContainer/ItemListContainer'

export const AppRouter = () => {
 const routes = useRoutes([
    {path: "/", element:<ItemListContainer/>},
    {path: "/productos/:catId", element:<ItemListContainer/>},
    {path: "/detail/:prodId", element:<ItemDetailContainer/>},
    {path: "/carrito", element:<CartView/>},

 ])
 return routes
}
