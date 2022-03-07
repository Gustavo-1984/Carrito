// constantes


const dataInicial = {
    array: []
}

const AGREGAR_CARRITO = 'AGREGAR CARRITO'

// Reducer

export default function cartReducer(state = dataInicial, action){
    switch (action. type) {
        case  AGREGAR_CARRITO:
            
            return {...state, array: action.payload}
        default:
            return state;
    }
}

// Acciones

export const agregarCarritoAccion = carrito => async (dispatch, getState) => {

    //console.log(getState)

    try {
        const res = await carrito
        dispatch({
            type:  AGREGAR_CARRITO,
            payload: res
        })  
    } catch (error) {
        console.log(error)
    }
}