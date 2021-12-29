import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { pedirDatos } from '../helpers/pedirDatos'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { SpinnerCarga } from '../Spinner/SpinnerCarga'
import { doc, getDoc } from 'firebase/firestore/lite'
import { db } from '../../firebase/confing'


export const ItemDetailContainer = () => {
    const [item, setItem] = useState()
    const [loading, setLoading] = useState(false)
    const { prodId } = useParams()
    useEffect(() =>{

        setLoading(true)

        const docRef = doc(db ,'productos', prodId)
        getDoc(docRef)
            .then((doc)=>{
                setItem({
                    id: doc.id,
                    ...doc.data()
                })
            })
            .finally(()=>{
                setLoading(false)
            })
    },[prodId])
    
    return (
        <div>
            {
                loading ? <SpinnerCarga/> 
                : <ItemDetail {...item}/>

            }
        </div>
    )
}
