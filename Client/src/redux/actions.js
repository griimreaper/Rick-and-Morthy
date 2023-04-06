export const ADD_FAV = "ADD_FAV"
export const REMOVE_FAV = "REMOVE_FAV"
export const FILTRAR_NOMBRE = "FILTRAR_NOMBRE"
export const FILTER = "FILTER"
export const ORDER = "ORDER"
export const RESET = "RESET"
export const STATUS = "STATUS"
export const ADD_CHARACTER = "ADD_CHARACTER"
export const REMOVE_CHARACTER = "REMOVE_CHARACTER"
export const NEXT_PAGE = "NEXT_PAGE"
export const PREV_PAGE = "PREV_PAGE"
export const ADD_LOCATION = "ADD_LOCATION"
export const SEARCH_CHARACTERS = "SEARCH_CHARACTERS"
export const RESET_CHARACTERS = "RESET_CHARACTERS"
export const HANDLE_NUMBER = "HANDLE_NUMBER"


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

export const addCharacter = (character) => {
    return {
        type: ADD_CHARACTER,
        payload: character,
    }
}

export const removeCharacter = (id) => {
    return {
        type: ADD_CHARACTER,
        payload: id,
    }
}

export const nextPage = () => {
return {
        type:NEXT_PAGE,
    }
}
export const prevPage = () => {
return {
        type:PREV_PAGE,
    }
}

export const addLocation = (path) => {
return {
        type:ADD_LOCATION,
        payload:path
    }
}

export const searchCharacters = (character) => {
return {
        type:SEARCH_CHARACTERS,
        payload:character
    }
}

export const resetCharacters = () => {
return {
        type:RESET_CHARACTERS,
    }
}

export const handleNumber = (num) => {
    return {
        type:HANDLE_NUMBER,
        payload: num
    }
}