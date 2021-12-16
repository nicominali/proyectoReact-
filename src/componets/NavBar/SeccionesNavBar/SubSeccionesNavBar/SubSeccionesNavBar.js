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
        variant="secondary"
        title={` Drop ${direction} `}
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </DropdownButton>
    ))}
  </div>
           
        </div>
    )
}


