import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import {agregarCarritoAccion} from '../redux/cartDucks'

const CardDetail = (props) => {

   const {title, image, price, desc, category, id, } = props

   const dispatch = useDispatch()


   const agregarCarrito = producto => dispatch(agregarCarritoAccion(producto))

  const addCart = id => {
    
    agregarCarrito({
        title,
         image,
         price,
         desc,
         category,
         id
    })
  }

  

  return (
    <>
        <div className="col">
      <div className="card border-primary mb-2 mt-2">
        <div className="row g-0">
          <div className="col-md-4 mt-2">
            <img
              src={image}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">$ {price}</p>
              <p className="card-text">
                <small className="text-muted">{desc}</small>
              </p>
              <p className="card-text">
                <small className="">{category}</small>
              </p>
              <a onClick={()=> addCart(id)} className="btn btn-primary d-grid">Agregar al carrito</a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default CardDetail;
