import React from 'react'
import { Link } from 'react-router-dom'
import { CardWidget } from '../CardWidget/CardWidget'
import './navBar.css'

export const NavBar = () => {
    return (
        <div>
            
            <nav className='navBar'>
                <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="productos/celular">Celulares</Link></li>
                <li><Link to="productos/computadoras">Computadoras</Link></li>
                <li><Link to="productos/tablet">Tablets</Link></li>               
                </ul>
                <div>
            <CardWidget/>
                </div>
            </nav>
              
        </div>
    )
}
