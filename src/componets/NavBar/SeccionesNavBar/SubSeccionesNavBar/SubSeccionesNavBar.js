import React from 'react'
import { DropdownButton , ButtonGroup , Dropdown} from 'react-bootstrap'

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
        <Dropdown.Item eventKey="1">Celulares</Dropdown.Item>
        <Dropdown.Item eventKey="2">Tablets</Dropdown.Item>
        <Dropdown.Item eventKey="3">Computadoras</Dropdown.Item>
        
      </DropdownButton >
    ))}
   
  </div>
           
        </div>
    )
}


