import React, {useEffect} from 'react'

import { useDispatch, useSelector } from 'react-redux'
import {obtenerCarritoAccion} from '../redux/carDucks'

import CardDetail from './CardDetail'


const Card = () => {

    const dispatch = useDispatch()

    const carrito = useSelector(store => store.carrito.array)

    useEffect(() => {
      dispatch(obtenerCarritoAccion())
    
    }, [])
    
    return(
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {carrito.map((carritos) => {
          return <CardDetail 
                  key={carritos.id} 
                  title={carritos.title} 
                  image={carritos.image}
                  price={carritos.price}
                  desc={carritos.description}
                  category={carritos.category}
                  id={carritos.id}
                  />
        })}  
      </div>
    )


 
}

export default Card
