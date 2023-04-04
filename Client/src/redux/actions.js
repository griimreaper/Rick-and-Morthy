export const ADD_FAV = "ADD_FAV"
export const REMOVE_FAV = "REMOVE_FAV"
export const FILTRAR_NOMBRE = "FILTRAR_NOMBRE"
export const FILTER = "FILTER"
export const ORDER = "ORDER"
export const RESET = "RESET"
export const STATUS = "STATUS"

export const addFav = (pj) => {
    return {
        type: ADD_FAV,
        payload: pj
    }
}

export const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id
    }
}

export const filtrarNombre = (order) => {
    return {
        type: FILTRAR_NOMBRE,
        payload: order
    }
}

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}

export const orderCards = (order) => {
    return {
        type: ORDER,
        payload: order
    }
}

export const reset = () => {
    return {
        type: RESET
    }
}

export const orderStatus = (status) => {
    return {
        type: STATUS,
        payload: status
    }
}