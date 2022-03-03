import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import {obtenerCarritoAccion} from '../redux/carDucks'

const Card = () => {

    const dispatch = useDispatch()

    const carrito = useSelector(store => store.carrito.array)


  return (


<div className="card mt-4" >
   
     
            <img src='https://placehold.co/100x50' className="card-img-top" alt="imagen" />

                <div className="card-body">
                    <h5 className="card-title">Carrito de Compras</h5>
                   
                    <button className="btn btn-primary" onClick={() => dispatch(obtenerCarritoAccion())}>Traer carrito</button>
                </div>
                <ul>
                        {       
                            carrito.map(item =>(
                                <li key={item.id}>{item.title}</li>
                               
                            ))
                        }
                </ul>
    </div>

 
  )
}

export default Card
