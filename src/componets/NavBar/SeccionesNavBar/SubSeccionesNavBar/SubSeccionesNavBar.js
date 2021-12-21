import React from 'react'
import { DropdownButton , ButtonGroup , Dropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Productos } from '../../../Producto/Productos'


export const SubSeccionesNavBar = () => {
  
  return (
        <div>
             <div className="mb-15">
    {['end'].map((direction) => (
      <DropdownButton
        as={ButtonGroup}
        key={direction}
        id={`dropdown-button-drop-${direction}`}
        drop={direction}
        variant=""
        title={` Drop ${direction} `}
        title="Tecnologia"
        className="bottonTecnologia"
        style ={{'backgroundColor':'transparent' , 'borderColor':'transparent' , 'color':'#fff'}}
     
      > 
        <Link to="/Celulares/celulares">Celulares<Dropdown.Item eventKey="1"></Dropdown.Item></Link>
        <Link to="/Tablets/tablets">Tablets<Dropdown.Item eventKey="2"></Dropdown.Item></Link>
        <Link to="/Computadoras/computadoras">Computadoras</Link><Dropdown.Item eventKey="3"></Dropdown.Item>
        
      </DropdownButton >
    ))}
   
  </div>
           
        </div>
    )
}


