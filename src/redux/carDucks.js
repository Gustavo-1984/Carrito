// constantes
import axios from "axios";

const dataInicial = {
    array: []
}

const OBTENER_CARRITO = 'OBTENER CARRITO'

// Reducer

export default function carReducer(state = dataInicial, action){
    switch (action. type) {
        case OBTENER_CARRITO:
            
            return {...state, array: action.payload}
        default:
            return state;
    }
}

// Acciones

export const obtenerCarritoAccion = () => async (dispatch, getState) => {
    try {
        const res = await axios.get('https://fakestoreapi.com/products/')
        dispatch({
            type: OBTENER_CARRITO,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}