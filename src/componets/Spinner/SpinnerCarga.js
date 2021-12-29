import React from 'react'
import { Spinner } from 'react-bootstrap'
import './spinnerCarga.css'

export const SpinnerCarga = () => {
    return (
        <div className='spinners'>
            <Spinner  className='spinnerUno' animation="grow" variant="primary" />
            <Spinner  className='spinnerDos' animation="grow" variant="primary" />
            <Spinner  className='spinnerTres' animation="grow" variant="primary" />

        </div>
    )
}
