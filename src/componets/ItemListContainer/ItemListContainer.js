import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemList } from '../ItemList/ItemList'
import { SpinnerCarga } from '../Spinner/SpinnerCarga'
import { collection, getDocs, query, where } from 'firebase/firestore/lite'
import { db } from '../../firebase/confing'

export const ItemListContainer = () => {
   
    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState([])
    const {catId} = useParams()

   
    useEffect(() =>{
        setLoading(true)
        //
        const productosRef = collection(db,'productos' )

        const q = catId? query(productosRef, where('category', '==',catId)) : productosRef 
        //
        getDocs(q)
            .then((collection) =>{
                const items = collection.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setProductos(items)
            })
            .finally(() =>{
                setLoading(false)
            } )


    }, [catId])
    return (
        <div>

            {
                loading ? <SpinnerCarga/> :
                <ItemList items={productos}/>
            }
            
        </div>
    )
}
/*
import { pedirDatos } from '../helpers/pedirDatos'
pedirDatos()
        .then((resp) => {
            if(!catId){
                setProductos(resp)
            } else{
                setProductos( resp.filter( prod => prod.category === catId))
            }
        })
        .catch((error) =>{
            console.log(error)
        })
        .finally(() =>{
            setLoading(false)
        })
*/