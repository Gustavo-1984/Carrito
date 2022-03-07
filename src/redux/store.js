import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'


import carReducer from './carDucks'
import cartReducer from './cartDucks'

const rootReducer = combineReducers ({
    carrito: carReducer,
    agregar: cartReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function generateStore (){
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

    return store
}