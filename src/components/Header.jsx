import React, {useState, useEffect} from 'react'

import { useDispatch, useSelector } from 'react-redux'

const Header = () => {

  const agregarCarrito = useSelector(store => store.agregar.array)

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
    <div className="container-md">
      <a className="navbar-brand" href="#">{agregarCarrito.id}</a>
    </div>
  </nav>
  )
}

export default Header